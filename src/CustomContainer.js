import React from "react";

export class CustomContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {title: ""}
        this.state = {src: ""}
    }


    render() {
        return(
            <div>
                <img src={this.src}/>
                <div>{this.title}</div>
            </div>
        )
    }
}