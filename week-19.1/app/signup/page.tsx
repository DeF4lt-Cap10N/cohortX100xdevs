"use client"

export default function Signup(){

   return (
      <div className="w-screen h-screen flex justify-center items-center">
         <div className="border m-2">
            <input className="p-2 border m-2" type="text" placeholder="Name"/>
            <br />
            <input className="p-2 border m-2" type="text" placeholder="Email"/>
            <br />
            <div onClick={()=>{}} className="flex justify-center">
                <button className="border m-2 p-2 cursor-pointer">Sign Up</button>
            </div>
           
         </div>

      </div>
   )
}