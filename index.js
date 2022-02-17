require('dotenv').config()
const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const ErrorMiddleware = require('./middlewares/errorMiddleware')

const PORT = process.env.PORT || 5000
const app = express();
const db = require('./models')

app.use(cors())
app.use(express.json())
app.use(cookieParser())


app.use('/api/auth', require('./router/authRouter'))
// app.use('/auth', require('./routes/Auth'))

app.use(ErrorMiddleware)

async function Main() {
	let server = null
	try {
		await db.sequelize.sync(); //{ force: true }
		console.log('\n\n\n');
		server = app.listen(PORT, () => console.log(`Server is running and listening the port: ${PORT}.`));
	} catch (error) {
		console.log('\n\n\n');
		console.log(error)
		if (server) {
			await server.close()
		}
		process.exit(1)
	}
}

Main()