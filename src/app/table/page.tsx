"use client"

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
  getPaginationRowModel,
} from '@tanstack/react-table'
import { useState } from 'react'

const names = [
  { name: 'TARO', kana: 'タロウ', birth: '1990年1月1日' },
  { name: 'HANAKO', kana: 'ハナコ', birth: '1991年2月2日' },
  { name: 'JIRO', kana: 'ジロウ', birth: '1992年3月3日' },
  { name: 'YUKI', kana: 'ユキ', birth: '1993年4月4日' },
  { name: 'SABURO', kana: 'サブロウ', birth: '1994年5月5日' }
];

const data = Array.from({ length: 27 }, (_, i) => {
  const n = names[i % names.length];
  return {
    id: i + 1,
    name: n.name,
    kana: n.kana,
    birth: n.birth
  };
});

type Person = {
  id: number
  name: string
  kana: string
  birth: string
}

export default function Table() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  })

  const columnHelper = createColumnHelper<Person>()

  const columns = [
    columnHelper.accessor('name', {
      header: '英字',
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('kana', {
      header: '仮名',
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('birth', {
      header: '生年月日',
      cell: info => info.getValue(),
    }),
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
  })

  return (
    <div className="p-2">
      <div className="h-[400px] overflow-auto border border-gray-200">
        <table className="border-collapse w-full">
          <thead className="sticky top-0 bg-white z-10 shadow-[0_2px_2px_-1px_rgba(0,0,0,0.1)]">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id} className="border-r border-gray-200 p-2 bg-gray-50">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="border-b border-r border-gray-200 p-2 bg-white">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={e => {
            table.setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}