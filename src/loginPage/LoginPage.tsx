import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
// @ts-ignore
import { IFruitData } from './../../../ShiftplannerServer/src/server'

export const LoginPage = () => {
    const [data, SetData] = useState<IFruitData[]>([])

    const getFruit = async () => {
        const result = (await Axios.get<IFruitData[]>('http://localhost:8080/fruit', { withCredentials: true })).data

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
                    <div className="mb-8 text-4xl mx-auto text-white font-sans ">Shiftplanner</div>
                    <div className="mb-4">
                        <label className="block mx-auto text-white text-sm mb-2" htmlFor="username">
                            Username:
                        </label>
                            <input
                                className="w-auto mx-auto bg-secondary border-borderColor border-opacity-100 appearance-none border-2 rounded p-2 text-grey-darker"
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
                            className="w-auto mx-auto bg-secondary border-borderColor border-opacity-100 appearance-none border-2 rounded p-2 text-grey-darker"
                            id="password"
                            type="text"
                            placeholder="**********"
                        />
                    </div>
                    <div className="mb-3">
                        <p className="block text-white text-xs underline mb-2">Forgot password?</p>
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
                        <button className="flex rounded-lg bg-googleColor text-black pr-2 py-2 m-auto w-52 hover:bg-googleHover hover:text-white">
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
