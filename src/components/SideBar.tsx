import DropDown from './DropDown'

function SideBar() {
  return (
    <div className="flex flex-1 flex-col px-4 pt-9">
      <div className="pb-4 text-base font-medium text-[#101828]">Projeler</div>
      <DropDown />
    </div>
  )
}

export default SideBar
