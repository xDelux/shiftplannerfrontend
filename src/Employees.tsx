import {TableView} from "./components/table_Components/TableView";
// @ts-ignore
import { IRegisterProps } from '../../shiftplanserver/src/auth'
import { User } from '../../shiftplanserver/src/Types'
import {useState} from "react";
import {useHistory} from "react-router-dom";
import Axios from "axios";

export const Employees = () => {

    function newEmployee() {
        return(
            <span>
                <button onClick={openFormular}>Manuel oprettelse</button>
                <button onClick={requestEmail}>Mailformular</button>
            </span>
        )
    }

    function requestEmail() {

    }
    function openFormular() {

    }

    return(
        <div>
            <button onClick={newEmployee}>Opret medarbejder</button>
            <TableView employees={User}/>
        </div>
    )
}