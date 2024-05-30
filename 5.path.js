const path = require('node:path')

console.log(path.sep) //Barra separadora de carpetas segun OS

// Unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)