import { FileClock, MountainSnow, Plus } from "lucide-react"

export const TimeOffTabContent = () => {
    return <>
        <div className="flex gap-3 items-center pb-4 border-b-2 border-b-[#7c96b1] ">
            <FileClock color="#204973" />

            <h2 className="text-[#204973] text-xl font-medium">Time Off</h2>
        </div>

        <div className="flex items-center justify-around gap-5 py-6">
            <div className="w-[265px] space-y-4 text-center">
                <div className=" bg-[#f0f3f8] py-4 rounded-xl  space-y-2">
                    <p className="font-semibold text-xl">Sick</p>
                    <div className="flex justify-center items-center">
                        <Plus color="#1c3144" size={30} />

                        <p className="font-semibold text-3xl text-[#1c3144]">
                            3
                        </p>
                    </div>
                    <p className="font-semibold text-sm">Days Available</p>
                    <p className="font-semibold text-sm text-[#7c96b1]">1 dey scheduled</p>
                </div>

                <p className="font-semibold text-sm text-[#7c96b1]">Sick Full-Time</p>
            </div>

            <div className="w-[265px] space-y-4 text-center">
                <div className=" bg-[#f0f3f8] py-8 rounded-xl min-h-[160px]  space-y-2">
                    <p className="font-semibold text-xl">Annual Leave </p>
                    <div className="flex justify-center items-center">
                        <MountainSnow color="#1c3144" size={30} />

                        <p className="font-semibold text-3xl text-[#1c3144]">
                            10.3
                        </p>
                    </div>
                    <p className="font-semibold text-sm">Days Available</p>
                </div>

                <p className="font-semibold text-sm text-[#7c96b1]">Holiday Full-Time</p>
            </div>

            <div className="w-[265px] space-y-4 text-center">
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
    </>
}