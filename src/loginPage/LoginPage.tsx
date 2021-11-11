import Axios from 'axios'
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { authUser } from '../../../shiftplanserver/src/Types'
import { RegisterForm } from '../components/RegisterForm/RegisterView'
import { UserContext } from '../Context/UserContext'

export const LoginPage = () => {
    const history = useHistory()

    const { user, setUser } = useContext(UserContext)
    const [authentication, setAuthentication] = useState({
        username: '',
        password: '',
    })

    const doLogin = async () => {
        const result = (
            await Axios.post<
                | { success: true; data: { user: { id: string; role: boolean } } }
                | { success: false; errorMessage: string }
            >('http://localhost:8080/login', authentication, { withCredentials: true })
        ).data

        if (result.success) {
            const formatUser: authUser = { id: result.data.user.id, role: result.data.user.role, loggedOn: true }
            setUser(formatUser)
            console.log('Loggin user data' + user.id, user.role, user.loggedOn)
            history.push('/')
        } else {
            //@ts-ignore
            alert(result.errorMessage)
        }
    }

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
                            onChange={e => setAuthentication({ ...authentication, username: e.target.value })}
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
                            onChange={e => setAuthentication({ ...authentication, password: e.target.value })}
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
                            onClick={() => doLogin()}
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
