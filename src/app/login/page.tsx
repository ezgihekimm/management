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
    <div className="flex h-screen flex-col items-center justify-center bg-[#F9FAFB]">
      <h1 className="mb-5 text-3xl font-medium text-[#145389]">KargaKarga</h1>
      <div className="flex w-96 flex-col rounded-[6px] border-[1px] border-[#eaecf0] bg-white px-10 py-20">
        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg border-[1px] border-[#eaecf0] px-3 py-2"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-lg border-[1px] border-[#eaecf0] px-3 py-2"
          />
          <button
            type="submit"
            className="rounded-lg bg-[#145389] p-1 text-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
