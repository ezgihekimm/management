'use client'
import { useSearchParams } from 'next/navigation'

function NavigationTab() {
  const searchParams = useSearchParams()
  const activeTab = searchParams.get('tab')

  return (
    <div className="flex pb-6 pt-6">
      <div className="rounded-lg border-[1px] border-[#d0d5dd] bg-white py-2 text-sm font-medium text-[#344054]">
        <a
          className={`border-r-[1px] border-[#d0d5dd] px-4 py-2 ${
            activeTab === 'boards' ? 'font-semibold text-[#145389]' : ''
          }`}
          href="?tab=boards"
        >
          Boards
        </a>
        <a
          className={`border-r-[1px] border-[#d0d5dd] px-4 py-2 ${
            activeTab === 'list' ? 'font-semibold text-[#145389]' : ''
          }`}
          href="?tab=list"
        >
          List
        </a>
        <a
          className={`border-r-[1px] border-[#d0d5dd] px-4 py-2 ${
            activeTab === 'other1' ? 'font-semibold text-[#145389]' : ''
          }`}
          href="?tab=other1"
        >
          Other
        </a>
        <a
          className={`border-r-[1px] border-[#d0d5dd] px-4 py-2 ${
            activeTab === 'other2' ? 'font-semibold text-[#145389]' : ''
          }`}
          href="?tab=other2"
        >
          Other
        </a>
        <a
          className={`border-r-[1px] border-[#d0d5dd] px-4 py-2 ${
            activeTab === 'other3' ? 'font-semibold text-[#145389]' : ''
          }`}
          href="?tab=other3"
        >
          Other
        </a>
        <a
          className={`px-4 py-2 ${
            activeTab === 'other4' ? 'font-semibold text-[#145389]' : ''
          }`}
          href="?tab=other4"
        >
          Other
        </a>
      </div>
    </div>
  )
}

export default NavigationTab
