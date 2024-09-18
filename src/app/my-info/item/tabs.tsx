"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import React, { useState } from "react"

interface ITabsList {
    value: string,
    content: React.ReactNode,
    trigger: React.ReactNode | string
}

interface ITabsData {
    className?: string,
    list: Array<ITabsList>,
    defaultValue?: string,
    style?: React.CSSProperties
}

interface ITableHeader {
    list: Array<ITabsList>
    defaultValue: string | undefined
}

const TabHeader = ({ list, defaultValue }: ITableHeader) => {
    const [activeTab, setActiveTab] = useState<string | undefined>(defaultValue)

    return list.map(({ value, trigger }: ITabsList, index: number) => {

        return (
            <TabsTrigger className="rounded-[8px]" onClick={() => setActiveTab(value)} style={activeTab === value ? {
                background: "white",
                padding: 17,
                borderRadius: "8px 8px 0 0",
                boxShadow: "none"
            } : { padding: 17 }} key={index} value={value} >{trigger}</TabsTrigger>
        )
    })
}

export const TabsData = ({ list, defaultValue, style }: ITabsData) => {

    const tabContent = list.map(({ content, value }: ITabsList, index: number) => (
        <TabsContent key={index} value={value} className="px-5 py-10 mt-0 bg-white rounded-b-xl">
            {content}
        </TabsContent>
    ));

    return <Tabs defaultValue={defaultValue} className={"2xl:max-w-[1075px] w-full -mt-[75px]"} style={style}>
        <div className="overflow-x-scroll no-scrollbar">
            <TabsList className="items-center gap-5 h-14 overflow-hidden flex-grow">
                <TabHeader list={list} defaultValue={defaultValue} />
            </TabsList>
        </div>
        {tabContent}
    </Tabs>
}