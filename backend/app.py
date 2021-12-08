from flask import Flask, request, url_for
import os
from flask_cors import CORS
import json
from model import superScaler

app = Flask(__name__)
CORS(app)
app.run(use_reloader=False)

@app.route('/', methods=["POST", "GET", "PUT"])
def call():
    file = request.files['image']
    extension = os.path.splitext(file.filename)[1]
    print("\n\nInput File Name:\n\n", file.filename)
    os.chdir("C:\\Users\\17038\\Documents\\react-sample\\bank-data\\public\\images\\")
    inputFileName = 'input' + extension
    if os.path.exists('./' + inputFileName):
        os.remove('./' + inputFileName)
    file.save('./' + inputFileName)
    inputSize, outputSize = superScaler(inputFileName)

    output = {
        'input_filename' : inputFileName,
        'input_size_x' : inputSize[0],
        'input_size_y' : inputSize[1],
        'output_size_x' : outputSize[0],
        'output_size_y' : outputSize[1],
    }
    return json.dumps(output)