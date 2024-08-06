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
      </div>
    </div>
  )
}
