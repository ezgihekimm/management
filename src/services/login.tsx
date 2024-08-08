import { z } from 'zod'
import { userSchema } from './types'

export const schema = z.object({
  status: z.boolean(),
  data: userSchema.nullable(),
})
export type Response = z.infer<typeof schema>

type LoginRequest = {
  email: string
  password: string
}

export const login = async (payload: LoginRequest) => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + 'auth/login',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      },
    )
    const data = schema.safeParse(await response.json())
    if (!data.success) {
      console.error(data.error.errors)
      throw new Error('Zod validation failed')
    }
    return data.data
  } catch (error) {
    throw new Error(`login ${error}`)
  }
}
