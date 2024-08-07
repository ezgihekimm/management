import Image from 'next/image'
function TaskCard() {
  return (
    <div className="flex flex-col rounded-[6px] border-[1px] border-[#eaecf0] p-3">
      <div className="text-xs font-medium text-[#f38743]">Operasyon Birimi</div>
      <div className="pt-2 text-[13px] font-medium text-[#475467]">
        Bu örnek görevdir. Örnek görevin içeriğine dair açıklama detail’da
        bulunmaktadır.
      </div>
      <div className="flex flex-row gap-[5px] py-3">
        <Image src="/assets/calendar.svg" alt="" width={16} height={16} />
        <div className="text-[13px] text-[#98a1b2]">
          05.02.2024 - 10.02.2024
        </div>
      </div>
      <div className="flex flex-row gap-[6px]">
        <Image src="/assets/rectangle.svg" alt="" width={10} height={10} />
        <div className="text-[11px] text-[#98a1b2]">Milestone Name</div>
      </div>
    </div>
  )
}

export default TaskCard
