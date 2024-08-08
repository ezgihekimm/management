'use client'

import { deleteTask } from '@/services/deleteTask'
import { TaskType } from '@/services/types'
import Image from 'next/image'
import { useState } from 'react'
import PopUp from '../popUp/PopUp'

interface TaskProps {
  task: TaskType
  refetchBoards: () => void
}
function TaskCard(props: TaskProps) {
  const { task, refetchBoards } = props
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleOpenPopup = () => {
    setIsPopupOpen(true)
  }

  const handleClosePopup = () => {
    setIsPopupOpen(false)
  }

  const handleDelete = async (id: number) => {
    try {
      const response = await deleteTask(id)
      if (response.status) {
        alert('Task deleted')
        handleClosePopup()
        return refetchBoards()
      }
      throw new Error()
    } catch (error) {
      alert('Failed to create task')
    }
  }

  const getFlagColor = (id: number) => {
    switch (id) {
      case 1:
        return '#057647'
      case 2:
        return '#6840c6'
      case 3:
        return '#f38743'
      default:
        return '#f38743'
    }
  }

  const textColor = task.flagId ? getFlagColor(task.flagId) : '#475467'
  const flagSrc =
    task.flagId === 1
      ? '/assets/flag1.svg'
      : task.flagId === 2
        ? '/assets/flag2.svg'
        : '/assets/flag3.svg'

  return (
    <>
      <div
        className="flex flex-col rounded-[6px] border-[1px] border-[#eaecf0] p-3"
        onClick={handleOpenPopup}
      >
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
      {isPopupOpen && (
        <PopUp task={task} onClose={handleClosePopup} onDelete={handleDelete} />
      )}
    </>
  )
}

export default TaskCard
