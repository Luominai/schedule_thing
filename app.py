from flask import Flask
import sqlite3

app = Flask(__name__) #create instance of class Flask
connection = sqlite3.connect('schedules.db')
cursor = connection.cursor()

cursor.execute('CREATE TABLE IF NOT EXISTS schedules(name, classes)')

@app.route("/")       #assign fxn to route
def hello_world():
    print("the __name__ of this module is... ")
    print(__name__)
    return "No hablo queso!"

if __name__ == "__main__":  # true if this file NOT imported
    app.debug = True        # enable auto-reload upon code change
    app.run()