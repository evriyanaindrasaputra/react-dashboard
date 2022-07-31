import React from 'react'
import { ColumnDef, flexRender, getCoreRowModel, useReactTable, getPaginationRowModel, getSortedRowModel, SortingState }
  from '@tanstack/react-table'
import { useQuery } from '@tanstack/react-query'
import { getListCustomer } from '~/lib/service'
import { Customer } from '~/types/customer'

const TableCustomer: React.FC = () => {
  const columns = React.useMemo<ColumnDef<Customer>[]>(
    () => [

      {
        accessorKey: 'name',
        cell: info => info.getValue(),
        footer: props => props.column.id,
      },
      {
        accessorKey: 'address',
        cell: info => info.getValue(),
        footer: props => props.column.id,
      },
      {
        accessorKey: 'country',
        cell: info => info.getValue(),
        footer: props => props.column.id,
      },
      {
        accessorKey: 'phone_number',
        cell: info => info.getValue(),
        footer: props => props.column.id,
      },
      {
        accessorKey: 'job_title',
        cell: info => info.getValue(),
        footer: props => props.column.id,
      },
      // {
      //   id: 'Actions',
      //   // @ts-ignore
      //   cell: props => <ButtonActions idSlug={props.row.original.id} page={pageIndex} limit={pageSize} />,
      // }
    ],
    []
  )
  const [sorting, setSorting] = React.useState<SortingState>([])
  const { data, isLoading } = useQuery(["customer"], getListCustomer)

  const table = useReactTable({
    data: data?.data ?? [],
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })
  return (
    <div className='relative max-w-6xl w-full rounded p-2 mx-auto overflow-x-auto'>
      <table className='w-full text-sm text-left text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className='px-6 py-3'>
                  {header.isPlaceholder ? null : (
                    <div
                      {...{
                        className: header.column.getCanSort()
                          ? 'cursor-pointer select-none'
                          : '',
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: ' 🔼',
                        desc: ' 🔽',
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table
            .getRowModel()
            .rows.slice(0, table.getState().pagination.pageSize)
            .map(row => {
              return (
                <tr key={row.id} className='border-b odd:bg-white even:bg-gray-50'>
                  {row.getVisibleCells().map(cell => {
                    return (
                      <td key={cell.id} className='px-6 py-4 break-words'>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
        </tbody>
      </table>
      <div className="h-2" />
      <div className="flex items-center gap-2">
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
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              table.setPageIndex(page)
            }}
            className="border p-1 rounded w-16"
          />
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
      <pre>{JSON.stringify(sorting, null, 2)}</pre>
    </div>
  )
}

export default TableCustomer
