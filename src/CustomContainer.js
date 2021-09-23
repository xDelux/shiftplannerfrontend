import React from "react";

export class CustomContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {title: ""}
    }

    applyTitle() {

    }

    render() {
        return(
            <div>
                <div>{this.title}</div>
            </div>
        )
    }
}