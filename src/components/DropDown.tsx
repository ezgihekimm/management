'use client'
import Image from 'next/image'
import { useState } from 'react'

interface DropDownProps {
  title: string
  dotColor: string
}

function DropDown(props: DropDownProps) {
  const { dotColor, title } = props
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative inline-block w-[214px]">
      <div
        onClick={toggleDropdown}
        className="mb-2 flex cursor-pointer flex-row items-center justify-between rounded-[6px] px-3 py-2 text-[#344054] hover:bg-[#F9FAFB] hover:text-[#101828] active:bg-[#F3F6FD] active:font-semibold active:text-[#145389]"
      >
        <div className="flex flex-1 flex-row items-center">
          <div
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: dotColor }}
          ></div>
          <div className="pl-3 text-sm">{title}</div>
        </div>

        <button onClick={toggleDropdown} className="pl-2">
          <Image
            src="/assets/chevron-down.svg"
            alt="arrow-down"
            width={20}
            height={20}
          />
        </button>
      </div>

      {isOpen && (
        <div className="mb-3 block w-[226px] rounded-md">
          <div className="flex flex-col gap-2 pr-3 text-xs">
            <div className="flex flex-row items-center justify-between rounded-[6px] pl-12 pr-3 hover:bg-[#F9FAFB]">
              <a href="#" className="block py-2 text-[#344054]">
                Overview
              </a>
              <div className="h-[22px] w-7 content-center items-center rounded-full border-[1px] border-[#eaecf0] bg-[#F9FAFB] px-2">
                10
              </div>
            </div>
            <div className="flex flex-row items-center justify-between rounded-[6px] pl-12 pr-3 hover:bg-[#F9FAFB]">
              <a href="#" className="block py-2 text-[#344054]">
                Notifications
              </a>
              <div className="h-[22px] w-7 content-center items-center rounded-full border-[1px] border-[#eaecf0] bg-[#F9FAFB] px-2">
                10
              </div>
            </div>
            <div className="flex flex-row items-center justify-between rounded-[6px] pl-12 pr-3 hover:bg-[#F9FAFB]">
              <a href="#" className="block py-2 text-[#344054]">
                Analytics
              </a>
              <div className="h-[22px] w-7 content-center items-center rounded-full border-[1px] border-[#eaecf0] bg-[#F9FAFB] px-2">
                10
              </div>
            </div>
            <div className="flex flex-row items-center justify-between rounded-[6px] pl-12 pr-3 hover:bg-[#F9FAFB]">
              <a href="#" className="block py-2 text-[#344054]">
                Reports
              </a>
              <div className="h-[22px] w-7 content-center items-center rounded-full border-[1px] border-[#eaecf0] bg-[#F9FAFB] px-2">
                10
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DropDown
