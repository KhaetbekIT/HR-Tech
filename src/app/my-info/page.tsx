"use client";
import Logo from "@/components/logo";
import Menu from "@/components/menu";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Get_MY_PROFILE } from "@/graphql/mutations";
import { useQuery } from "@apollo/client";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { Bell, ChevronDown, CircleHelp, Search, Settings } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const menu = [
    {
        key: 1,
        label: "Home",
        link: "/home"
    },
    {
        key: 2,
        label: "My info",
        link: "/my-info"
    },
    {
        key: 3,
        label: "People",
        link: "/people"
    },
    {
        key: 4,
        label: "Hiring",
        link: "/hiring"
    },
    {
        key: 5,
        label: "Reports",
        link: "/reports"
    },
    {
        key: 6,
        label: "Files",
        link: "/files"
    },

]

type Checked = DropdownMenuCheckboxItemProps["checked"]

const MyInfo = () => {

    const { data } = useQuery(Get_MY_PROFILE);

    const form = useForm();
    
    const [get, setGet] = useState<Checked>(false);
    const [post, setPost] = useState<Checked>(false);
    const [patch, setPatch] = useState<Checked>(false);
    const [remove, setRemove] = useState<Checked>(false);

    return (
        <>
            <header className="flex gap-8 px-6 items-end justify-between">
                <Logo className="pt-8 pb-[30px]">HarmonyHR</Logo>

                <div>
                    <Menu list={menu} initialLink={2} />
                </div>

                <Form >
                    <FormField name="search" control={form.control} render={() => (
                        <Label className="relative max-w-[395px] w-full pb-4">
                            <span className="absolute top-2 left-4">
                                <Search />
                            </span>
                            <Input className="rounded-xl inline-block py-2 pr-4 pl-12 w-full" placeholder="Serach" type="text" />
                        </Label>
                    )} />
                </Form>

                <div className="flex gap-6 items-center pb-4">
                    <Button className="shadow-none">
                        <Settings />
                    </Button>

                    <Button className="shadow-none">
                        <CircleHelp />
                    </Button>

                    <Button className="shadow-none">
                        <Bell />
                    </Button>

                    <div className="w-9 h-9 overflow-hidden rounded-full bg-gray-400">
                        <img src={data?.myProfile?.avatar} alt={data?.myProfile?.name} />
                    </div>
                </div>
            </header>

            <section className="bg-[#dae6f2]">
                <div className="max-w-[1350px] px-4 pt-[34px] mx-auto">
                    <div className="flex gap-16">
                        <div className="w-[150px] h-[150px] rounded-full overflow-hidden bg-gray-400">
                            <img src={data?.myProfile?.avatar} alt={data?.myProfile?.name} />
                        </div>

                        <div className="space-y-8 flex-grow">

                            <div className="flex justify-between">
                                <h2 className="text-[28px] font-semibold">{data?.myProfile?.name ?? "Loading..."}</h2>

                                <div className="flex items-center gap-4">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild className="border-[#7c96b1] rounded-xl p-2">
                                            <Button variant={"outline"} className="space-x-4">
                                                <span>Request a Change</span>
                                                <span><ChevronDown /></span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-[190px] border-[#7c96b1] rounded-xl bg-white">
                                            <DropdownMenuCheckboxItem checked={get} onCheckedChange={setGet}>
                                                Get
                                            </DropdownMenuCheckboxItem>
                                            <DropdownMenuCheckboxItem checked={post} onCheckedChange={setPost}>
                                                Post
                                            </DropdownMenuCheckboxItem>
                                            <DropdownMenuCheckboxItem checked={patch} onCheckedChange={setPatch}>
                                                Patch
                                            </DropdownMenuCheckboxItem>
                                            <DropdownMenuCheckboxItem checked={remove} onCheckedChange={setRemove}>
                                                Delete
                                            </DropdownMenuCheckboxItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>

                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild className="border-[#7c96b1] rounded-xl p-2">
                                            <Button variant={"outline"} className="space-x-4">
                                                <span><Settings /></span>
                                                <span><ChevronDown /></span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="border-[#7c96b1] rounded-xl bg-white">
                                            <DropdownMenuCheckboxItem checked={get} onCheckedChange={setGet}>
                                                Get
                                            </DropdownMenuCheckboxItem>
                                            <DropdownMenuCheckboxItem checked={post} onCheckedChange={setPost}>
                                                Post
                                            </DropdownMenuCheckboxItem>
                                            <DropdownMenuCheckboxItem checked={patch} onCheckedChange={setPatch}>
                                                Patch
                                            </DropdownMenuCheckboxItem>
                                            <DropdownMenuCheckboxItem checked={remove} onCheckedChange={setRemove}>
                                                Delete
                                            </DropdownMenuCheckboxItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MyInfo;