
const SettingsButton = (props) => {
    return(
        <button className="w-56 px-6 py-1.5 text-2xl font-bold text-white rounded-lg border-2 border-lightPrimary dark:border-primary bg-lightSecondary hover:bg-opacity-80 dark:bg-secondary dark:hover:bg-secondary filter dark:hover:brightness-50 shadow-lg transition duration-500 ease-in-out">{props.title}</button>
    )
}

export const Settings = () => {

    return (
        <div className="flex flex-row">
            <ul className="flex flex-col h-full ml-5 p-2 justify-center gap-y-10">
                <li><SettingsButton title='Generelt'/></li>
                <li><SettingsButton title='Kalender'/></li>
                <li><SettingsButton title='Algoritmen'/></li>
                <li><SettingsButton title='Grænseflade'/></li>
                <li><SettingsButton title='Forbindelser'/></li>
                <li><SettingsButton title='Brugerflade'/></li>

            </ul>
            <div className="flex w-full mx-5 my-5 mr-5 border-2 border-lightgrey rounded-md ">

            </div>
        </div>
    )
}