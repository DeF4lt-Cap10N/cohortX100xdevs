let x: number = 1;
console.log(x);


function func(firstName:any, ){
   console.log("hello"+firstName);
   
}
let firstName: any = "rahul"
func(firstName);

func("rahul");
func("akash");



function sum(a:number, b:number){
   return a+b;
}

let ans = sum(1, 2);
console.log(ans);



function greet(user : {name:string, age:number}){
   console.log("hello" + user.name);
}

let user = {
   name : "Rahul",
   age: 21
}

greet(user);



