
public const settingsButton = (title) => {
    return(
        <button className="w-44 px-6 py-1.5 bg-darkgrey border-2 border-bg-lightSecondary text-2xl font-bold text hover:bg-opacity-80">{title}</button>
    )
}


export const Settings = () => {

    return (
        <div className="flex flex-row flex-wrap">
            <ul className="flex flex-col ml-5 mt-5 p-2 h-auto bg-lightgrey shadow-lg gap-y-10">
                <li><settingsButton title="mineboller klør"/></li>
                <li><button className="w-44 px-6 py-1.5 bg-darkgrey border-2 border-bg-lightSecondary text-2xl font-bold text hover:bg-opacity-80">Settings 2</button></li>
                <li><button className="w-44 px-6 py-1.5 bg-darkgrey border-2 border-bg-lightSecondary text-2xl font-bold text hover:bg-opacity-80">Settings 3</button></li>
                <li><button className="w-44 px-6 py-1.5 bg-darkgrey border-2 border-bg-lightSecondary text-2xl font-bold text hover:bg-opacity-80">Settings 4</button></li>
                <li><button className="w-44 px-6 py-1.5 bg-darkgrey border-2 border-bg-lightSecondary text-2xl font-bold text hover:bg-opacity-80">Settings 5</button></li>
                <li><button className="w-44 px-6 py-1.5 bg-darkgrey border-2 border-bg-lightSecondary text-2xl font-bold text hover:bg-opacity-80">Settings 6</button></li>
                <li><button className="w-44 px-6 py-1.5 bg-darkgrey border-2 border-bg-lightSecondary text-2xl font-bold text hover:bg-opacity-80">Settings 7</button></li>
            </ul>
            <div className="w-full mx-5 my-5 mr-5 border-2 border-black rounded-md ">

            </div>
        </div>
    )
}