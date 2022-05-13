
# Culvers Flavor Scraper

This program uses python's requests module to pull the month's flavors of the day from each Culver's Restaurant location's website. The flavors of each address are stored within a PostGreSQL database. The program also uses react to create a website which displays the daily flavors.


## Requirements

In this project, the additional softwares were used:
Node.js v14.16.1
react 17.0.2
Docker 20.10.11

***

### How to use

PostGreSQL

To start your own PostGreSQL database, [download][1] Docker and navigate to the Databasing folder using `cd Databasing` in the terminal. From  there, type `docker compose up -d` and it should launch as a container. In your web browser, navigate to `localhost:5050` and log in using the PGADMIN username and password set in your .env file. Right click the server logo to create a server. Name your server whatever you'd like, and in the connections tab set the host name to be pg_container and the maintenance db to `postgres`. Fill in the Postgres username/password set in your env file and save. 

To create a blank table, navigate through the filetree to the database you created, right click on it, and select query tool. Copy/paste the contents of Databasing/Culver.sql into the prompt and run it.

Website

To start the website locally on your device, install dependencies and change your current working directory to frontend. Boot the api server using node src/api/Api.js and finally `npm start` in the command line. If successful, it should automatically direct your browser to http://localhost:3000. Further information can be found in README-react.md

API

To create the api used to communicate between the database and server, run `node src/api/Api.js`

Populate Database

To populate the database (only needed to do once a month to retrieve flavors), with your cwd as Databasing, run `python addEntryDB.py`
<!-- To start your own PostGreSQL database, [download][1] Docker and navigate to the Databasing folder using `/cd Databasing` in terminal. From there, type `docker build -t culvers-db ./` If successful, `docker images -a` should list culvers-db as an image. We can run the container by typing `docker run -d --name culvers-db-container -p 5432:5432 culvers-db` -->


[1]: <https://www.docker.com/products/docker-desktop>
<!-- 
To clean duplicate values from the database, run:
`
 DELETE FROM
     flavors a
         USING flavors b
 WHERE
     a.tbl_id < b.tbl_id
     AND a.date = b.date
 	AND a.location_index = b.location_index;
` -->
Planned Updates

Markup : *Change database populating algorithm to detect new culvers restaurants
