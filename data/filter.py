
from flask import Flask, escape, request, jsonify
import json
from datetime import datetime
with open('dataset.json') as json_file:
    data = json.load(json_file)

guests = {}
ids = ['ap1-1', 'ap1-4',  'ap1-3', '110', 'ap1-2', 
    '156', '156b', 'elevator', '151', '130',  
    '105', '155', '152', '235', 'stairwell', 'reception', '150', 
     'lobby']
for time in data:
    if data[time]["device"] == 'door sensor' and data[time]["device-id"] in ids:
        name =  data[time]['guest-id']
        obj = {
            "device-id": data[time]["device-id"], 
            "event": data[time]["event"], 
            "time": time
        }
        if name not in guests.keys():
            guests[name] = [obj]
        else:
            guests[name].append(obj)


app = Flask(__name__)

@app.route('/')
def hello():
    return jsonify(guests['Veronica'])
if __name__ == '__main__':
    app.run()




# print(json.dumps(guests['Veronica']))




