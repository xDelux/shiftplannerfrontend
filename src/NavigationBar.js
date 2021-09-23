import React from "react";

export class NavigationBar extends React.Component{
        render() {
            return(
                <div class="relative flex flex-col h-screen w-auto bg-primary overflow-visible">
                    <ul class="text-white">
                        <li>Hjem</li>
                        <li>Mine vagter</li>
                        <li>Vagtplan</li>
                        <li>Medarbejdere</li>
                    </ul>
                    <ul class="text-white">
                        <li>Indstillinger</li>
                        <li>Log ud</li>
                    </ul>
                </div>
            );
        };
}

