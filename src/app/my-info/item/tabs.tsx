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
    defaultValue?: string
}

const TabHeader = ({ list, defaultValue }: { list: Array<ITabsList>, defaultValue: string | undefined }) => {
    const [activeTab, setActiveTab] = useState<string | undefined>(defaultValue)

    return list.map(({ value, trigger }: ITabsList, index: number) => {

        return (
            <TabsTrigger onClick={() => setActiveTab(value)} style={activeTab === value ? {
                background: "white",
                padding: 17,
                borderRadius: "8px 8px 0 0",
                boxShadow: "none"
            } : { padding: 17 }} key={index} value={value} >{trigger}</TabsTrigger>
        )
    })
}

export const TabsData = ({ className, list, defaultValue }: ITabsData) => {


    const tabContent = list.map(({ content, value }: ITabsList, index: number) => (
        <TabsContent key={index} value={value} className="px-5 py-10 bg-white rounded-b-xl">
            {content}
        </TabsContent>
    ));

    return <Tabs defaultValue={defaultValue} className={className}>
        <TabsList className="flex items-center gap-5">
            <TabHeader list={list} defaultValue={defaultValue} />
        </TabsList>
        {tabContent}
    </Tabs>
}