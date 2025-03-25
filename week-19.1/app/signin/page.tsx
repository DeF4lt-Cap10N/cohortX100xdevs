"use client"
import axios from "axios"
import { useState } from "react";

export default function Signin() {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");


   return (
      <div className="w-screen h-screen flex justify-center items-center">
         <div className="border m-2">
            <input
               className="p-2 border m-2"
               type="text"
               placeholder="Name"
               onChange={(e)=>{setUsername(e.target.value)}}
            />
            <br />
            <input
               className="p-2 border m-2"
               type="text"
               placeholder="Email"
               onChange={(e)=> {setPassword(e.target.value)}}
            />
            <br />
            <div onClick={() => { }} className="flex justify-center">
               <button
                  className="border m-2 p-2 cursor-pointer"
                  onClick={() => {
                     axios.post("http://localhost:3000/api/v1/signin", {
                        username,
                        password
                     })
                  }}
               >Sign In</button>
            </div>

         </div>

      </div>
   )
}