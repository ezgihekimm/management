import Image from 'next/image'
function NavBar() {
  return (
    <div className="flex w-[72px] flex-1 flex-col items-center justify-between bg-[#363F72] pb-6 pt-8">
      <div className="flex flex-col gap-2">
        <div className="rounded-md bg-[#5E668F] p-2 duration-100 ease-in hover:bg-white">
          <Image src="/assets/bell.svg" alt="bell" width={24} height={24} />
        </div>
        <div className="rounded-md p-2 duration-100 ease-in hover:bg-white">
          <Image src="/assets/bell.svg" alt="bell" width={24} height={24} />
        </div>
        <div className="rounded-md p-2 duration-100 ease-in hover:bg-white">
          <Image src="/assets/bell.svg" alt="bell" width={24} height={24} />
        </div>
        <div className="rounded-md p-2 duration-100 ease-in hover:bg-white">
          <Image src="/assets/bell.svg" alt="bell" width={24} height={24} />
        </div>
      </div>
      <div className="">
        <div className="flex flex-col items-center gap-2 pb-6">
          <div className="rounded-md p-2 duration-100 ease-in hover:bg-white">
            <Image src="/assets/bell.svg" alt="bell" width={24} height={24} />
          </div>
          <div className="rounded-md p-2 duration-100 ease-in hover:bg-white">
            <Image src="/assets/bell.svg" alt="bell" width={24} height={24} />
          </div>
          <div className="rounded-md p-2 duration-100 ease-in hover:bg-white">
            <Image src="/assets/bell.svg" alt="bell" width={24} height={24} />
          </div>
          <div className="rounded-md p-2 duration-100 ease-in hover:bg-white">
            <Image src="/assets/bell.svg" alt="bell" width={24} height={24} />
          </div>
        </div>
        <Image src="/assets/avatar.png" alt="avatar" width={48} height={48} />
      </div>
    </div>
  )
}
export default NavBar
