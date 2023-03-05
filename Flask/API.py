# import io
# import string
# import time
# import os
# import numpy as np
# import tensorflow as tf
# from PIL import Image
# from flask import Flask, jsonify, request
# from flask_cors import CORS, cross_origin
# from IPython import display
# display.clear_output()
# import ultralytics
# ultralytics.checks()
# import cv2
# from ultralytics import YOLO
# from IPython.display import display, Image
# import torch
# import urllib

# app = Flask(__name__)
# # CORS(app)

# cors=CORS(app, resources={
#     r"/*":{
#         "origins":"http://localhost:3001"
#     }
# })

# @app.after_request
# def add_cors_headers(response):
#     response.headers['Access-Control-Allow-Origin'] = '*'
#     return response

# model_path = os.path.abspath(os.path.join(__file__ ,"../gender.pt"))
# print(model_path)
# model = torch.load(model_path)


# def prepare_image(img):
#     face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")
#     # img = cv2.imread("/content/profile9.jpg")
#     img = img
#     gray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

#     faces = face_cascade.detectMultiScale(gray_img, scaleFactor=1.01, minNeighbors=4)
#     # print(len(faces))

#     if len(faces) != 0:
#         for x, y, w, h in faces:
#             #k=h/2
#             #i=w/2
#             cropped = img[y:y + h , x:x + w ]
#         l = gen(cropped)
#     return l


# def gen(img):
#     l = []
#     print(model_path)
#     model = YOLO(model_path)
#     results = model.predict(img, conf=0.06)
#     for i in range(0, len(results[0].boxes.xyxy)):
#         k = results[0].boxes.xyxy[i].numpy()
#         if results[0].boxes.cls[i].numpy() == 1:
#             l.append("Male")
#         else:
#             l.append("female")
#     if len(l) == 0:
#         l.append("Human Face not detected")

#     return l

# def main(url):
#   req = urllib.request.urlopen(url)
#   arr = np.asarray(bytearray(req.read()), dtype=np.uint8)
#   img = cv2.imdecode(arr, -1)
#   #cv2.imshow("dgdghd", img)

#   l=prepare_image(img)
#   print(max(set(l), key = l.count))

# app = Flask(__name__)


# @app.route('/predict', methods=['POST','GET'])
# @cross_origin()
# def infer_image():
#     # Catch the image file from a POST request
#     print(request.args['url'])
#     main(request.args['url'])
#     if 'file' not in request.files:
#         return ""

#     print(1)
#     file = request.files.get('file')
#     if not file:
#         return

#     # Read the image
#     img_bytes = file.read()

#     # Prepare the image
#     img = prepare_image(img_bytes)

#     # Return on a JSON format
#     return jsonify(prediction=predict_result(img))


# @app.route('/', methods=['GET'])
# def index():
#     return 'Machine Learning Inference'

# if __name__ == '__main__':
#     app.run(debug=True,host='0.0.0.0')
import io
import string
import time
import os
import numpy as np
import tensorflow as tf
from PIL import Image
from flask import Flask, jsonify, request
from flask_cors import CORS,  cross_origin
from IPython import display
display.clear_output()
import ultralytics
ultralytics.checks()
import cv2
from ultralytics import YOLO
from IPython.display import display, Image
import torch
import urllib

app = Flask(__name__)
CORS(app)

app.config["CORS_HEADERS"] = "Content-Type"
CORS(app, resources={r"/*": {"origins": "*"}})

@app.after_request
def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response

model_path = os.path.abspath(os.path.join(__file__ ,"../gender.pt"))
print(model_path)
model = torch.load(model_path)

def prepare_image(img):
    face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")
    gray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray_img, scaleFactor=1.01, minNeighbors=4)
    if len(faces) == 0:
        return None
    for x, y, w, h in faces:
        cropped = img[y:y + h , x:x + w ]
    return gen(cropped)

def gen(img):
    l = []
    model = YOLO(model_path)
    results = model.predict(img, conf=0.06)
    for i in range(0, len(results[0].boxes.xyxy)):
        k = results[0].boxes.xyxy[i].numpy()
        if results[0].boxes.cls[i].numpy() == 1:
            l.append("Male")
        else:
            l.append("Female")
    if len(l) == 0:
        l.append("Unknown")
    return max(set(l), key = l.count)

@app.route('/predict', methods=['POST'])
@cross_origin(origin='*', headers=['Content-Type','Authorization'])
def infer_image():
    # if 'file' not in request.files:
    #     return ""
    # file = request.files.get('file')
    # print(file)
    # if not file:
    #     return
    print(request.args)
    if 'url' not in request.args:
        return ""
    url = request.args.get('url')
    # img_bytes = file.read()
    
    img_bytes = urllib.request.urlopen(url).read()

    img = cv2.imdecode(np.frombuffer(img_bytes, np.uint8), cv2.IMREAD_UNCHANGED)
    prediction = prepare_image(img)
    if prediction is None:
        prediction = "Human Face not detected"
    print(prediction)
    return jsonify(prediction=prediction)

@app.route('/', methods=['GET'])
def index():
    return 'Machine Learning Inference'

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')
