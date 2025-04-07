from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

# Routes
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/posts")
def post():
    return render_template("posts.html")

# Static files fix
@app.route('/static/<path:path>')
def serve_static(path):
    return send_from_directory('static', path)

# Railway deployment config
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8080))
    app.run(host='0.0.0.0', port=port)
