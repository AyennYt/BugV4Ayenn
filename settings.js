const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['6285774416712'] // no own
global.packname = '©AyennYt' // nama pack sticker
global.author = 'AyennYt'// nama author 


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})