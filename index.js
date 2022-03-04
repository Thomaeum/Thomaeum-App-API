const fs = require('fs')
const cors = require('cors');
const express = require('express')

// Variables
global.config = JSON.parse(fs.readFileSync("./config.json"))

// Log4js Setup
global.log4js = require("log4js");
log4js.configure(config.log4js)

let logger = log4js.getLogger("default");
logger.info("Starting...")

// Express Setup
let app = express()
app.use(express.json())
app.use(cors())

app.use('/auth', require('./routes/auth'))
app.use('/substitution', require('./routes/auth'))
app.use('/catho', require('./routes/catho'))

app.listen( config.port, () => logger.info('Server listening on port %d', config.port) )