const fs = require('fs')
const { promisify } = require('util')

const unlink = promisify(fs.unlink)

unlink('./Data/data.txt').then(() => console.log('File deleted.')).catch((err) => console.log('File not found:- ' + err)
)