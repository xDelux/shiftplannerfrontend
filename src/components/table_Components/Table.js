import {useTable, usePagination} from 'react-table'
import React from 'react'
import { useHistory } from 'react-router'
import {Button, PageButton} from "./Button.js";
import { ChevronDoubleLeftIcon, ChevronLeftIcon, ChevronRightIcon, ChevronDoubleRightIcon } from '@heroicons/react/solid'
import Axios from "axios";
//import {columns, data} from "./Data.js"

export const EmployeeTable = () => {

    //backend

    /*const getEmployee = async () => {
        const result = (
            await Axios.get<
            | { success: true; data: { user: { id: string; role: boolean } } }
            | { success: false; errorMessage: string }
            >('http://localhost:8080/login', authentication, { withCredentials: true })
        ).data

        if (result.success) {
            const formatUser: authUser = { id: result.data.user.id, role: result.data.user.role, loggedOn: true }
            setUser(formatUser)
            console.log('Loggin user data' + user.id, user.role, user.loggedOn)
            history.push('/')
        } else {
            //@ts-ignore
            alert(result.errorMessage)
        }
    }*/


    //frontend

    const columns = React.useMemo(
        () => [
            {
                Header: "Image",
                accessor: "image",
                Cell: props => (
                    <img
                        src={props.row.original.image}
                        width={60}
                        alt='Employee'
                    />
                )
            },
            {
                Header: "Name",
                accessor: "username",
            },
            {
                Header: "Birthday",
                accessor: "bday",
            },
            {
                Header: "Job-Position",
                accessor: "jobposition",
            },
            {
                Header: "Phone",
                accessor: "phone",
            },
            {
                Header: "Mail",
                accessor: "mail",
            },
        ],
        []
    )

    const data = React.useMemo(
        () => [
            {
                image:"https://freesvg.org/img/abstract-user-flat-4.png",
                username: 'Brin',
                bday: 26,
                jobposition: 'din mor',
                phone: '12345678',
                mail: ' email@email.com'
            }, {
                image: "https://freesvg.org/img/abstract-user-flat-4.png",
                username: 'Jac',
                bday: 22,
                jobposition: 'din mor',
                phone: '12345678',
                mail: ' email@email.com'
            }, {
                image: "https://freesvg.org/img/abstract-user-flat-4.png",
                username: 'Mik',
                bday: 40,
                jobposition: 'din mor',
                phone: '12345678',
                mail: ' email@email.com'
            }, {
                image: "https://freesvg.org/img/abstract-user-flat-4.png",
                username: 'Stef',
                bday: 30,
                jobposition: 'din mor',
                phone: '12345678',
                mail: ' email@email.com'
            }, {
                image: "https://freesvg.org/img/abstract-user-flat-4.png",
                username: 'Shan',
                bday: 32,
                jobposition: 'din mor',
                phone: '12345678',
                mail: ' email@email.com'
            }, {
                image: "https://freesvg.org/img/abstract-user-flat-4.png",
                username: 'yieks',
                bday: 37,
                jobposition: 'din mor',
                phone: '12345678',
                mail: ' email@email.com'
            },
        ],
        []
    )

    const tableInstance
        = useTable({columns, data},
        usePagination,
        )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,

        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state,
    } = tableInstance


    return (
        <div className="bg-lightgrey px-8 py-8 m-10">
            <p>Tilføj medarbejder</p>
            <p>Fjern medarbejder</p>
                <div className="sm:flex sm:gap-x-2">
                    {headerGroups.map((headerGroup) =>
                        headerGroup.headers.map((column) =>
                            column.Filter ? (
                                <div className="mt-2 sm:mt-0" key={column.id}>
                                    {column.render("Filter")}
                                </div>
                            ) : null
                        )
                    )}
                </div>
            <table class="rounded border border-black" {...getTableProps()}>
                <thead class="bg-darkgrey">
                {// Loop over the header rows
                    headerGroups.map(headerGroup => (
                        // Apply the header row props
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {// Loop over the headers in each row
                                headerGroup.headers.map(column => (
                                    // Apply the header cell props
                                    <th class=" px-24 py-3 text-gray-500" {...column.getHeaderProps()}>
                                        {// Render the header
                                            column.render('Header')}
                                    </th>
                                ))}
                        </tr>
                    ))}
                </thead>
                {/* Apply the table body props */}
                <tbody class="divide-y bg-lightgrey" {...getTableBodyProps()}>
                {// Loop over the table rows
                    // while using page, insted of rows
                    // it shows only the rows for the active page - the amount of rows is a page
                    page.map(row => {
                        // Prepare the row for display
                        prepareRow(row)
                        return (
                            // Apply the row props
                            <tr class="text-center" {...row.getRowProps()}>
                                {// Loop over the rows cells
                                    row.cells.map(cell => {
                                        // Apply the cell props
                                        return (
                                            <td class="p-4" {...cell.getCellProps()}>
                                                {// Render the cell contents
                                                    cell.render('Cell')}
                                            </td>
                                        )
                                    })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>



            {/* Pagination */}
            <div className="py-3 flex items-center justify-between">
                <div className="flex-1 flex justify-between sm:hidden">
                    {/*Is showed then the there is a small window width*/}
                    <Button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</Button>
                    <Button onClick={() => nextPage()} disabled={!canNextPage}>Next</Button>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div className="flex gap-x-2 items-baseline">
                        <span className="text-sm text-gray-700">
                            {/*Page x out of y*/}
                          Page <span className="font-medium">{state.pageIndex + 1}</span> of <span className="font-medium">{pageOptions.length}</span>
                        </span>
                        <label>
                            {/*amount of listed employees*/}
                            <span className="sr-only">Items Per Page</span>
                            <select
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                value={state.pageSize}
                                onChange={e => {
                                    setPageSize(Number(e.target.value))
                                }}
                            >
                                {[5, 10, 20, 50, 100].map(pageSize => (
                                    <option key={pageSize} value={pageSize}>
                                        Show {pageSize}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div>
                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                            <PageButton
                                className="rounded-l-md"
                                onClick={() => gotoPage(0)}
                                disabled={!canPreviousPage}
                            >
                                {/*To the first page - dobbelt left arrow*/}
                                <span className="sr-only">First</span>
                                <ChevronDoubleLeftIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </PageButton>
                            <PageButton
                                onClick={() => previousPage()}
                                disabled={!canPreviousPage}
                            >
                                {/*Go one page back - one left arrow*/}
                                <span className="sr-only">Previous</span>
                                <ChevronLeftIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </PageButton>
                            <PageButton
                                onClick={() => nextPage()}
                                disabled={!canNextPage
                                }>
                                {/*Go one page forward - one right arrow*/}
                                <span className="sr-only">Next</span>
                                <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </PageButton>
                            <PageButton
                                className="rounded-r-md"
                                onClick={() => gotoPage(pageCount - 1)}
                                disabled={!canNextPage}
                            >
                                {/*Go to last page - dobbel right arrow*/}
                                <span className="sr-only">Last</span>
                                <ChevronDoubleRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </PageButton>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}