
const pool = require('./connection.js')
const express = require('express');
const app = express();
var format = require('pg-format');

app.listen(3001, ()=>{
    console.log("Server listening on port 3001")
})

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });



// Retrieve based on store location
app.get('/flavors/index/:index', (req, res) =>{
    const index = req.params.index;
    const indexQuery = format('SELECT * from %I WHERE location_index = %L', 'flavors', index)
    pool.query(indexQuery, (err, results)=>{
        if(err){
            console.log(err)
        }else {
        res.status(200).json(results.rows)
    }
    });
})

// Retrieve based on date
app.get('/flavors/date/:date', (req, res) =>{
    const date = req.params.date;
    const dateQuery = format('SELECT * from %I WHERE date = %L', 'flavors', date)
    pool.query(dateQuery, (err, results)=>{
        if(err){
            console.log(err)
        }else {
        res.status(200).json(results.rows)
    }
    });
})