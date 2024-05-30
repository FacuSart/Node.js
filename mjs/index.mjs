// .js --> por defecto utiliza CommonJS
// .mjs --> para utilizar ES Modules
// .cjs --> para utilizar CommonJS

import { sum, res } from './sum.mjs'

console.log(sum(1, 2))
console.log(res(2, 1))