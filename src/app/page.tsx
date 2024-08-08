'use client'

import Board from '@/components/contentPage/Board'
import ContentHeader from '@/components/contentPage/ContentHeader'
import NavigationTab from '@/components/contentPage/NavigationTab'
import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'
import { getBoards } from '@/services/getBoards'
import { useAppSelector } from '@/store/hooks'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useQuery } from 'react-query'
import Header from '../components/Header'

export default function Home() {
  const router = useRouter()
  const user = useAppSelector((state) => state.auth)

  useEffect(() => {
    if (!user.token) {
      router.push('/login')
    }
  }, [user, router])

  const boardResponse = useQuery('boards', getBoards)
  const boardData = boardResponse.data?.data

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
            {boardData?.map((board) => (
              <Board
                key={board.id}
                id={board.id}
                name={board.name}
                order={board.order}
                tasks={board.tasks}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
