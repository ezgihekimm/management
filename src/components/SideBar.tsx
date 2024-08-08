'use client'

import { useAppSelector } from '@/store/hooks'
import Image from 'next/image'
import DropDown from './DropDown'

function SideBar() {
  const user = useAppSelector((state) => state.auth)

  return (
    <div className="flex flex-1 flex-col justify-between border-r-[1px] border-[#eaecf0] px-4 pt-9">
      <div className="flex flex-col">
        <div className="pb-4 text-base font-medium text-[#101828]">
          Projeler
        </div>
        <DropDown title="Project 1" dotColor="#f04437" />
        <DropDown title="Project 2" dotColor="#2083d7" />
        <DropDown title="Project 3" dotColor="#fec84a" />
        <DropDown title="Project 4" dotColor="#7e56d8" />
        <div className="mt-2 flex flex-row px-3 py-2 text-[#98a1b2] hover:bg-[#F9FAFB] hover:text-[#101828]">
          <Image src="/assets/bar-chart.svg" alt="" width={20} height={20} />
          <div className="pl-2 text-sm">Proje Oluştur</div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-between pb-6 ps-1">
        <div className="flex flex-col">
          <div className="text-[#101828 ]text-sm font-semibold">
            {user.fullName}
          </div>
          <a href={`mailto:${user.email}`} className="text-sm text-[#475467]">
            {user.email}
          </a>
        </div>
        <button className="rounded-full border-2 border-[#475467] p-2"></button>
      </div>
    </div>
  )
}

export default SideBar
