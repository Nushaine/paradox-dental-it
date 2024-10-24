from flask import render_template, request, flash, redirect, url_for, session
from app import app, db
from models import Contact, Testimonial, Client, SupportTicket, BlogPost, EmergencyContact
from functools import wraps
from datetime import datetime
from werkzeug.utils import secure_filename
import re

def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'client_id' not in session:
            flash('Please login to access this page', 'warning')
            return redirect(url_for('login'))
        return f(*args, **kwargs)
    return decorated_function

def admin_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if not session.get('is_admin'):
            flash('Admin access required', 'danger')
            return redirect(url_for('index'))
        return f(*args, **kwargs)
    return decorated_function

@app.route('/')
def index():
    testimonials = Testimonial.query.all()
    latest_posts = BlogPost.query.filter_by(published=True).order_by(BlogPost.created_at.desc()).limit(3).all()
    return render_template('index.html', testimonials=testimonials, latest_posts=latest_posts)

@app.route('/emergency', methods=['GET', 'POST'])
def emergency():
    if request.method == 'POST':
        try:
            emergency_contact = EmergencyContact(
                name=request.form['name'],
                practice_name=request.form['practice_name'],
                email=request.form['email'],
                phone=request.form['phone'],
                issue_type=request.form['issue_type'],
                description=request.form['description']
            )
            db.session.add(emergency_contact)
            db.session.commit()
            
            # Here we would typically send SMS notifications to on-call staff
            # and send an immediate email confirmation
            
            flash('Emergency request received. Our team will contact you immediately.', 'success')
            return redirect(url_for('emergency'))
        except Exception as e:
            flash('An error occurred. Please call our emergency hotline.', 'danger')
            db.session.rollback()
    return render_template('emergency.html')

@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/compliance')
def compliance():
    return render_template('compliance.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        try:
            new_contact = Contact(
                name=request.form['name'],
                practice_name=request.form['practice_name'],
                email=request.form['email'],
                phone=request.form['phone'],
                message=request.form['message'],
                service_type=request.form['service_type']
            )
            db.session.add(new_contact)
            db.session.commit()
            flash('Thank you for your inquiry. We will contact you shortly!', 'success')
            return redirect(url_for('contact'))
        except Exception as e:
            flash('An error occurred. Please try again.', 'danger')
            db.session.rollback()
    return render_template('contact.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        client = Client.query.filter_by(email=email).first()
        
        if client and client.check_password(password):
            session['client_id'] = client.id
            client.last_login = datetime.utcnow()
            db.session.commit()
            flash('Welcome back!', 'success')
            return redirect(url_for('portal_dashboard'))
        flash('Invalid email or password', 'danger')
    return render_template('auth/login.html')

@app.route('/portal')
@login_required
def portal_dashboard():
    client = Client.query.get(session['client_id'])
    tickets = SupportTicket.query.filter_by(client_id=client.id).order_by(SupportTicket.created_at.desc()).all()
    return render_template('portal/dashboard.html', client=client, tickets=tickets)

@app.route('/portal/tickets', methods=['GET', 'POST'])
@login_required
def portal_tickets():
    if request.method == 'POST':
        try:
            new_ticket = SupportTicket(
                subject=request.form['subject'],
                description=request.form['description'],
                priority=request.form['priority'],
                client_id=session['client_id']
            )
            db.session.add(new_ticket)
            db.session.commit()
            flash('Support ticket created successfully', 'success')
            return redirect(url_for('portal_tickets'))
        except Exception as e:
            flash('An error occurred. Please try again.', 'danger')
            db.session.rollback()
    
    tickets = SupportTicket.query.filter_by(client_id=session['client_id']).order_by(SupportTicket.created_at.desc()).all()
    return render_template('portal/tickets.html', tickets=tickets)

@app.route('/logout')
def logout():
    session.pop('client_id', None)
    flash('You have been logged out', 'info')
    return redirect(url_for('index'))

@app.route('/blog')
def blog_index():
    category = request.args.get('category')
    query = BlogPost.query.filter_by(published=True)
    
    if category:
        query = query.filter_by(category=category)
    
    posts = query.order_by(BlogPost.created_at.desc()).all()
    return render_template('blog/index.html', posts=posts, category=category)

@app.route('/blog/<slug>')
def blog_post(slug):
    post = BlogPost.query.filter_by(slug=slug, published=True).first_or_404()
    return render_template('blog/post.html', post=post)

@app.route('/admin/blog', methods=['GET', 'POST'])
@admin_required
def admin_blog():
    if request.method == 'POST':
        title = request.form['title']
        content = request.form['content']
        summary = request.form['summary']
        category = request.form['category']
        published = 'published' in request.form
        
        slug = re.sub(r'[^\w\s-]', '', title.lower())
        slug = re.sub(r'[\s_-]+', '-', slug).strip('-')
        
        try:
            post = BlogPost(
                title=title,
                slug=slug,
                content=content,
                summary=summary,
                category=category,
                published=published
            )
            db.session.add(post)
            db.session.commit()
            flash('Blog post created successfully', 'success')
            return redirect(url_for('admin_blog'))
        except Exception as e:
            flash('An error occurred. Please try again.', 'danger')
            db.session.rollback()
    
    posts = BlogPost.query.order_by(BlogPost.created_at.desc()).all()
    return render_template('admin/blog.html', posts=posts)
