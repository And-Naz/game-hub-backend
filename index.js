const express = require("express");
const cors = require('cors')
const bodyParser = require('body-parser')
require("dotenv").config()

const PORT = process.env.PORT || 3000
const app = express();
app.use(cors())
app.use(bodyParser.json())

app.get("/", (req, res) => {
	res.status(200).send("Hallo World!")
})

app.listen(PORT, () => console.log(`Server is running and listening the port: ${PORT}.`));