import { store } from '@/store'
import { z } from 'zod'
import { taskSchema } from './types'

export const schema = z.object({
  status: z.boolean(),
  data: taskSchema,
})
export type Response = z.infer<typeof schema>

type CreateTaskRequest = {
  name: string
  description?: string
  boardId: number
  flagId?: number
  startDate?: string
  endDate?: string
}

export const createTask = async (payload: CreateTaskRequest) => {
  try {
    const token = store.getState().auth.token
    if (!token) throw new Error('Token not found')
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'tasks', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    })
    const data = schema.safeParse(await response.json())
    if (!data.success) {
      console.error(data.error.errors)
      throw new Error('Zod validation failed')
    }
    return data.data
  } catch (error) {
    throw new Error(`createTask ${error}`)
  }
}
