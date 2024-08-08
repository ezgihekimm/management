'use client'

import { login } from '@/services/login'
import { signIn } from '@/store/features/auth'
import { useAppDispatch } from '@/store/hooks'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Login() {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await login({ email, password })
      if (response.status && response.data) {
        dispatch(signIn(response.data))
        router.push('/')
      } else {
        alert('Login failed')
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="mt-16 flex w-96 flex-col">
        <h1>Login</h1>
        <form onSubmit={handleLogin} className="flex flex-col">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}
