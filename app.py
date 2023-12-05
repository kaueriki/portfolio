from flask import Flask, request, render_template,  url_for


app = Flask(__name__)




@app.route("/")
def home():
    titulo = "Home"
    return render_template ("home.html", title = titulo)

@app.route("/info")
def info():
    titulo = "Informações Educacionais"
    return render_template ("info.html", title = titulo)

@app.route("/hobbies")
def hobbies():
    titulo = "Hobbies"
    return render_template ("hobbies.html", title = titulo)

@app.route("/redes")
def redes():
    titulo = "Redes Sociais"
    return render_template ("redes.html", title = titulo)

if __name__ == '__main__':
    app.run(debug=True)