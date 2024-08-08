import { TaskType } from '@/services/types'
import Image from 'next/image'
interface TaskDetailProps {
  task: TaskType
}

function TaskDetail(props: TaskDetailProps) {
  const { task } = props
  const flagSrc =
    task.flagId === 1
      ? '/assets/flag1.svg'
      : task.flagId === 2
        ? '/assets/flag2.svg'
        : '/assets/flag3.svg'

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="flex flex-col py-11">
          <div className="flex flex-row gap-5 pb-[10px]">
            <Image src="/assets/task.svg" alt="flag" width={25} height={25} />
            <div className="flex max-w-[410px] text-[22px] font-bold text-[#475467]">
              {task.name}
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
      <div className="flex gap-10 p-[10px]">
        <div className="flex flex-col gap-3 p-2">
          <div className="text-sm text-[#475467]">Task Status</div>
          <div className="text-sm">Open</div>
        </div>
        <div className="flex flex-col gap-3 p-2">
          <div className="text-sm text-[#475467]">Assingment</div>
          <Image src="/assets/avatar.svg" alt="" width={144} height={32} />
        </div>
        <div className="flex flex-col gap-3 p-2">
          <div className="text-sm text-[#475467]">Priotry</div>
          <Image src={flagSrc} alt="flag" width={16} height={16} />
        </div>
      </div>
      <div className="pb-4 text-[#475467]">
        <div className="pb-[10px] text-sm">Description</div>
        <div className="text-xs">{task.description}</div>
      </div>
    </div>
  )
}

export default TaskDetail
