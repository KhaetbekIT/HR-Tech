"use client";

import React, { useState } from 'react'
import { Menubar, MenubarMenu, MenubarTrigger } from '../ui/menubar'
import Link from 'next/link'
import classNames from 'classnames';

interface IMenuList {
    key: string | number,
    label: string | React.ReactNode,
    link: string
}

interface IMenu {
    className?: string,
    list: Array<IMenuList> | Array<any>,
    initialLink: number | string
}

const Menu = ({ list, className, initialLink }: IMenu) => {
    const [InitialLink, setInitialLink] = useState<string | number>(initialLink)

    const menuItem = list.map(({ key, label, link }: IMenuList, index) => <MenubarTrigger key={index} className="p-0">
        <Link onClick={() => setInitialLink(key)} href={link} className={classNames("p-4 text-lg rounded-t-[8px]", InitialLink === key ? "bg-[#dae6f2]" : null)}>{label}</Link>
    </MenubarTrigger>)

    return (
        <Menubar className={classNames("border-none shadow-none p-0", className)}>
            <MenubarMenu>
                {menuItem}
            </MenubarMenu>
        </Menubar>
    )
}

export default Menu