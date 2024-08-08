import { Task } from '@/services/types'
import Activity from './Activity'
import ActivityBar from './ActivityBar'
import PopUpHeader from './PopUpHeader'
import TabBar from './TabBar'
import TaskDetail from './TaskDetail'
interface PopUpProps {
  task: Task
  onClose: () => void
}

function PopUp(props: PopUpProps) {
  const { task, onClose } = props

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50"
      onClick={handleClickOutside}
    >
      <div className="rounded-[6px] bg-white">
        <div className="flex">
          <PopUpHeader onClose={onClose} />
        </div>
        <div className="flex flex-row justify-between">
          <div className="px-12 py-8">
            <TaskDetail task={task} />
            <TabBar />
          </div>
          <div className="flex flex-row">
            <Activity />
            <ActivityBar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopUp
