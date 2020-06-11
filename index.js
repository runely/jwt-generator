require('dotenv').config()

const jwt = require('jsonwebtoken')

const payload = { caller: 'tes0101' }

if (payload) {
    console.log(jwt.sign(payload, process.env.JWT_SECRET))
}
else {
    console.error("Nothing to generate...")
}