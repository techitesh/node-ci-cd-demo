const fs = require('fs')
const path = require('path')

const getSecret = (secret) => {
    return fs.readFileSync(secret,'utf-8').trim()
}

module.exports = {
    getSecret
}