// const fs = require('fs');
// const { Command } = require('commander');
// const program = new Command();

// program
//   .name('counter')
//   .description('CLI to do file based tasks')
//   .version('0.8.0');

// program
//   .command('count')
//   .description('Count the number of lines in a file')
//   .argument('<file>', 'file to count')
//   .action((file) => {
//     fs.readFile(file, 'utf8', (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         const lines = data.split('\n').length;
//         console.log(`There are ${lines} lines in ${file}`);
//       }
//     });
//   });

// program.parse();


//2nd version 

// const fs = require('fs');
// const { Command } = require('commander');
// const program = new Command();

// program
//   .argument('<file>', 'file to count')
//   .action((file) => {
//     fs.readFile(file, 'utf8', (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         const lines = data.split('\n').length;
//         console.log(`There are ${lines} lines in ${file}`);
//       }
//     });
//   });

// program.parse();

//3rd version

const fs = require("fs");
const {Command} = require("commander");
const program = new Command();


program
   .command("count")
   .argument('<file>', 'file to count')
   .action((file)=>{

    let val = "ceasefire";
    fs.writeFile(file, val , ((err)=>{
      console.log(err);
    }))
    fs.readFile(file, 'utf-8', (err, data)=>{
      if(err){
        console.log(err);
      }
      else{
        console.log(data);
      }
    })
   })

   program.parse();


////////////////////learn//////////////////////

// Command line interface


// const { program } = require('commander');

// program
//   .option('--first')
//   .option('-s, --separator <char>')
//   .argument('<string>');

// program.parse();

// const options = program.opts();
// const limit = options.first ? 1 : undefined;
// console.log(program.args[0].split(options.separator, limit));
