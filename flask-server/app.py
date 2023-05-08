from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import json
from config_old import *
# from dotenv import load_dotenv

# load_dotenv()

app = Flask(__name__)

CORS(app, support_credentials=True)


@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':

        data = json.loads(request.data)
        res = ai(data)

        return jsonify({"botResponse":res})
    if request.method == "GET":
       print(request.method)
    return "This is the server"

if __name__ == '__main__':
    app.run(debug=True)
