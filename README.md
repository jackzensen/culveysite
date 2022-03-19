
# Culvers Flavor Scraper

This program uses python's requests module to pull the month's flavors of the day from each Culver's Restaurant location's website. The flavors of each address are stored within a PostGreSQL database. The program also uses react to create a website which displays the daily flavors.


## Requirements

In this project, the additional softwares were used:
Node.js v14.16.1
react 17.0.2
Docker 20.10.11

***

### How to use

Website

To start the website locally on your device, type `npm start` in the command line. If successful, it should automatically direct your browser to http://localhost:3000. Further information can be found in README-react.md


PostGreSQL

To start your own PostGreSQL database, [download][1] Docker and navigate to the Databasing folder using `cd Databasing` in the terminal. Fromt here, type `docker compose up -d` and it should launch as a container. In your web browser, navigate to `localhost:5050` and log in using the PGADMIN username and password set in your .env file. Right click the server logo to create a server. Name your server whatever you'd like, and in the connections tab set the host name to be pg_container and the maintenance db to `db`. Fill in the Postgres username/password set in your env file and save. 

To create a blank table, navigate through the filetree to the dataase you created, right click on it, and select query tool. Copy/paste the contents of Databasing/Culver.sql into the prompt and run it.

<!-- To start your own PostGreSQL database, [download][1] Docker and navigate to the Databasing folder using `/cd Databasing` in terminal. From there, type `docker build -t culvers-db ./` If successful, `docker images -a` should list culvers-db as an image. We can run the container by typing `docker run -d --name culvers-db-container -p 5432:5432 culvers-db` -->

<!-- To create your own local database, [download][1] PGAdmin and create your own database using the schema:
    `
    <!-- CREATE TABLE IF NOT EXISTS public."New_flavors"
    (
        "Address" text COLLATE pg_catalog."default" NOT NULL,
        "Date" date,
        "Location Index" integer NOT NULL,
        "Location Name" text COLLATE pg_catalog."default" NOT NULL,
        "Flavor" text COLLATE pg_catalog."default" NOT NULL
    )` --> 

<!-- [1]: <https://www.postgresql.org/download/> "download" -->

[1]: <https://www.docker.com/products/docker-desktop>