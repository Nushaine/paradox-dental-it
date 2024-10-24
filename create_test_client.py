from app import app, db
from models import Client

def create_test_account():
    with app.app_context():
        # Check if test account already exists
        existing_client = Client.query.filter_by(email="test@example.com").first()
        if existing_client:
            print("Test account already exists")
            return
        
        # Create a test client
        test_client = Client()
        test_client.practice_name = "Test Dental Practice"
        test_client.email = "test@example.com"
        test_client.phone = "(555) 123-4567"
        test_client.set_password("testpass123")
        
        try:
            # Add to database
            db.session.add(test_client)
            db.session.commit()
            print("Test account created successfully")
        except Exception as e:
            print(f"Error creating test account: {str(e)}")
            db.session.rollback()

if __name__ == "__main__":
    create_test_account()
