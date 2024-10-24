from flask import render_template, request, flash, redirect, url_for
from app import app, db
from models import Contact, Testimonial

@app.route('/')
def index():
    testimonials = Testimonial.query.all()
    return render_template('index.html', testimonials=testimonials)

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
