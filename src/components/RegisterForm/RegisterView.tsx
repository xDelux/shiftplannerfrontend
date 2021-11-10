import Axios from 'axios'
import { useState } from 'react'
import { IRegisterProps } from '../../../../shiftplanserver/src/Types'
import { PopUp } from '../PopUp/PopUp'

export const RegisterForm = props => {
    const [popUp, setPopUp] = useState(false)
    const [formData, setFormData] = useState<IRegisterProps>({
        username: '',
        password: '',
        confirmPassword: '',
        firstname: '',
        lastname: '',
        email: '',
    })

    const doRegister = async () => {
        const result = await Axios.post('http://localhost:8080/register', formData, { withCredentials: true })
        console.log(result)
        return true
    }

    const setPopUpAndClearForm = () => {
        setPopUp(true)
        setFormData({
            username: '',
            password: '',
            confirmPassword: '',
            firstname: '',
            lastname: '',
            email: '',
        })
    }

    const validateInput = props => {}

    const handleChange = event => {
        const value = event.target.value
        setFormData({
            ...formData,
            [event.target.name]: value,
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        setPopUp(false)
        console.log(formData)

        // alert(formData.username + " " + formData.Password)

        doRegister()
    }

    return (
        <div>
            <button className="text-white text-xs underline" onClick={setPopUpAndClearForm}>
                {props.children}
            </button>

            <PopUp trigger={popUp} setTrigger={setPopUp} formtype="Create new account">
                <div className="flex flex-col pt-4 pb-4 justify-center">
                    <div className="flex flex-col space-y-8 justify-center items-center font-bold">
                        <form className="flex flex-col space-y-3 items-center" onSubmit={handleSubmit}>
                            <label className="flex flex-col">
                                Username:
                                <input
                                    type="text"
                                    placeholder="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </label>

                            <label className="flex flex-col">
                                Password:
                                <input
                                    type="password"
                                    placeholder="******"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </label>

                            <label className="flex flex-col">
                                Confirm password:
                                <input
                                    type="password"
                                    placeholder="******"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                            </label>

                            <label className="flex flex-col">
                                Firstname:
                                <input
                                    type="text"
                                    placeholder="firstname"
                                    name="firstname"
                                    value={formData.firstname}
                                    onChange={handleChange}
                                />
                            </label>

                            <label className="flex flex-col">
                                Lastname:
                                <input
                                    type="text"
                                    placeholder="lastname"
                                    name="lastname"
                                    value={formData.lastname}
                                    onChange={handleChange}
                                />
                            </label>

                            <label className="flex flex-col">
                                Email:
                                <input
                                    type="Email"
                                    placeholder="email@site.com"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <div id="incorrect"> </div>
                            </label>

                            <button className="bg-sky-200 font-bold text-black text-md w-full " type="submit">
                                {' '}
                                Register{' '}
                            </button>
                        </form>
                    </div>
                </div>
            </PopUp>
        </div>
    )
}
