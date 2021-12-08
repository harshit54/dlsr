import os
import time
from PIL import Image
import numpy as np
import tensorflow as tf
from tensorflow import keras
import tensorflow_hub as hub

os.environ["TFHUB_DOWNLOAD_PROGRESS"] = "True"
SAVED_MODEL_PATH = "https://tfhub.dev/captain-pool/esrgan-tf2/1"
model = hub.load(SAVED_MODEL_PATH)

def preprocess_image(image_path):
    """ 
        Loads image from path and preprocesses to make it model ready
        Args:
            image_path: Path to the image file
    """
    hr_image = tf.image.decode_image(tf.io.read_file(image_path))
    # If PNG, remove the alpha channel. The model only supports
    # images with 3 color channels.
    if hr_image.shape[-1] == 4:
        hr_image = hr_image[...,:-1]
    hr_size = (tf.convert_to_tensor(hr_image.shape[:-1]) // 4) * 4
    hr_image = tf.image.crop_to_bounding_box(hr_image, 0, 0, hr_size[0], hr_size[1])
    hr_image = tf.cast(hr_image, tf.float32)
    return tf.expand_dims(hr_image, 0)

def save_image(image, filename):
    """
        Saves unscaled Tensor Images.
        Args:
        image: 3D image tensor. [height, width, channels]
        filename: Name of the file to save.
    """
    if not isinstance(image, Image.Image):
        image = tf.clip_by_value(image, 0, 255)
        image = Image.fromarray(tf.cast(image, tf.uint8).numpy())
    image.save("%s.jpg" % filename)
    print("Saved as %s.jpg" % filename)

# Declaring Constants
def superScaler(filename):

    hr_image = preprocess_image(filename)

    model = hub.load(SAVED_MODEL_PATH)
    fake_image = model(hr_image)
    fake_image = tf.squeeze(fake_image)

    save_image(tf.squeeze(fake_image), filename="output")
    
    inputImage = Image.open(filename)
    outputImage = Image.open("output.jpg")
    
    return inputImage.size, outputImage.size