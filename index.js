require('dotenv').config()
const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser')

const PORT = process.env.PORT || 5000
const app = express();
const db = require('./models')

app.use(cors())
app.use(express.json())
app.use(cookieParser())

<<<<<<< HEAD
app.use('/', require('./routes/Home'))
app.use('/games', require('./routes/Games'))
app.use('/score', require('./routes/Score'))
app.use('/news', require('./routes/News'))
app.use('/about', require('./routes/About'))
app.use('/auth', require('./routes/Auth'))
=======

app.use('/api/auth', require('./router/auth'))
// app.use('/auth', require('./routes/Auth'))
>>>>>>> test


async function Main() {
	try {
		await db.sequelize.sync({ force: true });
		app.listen(PORT, () => console.log(`Server is running and listening the port: ${PORT}.`));
	} catch (error) {
		console.log(error)
		process.exit(1)
	}
}

Main()