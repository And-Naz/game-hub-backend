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


app.use('/api/auth', require('./router/authRouter'))
// app.use('/auth', require('./routes/Auth'))


async function Main() {
	try {
		await db.sequelize.sync(); //{ force: true }
		console.log('\n\n\n');
		app.listen(PORT, () => console.log(`Server is running and listening the port: ${PORT}.`));
	} catch (error) {
		console.log(error)
		process.exit(1)
	}
}

Main()