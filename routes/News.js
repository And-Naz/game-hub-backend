const router = require('express').Router()

router.get("/", (req, res) => {
	res.status(200).send({message: 'News Page'})
})

module.exports = router