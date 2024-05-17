from flask import Flask, render_template


app = Flask(__name__, static_folder="./static", template_folder="./templates")




@app.route("/")
def home():
    titulo = "Portfólio"
    return render_template ("index.html", title = titulo)


if __name__ == '__main__':
    app.run(debug=True)