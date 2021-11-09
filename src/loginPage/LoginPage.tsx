import Button from '@material-tailwind/react/Button'
import Popover from '@material-tailwind/react/Popover'
import PopoverBody from '@material-tailwind/react/PopoverBody'
import PopoverContainer from '@material-tailwind/react/PopoverContainer'
import PopoverHeader from '@material-tailwind/react/PopoverHeader'
import Axios from 'axios'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router'
//@ts-ignore
import { authUser } from '../../../shiftplanserver/src/server'
import { UserContext } from '../Context/UserContext'
import { RegisterForm } from '../components/RegisterForm/RegisterView'

export const LoginPage = () => {
    //@ts-ignore
    const { user } = useContext(UserContext)

    const [data, SetData] = useState<authUser[]>([])

    const getFruit = async () => {
        const result = (await Axios.get<authUser[]>('http://localhost:8080/fruit', { withCredentials: true })).data

        SetData(result)
        console.log(result)
    }

    useEffect(() => {
        getFruit()
    }, [])

    

    const history = useHistory()
    return (
        <div className="flex bg-secondary h-screen w-screen">
            <div className="w-auto h-auto bg-loginColor mx-auto my-auto rounded-t-xl rounded-b-xl">
                <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                    <div className="mb-8 text-4xl mx-auto text-white">Shiftplanner</div>
                    <div className="mb-4">
                        <label className="block mx-auto text-white text-sm mb-2" htmlFor="username">
                            Username:
                        </label>
                        <input
                            className="w-full mx-auto bg-secondary border-borderColor border-opacity-100 appearance-none border-2 rounded p-2 text-grey-darker md:text-white"
                            id="username"
                            type="text"
                            placeholder="Username"
                        />
                    </div>

                    <div className="mb-2">
                        <label className="block mx-auto text-white text-sm mb-2" htmlFor="password">
                            Password:
                        </label>
                        <input
                            className="w-full mx-auto bg-secondary border-borderColor border-opacity-100 appearance-none border-2 rounded p-2 text-grey-darker md:text-white"
                            id="password"
                            type="password"
                            placeholder="**********"
                        />
                    </div>
                    <div className="mb-3 flex justify-between">
                        <p className="text-white text-xs underline">Forgot password?</p>
                        <RegisterForm> Register </RegisterForm>
                        
                    </div>

                    <div className="mb-3">
                        <button className="flex rounded-lg bg-facebookColor text-white pr-2 py-2 m-auto w-52 hover:bg-hoverEffect">
                            <img
                                className="rounded-full object-scale-down h-6 w-10"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Facebook_circle_pictogram.svg/1200px-Facebook_circle_pictogram.svg.png"
                            />
                            Login with Facebook
                        </button>
                    </div>
                    <div className="mb-3">
                        <button
                            className="flex rounded-lg bg-googleColor text-black pr-2 py-2 m-auto w-52 hover:bg-googleHover hover:text-white"
                            onClick={() => console.log(user.id + user.role)}
                        >
                            <img
                                className="rounded-full object-scale-down h-6 w-10"
                                src="https://img.icons8.com/color/48/000000/google-logo.png"
                            />
                            Login with Google
                        </button>
                    </div>
                    <div className="mt-8 divide-y divide-yellow-500">
                        <button
                            className="flex rounded-lg bg-borderColor pr-2 py-2 m-auto w-52 hover:bg-hoverEffect"
                            onClick={() => history.push('/')}
                        >
                            <p className="flex m-auto text-white">Sign In</p>
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex "></div>
        </div>
    )
}
