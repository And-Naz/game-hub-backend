const router = require('express').Router()

router.get("/", (req, res) => {
	res.status(200).send({message: 'Score Page'})
})

module.exports = router