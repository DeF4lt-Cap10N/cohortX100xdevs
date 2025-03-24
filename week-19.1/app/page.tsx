
import Link from "next/link";

export default function Home() {
  return (
  <div className="text-lg w-screen h-screen flex justify-center items-center">
    <div>
       Todo Application
       <br />
       <Link className="text-md border m-2" href="/signin">
       signin to ToDo application
       </Link>
       <br />
       <Link className="text-md border m-2" href="/signup">
       signup to ToDo application
       </Link>
    </div>
   
  </div>
  );
}
