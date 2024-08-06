import Image from 'next/image'
function Header() {
  return (
    <div className="flex flex-row justify-between border-b-[1px] border-[#eaecf0] px-6 py-2">
      <Image src="/assets/logo.svg" alt="" width={130} height={65} />
      <div className="flex flex-row gap-4">
        <Image src="/assets/bell.svg" alt="" width={20} height={20} />
        <Image src="/assets/bell.svg" alt="" width={20} height={20} />
        <Image src="/assets/headerImg.png" alt="" width={50} height={50} />
      </div>
    </div>
  )
}

export default Header
