import Activity from './Activity'
import ActivityBar from './ActivityBar'
import PopUpHeader from './PopUpHeader'
import TabBar from './TabBar'
import TaskDetail from './TaskDetail'
interface PopUpProps {
  task: {
    id: number
    name: string | null
    description: string | null
    startDate: string | null
    endDate: string | null
    flagId: number
  }
  onClose: () => void
}

function PopUp(props: PopUpProps) {
  const { task, onClose } = props
  return (
    <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50">
      <div className="rounded-[6px] bg-white">
        <div className="flex">
          <PopUpHeader />
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
