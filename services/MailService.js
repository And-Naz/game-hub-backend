const nodeMailer = require('nodemailer')
class MailService {
	async sendActivationMail(to, link) {
		await this.transporter.sendMail({
			from: process.env.SMTP_USER,
			to,
			subject: 'Account activation on ' + process.env.API_URL,
			text: '',
			html:
				`
					<div>
						<h1>For accept activation follow the link</h1>
						<a href="${link}">${link}</a>
					</div>
				`

		})
	}

	constructor() {
		this.transporter = nodeMailer.createTransport({
			host: process.env.SMTP_HOST,
			port: process.env.SMTP_PORT,
			secure: false,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASSWORD
			}
		})
	}
}

module.exports = new MailService()