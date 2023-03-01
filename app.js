import { createFile } from "./helpers/multiplicar.js";
import argv from './config/yargs.js'

const base = argv.base;
const list = argv.list;
const to = argv.to;
console.clear();
createFile(base, list, to)
.then((fileName)=>console.log(`${fileName} was created`))
.catch((error)=>console.log({error}));


