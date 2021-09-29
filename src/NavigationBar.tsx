import React from 'react'

export const NavigationBar = () => {
    return (
        <div className="flex flex-col w-auto bg-primary text-white px-6 text-lg pt-5">
            <ul className="">
                <li>Hjem</li>
                <li>Mine vagter</li>
                <li>Vagtplan</li>
                <li>Medarbejdere</li>
            </ul>
            <div className="flex flex-grow"></div>
            <ul className="my-7 text-center">
                <li>Indstillinger</li>
                <li>Log ud</li>
            </ul>
        </div>
    )
}
