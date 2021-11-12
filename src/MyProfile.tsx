import Axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { EmployeeDisplay } from '../../shiftplanserver/src/Types'
import { UserContext } from './Context/UserContext'

export const MyProfile = () => {
    const { user, setUser } = useContext(UserContext)
    const [data, setData] = useState<EmployeeDisplay | undefined>()
    const history = useHistory()

    const getOneUser = async () => {
        const result = (
            await Axios.post<EmployeeDisplay>('http://localhost:8080/api/getOneUser', user, { withCredentials: true })
        ).data

        setData(result)
        console.log(result)
    }

    useEffect(() => {
        getOneUser()
    }, [])

    return (
        <div>
            {data && (
                <div className="mt-10 ml-10">
                    <div className="flex flex-row">
                        <img
                            className="rounded-full"
                            src="https://i.pinimg.com/280x280_RS/52/26/24/5226243d63b89badf9a7eaec2b4dc902.jpg"
                        />
                        <div className="ml-4 place-self-center">
                            <h1 className=" text-5xl text-black">{data.firstname + ' ' + data.lastname}</h1>
                            <h2>{data.role}</h2>
                            <h4>id</h4>
                        </div>
                    </div>

                    <div className="ml-5 mt-5">
                        <p>Brugernavn</p>
                        <h3 className=" text-3xl text-black">{data.username}</h3>
                        <p>E-mail</p>
                        <h3 className=" text-3xl text-black">{data.email}</h3>
                        <p>Fødselsdag</p>
                        <h3 className=" text-3xl text-black">{data.birthday}</h3>
                        <p>Telefon</p>
                        <h3 className=" text-3xl text-black">{data.phone} </h3>
                        <p>Adresse</p>
                        <h3 className=" text-3xl text-black">{data.role}</h3>
                        <p>Oprettet</p>
                        <h3 className=" text-3xl text-black">{data.createdDate}</h3>
                        <p>Kodeord</p>
                        <h3 className=" text-3xl text-black">{data.password}</h3>

                        <button className="mt-5 px-4 py-1.5 rounded-lg border-2 border-lightPrimary bg-lightSecondary font-bold text-black text-2xl hover:bg-opacity-80">
                            Redigér
                        </button>
                    </div>
                </div>
            )}
            {!data && <div>Loading Data</div>}
        </div>
    )
}
