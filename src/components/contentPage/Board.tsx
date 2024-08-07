import Image from 'next/image'
import TaskCard from './TaskCard'

interface BoardProps {
  title: string
  count: number
}

function Board(props: BoardProps) {
  const { title, count } = props
  return (
    <div className="] w-[287px] rounded-xl border-[1px] border-[#eaecf0] bg-white">
      <div className="flex flex-row justify-between border-b-[1px] border-[#eaecf0] px-4 py-[18px]">
        <div className="flex flex-row items-center">
          <div className="pr-2 text-base text-[#4e5aa6]">{title}</div>
          <div className="flex h-4 w-[8px] items-center justify-center rounded-full border-[1px] border-[#b2ddff] bg-[#eff8ff] px-2 py-2 text-xs text-[#175cd3]">
            {count}
          </div>
        </div>
        <div className="flex flex-row gap-[10px]">
          <Image src="/assets/plus.svg" alt="open" width={20} height={20} />
          <Image
            src="/assets/moreCircle.svg"
            alt="open"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="m-[5px] flex flex-col gap-[6px]">
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  )
}

export default Board
