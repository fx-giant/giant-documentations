const express = require('express')

const app = express()
app.use(express.static(__dirname + '/public'))

// Start the server on port 8080
app.listen(8080)
