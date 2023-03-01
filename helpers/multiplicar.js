import { writeFile, writeFileSync } from 'fs';
import colors from "colors";

export const createFile = (base = 5, list, to)=>{

    return new Promise((resolve, reject)=>{
        let salida = '';
        let consoleLog = '';
        
        for( let i = 1; i <= to; i++ ){
            salida += `${base} x ${ i } = ${base * i}\n`;
            consoleLog += `${base} ${'x'.green} ${ i } ${'='.green} ${base * i}\n`;
        }
        if(list){
            console.log(colors.green('==================='));
            console.log(`    table of del ${base}`.bold);
            console.log(colors.green('==================='));
            console.log(consoleLog);
        }
    
        try {
            const fileName = `table-${base}.txt`;
            const route = './output/';
            writeFileSync(route+fileName, salida);
            resolve(fileName);
            
        } catch (error) {
            reject(error);
        }
        
    })
}
