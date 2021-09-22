import React from "react";

export class NavigationBar extends React.Component{
        render() {
            return(
                <div>
                    <ul>
                        <li>Hjem</li>
                        <li>Mine vagter</li>
                        <li>Vagtplan</li>
                        <li>Medarbejdere</li>
                    </ul>
                    <ul>
                        <li>Indstillinger</li>
                        <li>Log ud</li>
                    </ul>
                </div>
            );
        };
}

