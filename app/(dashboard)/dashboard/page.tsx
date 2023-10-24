"use client"

import { useState } from "react"


export default function Page() {

const [s1,sets1] = useState("");
const fx = ()=>{
    sets1(Date.now().toString());
}
  return <><h1>{s1}</h1><button onClick={fx}>Click</button></>
}
