
interface User{
   name : string,
   age:number,
   address:{
      city:string,
      pincode:number,
      phoneNumber:number,
   }
}


let user = {
   name : "Rahul sharma",
   age:21,
   address:{
      city:"Bokaro",
      pincode:817069,
      phoneNumber:9609606940,
   }
}

function ageLegal(user:User):boolean{
   if(user.age>=18){
      return true;
   }
   else{
      return false;
   }
}

let answer = ageLegal(user);

if(answer){
   console.log("legal");
}
else{
   console.log("Not legal");
}


///* class in typescript */

interface User1{
   name:string,
   age:number,
   isLegal():boolean
}

class Manager implements User1{
   constructor(public name:string, public age:number){}

   isLegal(){
      return this.age>=18;
   }
}


