import { z } from 'zod'

export const taskSchema = z.object({
  id: z.number(),
  createdUserId: z.number(),
  name: z.string().nullable(),
  description: z.string().nullable(),
  code: z.number(),
  boardId: z.number(),
  flagId: z.number().nullable(),
  order: z.number(),
  startDate: z.string().nullable(),
  endDate: z.string().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
  deletedUserId: z.number().nullable(),
})
export type TaskType = z.infer<typeof taskSchema>

export const boardSchema = z.object({
  id: z.number(),
  name: z.string(),
  openAction: z.boolean(),
  completeAction: z.boolean(),
  order: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
  tasks: z.array(taskSchema),
})
export type BoardType = z.infer<typeof boardSchema>

export const userSchema = z.object({
  id: z.number(),
  fullName: z.string(),
  email: z.string(),
  token: z.string(),
})
export type UserType = z.infer<typeof userSchema>

export const flagSchema = z.object({
  id: z.number(),
  name: z.string(),
  color: z.string(),
  priority: z.number(),
})
export type FlagType = z.infer<typeof flagSchema>
