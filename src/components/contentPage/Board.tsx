import { Task } from '@/services/types'
import Image from 'next/image'
import TaskCard from './TaskCard'

interface BoardProps {
  id: number
  order: number
  name: string | null
  tasks: Task[]
}
function Board(props: BoardProps) {
  const { name, tasks } = props

  return (
    <div className="w-[287px] min-w-[287px] rounded-xl border-[1px] border-[#eaecf0] bg-white">
      <div className="flex flex-row justify-between border-b-[1px] border-[#eaecf0] px-4 py-[18px]">
        <div className="flex flex-row items-center">
          <div className="pr-2 text-base text-[#4e5aa6]">{name}</div>
          <div className="flex h-4 w-[8px] items-center justify-center rounded-full border-[1px] border-[#b2ddff] bg-[#eff8ff] px-2 py-2 text-xs text-[#175cd3]">
            {tasks.length}
          </div>
        </div>
        <div className="flex flex-row gap-[10px]">
          <button className="">
            <Image src="/assets/plus.svg" alt="open" width={20} height={20} />
          </button>
          <Image
            src="/assets/moreCircle.svg"
            alt="open"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="m-[5px] flex max-h-[300px] flex-col gap-[6px] overflow-y-auto pb-10 sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600]">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}

export default Board
