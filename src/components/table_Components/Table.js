import {useTable} from 'react-table'
import React from 'react'
import { useHistory } from 'react-router'

export const EmployeeTable = () => {

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
        = useTable({columns, data}
        )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
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
                    rows.map(row => {
                        // Prepare the row for display
                        prepareRow(row)
                        return (
                            // Apply the row props
                            <tr class="text-center" {...row.getRowProps()}>
                                {// Loop over the rows cells
                                    row.cells.map(cell => {
                                        // Apply the cell props
                                        return (
                                            <td class="p-4 text-center" {...cell.getCellProps()}>
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
        </div>
    );
}