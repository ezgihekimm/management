'use client'
import { Task } from '@/services/types'
import Image from 'next/image'
import { useState } from 'react'
import TaskCard from './TaskCard'

interface BoardProps {
  id: number
  order: number
  name: string | null
  tasks: Task[]
}
function Board(props: BoardProps) {
  const { name, tasks } = props
  const [isAddingTask, setIsAddingTask] = useState(false)

  const [newTaskName, setNewTaskName] = useState('')

  const handleAddTaskClick = () => {
    setIsAddingTask(true)
  }

  return tasks.length > 0 ? (
    <div className="w-[287px] min-w-[287px] rounded-xl border-[1px] border-[#eaecf0] bg-white">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between border-b-[1px] border-[#eaecf0] px-4 py-[18px]">
          <div className="flex flex-row items-center">
            <div className="pr-2 text-base text-[#4e5aa6]">{name}</div>
            <div className="flex h-4 w-[8px] items-center justify-center rounded-full border-[1px] border-[#b2ddff] bg-[#eff8ff] px-2 py-2 text-xs text-[#175cd3]">
              {tasks.length}
            </div>
          </div>
          <div className="flex flex-row gap-[10px]">
            <button onClick={handleAddTaskClick}>
              <Image src="/assets/plus.svg" alt="add" width={20} height={20} />
            </button>
            <Image
              src="/assets/moreCircle.svg"
              alt="options"
              width={20}
              height={20}
            />
          </div>
        </div>
        {isAddingTask && (
          <div className="mx-1 my-1 flex flex-col items-start gap-1 rounded-[6px] border-[1px] border-[#eaecf0] px-2 py-2">
            <input
              type="text"
              className="flex-grow rounded-md border-[1px] border-[#eaecf0] p-1 text-xs"
              placeholder="Name"
              value={newTaskName}
            />
            <input
              type="text"
              className="flex-grow rounded-md border-[1px] border-[#eaecf0] p-1 text-xs"
              placeholder="Description"
            />
            <div className="flex flex-row gap-1">
              <input
                type="text"
                className="w-24 flex-grow rounded-md border-[1px] border-[#eaecf0] p-1 text-xs"
                placeholder="Start date"
              />
              <input
                type="text"
                className="w-24 flex-grow rounded-md border-[1px] border-[#eaecf0] p-1 text-xs"
                placeholder="End date"
              />
            </div>
            <select className="w-24 flex-grow rounded-md border-[1px] border-[#eaecf0] p-1 text-xs">
              <option value="1">Flag 1</option>
              <option value="2">Flag 2</option>
              <option value="3">Flag 3</option>
            </select>
            <button className="rounded-md bg-[#4e5aa6] px-4 py-1 text-sm text-white">
              Add
            </button>
          </div>
        )}
      </div>
      <div className="m-[5px] flex max-h-[300px] flex-col gap-[6px] overflow-y-auto pb-10 sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px]">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  ) : (
    <div className="group w-[287px] min-w-[287px] rounded-xl border-[1px] border-[#eaecf0] bg-white hover:border-none">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between border-b-[1px] border-[#eaecf0] px-4 py-[18px]">
          <div className="flex flex-row items-center">
            <div className="pr-2 text-base text-[#4e5aa6]">{name}</div>
            <div className="flex h-4 w-[8px] items-center justify-center rounded-full border-[1px] border-[#b2ddff] bg-[#eff8ff] px-2 py-2 text-xs text-[#175cd3]">
              {tasks.length}
            </div>
          </div>
          <div className="flex flex-row gap-[10px]">
            <button onClick={handleAddTaskClick}>
              <Image src="/assets/plus.svg" alt="add" width={20} height={20} />
            </button>
            <Image
              src="/assets/moreCircle.svg"
              alt="options"
              width={20}
              height={20}
            />
          </div>
        </div>
        {isAddingTask && (
          <div className="mx-1 my-1 flex flex-col items-start gap-1 rounded-[6px] border-[1px] border-[#eaecf0] px-2 py-2">
            <input
              type="text"
              className="flex-grow rounded-md border-[1px] border-[#eaecf0] p-1 text-xs"
              placeholder="Name"
              value={newTaskName}
            />
            <input
              type="text"
              className="flex-grow rounded-md border-[1px] border-[#eaecf0] p-1 text-xs"
              placeholder="Description"
            />
            <div className="flex flex-row gap-1">
              <input
                type="text"
                className="w-24 flex-grow rounded-md border-[1px] border-[#eaecf0] p-1 text-xs"
                placeholder="Start date"
              />
              <input
                type="text"
                className="w-24 flex-grow rounded-md border-[1px] border-[#eaecf0] p-1 text-xs"
                placeholder="End date"
              />
            </div>
            <select className="w-24 flex-grow rounded-md border-[1px] border-[#eaecf0] p-1 text-xs">
              <option value="1">Flag 1</option>
              <option value="2">Flag 2</option>
              <option value="3">Flag 3</option>
            </select>
            <button className="rounded-md bg-[#4e5aa6] px-4 py-1 text-sm text-white">
              Add
            </button>
          </div>
        )}
      </div>

      {!isAddingTask && (
        <div className="flex h-full flex-col items-center justify-center">
          <Image src="/assets/board.svg" alt="empty" width={200} height={200} />
          <div className="mt-3 hidden group-hover:block">
            <div className="flex flex-row items-center justify-center">
              <Image src="/assets/plus.svg" alt="add" width={35} height={35} />
              <div
                onClick={handleAddTaskClick}
                className="cursor-pointer text-xl text-[#98a1b2]"
              >
                New Task
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Board
