#!/usr/bin/python

# This can be run once a month to add 
# the current month's flavors of the day to the database

from importlib.resources import path
import sys
import os
print(sys.path)
import psycopg2


from dotenv import load_dotenv
load_dotenv()
PGDATABASE = os.getenv('PGDATABASE')
POSTGRES_USER = os.getenv('POSTGRES_USER')
PORT = int(os.getenv('POSTGRES_PORT'))
POSTGRES_PASSWORD = os.getenv('POSTGRES_PASSWORD')

lib_path = os.path.abspath('../') 
print('path:', lib_path)
if lib_path not in sys.path:
    sys.path.append(lib_path)
from Scraping.Scrape import scrape


try:
    print('connecting as role...')
    conn = psycopg2.connect(
        dbname='culvers_flavor_db',
        user=POSTGRES_USER,
        password=POSTGRES_PASSWORD,
        port=5436,
        host='localhost',
)
    print('connection established')
except Exception as e:
    print(e)

with conn.cursor() as cur:
    for i in range(1, 850):
        try:
            result = scrape(i)
            result = result.popitem()
            Address = result[0]
            for DateFlavor in result[1]:
                Date = list(DateFlavor.keys())[0]
                Flavor = list(DateFlavor.values())[0]
                cur.execute("INSERT INTO flavors (address, date, location_index, flavor) VALUES (%s, %s, %s, %s)", (Address, Date, i, Flavor))
            conn.commit()
            print('result fetched')
            
            conn.commit()
        except Exception as e:
            print('Error occured')
            print(e)
    conn.close()
        





# for i in range(1,2):
#     print(scrape(i))
    


