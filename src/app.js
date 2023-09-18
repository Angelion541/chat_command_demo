const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const authRouter = require('./routes/auth/authRouter')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Allow-Methods', '*')
	res.setHeader('Access-Control-Allow-Headers', '*')
	next()
})

app.use(cors({
	origin: '*',
	methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))

app.use(express.json())

app.use('/auth', authRouter)

app.use((req, res) => {
	res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
	res.status(500).json({ message: err.message })
})

module.exports = app
