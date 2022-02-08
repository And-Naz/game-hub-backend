const express = require("express");
const cors = require('cors')
require("dotenv").config()

const PORT = process.env.PORT || 3000
const app = express();
const db = require('./models')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.use(express.urlencoded({ extended: true }))


require('./routes/Home')

app.get("/", (req, res) => {
	res.status(200).send("Hallo World!")
})
app.post("/", (req, res) => {
	console.log(req.body);
	res.status(200).send({ message: "chishta" })
})


db.sequelize.sync().then(() => {
	app.listen(PORT, () => console.log(`Server is running and listening the port: ${PORT}.`));
}, console.log)