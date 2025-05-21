"use client"
import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useState } from 'react'

function Login() {
  console.log("Login")
  const route = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8088/customers/login", {email, password});
      console.log(response.data);
      const token = response.data.token;
      if(token !== null){
        document.cookie = `token=${token}; path=/;`;
        route.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        Email: <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required /> <br />
        Password: <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required /> <br />
        <button type='submit'>Login</button>
      </form>
      <Link href="/home">Back to home</Link>
    </div>
  )
}

export default Login