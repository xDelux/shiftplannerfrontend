import Axios from 'axios'
import {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
// @ts-ignore
import {User} from '../../shiftplanserver/src/Types'

export const MyProfile = () => {
    const [user, setUser] = useState()

    // const getCurrentUser = async () => {
    //     const result = (
    //         await Axios.get<User>('http://localhost:8080/getUser', { withCredentials: true })
    //     ).data
    //
    //     setUser(result)
    //     console.log(result)
    // }


    return (
        <div>
            <div className="mt-10 ml-10">
                <div className="flex flex-row">
                    <img className="rounded-full"
                         src="https://i.pinimg.com/280x280_RS/52/26/24/5226243d63b89badf9a7eaec2b4dc902.jpg"/>
                    <div className="ml-4 place-self-center">
                        <h1 className=" text-5xl text-black">Shania Hau</h1>
                        <h2>Administrator</h2>
                        <h4>id</h4>
                    </div>
                </div>
                <div className="ml-5 mt-5">
                    <p>Brugernavn</p>
                    <h3 className=" text-3xl text-black">shaniahau</h3>
                    <p>E-mail</p>
                    <h3 className=" text-3xl text-black">shaniahau@gmail.com</h3>
                    <p>Fødselsdag</p>
                    <h3 className=" text-3xl text-black">7/07/1177</h3>
                    <p>Telefon</p>
                    <h3 className=" text-3xl text-black">12345678</h3>
                    <p>Adresse</p>
                    <h3 className=" text-3xl text-black">Homlegade 27, 2610 Rødovre</h3>
                    <p>Oprettet</p>
                    <h3 className=" text-3xl text-black">27/03 - 2019</h3>
                    <p>Kodeord</p>
                    <h3 className=" text-3xl text-black">*************</h3>

                    <button
                        className="mt-5 px-4 py-1.5 text-2xl rounded-lg border-2 border-lightPrimary bg-lightSecondary font-bold text-black  hover:bg-opacity-80">Redigér
                    </button>
                </div>
            </div>
    </div>
    )
}