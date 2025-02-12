import Button from './Button';
import React, { useRef, useState } from 'react'


const Otp = () => {

   const ref1 = useRef();
   const ref2 = useRef();
   const ref3 = useRef();
   const ref4 = useRef();
   const ref5 = useRef();
   const ref6 = useRef();

  return (
    <div className='flex'>
      <SubOtpBox reference={ref1}  onDone = {()=> {
         ref2.current.focus();
      }}/>
      <SubOtpBox reference={ref2} onDone = {()=> {
         ref3.current.focus();
      }}/>
      <SubOtpBox reference={ref3} onDone = {()=> {
         ref4.current.focus();
      }}/>
      <SubOtpBox reference={ref4} onDone = {()=> {
         ref5.current.focus();
      }}/>
      <SubOtpBox reference={ref5} onDone = {()=> {
         ref6.current.focus();
      }}/>
      <SubOtpBox reference={ref6} onDone = {()=> {
         ref6.current.focus();
      }}/>

     
    </div>
  )
}

function SubOtpBox({reference,onDone}){
   return (
      <div>
         <input ref={reference} onChange={(e)=>{
            onDone(); 
         }} type='text' className='w-[40px] h-[50px] rounded-2xl bg-blue-200 mr-2 mt-20 outline-none px-4 text-black'></input>
      </div>
   )
}

export default Otp