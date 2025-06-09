const { Command } = require('commander');
const program = new Command();

const fs = require("fs");



program
    .name('index08.js')
    .description('CLI to number is even or odd')
    .version('1.8.0');

program.command('check')
    .description('Checking number is even or oddd')
    // .argument('<number>', 'number')
    .option('-n, --number <number>', 'number as a argument')
    .option('-f, --file <file>', 'file as a argument')
    .action((options) => {
        let num;
        if (options.number) {
            num = Number(options.number);
        }
        else if (options.file) {
            const data = fs.readFileSync(options.file, "utf-8")
            console.log(data);
            return;
        }
        else{
            console.log("Maharaj kuch arguments dene ki kosis kare");
            return;
        }


        if (num % 2 == 0) {
            console.log("even NUmber");
        } else {
            console.log("odd Number");
        }



    });

program.parse();

