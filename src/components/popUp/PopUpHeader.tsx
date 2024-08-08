import Image from 'next/image'

interface PopUpHeaderProps {
  onClose: () => void
  onDelete: () => void
}

function PopUpHeader(props: PopUpHeaderProps) {
  const { onClose, onDelete } = props
  return (
    <div className="flex w-[1140px] flex-row justify-between border-b-[1px] border-[#eaecf0] px-5 py-5">
      <div className="flex flex-row">
        <div className="flex flex-row gap-4 pr-6">
          <Image
            src="/assets/chevron-up.svg"
            alt="close"
            width={20}
            height={20}
          />
          <Image
            src="/assets/chevron-down-bold.svg"
            alt="close"
            width={20}
            height={20}
          />
        </div>
        <div className="flex flex-row gap-3 text-sm text-[#475467]">
          <Image src="/assets/home.svg" alt="close" width={20} height={20} />
          <Image
            src="/assets/chevron-right.svg"
            alt="close"
            width={20}
            height={20}
          />
          <div className="">25 Proje</div>
          <Image
            src="/assets/chevron-right.svg"
            alt="close"
            width={20}
            height={20}
          />
          <div className="">Projects</div>
          <Image
            src="/assets/chevron-right.svg"
            alt="close"
            width={20}
            height={20}
          />
          <div className="font-semibold text-[#2083d7]">Frontend Case</div>
          <Image src="/assets/move.svg" alt="close" width={20} height={20} />
        </div>
      </div>
      <div className="flex flex-row gap-6">
        <div onClick={onDelete} className="cursor-pointer">
          <Image
            src="/assets/dots-horizontal.svg"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
        <Image
          src="/assets/share.svg"
          alt=""
          width={20}
          height={20}
          className="cursor-pointer"
        />
        <Image
          src="/assets/star.svg"
          alt=""
          width={20}
          height={20}
          className="cursor-pointer"
        />
        <div onClick={onClose} className="cursor-pointer">
          <Image src="/assets/close.svg" alt="close" width={20} height={20} />
        </div>
      </div>
    </div>
  )
}

export default PopUpHeader
