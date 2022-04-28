import React, { useEffect, useState } from 'react'

const Time = () => {
    const [time,setTime]=useState<string>((new Date()).toLocaleString());

//     useEffect(()=>{
//    const interval=setInterval(()=>{
//       setTime((new Date()).toLocaleString());
//     },1000)  

//     return ()=>clearInterval(interval);
    
//   },[setTime])
  return (
    <div>{time}</div>
  )
}

export default Time