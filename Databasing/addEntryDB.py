from importlib.resources import path
import psycopg2
# print('hello')

# from ..Scraping.Scrape import *

# import sys
# print(sys.path)
# sys.path.append("..")
# import Scraping.Scrape
from ..Scraping.Scrape import scrape
# from Scraping import scrape
# print(sys.path)
# from Scraping import Scrape
# from Scraping import *
# from .Scraping import *
# from Scraping.Scrape import scrape
# import Scraping.Scrape

# s = scrape()
# print(s)
# print('hicls')
# Configure to open a SQL database

#!/usr/bin/python
from config import config

def connect():
    """ Connect to the PostgreSQL database server """
    conn = None

    # read connection parameters
    params = config()

    # connect to the PostgreSQL server
    print('Connecting to the PostgreSQL database...')
    conn = psycopg2.connect(**params)
    return conn
 
def get_version(cur):
# execute a statement
    print('PostgreSQL database version:')
    cur.execute('SELECT version()')

    # display the PostgreSQL database server version
    db_version = cur.fetchone()
    print(db_version)

if __name__ == '__main__':
    conn = None
    try:
        conn = connect()

        # create a cursor
        cur = conn.cursor()
        get_version(cur)
        

        print('adding to db')
        cur.execute("""
        INSERT INTO "Culvers_Flavors" ("Location_ID", "Flavor", "Location_Name", "Address", "Date") 
        VALUES (%s, %s, %s, %s, %s);
        """,
        (i, flavor, City, newAddress, Date))

        # If already in SQL, edit it.
        # TODO





        for i in range(1,2):
            print(scrape(i))
            



# close the communication with the PostgreSQL    
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)


    finally:
        if conn is not None:
            conn.commit()
            cur.close()
            conn.close()
            print(datetime.now() - startTime)
            print('Database connection closed.')