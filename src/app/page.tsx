import Board from '@/components/contentPage/Board'
import ContentHeader from '@/components/contentPage/ContentHeader'
import NavigationTab from '@/components/contentPage/NavigationTab'
import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'
import Header from '../components/Header'
export default function Home() {
  const boardData = {
    id: 1,
    title: 'OPEN',
    count: 3,
    order: 1,
    tasks: [
      {
        id: 1,
        name: 'Task1',
        description: 'Description for Task1',
        startDate: '2024-08-01',
        endDate: '2024-08-05',
        flagId: 1,
      },
      {
        id: 2,
        name: 'Task1',
        description: 'Description for Task1',
        startDate: '2024-08-01',
        endDate: '2024-08-05',
        flagId: 2,
      },
      {
        id: 3,
        name: 'Task1',
        description: 'Description for Task1',
        startDate: '2024-08-01',
        endDate: '2024-08-05',
        flagId: 3,
      },
    ],
  }
  return (
    <div className="flex h-screen w-screen flex-col">
      <Header />
      <div className="flex flex-1 flex-row">
        <div className="flex flex-col">
          <NavBar />
        </div>
        <div className="flex">
          <SideBar />
        </div>
        <div className="flex-1 bg-[#F3F6FD] px-6 py-5">
          <ContentHeader />
          <NavigationTab />
          <div className="max-w-800 flex gap-[10px] overflow-x-auto sm:max-w-[900px] md:max-w-[950px] lg:max-w-[1000]">
            <Board
              name={boardData.title}
              count={boardData.count}
              id={boardData.id}
              order={boardData.order}
              tasks={boardData.tasks}
            />
            <Board
              name={boardData.title}
              count={boardData.count}
              id={boardData.id}
              order={boardData.order}
              tasks={boardData.tasks}
            />
            <Board
              name={boardData.title}
              count={boardData.count}
              id={boardData.id}
              order={boardData.order}
              tasks={boardData.tasks}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
