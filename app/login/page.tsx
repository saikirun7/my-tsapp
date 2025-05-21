//"use client"
import Link from 'next/link'

function Login() {
  console.log("Login")

  return (
    <div>
      <h1>Login</h1>
      <Link href="/home">Back to home</Link>
    </div>
  )
}

export default Login