
const feedBox = (user) => {
    return(
        <div>
            <ul className="flex flex-row">

                <li>{user.firstname}</li>
                <li>{user.lastname}</li>
                <li>{user.email}</li>
                <li>{user.birthday}</li>

            </ul>
        </div>)
}

export const Home = () => {

    return(
    <div className="flex flex-row flex-grow m-5 transition ">
        <div className="w-8/12 m-5 rounded-2xl bg-lightSecondary dark:bg-primary duration-500 ease-in-out">
            <h1 className="text-4xl text-white p-4 border-b-2 border-lightPrimary dark:border-white">Nyheder</h1>
            <feedbox/>
        </div>
        <div className="w-4/12 flex flex-col flex-grow m-5 gap-y-12 ">
            <div className="flex flex-col flex-grow rounded-2xl bg-lightSecondary dark:bg-primary duration-500 ease-in-out">
                <h1 className="h-auto text-2xl text-white p-4 border-b-2 border-lightPrimary dark:border-white">Mine vagter</h1>
                <div></div>
            </div>
            <div className="flex flex-col flex-grow rounded-2xl bg-lightSecondary dark:bg-primary duration-500 ease-in-out">
                <h1 className="text-2xl text-white p-4 border-b-2 border-lightPrimary dark:border-white" >Ledige vagter</h1>
                <div></div>
            </div>
        </div>
    </div>
)}
