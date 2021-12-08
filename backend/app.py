from flask import Flask, request, url_for
import os
from flask_cors import CORS
import json
from model import superScaler

app = Flask(__name__)
CORS(app)
app.run(use_reloader=False)

@app.route('/', methods=["POST", "GET"])
def call():
    file = request.files['image']
    print(file.filename)
    path = os.path.join("..\\", 'original.jpg')
    if os.path.exists(path):
        os.remove(path)
    file.save(path)
    hrFileName, inputSize, outputSize = superScaler('original.jpg', path)

    output = {
        'input-size-x' : inputSize[0],
        'input-size-y' : inputSize[1],
        'output-size-x' : outputSize[0],
        'output-size-y' : outputSize[1],
    }
    return json.dumps(output)