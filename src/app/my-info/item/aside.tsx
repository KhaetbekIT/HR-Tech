import classNames from "classnames"
import { CircleUserRound, Clock, Globe, Hash, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import LinkedinIcon from "./../../../assets/linkedin.svg"
import FacebookIcon from "./../../../assets/facebook.svg"
import TwitterIcon from "./../../../assets/twitter.svg"
import OperationsIcon from "./../../../assets/operations.svg"
import Image from "next/image"

interface IAside {
    className?: string
}

export const TimeOffAside = ({ className }: IAside) => {
    return <aside className={classNames("space-y-4", className)}>
        <ul className="bg-[#fcfcfe] rounded-2xl p-6 space-y-4">
            <li >
                <Link className="inline-flex gap-2 items-center" href={"tel:+07911654321"}>
                    <Phone />

                    <p className="text-sm font-medium">07911 654321</p>
                </Link>
            </li>

            <li >
                <Link className="inline-flex gap-2 items-center" href={"mailto:avd.yana@videorollnet"}>
                    <Mail />

                    <p className="text-sm font-medium">avd.yana@videorollnet</p>
                </Link>
            </li>

            <li className="flex items-center gap-3.5">
                <Link href={"https://www.linkedin.com/"} target="_blank">
                    <Image src={LinkedinIcon} alt="Linkedin" />
                </Link>

                <Link href={"https://www.facebook.com/"} target="_blank">
                    <Image src={FacebookIcon} alt="Facebook" />
                </Link>

                <Link href={"https://www.twitter.com/"} target="_blank">
                    <Image src={TwitterIcon} alt="Twitter | X" />
                </Link>
            </li>
        </ul>

        <div className="bg-[#fcfcfe] rounded-2xl p-6 space-y-4">
            <p className="text-sm font-medium">Hire Date</p>

            <ul className="space-y-2">
                <li >
                    <p className="text-sm font-medium">Sep. 3,2020</p>
                </li>

                <li >
                    <p className="text-sm font-medium">3y - 9m - 20d</p>
                </li>
            </ul>
        </div>

        <ul className="bg-[#fcfcfe] rounded-2xl p-6 space-y-2">
            <li className="flex gap-2 items-center">
                <Hash />

                <p className="text-sm font-medium">5</p>
            </li>

            <li className="flex gap-2 items-center">
                <Clock />

                <p className="text-sm font-medium">Full-Time</p>
            </li>

            <li className="flex gap-2 items-center">
                <Image className="w-6" src={OperationsIcon} alt="Operations Icon" />

                <p className="text-sm font-medium">Operations</p>
            </li>

            <li className="flex gap-2 items-center">
                <Globe />

                <p className="text-sm font-medium">Europe</p>
            </li>

            <li className="flex gap-2 items-center">
                <MapPin />

                <p className="text-sm font-medium">London, UK</p>
            </li>
        </ul>

        <div className="bg-[#fcfcfe] rounded-2xl p-6 space-y-4">
            <p className="text-sm font-medium">Direct Reports</p>

            <ul className="space-y-2">
                <li className="flex gap-2 items-center">
                    <CircleUserRound />

                    <p className="text-sm font-medium">Shane</p>
                </li>
                <li className="flex gap-2 items-center">
                    <CircleUserRound />

                    <p className="text-sm font-medium">Nathan</p>
                </li>
                <li className="flex gap-2 items-center">
                    <CircleUserRound />

                    <p className="text-sm font-medium">Mitchell</p>
                </li>
                <li className="flex gap-2 items-center">
                    <CircleUserRound />

                    <p className="text-sm font-medium">Philip</p>
                </li>
                <li className="flex gap-2 items-center">
                    <Image className="w-6" src={OperationsIcon} alt="More Icon" />

                    <p className="text-sm font-medium">More...</p>
                </li>
            </ul>
        </div>

    </aside>
}