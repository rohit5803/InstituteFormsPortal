"use client"

import { useState } from "react"
export default function Page() {
  const currDate = new Date(Date.now());
  const [name, setName] = useState("")
  const [date, setDate] = useState(currDate.toTimeString());
  const [secs, setSecs] = useState(currDate.getUTCSeconds());

  setTimeout(() => {
    const currTime = new Date(Date.now());
    setSecs(currTime.getUTCSeconds());
    setDate(currTime.toTimeString());
  }, 1000);
  return (
    <div>
      <input type="text" onChange={(e) => { setName(e.target.value) }} />
      <div>{name === "" ? "Hello" : name}</div>
      <div suppressHydrationWarning={true} >Seconds: {secs}</div>
      <div suppressHydrationWarning={true} >Date: {date}</div>
    </div>
  )
}
