"use client"
import Logo from "@/components/logo"
import Menu from "@/components/menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Bell, CircleHelp, LogOut, Search, Settings, Menu as MenuIcon } from "lucide-react"
import { useRouter } from "next/navigation"

type IMenu = {
    key: number | string,
    label: string,
    link: string
}

type IHeader = {
    menu: IMenu[],
    data?: any
}

export const Header = ({ menu, data }: IHeader) => {
    const router = useRouter();

    const onLogOut = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        router.push("/login");
    }

    return (
        <header className="flex gap-6 px-6 py-2 justify-between items-center 2xl:items-end 2xl:py-0 bg-white 2xl:gap-8">

            <div className="pt-0 pb-0 2xl:pt-8 2xl:pb-[30px]">
                <Logo>HarmonyHR</Logo>
            </div>

            <div className="hidden 2xl:block">
                <Menu list={menu} initialLink={2} />
            </div>

            <Label className="relative 2xl:max-w-[395px] w-full 2xl:pb-4">
                <span className="absolute top-2 left-4">
                    <Search />
                </span>
                <Input className="rounded-xl inline-block py-2 pr-4 pl-12 w-full" placeholder="Search" type="text" />
            </Label>

            <div className="flex gap-6 items-center 2xl:pb-4">
                <Button className="shadow-none p-0 2xl:hidden">
                    <MenuIcon />
                </Button>

                <Button className="shadow-none p-0 hidden min-[570px]:block">
                    <Settings />
                </Button>

                <Button className="shadow-none p-0 hidden min-[570px]:block">
                    <CircleHelp />
                </Button>

                <Button className="shadow-none p-0 hidden min-[570px]:block">
                    <Bell />
                </Button>

                <div className="w-9 h-9 overflow-hidden rounded-full bg-gray-400">
                    <img src={data?.myProfile?.avatar} alt={data?.myProfile?.name ?? "User avatar"} />
                </div>

                <Button onClick={onLogOut} className="shadow-none p-0 hidden min-[570px]:block">
                    <LogOut />
                </Button>
            </div>
        </header>
    );
}
