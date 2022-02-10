const router = require('express').Router()

router.post("/register", async (req, res) => {
	try {
		console.log("/register");
		const { userName, password, email, gender, terms } = req.body
		console.log(req.body);
		res.status(200).send({ message: "OK" })
	} catch (error) {
		res.status(500).json({ message: 'Something goes bad, try again' })
	}
})

router.post("/login", async (req, res) => {
	console.log("/login");
	const { userName, password } = req.body
	console.log(req.body);
	res.status(200).send({ message: "OK" })
})


module.exports = router