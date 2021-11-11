import Axios from 'axios'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
// @ts-ignore
import { EmployeeDisplay } from '../../shiftplanserver/src/Types'

export const Employees = () => {
    const [data, setData] = useState<EmployeeDisplay[]>([])
    const history = useHistory()

    const getAllUsers = async () => {
        const result = (
            await Axios.get<EmployeeDisplay[]>('http://localhost:8080/getEmployees', { withCredentials: true })
        ).data

        setData(result)
        console.log(result)
    }

    const getAvatar = (image: Buffer) => {
        if (typeof image === 'undefined') {
            return (
                <img className="object-scale-down h-12 w-full" src="https://freesvg.org/img/abstract-user-flat-4.png" />
            )
        }
        return image
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    return (
        <tbody>
            {data.map(r => (
                <tr>
                    <td>{getAvatar(r.avatar)}</td>
                    <td>{r.firstname}</td>
                    <td>{r.lastname}</td>
                    <td>{r.email}</td>
                    <td>{r.jobposition}</td>
                    <td>{r.phone}</td>
                    <td>{r.birthday}</td>
                </tr>
            ))}
        </tbody>
    )
}
