"use client"

import { MouseEventHandler, useState } from "react";

export default function Page() {
  // let e = 0;
  const [count, setCount] = useState([])
  const x = () => {
    setCount((count: any) => {
      const lastNum = (count[0]) ? count[0] + 1 : 1;
      const res: any = [lastNum, ...count];
      return res;
    })
  }
  return (
    <>
      <h1>Hellweubfwuo</h1>
      <a href="/login">Login</a><br />
      <a href="/dashboard">Dashboard</a>
      <button onClick={x}>{count[0]}</button>
    </>
  )
}

