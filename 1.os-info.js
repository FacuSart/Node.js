const os = require ('node:os') //--> Si fuera un .mjs sería * import os from 'node:os' *

console.log('Información del os:')
console.log('---------------------')

console.log(os.type())
console.log('Nombre del os:', os.platform())
console.log('Arquitectura del os:', os.arch())
console.log('Versión del os:', os.release())
console.log('CPUs:', os.cpus()) 
console.log('Memoria libre:', os.freemem() /1024 /1024 )
console.log('Memoria total:', os.totalmem() /1024 /1024 )
console.log('uptime:', os.uptime() / 60 / 60)