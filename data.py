import json
from datetime import datetime


def main():

    with open('dataset.json') as json_file:

        data = json.load(json_file)

    running = True
    pData = getData(data)
    
    while running: 
        choice = str(input("Enter (1) to create personnel tracker files \n Enter (2) to get data sorted by time \n Enter (x) to exit program"))

        if choice == '1': 
            pTracker(pData[1], data)

        elif choice == '2':
            allData(data)

        elif choice == 'x' or 'X':
            running = False
        
        else:
            choice = str(input("Enter (1) to create personnel tracker files \n Enter (2) to get data sorted by time \n Enter (x) to exit program"))

def getData(data):

    # grabs every access point, individual and device within the dataset

    accessPoint = ['ap1-1', 'ap1-4', 'ap2-1', 'ap1-3', '110', 'ap1-2', '156', '156b', 'elevator', '233', '151', '130', '231', '210', '232', 'ap2-3', 
    'ap2-2', '244', '248', '241', '105', '155', '152', '235', 'stairwell', 'reception', '150', '250', 'ice machine', '200', '220', 'lobby']

    charList = ['Veronica', 'Jason', 'Thomas', 'Eugene', 'Salina', 'Rob', 'Kristina', 'Alok', 'Marc-Andre', 'na', 'Dave', 'James', 'Harrison']

    devices = ['access point', 'door sensor', 'motion sensor', 'phone']

        # used to populate dataset lists, remove when finished

        #for i in data.keys():
            
            #print(datetime.fromtimestamp(int(i)))
            #id = data[i]['device']
            #print(id)
            
            #if id not in device:
            #   device.append(id)
            
    #print(device)
    #print(len(data))
    
    return (accessPoint,charList,devices)


def pTracker(charList, data):

    # tracks individual movements per person
    for p in charList:
        f = open(p + ".json", "a")
        for i in data.keys():
            if data[i]['guest-id'] == p:
                time = (datetime.fromtimestamp(int(i)))
                f.write(str(time))
                f.write(json.dumps(data[i], indent=2))
                

    f1 = open('na.json', 'a')
    for i in data.keys():
        if data[i]['guest-id'] == 'n/a':
            time = (datetime.fromtimestamp(int(i)))
            f1.write(str(time))
            f1.write(json.dumps(data[i], indent=2))

    # Creates personal json files for each person
    print("Personnel Files have been created!")


def allData(data):

    for i in data.keys():
            print(datetime.fromtimestamp(int(i)))
            id = data[i]
            print(id)

main()

