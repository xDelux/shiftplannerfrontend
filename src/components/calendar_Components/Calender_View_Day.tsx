import React, {useState, useEffect} from "react";
import { addMonths, format, isSameMonth, addDays, startOfWeek, endOfWeek, startOfMonth, endOfMonth, getWeek, getISOWeek, isSameDay  } from "date-fns";
import {ShiftComponent} from "./Calender_Shift_Component";
import {Link} from "react-router-dom";
import Axios from 'axios'
// @ts-ignore
import { IFruitData } from './../../ShiftplannerServer/src/server'
export const CalendarDay = () => {

    const [currentDay, setCurrentDay] = useState(new Date());
    
    

    const [shifts, setShifts] = useState([
        {"name":"Shania", "timeStart":"08:00", "timeEnd":"16:00"},
        {"name":"Mikkel", "timeStart":"10:00", "timeEnd":"14:00"},
        {"name":"Mads", "timeStart":"??:??", "timeEnd":"??:??"},
        {"name":"Jacob", "timeStart":"09:00", "timeEnd":"16:00"}])

    const [data, SetData] = useState<IFruitData[]>([])

    const getFruit = async () => {
        const result = (await Axios.get<IFruitData[]>('http://localhost:8080/fruit', { withCredentials: true })).data

        SetData(result)
        console.log(result)
    }

    useEffect(() => {
        getFruit()
    }, [])

   
    const renderFruit = (params) => {
        
        return (
            <div>
                
            </div>
        )
    }
    
    
    
    
    
    

    function nextDay() {
        setCurrentDay(addDays(currentDay, +1))
    }
    function prevDay() {
        setCurrentDay(addDays(currentDay, -1))
    }

    const renderHeader = () => {
        const dateFormat = "B..BBB";
        return (
            <div className="header bg-gray-600">
                <div className="icon cursor-pointer ml-5" onClick={prevDay}> chevron_left </div>
                <span className=""> {format(currentDay, dateFormat)} </span>
                <div className="icon cursor-pointer" onClick={nextDay}> chevron_right </div>
            </div>
        );
    }


    
    const renderCells = () => {
        let columns = [] as any;

        for (let i = 4; i <= 27; i++) {
            if(i != 4) {
                columns.push(
                    <div className="border-l-2 border-black text-center text-black text-sm sm:text-base font-bold p-1 sm:p-2"> {i%24}:00 </div>
                )
            } else {
                columns.push(
                    <div className="text-center text-black text-sm sm:text-base font-bold p-1 sm:p-2"> {i%24}:00 </div>
                )
            }
            
        }

        return (
            <div className="flex flex-col flex-none max-h-screen mx-5 mt-5 bg-sky-100 ">
                <div className="grid grid-cols-24 overflow-y-auto overflow-x-hidden gap-x-0 gap-y-2 pb-1 grid-flow-row border border-black bg-darkgrey">
                    {columns}
                    
                    {shifts.map((user, index) => {
                        if(index%2 == 0) {
                            return <div className="flex rounded-lg ml-1 border-2 border-black col-start-1 col-end-8 p-3 bg-amber-200 text-black font-bold justify-center" key={user.name}> {user.name} {index} </div> 
                        } else {
                            return <div className="flex rounded-lg ml-1 border-2 border-black col-start-4 col-end-12 p-3 bg-sky-200 text-black font-bold justify-center" key={user.name}> {user.name} {index} </div>
                        }
                    })}
                
                </div>
            </div>

        )
    }

    return (
        <div className="flex flex-col flex-auto bg-white">
            {renderHeader()}
            {renderCells()}
        </div>
    );
}