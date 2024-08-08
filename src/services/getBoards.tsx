import { store } from '@/store'
import { z } from 'zod'
import { boardSchema } from './types'

export const schema = z.object({
  status: z.boolean(),
  data: z.array(boardSchema),
})
export type Response = z.infer<typeof schema>

export const getBoards = async () => {
  try {
    const token = store.getState().auth.token
    if (!token) throw new Error('Token not found')
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'boards', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    const data = schema.safeParse(await response.json())
    if (!data.success) {
      console.error(data.error.errors)
      throw new Error('Zod validation failed')
    }
    return data.data
  } catch (error) {
    throw new Error(`getBoards ${error}`)
  }
}
