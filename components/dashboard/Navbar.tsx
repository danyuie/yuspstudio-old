import {MainNav} from "@/components/dashboard/MainNav"

const Navbar = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div>navbar</div>
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          
        </div>
      </div>
    </div>
  )
}

export default Navbar