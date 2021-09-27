import React, { useState, useEffect } from "react"
import Table from "./Table"
function Employee() {
    const [rowdata, setRowData] = useState([])
    const onAddRowClick = () => {
        setRowData(
            rowdata.concat({ username: "", email: "", gender: "", phone: "" })
        )
    }
    const columns = [
        {
            HeaderColumn: "Name",
            accessor: "username",
            Cell: EditableCell,
        },
        {
            HeaderColumn: "Email",
            accessor: "email",
            Cell: EditableCell,
        },
        {
            HeaderColumn: "Gender",
            accessor: "gender",
            Cell: EditableCell,
        },
        {
            HeaderColumn: "Phone",
            accessor: "phone",
            Cell: EditableCell,
        },
    ]
    return (
        <div className="container mx-auto">
            <button
                onClick={onAddRowClick}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Add Row
            </button>
            <div className="flex justify-center mt-8">
                <Table columns={columns} data={rowdata} />
            </div>
        </div>
    )
}
export default Employee








/*import React from 'react';

export class Employee extends React.Component {

    //Some data to the state
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            employee: [
                { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
                { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
                { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
                { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
            ]
        }
    }

    renderTableData() {
        return this.state.employee.map((employee, index) => {
            const { image, name, bday, titel, tlf, email } = employee //destructuring
            return (
                <tr key={id}>
                    <td>{image}</td>
                    <td>{name}</td>
                    <td>{bday}</td>
                    <td>{titel}</td>
                    <td>{tlf}</td>
                    <td>{email}</td>
                </tr>
            )
        })
    }

    render() {
        return(
            <body class="flex flex grow w-screen bg-lightgrey">

            <div>
                <table id='employee'>
                    <tbody>
                    {this.renderTableData()}
                    </tbody>
                </table>
            </div>
            </body>
        )
    }
}*/