"use client"

import React, { useState } from "react"
import {
    ChevronDownIcon
} from "@radix-ui/react-icons"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
} from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { MoveDown, X } from "lucide-react"

const data: Payment[] = [
    { id: "m5gr84i9", balance: 316, earnedDays: 3, date: "23/05/2024", description: "Accrual for 23/05/2024 to 20/11/2024" },
    { id: "3u1reuv4", balance: 242, date: "23/05/2023", description: "Accrual for 23/05/2024 to 20/11/2024" },
    { id: "derv1ws0", balance: 837, earnedDays: 3, date: "23/05/2022", description: "Accrual for 23/05/2024 to 20/11/2024" },
    { id: "5kma53ae", balance: 874, usedDays: -2, earnedDays: 3, date: "23/05/2021", description: "Accrual for 23/05/2024 to 20/11/2024" },
    { id: "bhqecj4p", balance: 721, usedDays: -6, date: "12/02/2024", description: "Accrual for 23/05/2024 to 20/11/2024" },
]

export type Payment = {
    id: string
    balance: number | bigint
    date: string
    description: string
    usedDays?: number
    earnedDays?: number
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "date",
        header: ({ column }) => (
            <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                Date <MoveDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => <div className="lowercase">{row.getValue("date")}</div>,
    },
    {
        accessorKey: "description",
        header: "Description",
        cell: ({ row }) => <div className="capitalize w-max">{row.getValue("description")}</div>,
    },
    {
        accessorKey: "usedDays",
        header: () => <div className="text-center w-max">Used Days (-)</div>,
        cell: ({ row }) => <div className="text-center">{row.getValue("usedDays") || null}</div>,
    },
    {
        accessorKey: "earnedDays",
        header: () => <div className="text-center w-max">Earned Days (+)</div>,
        cell: ({ row }) => {
            const amount: number | bigint = row.getValue("earnedDays") ?? 0
            const formatted = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount)
            return <div className="text-center">{formatted !== "$NaN" ? formatted : undefined}</div>
        },
    },
    {
        accessorKey: "balance",
        header: () => <div className="text-right">Balance</div>,
        cell: ({ row }) => {
            const amount: number | bigint = row.getValue("balance")
            const formatted = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount)
            return <div className="text-right font-medium">{formatted}</div>
        },
    },
]

const FilterDropdown = ({ label, className, cancel }: { label: string, className?: string, cancel?: boolean }) => (
    <DropdownMenu>
        <DropdownMenuTrigger asChild className={className}>
            <Button className="border border-[#7c96b1] rounded-[8px] shadow-none relative overflow-hidden">
                <span className="pr-3">{label}</span>
                {
                    cancel && <span className="ml-auto inline-flex justify-center items-center w-7 mr-2">
                        <X size={15} />
                    </span>
                }

                <span className="inline-flex justify-center items-center w-[24px] bg-[#dae6f2] absolute top-0 bottom-0 right-0">
                    <ChevronDownIcon />
                </span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-white">
            <DropdownMenuItem>Today</DropdownMenuItem>
            <DropdownMenuItem>Yesterday</DropdownMenuItem>
            <DropdownMenuItem>Week</DropdownMenuItem>
            <DropdownMenuItem>Month</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
)

export function HistoryTable() {
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = useState({})

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    return (
        <div className="w-full">
            <div className="flex items-center py-4 justify-between flex-wrap gap-4">
                <FilterDropdown label="Sick" className="flex-grow" cancel />
                <div className="flex justify-between items-center flex-grow gap-4">
                    <FilterDropdown label="All" cancel />
                    <FilterDropdown label="Balance History" />
                </div>
            </div>
            <Table className="no-scrollbar">
                <TableHeader className="bg-[#dae6f2]">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <TableHead key={header.id}>
                                    {!header.isPlaceholder && flexRender(header.column.columnDef.header, header.getContext())}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody className="border-b-2 border-b-[#7c96b1]">
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow key={row.id} className="border-b-2 border-b-[#7c96b1] hover:bg-[#DAE6F2]">
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}
