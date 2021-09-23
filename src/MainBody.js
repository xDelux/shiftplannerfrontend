import React from 'react';
import {Calendar} from "./components/calendar_Components/Calendar_View_Month";

export class MainBody extends React.Component {
    render() {
        return(
            <body class="flex flex grow w-screen bg-secondary">
                <Calendar />
            </body>
        )
    }
}