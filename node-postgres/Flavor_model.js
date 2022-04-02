
require('dotenv').config({path:__dirname+'./../Databasing/.env'})
let POSTGRES_USER = process.env.POSTGRES_USER
let PGDATABASE = process.env.PGDATABASE
let POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD
let POSTGRES_PORT = process.env.POSTGRES_PORT
// const { Pool } = pg
const Pool = require('pg').Pool
const pool = new Pool({
    user: `${POSTGRES_USER}`,
    host: 'localhost',
    database: `${PGDATABASE}`,
    password: `${POSTGRES_PASSWORD}`,
    port: `${POSTGRES_PORT}`,
});


const getFlavors = () => {
    return new Promise(function(resolve, reject){
        pool.query("SELECT * FROM flavors ORDER BY flavor ASC", (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);
        })
    })
}


module.exports = {
    getFlavors
}