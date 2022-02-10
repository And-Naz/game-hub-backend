const router = require('express').Router()

router.get("/", (req, res) => {
	res.status(200).send("Hallo World!")
})

router.post("/", (req, res) => {
	console.log(req.body);
	res.status(200).send({ message: "chishta" })
})

module.exports = router