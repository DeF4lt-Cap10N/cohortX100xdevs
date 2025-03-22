// "use client";
// import axios from "axios";
// import { useEffect, useState } from "react";

import axios from "axios"


export default async function User() {

   const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");

   await new Promise(r=>setTimeout(r, 5000));

   const  data = response.data;
   console.log(data);

   // const [loading, setLoading] = useState(true);
   // const [data, setData] = useState();

   // useEffect(() => {
   //    axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
   //       .then(response => {
   //          setData(response.data);
   //          setLoading(false);
   //       })
   // }, [])

   // if (loading) {
   //    return (
   //       <div>
   //          loading........
   //       </div>
   //    )
   // }





   return (
      <div>
         User Page :
         <br />
         {data?.name}
         <br />
         {data?.email}
      </div>
   )
}