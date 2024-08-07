import Image from 'next/image'
interface TaskDetailProps {
  task: {
    id: number
    name: string | null
    description: string | null
    startDate: string | null
    endDate: string | null
    flagId: number
  }
}

function TaskDetail(props: TaskDetailProps) {
  const { task } = props
  return (
    <div className="flex">
      <div className="flex flex-col py-11">
        <div className="flex flex-row gap-5 pb-[10px]">
          <Image src="/assets/task.svg" alt="flag" width={25} height={25} />
          <div className="max-w-[410px] text-[22px] font-bold text-[#475467]">
            {task.description}
          </div>
        </div>
        <div className="flex flex-row gap-[6px]">
          <div className="text-sm text-[#98a1b2]">ID : #{task.id}</div>
          <Image src="/assets/id.svg" alt="" width={16} height={16} />
        </div>
      </div>
      <div className="flex max-h-10 flex-row items-center gap-0.5 rounded-lg border-[1px] border-[#eaecf0] px-3 py-[10px]">
        <Image src="/assets/circle.svg" alt="" width={16} height={16} />
        <div className="text-sm text-[#475467]">
          {task.startDate} - {task.endDate}
        </div>
      </div>
    </div>
  )
}

export default TaskDetail
