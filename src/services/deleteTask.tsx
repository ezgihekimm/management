import { store } from '@/store'
import { z } from 'zod'

export const schema = z.object({
  status: z.boolean(),
})
export type Response = z.infer<typeof schema>

export const deleteTask = async (id: number) => {
  try {
    const token = store.getState().auth.token
    if (!token) throw new Error('Token not found')
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + 'tasks/' + id,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    )
    const data = schema.safeParse(await response.json())
    if (!data.success) {
      console.error(data.error.errors)
      throw new Error('Zod validation failed')
    }
    return data.data
  } catch (error) {
    throw new Error(`deleteTask ${error}`)
  }
}
