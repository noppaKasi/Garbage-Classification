from flask import Flask, render_template, jsonify, request
from flask_cors import CORS
import numpy as np
import json
from io import BytesIO
from tensorflow.keras.models import load_model
from tensorflow.keras.utils import load_img, img_to_array

app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

class Garbage_Classification:
    def __init__(self, model_path='model.h5', input_size=(224, 224), categories=['battery', 'biological', 'brown-glass', 'cardboard', 'clothes', 'green-glass', 'metal', 'paper', 'plastic', 'shoes', 'trash', 'white-glass']):
        """
        Predict a class for an image
        Inputs: model_name - path to the model
                input_size - resize image for model input
                categories - classification classes
        """
        self.model = load_model(model_path)
        self.categories = categories
        self.input_size = input_size

    def predict(self, image):
        """
        Input: image - image file
                       ex. 'test/sample.jpg'
        Return: json of class and confidence
        """
        img = load_img(image, target_size=self.input_size)  
        img = img_to_array(img)  
        img = np.expand_dims(img, axis=0)
        result = self.model.predict(img, batch_size=1)
        predict_index = np.argmax(result)
        predict_result = json.dumps({
            "class": self.categories[predict_index],
            "confidence": str(result[0][predict_index])
        })
        return predict_result

classifier = Garbage_Classification()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload():
    if 'image' not in request.files:
        print('No file uploaded')
        return 'No file uploaded', 400

    file = request.files['image']
    if file.filename == '':
        print('No file selected')
        return 'No file selected', 401

    if file and allowed_file(file.filename):
        print('File uploaded successfully')
        
        image_data = file.read()
        image_stream = BytesIO(image_data)
        result = classifier.predict(image_stream)
        data = json.loads(result)
        return jsonify(data)
    else:
        print('Invalid file type')
        return 'Invalid file type', 402

def allowed_file(filename):
    ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

if __name__ == '__main__':
    app.run(debug=True)
