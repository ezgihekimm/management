import Image from 'next/image'

function ContentHeader() {
  return (
    <div className="flex flex-1 flex-row justify-between">
      <div className="text-[22px] font-semibold text-[#145389]">
        Frontend Case
      </div>
      <button className="">
        <Image src="/assets/filter.svg" alt="" width={20} height={20} />
      </button>
    </div>
  )
}

export default ContentHeader
