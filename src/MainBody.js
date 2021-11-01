import React from 'react';
//import {Calendar} from "./components/calendar_Components/Calendar_View_Month";
import {TableComponent} from "./components/table_Components/Table"
//import { useTable } from "react-table";

export class MainBody extends React.Component {
    render() {
        return(
            /*<body class="flex flex grow w-screen bg-secondary">
                <Calendar />

            </body>*/

            <body className="flex flex grow w-screen bg-secondary">
                <TableComponent/>
            </body>
        )
    }
}