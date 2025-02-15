interface User{
   id:string,
   name:string,
   age:number,
   email:string,
   password:string,
}

type updateUserProps = Pick<User, "id" | 'name' | "age" >


function updateUser(updateProps : updateUserProps){
   // hit database tp update the user
}