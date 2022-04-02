const express = require('express')
const app = express()
const port = 3001

const flavor_model = require('./Flavor_model')

app.use(express.json())
app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();

})
app.get('/', (req, res) => {
//   res.status(200).send('Hello World!');
    flavor_model.getFlavors()
    .then(response => {
        res.status(200).send(response)
    })
    .catch(error => {
        res.status(500).send(error)
    })
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})