from flask import Flask, request, Response
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST'])
def hello():
    data = request.get_json()
    print(data)
    return json.dumps({'success':True}), 200, {'ContentType':'application/json'} 

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)