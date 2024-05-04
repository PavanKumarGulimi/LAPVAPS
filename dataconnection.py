import json
import mysql.connector
db_connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="pavan@123",
    database="pavan"
)
cursor = db_connection.cursor()
json_files = [r'C:\Users\ASUS\Desktop\noteb ASUS pg1.json',
              r'C:\Users\ASUS\Desktop\noteb ASUS pg2.json', 
              r'C:\Users\ASUS\Desktop\noteb ASUS pg3.json', 
              r'C:\Users\ASUS\Desktop\noteb ASUS pg4.json',
              r'C:\Users\ASUS\Desktop\noteb ASUS pg5.json',
              r'C:\Users\ASUS\Desktop\noteb ASUS pg6.json',
              r'C:\Users\ASUS\Desktop\noteb DELL pg1.json',
              r'C:\Users\ASUS\Desktop\noteb DELL pg3.json',
              r'C:\Users\ASUS\Desktop\noteb DELL pg2.json',
              r'C:\Users\ASUS\Desktop\noteb DELL pg4.json',
              r'C:\Users\ASUS\Desktop\noteb ACER pg1.json',
              r'C:\Users\ASUS\Desktop\noteb ACER pg2.json',
              r'C:\Users\ASUS\Desktop\noteb ACER pg3.json',
              r'C:\Users\ASUS\Desktop\noteb ACER pg4.json',
              r'C:\Users\ASUS\Desktop\noteb HP pg1.json',
              r'C:\Users\ASUS\Desktop\noteb HP pg2.json',
              r'C:\Users\ASUS\Desktop\noteb HP pg3.json',
              r'C:\Users\ASUS\Desktop\noteb HP pg4.json',
              r'C:\Users\ASUS\Desktop\noteb HP pg5.json',
              r'C:\Users\ASUS\Desktop\noteb HP pg6.json',
              r'C:\Users\ASUS\Desktop\noteb LENOVO pg1.json',
              r'C:\Users\ASUS\Desktop\noteb LENOVO pg2.json',
              r'C:\Users\ASUS\Desktop\noteb LENOVO pg3.json',
              r'C:\Users\ASUS\Desktop\noteb LENOVO pg4.json',
              r'C:\Users\ASUS\Desktop\noteb LENOVO pg5.json',
              r'C:\Users\ASUS\Desktop\noteb LENOVO pg6.json',
              r'C:\Users\ASUS\Desktop\noteb LENOVO pg7.json',
              r'C:\Users\ASUS\Desktop\noteb LENOVO pg8.json',
              r'C:\Users\ASUS\Desktop\noteb LENOVO pg9.json',
              r'C:\Users\ASUS\Desktop\noteb MSI pg1.json',
              r'C:\Users\ASUS\Desktop\noteb MSI pg2.json',
              r'C:\Users\ASUS\Desktop\noteb MSI pg3.json',
              r'C:\Users\ASUS\Desktop\noteb MSI pg4.json',
               r'C:\Users\ASUS\Desktop\noteb SAMSUNG pg1.json',
               r'C:\Users\ASUS\Desktop\noteb SAMSUNG pg2.json',
              r'C:\Users\ASUS\Desktop\noteb GIGABYTE.json',
              r'C:\Users\ASUS\Desktop\noteb APPLE.json',
              r'C:\Users\ASUS\Desktop\noteb LG.json',
              r'C:\Users\ASUS\Desktop\noteb MICROSOFT.json'
              ]
for file in json_files:
    with open(file, 'r') as file:
        data = json.load(file)
    for laptop in data['Details']:
        sql = "INSERT INTO Laptop (LapName, ScreenSize, ScreenResolution, CPU, GPU, RAM, Disk, Weight, OS, Battery, imgurl, price) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
        values = (
            laptop['Name'],
            laptop['ScreenSize'],
            laptop['ScreenResolution'],
            laptop['CPU'],
            laptop['GPU'],
            laptop['RAM'],
            laptop['Disk'],
            laptop['Weight'],
            laptop['OS'],
            laptop['Battery'],
            laptop['imgurl'],
            laptop['price']
        )
        cursor.execute(sql, values)

db_connection.commit()
cursor.close()
db_connection.close()
