import fs from 'node:fs';

const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(),"\n",
    stats.isDirectory(),"\n",
    stats.isSymbolicLink(),"\n",
    stats.size,"\n"
);