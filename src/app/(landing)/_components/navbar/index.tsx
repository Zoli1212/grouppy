import GlassSheet from "@/components/global/glass-sheet"
import { Button } from "@/components/ui/button"
import { Logout } from "@/icons"
import Link from "next/link"
import Menu from "./menu"
import { MenuIcon } from "lucide-react"

type Props = {}

const LandingPageNavbar = (props: Props) => {
  return (
    <div className="w-full flex justify-between sticky top-0 items-center py-5 z-50">
      <p className="font-bold text-2xl text-white">Grouple.</p>{" "}
      {/* Szöveg színe fehér */}
      <Menu orientation="desktop" />
      <div className="flex gap-2">
        <Link href="/sign-in">
          <Button
            variant="outline"
            className="bg-themeBlack text-white rounded-2xl flex gap-2 border-themeGray hover:bg-themeGray hover:text-black"
          >
            <Logout />
            Login
          </Button>
        </Link>
        <GlassSheet
          triggerClass="lg:hidden"
          trigger={
            <Button variant="ghost" className="hover:bg-transparent text-white">
              <MenuIcon size={30} />
            </Button>
          }
        >
          <Menu orientation="mobile" />
        </GlassSheet>
      </div>
    </div>
  )
}

export default LandingPageNavbar
