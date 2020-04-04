const fs = require('fs')
const util = require('util')

export const getSecret = (secret) => {
    return fs.readFileSync(util.format(secret),'utf-8').trim()
}