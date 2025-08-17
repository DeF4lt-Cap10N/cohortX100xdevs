import { NextResponse } from "next/server";


export async function POST(req: NextResponse){

   const data = await req.json();
   console.log(data);
   return NextResponse.json({
      message:"You are signup"
   })
}