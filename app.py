import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase

class Base(DeclarativeBase):
    pass

db = SQLAlchemy(model_class=Base)
# create the app
app = Flask(__name__, static_folder='static', static_url_path='/static')
# setup a secret key, required by sessions
app.secret_key = os.environ.get("FLASK_SECRET_KEY") or "a secret key"
# configure the database
app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DATABASE_URL")
app.config["SQLALCHEMY_ENGINE_OPTIONS"] = {
    "pool_recycle": 300,
    "pool_pre_ping": True,
}
# Production settings
app.config["DEBUG"] = False
app.config["TEMPLATES_AUTO_RELOAD"] = False
app.config["PREFERRED_URL_SCHEME"] = "https"

# initialize the app with the extension
db.init_app(app)

with app.app_context():
    # Import models and routes
    import models  # noqa: F401
    import routes  # noqa: F401
    # Create database tables
    db.create_all()

if __name__ == "__main__":
    # Use port 3000 for production on Replit
    port = int(os.environ.get("PORT", 3000))
    app.run(host='0.0.0.0', port=port)
