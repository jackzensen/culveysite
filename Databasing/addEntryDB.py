#!/usr/bin/python
from importlib.resources import path
import psycopg
import sys
import os
print(sys.path)
import psycopg2

lib_path = os.path.abspath('../') 
if lib_path not in sys.path:
    sys.path.append(lib_path)
from Scraping.Scrape import scrape

from dotenv import load_dotenv
load_dotenv()
PGDATABASE = os.getenv('PGDATABASE')
POSTGRES_USER = os.getenv('POSTGRES_USER')
PORT = int(os.getenv('POSTGRES_PORT'))
POSTGRES_PASSWORD = os.getenv('POSTGRES_PASSWORD')
conn_str = 'dbname=' + PGDATABASE + ' ' + 'user=' + POSTGRES_USER + ' ' + 'host=localhost' + ' ' + 'port=' + str(PORT) + ' ' + 'password=' + POSTGRES_PASSWORD
# print(conn_str)

print('connecting')

try:
    conn = psycopg2.connect(
        dbname='culvers_flavor_db',
        user=POSTGRES_USER,
        password=POSTGRES_PASSWORD,
        port=5432,
        # host='192.168.0.2',
        host='localhost',
        # host='0.0.0.0'
)
    print('connection established')
except Exception as e:
    print(e)



with conn.cursor() as cur:
    for i in range(628, 630):
        try:
            result = scrape(i)
            result = result.popitem()
            Address = result[0]
            for DateFlavor in result[1]:
                # print(DateFlavor)
                Date = list(DateFlavor.keys())[0]
                Flavor = list(DateFlavor.values())[0]
                cur.execute("INSERT INTO flavors (address, date, location_index, flavor) VALUES (%s, %s, %s, %s)", (Address, Date, i, Flavor))
                # print('result saved.')
            # print(result)
            conn.commit()
            print('result fetched')
            
            # for flavor in result:
            #     print('location:', address)
            #     print('result0', result[1], )
            #     print('flavor0', flavor[1])
                # Address, date, location index, location name, flavor
            conn.commit()
        except Exception as e:
            print('Error occured')
            print(e)
    conn.close()
        
    # test function
    # try:
    #     cur.execute("""
    #         CREATE TABLE test (
    #             id serial PRIMARY KEY,
    #             num integer,
    #             data text)
    #         """)
    #     # Pass data to fill a query placeholders and let Psycopg perform # the correct conversion (no SQL injections!)
    #     cur.execute(
    #         "INSERT INTO test (num, data) VALUES (%s, %s)",
    #         (100, "abc'def"))
    #     # Query the database and obtain data as Python objects.
    #     cur.execute("SELECT * FROM test")
    #     cur.fetchone()

    #         # will return (1, 100, "abc'def")
    #         # You can use `cur.fetchmany()`, `cur.fetchall()` to return a list
    #         # of several records, or even iterate on the cursor
    #     for record in cur:
    #         print(record)

    #     # Make the changes to the database persistent
    #     conn.commit()
    #     conn.close()

            
    #     print('table created')
            
    # except Exception as e:
    #     print(e)
# from config import config

# def connect():
#     """ Connect to the PostgreSQL database server """
#     conn = None

#     # read connection parameters
#     params = config()

#     # connect to the PostgreSQL server
#     print('Connecting to the PostgreSQL database...')
#     conn = psycopg2.connect(**params)
#     return conn
 
# def get_version(cur):
# # execute a statement
#     print('PostgreSQL database version:')
#     cur.execute('SELECT version()')

#     # display the PostgreSQL database server version
#     db_version = cur.fetchone()
#     print(db_version)

# if __name__ == '__main__':
#     conn = None
#     try:
#         exit(1)
#         conn = connect()

#         # create a cursor
#         cur = conn.cursor()
#         get_version(cur)
        

#         print('adding to db')
#         cur.execute("""
#         INSERT INTO "Culvers_Flavors" ("Location_ID", "Flavor", "Location_Name", "Address", "Date") 
#         VALUES (%s, %s, %s, %s, %s);
#         """,
#         (i, flavor, City, newAddress, Date))

#         # If already in SQL, edit it.
#         # TODO





#         for i in range(1,2):
#             print(scrape(i))
            



# # close the communication with the PostgreSQL    
#     except (Exception, psycopg2.DatabaseError) as error:
#         print(error)


#     finally:
#         if conn is not None:
#             conn.commit()
#             cur.close()
#             conn.close()
#             print(datetime.now() - startTime)
#             print('Database connection closed.')