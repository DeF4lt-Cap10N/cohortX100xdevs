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

type USER = {
   name:string,
   age:number
}


function greet(user1 : {name:string, age:number}){
   console.log("hello" + user1.name);
}

let user1 = {
   name : "Rahul",
   age: 21
}

greet(user1);


function add(a:number, b:number) : number{
   return a+b;
}

let val = add(4,8);
console.log(val);

function age(num:number):boolean{
   if(num>=18){
      return true;
   }
   else{
      return false;
   }
}

let res = age(7);
console.log(res);



