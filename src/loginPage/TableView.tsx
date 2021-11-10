// @ts-ignore
import { User } from '../../../shiftplanserver/src/server'

export const TableView = (employees) => {
    const TableRow = (User) => {
        <div>
            <ul>
                <li><img src={User.avatar}/></li>
                <li>{User.firstname}</li>
                <li>{User.lastname}</li>
                <li>{User.email}</li>
                <li>{User.phone}</li>
                <li>{User.birthday}</li>
                <li>{User.createdDate}</li>
            </ul>
        </div>
    }
    return (
        <div>
        {

        }
        </div>
    )
}