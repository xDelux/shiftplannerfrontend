import React from 'react';
import {CustomContainer} from './CustomContainer'

export class MainBody extends React.Component {
    render() {
        return(
            <body class="flex flex grow w-screen bg-secondary">
                <CustomContainer title="Nyheder" size={"big"}/>
            </body>
        )
    }
}