import React from "react";

import {
    flexRender,
    getCoreRowModel,
    useReactTable,
  } from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

const columns = [
    {
      accessorKey: "courseName",
      header: "Course Name",
    },
    {
      accessorKey: "termTaken",
      header: "Term Taken",
    },
    {
      accessorKey: "gradePointsReceived",
      header: "Grade Received",
    },
  ]

const courses = [
    {
        courseName: "Course A",
        termTaken: "Fall 2000",
        gradePointsReceived: 3
    },
    {
        courseName: "Course B",
        termTaken: "Fall 2000",
        gradePointsReceived: 4
    },
    {
        courseName: "Course C",
        termTaken: "Fall 2000",
        gradePointsReceived: 4
    },
    {
        courseName: "Course D",
        termTaken: "Fall 2000",
        gradePointsReceived: 3
    },
    {
        courseName: "Course E",
        termTaken: "Fall 2000",
        gradePointsReceived: 4
    },
    {
        courseName: "Course F",
        termTaken: "Fall 2000",
        gradePointsReceived: 4
    }
]


const CourseList = () => {
    
    const table = useReactTable({
        data: courses,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <Table>
            <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                        return (
                        <TableHead key={header.id}>
                            {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                                )}
                        </TableHead>
                        )
                    })}
                    </TableRow>
                ))}
            </TableHeader>
            <TableBody>
                {
                    table.getRowModel().rows.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                              key={row.id}
                            >
                                {
                                    row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))
                                }
                            </TableRow>
                    ))) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No courses.
                            </TableCell>
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
    )

};

export default CourseList;