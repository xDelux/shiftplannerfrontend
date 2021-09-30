import React from "react";

export class NavigationBar extends React.Component{
        render() {
            return(
                <div class="flex flex-col w-auto bg-primary text-white px-6 text-lg pt-5">
                    <ul class="">
                        <li onClick="">Hjem</li>
                        <li>Mine vagter</li>
                        <li>Vagtplan</li>
                        <li>Medarbejdere</li>
                    </ul>
                    <div class="flex flex-grow"></div>
                    <ul class="my-7 text-center">
                        <li>Indstillinger</li>
                        <li>Log ud</li>
                    </ul>
                </div>
            );
        };
}

