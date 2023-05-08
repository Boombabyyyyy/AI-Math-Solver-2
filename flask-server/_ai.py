import spacy
import numpy as np
import tensorflow as tf
from tensorflow import keras
import pandas as pd
import glob
import os

nlp = spacy.load("en_core_web_sm")

def embed_text(text):
    doc = nlp(text)
    
    embedded_tokens = [token.vector for token in doc]
    
    max_length = 2
    padded_embeddings = np.zeros((max_length, 96))
    padded_embeddings[:min(len(embedded_tokens), max_length)] = embedded_tokens[:max_length]
    
    tensor = tf.constant(padded_embeddings.reshape((max_length, 96)))
    
    return tensor


def pdReadLogic(index):
 
    if index % 3 == 0:
        return True
 
    return False

data_path = "D:\\CSE\\SEM-8\\AI-Math-Solver-2\\flask-server\\mathematics_dataset-v1.0\\train-hard"
csv_files = glob.glob(os.path.join(data_path, "*.csv"))

for i in csv_files:
    df_problem = pd.read_csv(i, skiprows = lambda x: pdReadLogic(x), nrows=40000)
    df_problem_1 = pd.read_csv(i, skiprows = lambda x: pdReadLogic(x), nrows=80000)
    df_solution = pd.read_csv(i, skiprows = lambda x: not pdReadLogic(x), nrows=40000)
    df_solution_1 = pd.read_csv(i, skiprows = lambda x: not pdReadLogic(x), nrows=80000)



train_data = [embed_text(x) for x in df_problem]
test_data = [embed_text(x) for x in df_problem_1]

model = keras.Sequential([ 
    tf.keras.layers.Dense(64, activation='relu', input_shape=(None, 1)),
    tf.keras.layers.Dense(32, activation='relu'),
    tf.keras.layers.Dense(1, activation='linear')
])


model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])


def train_model():

    train_labels = [embed_text(x) for x in df_solution]
    test_labels = [embed_text(x) for x in df_solution_1]

    model.fit(train_data[0], train_labels[0], epochs=10, validation_data=(test_data[0], test_labels[0]), verbose=1)

    model.evaluate(test_data[20], test_labels[20], verbose=1)

    model.save_weights("math_model.h5")

def solve_ai(text):

    train_model()

    prediction = model.predict(embed_text(text["message"]))  
    
    return prediction


