import { createTask } from '@/services/createTask'
import { useState } from 'react'

interface CreateTaskProps {
  boardId: number
  onSuccess: () => void
}

export default function CreateTask(props: CreateTaskProps) {
  const { boardId, onSuccess } = props

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [flag, setFlag] = useState(1)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await createTask({
        name,
        description,
        boardId: boardId,
        flagId: flag,
        ...(startDate ? { startDate: startDate } : undefined),
        ...(endDate ? { endDate: endDate } : undefined),
      })
      if (response.status) return onSuccess()
      throw new Error()
    } catch (error) {
      alert('Failed to create task')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-1 my-1 flex flex-col items-start gap-1 rounded-[6px] border-[1px] border-[#eaecf0] px-2 py-2"
    >
      <input
        type="text"
        className="flex-grow rounded-md border-[1px] border-[#eaecf0] p-1 text-xs"
        placeholder="Name*"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        className="flex-grow rounded-md border-[1px] border-[#eaecf0] p-1 text-xs"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="flex flex-row gap-1">
        <input
          type="datetime-local"
          className="w-24 flex-grow rounded-md border-[1px] border-[#eaecf0] p-1 text-xs"
          placeholder="Start date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="datetime-local"
          className="w-24 flex-grow rounded-md border-[1px] border-[#eaecf0] p-1 text-xs"
          placeholder="End date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <select
        className="w-24 flex-grow rounded-md border-[1px] border-[#eaecf0] p-1 text-xs"
        value={flag}
        onChange={(e) => setFlag(parseInt(e.target.value))}
      >
        <option value="1">Flag 1</option>
        <option value="2">Flag 2</option>
        <option value="3">Flag 3</option>
      </select>
      <button
        className="rounded-md bg-[#4e5aa6] px-4 py-1 text-xs text-white"
        type="submit"
      >
        Add
      </button>
    </form>
  )
}
