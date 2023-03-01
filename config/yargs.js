import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'


const options = {
    'b': {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'this is the base of the operations'
    },
    'l': {
        alias: 'list',
        type: 'boolean',
        default: false,
        describe: 'show the list of operations'
    },
    't': {
        alias: 'to',
        type: 'number',
        default: 10,
        describe: 'how far a multiply goes'
    }
};
const argv = yargs(hideBin(process.argv))
    .options(options)
    .check( (argv, options)=>{
        if( isNaN(argv.base )){
            throw 'base needs to be a number'
        }
        return true;
    })
    .argv;


export default argv;