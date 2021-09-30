import React from 'react';
import {NavigationBar} from "./NavigationBar";
import {Calendar} from "./components/calendar_Components/Calendar_View_Month";
import {Home} from "./Home"

export class MainBody extends React.Component {

    changeBody() {

    }

    render() {
        return(
            <body class="flex flex grow w-screen bg-secondary">
                <Home />
            </body>
        )
    }
}