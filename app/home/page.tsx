import Link from 'next/link'
import React from 'react'

function Home() {
  console.log("Home")
  return (
    <div>
        <h1>Home</h1>
        <Link href="/about">About</Link>
        <Link href="/login">Login</Link>
        <Link href="/todolist">Todolist</Link>
    </div>
  )
}

export default Home