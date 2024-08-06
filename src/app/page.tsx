import SideBar from '@/components/SideBar'
import Header from '../components/Header'
export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <Header />
      <div className="flex flex-1 flex-col">
        <SideBar />
      </div>
    </div>
  )
}
