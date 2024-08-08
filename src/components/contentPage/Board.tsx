'use client'
import { BoardType } from '@/services/types'
import Image from 'next/image'
import { useState } from 'react'
import CreateTask from './CreateTask'
import TaskCard from './TaskCard'

interface BoardProps extends BoardType {
  refetchBoards: () => void
}
function Board(props: BoardProps) {
  const { id, name, tasks, refetchBoards } = props
  const [isAddingTask, setIsAddingTask] = useState(false)

  const handleAddTaskClick = () => {
    setIsAddingTask(true)
  }

  const handleTaskCreate = () => {
    setIsAddingTask(false)
    refetchBoards()
  }

  return tasks.length > 0 ? (
    <div className="flex w-[287px] min-w-[287px] flex-col rounded-xl border-[1px] border-[#eaecf0] bg-white">
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
          <CreateTask boardId={id} onSuccess={handleTaskCreate} />
        )}
      </div>
      <div className="m-[5px] flex min-h-1 flex-1 flex-col gap-[6px] overflow-y-scroll pb-10">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} refetchBoards={refetchBoards} />
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
          <CreateTask boardId={id} onSuccess={handleTaskCreate} />
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
