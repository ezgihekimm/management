import Image from 'next/image'

interface TaskProps {
  task: {
    id: number
    name: string | null
    description: string | null
    startDate: string | null
    endDate: string | null
    flagId: number
  }
}
function TaskCard(props: TaskProps) {
  const { task } = props
  const getFlagColor = (id: number) => {
    switch (id) {
      case 1:
        return '#057647' // Örnek renk: kırmızı
      case 2:
        return '#6840c6' // Örnek renk: yeşil
      case 3:
        return '#f38743' // Örnek renk: mavi
      default:
        return '#f38743' // Varsayılan renk
    }
  }
  const textColor = getFlagColor(task.flagId)
  const flagSrc =
    task.flagId === 1
      ? '/assets/flag1.svg'
      : task.flagId === 2
        ? '/assets/flag2.svg'
        : '/assets/flag3.svg'

  return (
    <div className="flex flex-col rounded-[6px] border-[1px] border-[#eaecf0] p-3">
      <div className="text-xs font-medium" style={{ color: textColor }}>
        {task.name}
      </div>
      <div className="pt-2 text-[13px] font-medium text-[#475467]">
        {task.description}
      </div>
      <div className="flex flex-row gap-[5px] py-3">
        <Image src="/assets/calendar.svg" alt="" width={16} height={16} />
        <div className="text-[13px] text-[#98a1b2]">
          {task.startDate} - {task.endDate}
        </div>
      </div>
      <div className="flex flex-row gap-[6px]">
        <Image src="/assets/rectangle.svg" alt="" width={10} height={10} />
        <div className="text-[11px] text-[#98a1b2]">Milestone Name</div>
        <Image src={flagSrc} alt="" width={16} height={16} />
      </div>
    </div>
  )
}

export default TaskCard
