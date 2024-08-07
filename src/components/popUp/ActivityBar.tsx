import Image from 'next/image'
function ActivityBar() {
  return (
    <div className="flex flex-col gap-3 border-l-[1px] p-3">
      {' '}
      <div className="flex flex-col items-center gap-1">
        <Image
          src="/assets/message-active.svg"
          alt="attachment"
          width={32}
          height={32}
        />
        <div className="text-[10px] text-[#f78f08]">Activity</div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Image
          src="/assets/message.svg"
          alt="attachment"
          width={32}
          height={32}
        />
        <div className="text-[10px] text-[#d0d5dd]">QA</div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Image
          src="/assets/message.svg"
          alt="attachment"
          width={32}
          height={32}
        />
        <div className="text-[10px] text-[#d0d5dd]">Meetings</div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Image
          src="/assets/message.svg"
          alt="attachment"
          width={32}
          height={32}
        />
        <div className="text-[10px] text-[#d0d5dd]">Meetings</div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Image
          src="/assets/message.svg"
          alt="attachment"
          width={32}
          height={32}
        />
        <div className="text-[10px] text-[#d0d5dd]">Condition</div>
      </div>
      <div className="flex flex-col items-center gap-1 border-b-[1px] pb-3">
        <Image
          src="/assets/message-active.svg"
          alt="attachment"
          width={32}
          height={32}
        />
      </div>
      <div className="flex flex-col items-center">
        <Image src="/assets/plus.svg" alt="attachment" width={32} height={32} />
      </div>
    </div>
  )
}

export default ActivityBar
