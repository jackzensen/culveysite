const path = require('path')

require('dotenv').config({path: path.resolve("..", "Databasing", ".env")})

let POSTGRES_USER = process.env.POSTGRES_USER
let PGDATABASE = process.env.PGDATABASE
let POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD
let POSTGRES_PORT = process.env.POSTGRES_PORT

console.log(POSTGRES_PORT)
const { Pool } = require('pg')
const pool = new Pool({
    user: `${POSTGRES_USER}`,
    database: `${PGDATABASE}`,
    password: `${POSTGRES_PASSWORD}`,
    port: `${POSTGRES_PORT}`,
})

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback)
    },
}