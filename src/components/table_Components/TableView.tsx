// @ts-ignore
import { User } from '../../../../shiftplanserver/src/server'
import {useState} from "react";
import {useHistory} from "react-router-dom";
import Axios from "axios";

const TableRow = (user) => {
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

export const TableView = (employees) => {
    const [data, setData] = useState<User[]>([])
    const history = useHistory()

    const getAllUsers = async () => {
        const result = (await Axios.get<User[]>('http://localhost:8080/getAllUsers', { withCredentials: true })).data

        setData(result)
        console.log(result)

    return (
        employees.map(i => {
            return <TableRow user={i} />
            })
    )

}