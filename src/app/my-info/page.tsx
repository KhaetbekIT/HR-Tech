"use client";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Get_MY_PROFILE } from "@/graphql/mutations";
import { useQuery } from "@apollo/client";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { ChevronDown, EllipsisVertical, Settings } from "lucide-react";
import { useState } from "react";
import { TabsData } from "./item/tabs";
import { TimeOffAside } from "./item/aside";
import { TimeOffTabContent } from "./item/time-off";
import { PrivateRoute } from "@/components/PrivateRoute";
import { Header } from "@/layout/header";

export const menu = [
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

const tabs = [
    {
        trigger: "Personal",
        content: "Personal",
        value: "personal"
    },
    {
        trigger: "Job",
        content: "Job",
        value: "job"
    },
    {
        trigger: "Time off",
        content: <TimeOffTabContent />,
        value: "time-off"
    },
    {
        trigger: "Emergency",
        content: "Emergency",
        value: "emergency"
    },
    {
        trigger: "Documents",
        content: "Documents",
        value: "documents"
    },
    {
        trigger: "Notes",
        content: "Notes",
        value: "notes"
    },
    {
        trigger: "Benefits",
        content: "Benefits",
        value: "benefits"
    },
    {
        trigger: "Training",
        content: "Training",
        value: "training"
    },
    {
        trigger: "Assets",
        content: "Assets",
        value: "assets"
    },
    {
        trigger: <div className="flex items-center gap-2.5">
            <span>More</span>
            <span><ChevronDown /></span>
        </div>,
        content: "More",
        value: "more"
    }

]

type Checked = DropdownMenuCheckboxItemProps["checked"]

const MyInfo = () => {

    const { data } = useQuery(Get_MY_PROFILE);

    const [get, setGet] = useState<Checked>(false);
    const [post, setPost] = useState<Checked>(false);
    const [patch, setPatch] = useState<Checked>(false);
    const [remove, setRemove] = useState<Checked>(false);

    return (
        <PrivateRoute>
            <Header data={data} menu={menu} />

            <section className="bg-[#dae6f2]">
                <div className="max-w-[1350px] px-4 mx-auto pt-6 pb-[73px] 2xl:pt-[34px] 2xl:pb-0">
                    <div className="flex gap-[35px]">
                        <div className="max-w-56 w-full">
                            <div className="mx-auto w-full h-full min-w-[60px] max-w-[150px] min-h-[60px] max-h-[150px] rounded-full overflow-hidden bg-gray-400">
                                <img src={data?.myProfile?.avatar} alt={data?.myProfile?.name ?? "User avatar"} />
                            </div>
                        </div>

                        <div className="space-y-8 flex-grow">

                            <div className="flex justify-between">
                                <div className="min-w-[214px] flex-grow sm:flex-grow-0">
                                    <h2 className="text-[28px] font-semibold">{data?.myProfile?.name ?? "Loading..."}</h2>
                                </div>

                                <Button className="shadow-none p-0 sm:hidden">
                                    <EllipsisVertical />
                                </Button>

                                <div className="hidden items-center gap-4 sm:flex">
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

            <section className="py-5 bg-[#f0f3f8]">
                <div className="max-w-[1350px] px-4 mx-auto">
                    <div className="flex gap-5">
                        <TimeOffAside className="hidden w-56 2xl:block" />

                        <TabsData defaultValue="time-off" list={tabs} />
                    </div>
                </div>
            </section>
        </PrivateRoute>
    );
};

export default MyInfo;