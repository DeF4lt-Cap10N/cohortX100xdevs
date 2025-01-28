// const fs = require("fs");



// const content = fs.readFileSync("a-1.txt", "utf-8");
// console.log(content);

// const content1 = fs.readFileSync("a-2.txt", "utf-8");
// console.log(content1);

// function print(err, data){
//    if(err){
//       console.log("file is not found");
//    }
//    else{
//       console.log(data);
//    }

// }

// fs.readFile("a-1.txt", "utf-8", print);

// console.log("hiii");


// function print(){
//    console.log("timer done");
// }

// setTimeout(print, 1000);

// let  c = 0;
// for(let i=0; i<10000000000; i++){
//    c++;
// }
// console.log("heavy is done");

/////////////////////////////////////////////////////



// class Reactangle{

//    constructor(height, width, color){
//       this.height = height;
//       this.width = width;
//       this.color = color;
//    }

//    area(){
//       return this.width* this.height;
//    }
//    paint(){
       
//        return `the area is colored ${this.color}`
//    }
// }

// const react = new Reactangle(10, 10, "blue");

// console.log(react.area() , react.paint());



// const map = new Map();

// map.set('name', 'rahul');
// map.set('age', 21);

// const firstName = map.get('name');
// console.log(firstName);


// function setTimeoutPromisified(ms) {
//    return new Promise(res=>setTimeout(res, ms));
// }

// function main(){
//    console.log("hello");
// }

// setTimeoutPromisified(3000).then(main);

// function promiseCallback(resolve){
//    setTimeout(resolve, 3000);
// }

// promiseCallback(function(){
//    console.log("hello rahul");
// })


function main(){
   // console.log("hello");
}

let p = new Promise(main);

console.log(p);
