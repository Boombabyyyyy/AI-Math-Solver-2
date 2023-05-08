import cv2
import pytesseract
import numpy as np
from cv2 import *

def ocr_core(img):
    text = pytesseract.image_to_string(img)
    return text

def greyscale(image):
    return cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

def removeNoise(image):
    return cv2.medianBlur(image, 5)

#thresholding black and white to help fren python
def thresholding(image):
    return cv2.threshold(image, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)

img = cv2.imread('ocrtest.png')

img=greyscale(img)
print(type(img))
img=thresholding(img)
print(type(img))
img=removeNoise(img)
print(type(img))
print(ocr_core(img))