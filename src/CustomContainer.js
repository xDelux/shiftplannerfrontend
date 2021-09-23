import React from "react";

export class CustomContainer extends React.Component {
    render() {
        let dimensions;
        switch (this.props.size) {
            case "big" :
                dimensions = "h-64 w-44"
                break;
            case "feed" :
                dimensions = "h-12 w-36"
                break;
            case "small" :
                dimensions = "h-24 w-20"
                break;
            default : break;
        }

        return(
            <div class={this.dimensions + " text-white"}>
                <div>{this.props.title}</div>
                <div>{this.props.size}</div>
            </div>
        )
    }
}