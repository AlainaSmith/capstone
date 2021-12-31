const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); 


const ctrl = require('./jarrodController.js')
app.get(`/api/jarrodSoloEntry`, ctrl.jarrodSoloEntry)
app.post(`/api/jarrodSoloEntry`, ctrl.jarrodSoloEntry)
app.delete(`/api/jarrodSoloEntry/:id`, ctrl.jarrodSoloEntry)

app.delete(`/api/jarrodSoloEntry/:id`, ctrl.jarrodSoloEntry)


app.listen(4400, () => console.log("Commencing countdown, engines on...4400"));

