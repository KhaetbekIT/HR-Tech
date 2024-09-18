import { Button } from "@/components/ui/button"
import { Clock4, FileClock, MountainSnow, Plus } from "lucide-react"
import BigPlusIcon from "./../../../assets/big-plus.svg"
import BigPigIcon from "./../../../assets/big-pig.svg"
import HistoryIcon from "./../../../assets/history.svg"
import MountainSunIcon from "./../../../assets/mountain-sun.svg"
import Image from "next/image"
import { HistoryTable } from "./history-table"

export const TimeOffTabContent = () => {
    return <>
        <div className="flex gap-3 items-center justify-end pb-4 border-b-2 border-b-[#7c96b1] sm:justify-between">
            <div className="hidden sm:flex items-center gap-3">
                <FileClock color="#204973" />

                <h2 className="text-[#204973] text-xl font-medium">Time Off</h2>
            </div>

            <div className="flex gap-2 flex-col md:flex-row md:gap-[30px] items-center">
                <p className="text-sm font-medium">
                    Accrual Level Start Date <span className="text-[#3758ab]">03/09-2020</span>
                </p>

                <Button className="text-sm font-medium border border-black p-2 rounded-[8px] ml-auto">
                    Add Time Off Policy
                </Button>
            </div>
        </div>

        <div className="flex items-center justify-around gap-5 py-6 w-full overflow-x-scroll no-scrollbar">
            <div className="w-[265px] space-y-4 text-center flex-shrink-0">
                <div className=" bg-[#f0f3f8] py-4 rounded-xl  space-y-2">
                    <p className="font-semibold text-xl">Sick</p>
                    <div className="flex justify-center items-center">
                        <Image src={BigPlusIcon} alt="Plus Icon" className="mr-1.5" />

                        <p className="font-semibold text-3xl text-[#1c3144]">
                            3
                        </p>
                    </div>
                    <p className="font-semibold text-sm">Days Available</p>
                    <p className="font-semibold text-sm text-[#7c96b1]">1 dey scheduled</p>
                </div>

                <p className="font-semibold text-sm text-[#7c96b1]">Sick Full-Time</p>
            </div>

            <div className="w-[265px] space-y-4 text-center flex-shrink-0">
                <div className=" bg-[#f0f3f8] py-8 rounded-xl min-h-[160px]  space-y-2">
                    <p className="font-semibold text-xl">Annual Leave </p>
                    <div className="flex justify-center items-center">
                        <Image src={MountainSunIcon} alt="Plus Icon" className="mr-1.5" />

                        <p className="font-semibold text-3xl text-[#1c3144]">
                            10.3
                        </p>
                    </div>
                    <p className="font-semibold text-sm">Days Available</p>
                </div>

                <p className="font-semibold text-sm text-[#7c96b1]">Holiday Full-Time</p>
            </div>

            <div className="w-[265px] space-y-4 text-center flex-shrink-0">
                <div className=" bg-[#f0f3f8] py-8 rounded-xl min-h-[160px]  space-y-2">
                    <p className="font-semibold text-xl">Comp/in Lieu Time</p>
                    <div className="flex justify-center items-center">
                        <FileClock color="#1c3144" size={30} />

                        <p className="font-semibold text-3xl text-[#1c3144]">
                            0
                        </p>
                    </div>
                    <p className="font-semibold text-sm">Human Used(YTD)</p>
                </div>

                <p className="font-semibold text-sm text-[#7c96b1]">Comp/in Lieu Time Flexible Policy</p>
            </div>

        </div>

        <div className="space-y-[24px]">
            <div className="flex items-center gap-2 pb-4 border-b border-b-[#7c96b1]">
                <Clock4 color="#7c96b1" />

                <p className="text-sm font-medium text-[#7c96b1]">Upcoming Time Off</p>
            </div>

            <div className="flex items-center gap-2 pb-4 border-b border-b-[#7c96b1]">
                <Image src={BigPlusIcon} alt="plus-icon" />

                <div className="text-sm font-medium">
                    <p>Jan 27</p>
                    <p>&#x2022; 1 dey of Sick</p>
                </div>
            </div>

            <div className="flex items-center gap-2 pb-4 border-b border-b-[#7c96b1]">
                <Image src={BigPigIcon} alt="plus-icon" />

                <div className="text-sm font-medium">
                    <p>Jul 4</p>
                    <p>Independence Day</p>
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <Image src={HistoryIcon} alt="history" />

                    <p className="text-sm font-medium text-[#7c96b1]">History</p>
                </div>

                <HistoryTable />
            </div>
        </div>
    </>
}