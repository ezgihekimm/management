'use client'

import Board from '@/components/contentPage/Board'
import ContentHeader from '@/components/contentPage/ContentHeader'
import NavigationTab from '@/components/contentPage/NavigationTab'
import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'
import { getBoards } from '@/services/getBoards'
import { useAppSelector } from '@/store/hooks'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import Header from '../components/Header'

export default function Home() {
  const router = useRouter()
  const user = useAppSelector((state) => state.auth)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user.token) {
      return router.push('/login')
    }
    setLoading(false)
  }, [user, router])

  const boardResponse = useQuery('boards', getBoards)
  const boardData = boardResponse.data?.data

  const refetchBoards = () => {
    boardResponse.refetch()
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="h-screen max-h-screen min-h-[600px] w-screen overflow-hidden">
      <Header />
      <div className="flex h-[calc(100%-60px)] flex-row overflow-hidden">
        <div className="hidden sm:flex">
          <NavBar />
        </div>
        <div className="hidden md:flex">
          <SideBar />
        </div>
        <div className="flex min-w-1 flex-1 flex-col bg-[#F3F6FD] px-6 py-5">
          <ContentHeader />
          <NavigationTab />
          <div className="flex min-h-1 w-full flex-1 gap-[10px] overflow-y-hidden overflow-x-scroll">
            {boardData?.map((board) => (
              <Board key={board.id} refetchBoards={refetchBoards} {...board} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
