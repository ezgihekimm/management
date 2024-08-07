import Board from '@/components/contentPage/Board'
import ContentHeader from '@/components/contentPage/ContentHeader'
import NavigationTab from '@/components/contentPage/NavigationTab'
import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'
import Header from '../components/Header'
export default function Home() {
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
          <div className="flex">
            <Board title="OPEN" count={3} />
          </div>
        </div>
      </div>
    </div>
  )
}
