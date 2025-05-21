import Link from 'next/link'
import React from 'react'

function About() {
  console.log("About");
  return (
    <div>
      <h1>About</h1>
      <Link href="/home">Back to home</Link>
    </div>
  )
}

export default About