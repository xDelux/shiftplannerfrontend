import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { IFruitData } from '../../../ShiftplannerServer/src/server'

export const TestingFruit = () => {
    const [data, setData] = useState<IFruitData[]>([])

    const getFruits = async () => {
        const result = (await Axios.get<IFruitData[]>('http://localhost:8080/fruit', { withCredentials: true })).data

        setData(result)
        console.log(result)
    }

    useEffect(() => {
        getFruits()
    }, [])

    return (
        <table>
            <tr>
                <th>Name</th>
                <th>origin</th>
                <th>price</th>
            </tr>
            {data.map(rowData => (
                <tbody>
                    <tr>
                        <td>{rowData.name}</td>
                        <td>{rowData.origin}</td>
                        <td>{rowData.price}</td>
                    </tr>
                </tbody>
            ))}
        </table>
    )
}
