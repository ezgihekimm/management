'use client'
import Image from 'next/image'
import { useState } from 'react'

function TabBar() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    { id: 0, label: 'Attachment' },
    { id: 1, label: 'Sub Task' },
    { id: 2, label: 'Comment' },
  ]

  const handleTabClick = (id: number) => {
    setActiveTab(id)
  }

  return (
    <div className="w-[488px]">
      <div className="flex flex-col rounded-lg border-[1px] border-[#eaecf0]">
        <div className="flex flex-row justify-between bg-[#F9FAFB]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex-1 py-2 text-center ${
                activeTab === tab.id
                  ? 'border-b-2 border-[#145389] font-bold text-[#145389]'
                  : 'text-[#98a1b2] hover:text-gray-700'
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              <div className="flex flex-row justify-center gap-2 text-xs">
                {' '}
                <Image
                  src={
                    activeTab === tab.id
                      ? '/assets/attachBlue.svg'
                      : '/assets/attach.svg'
                  }
                  alt="attachment"
                  width={16}
                  height={16}
                />
                {tab.label}
              </div>
            </button>
          ))}
        </div>
        <div className="px-3 pt-3">
          {activeTab === 0 && <div>Content for Tab 1</div>}
          {activeTab === 1 && <div>Sub Task</div>}
          {activeTab === 2 && <div>Comment</div>}
        </div>
      </div>
    </div>
  )
}

export default TabBar
