const path = require("path")

const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); 


const ctrl = require('./jarrodController.js')
// app.get(`/api/jarrodSoloEntry`, ctrl.jarrodSoloEntry)
// app.post(`/api/jarrodSoloEntry`, ctrl.jarrodSoloEntry)
// app.delete(`/api/jarrodSoloEntry/:id`, ctrl.jarrodSoloEntry)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/jarrod.html'))
})

app.get('/jarrod', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/jarrod.css'))
})

app.get('/jarrodMain', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/jarrodMain.js'))
})


app.post('/api/jarrodSolo', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/jarrodMain.js'))
})

app.delete('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/jarrod.html'))
})


app.listen(4400, () => console.log("Commencing countdown, engines on...4400"));

