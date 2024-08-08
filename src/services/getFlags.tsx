import { store } from '@/store'
import { z } from 'zod'
import { flagSchema } from './types'

export const schema = z.object({
  status: z.boolean(),
  data: z.array(flagSchema),
})
export type Response = z.infer<typeof schema>

export const getFlags = async () => {
  try {
    const token = store.getState().auth.token
    if (!token) throw new Error('Token not found')
    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + 'commons/flags',
      {
        headers: {
          Authorization: `Bearer ${token}`,
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
    throw new Error(`getFlags ${error}`)
  }
}
