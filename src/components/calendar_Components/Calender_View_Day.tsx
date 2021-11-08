import React, {useState, useEffect} from "react";
import { addMonths, format, isSameMonth, addDays, startOfWeek, endOfWeek, startOfMonth, endOfMonth, getWeek, getISOWeek, isSameDay  } from "date-fns";
import {ShiftComponent} from "./Calender_Shift_Component";
import {Link} from "react-router-dom";

export const CalendarDay = () => {

    const [currentDay, setCurrentDay] = useState(new Date());

    const [shifts, setShifts] = useState([
        {"name":"Shania", "timeStart":"08:00", "timeEnd":"16:00"},
        {"name":"Mikkel", "timeStart":"10:00", "timeEnd":"14:00"},
        {"name":"Mads", "timeStart":"??:??", "timeEnd":"??:??"},
        {"name":"Jacob", "timeStart":"09:00", "timeEnd":"16:00"}])


    const setupColoumns = () => {

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

        for (let i = 1; i <= 24; i++) {
            if(i != 1) {
                columns.push(
                    <div className="border-l-2 text-center text-black text-sm sm:text-base font-bold p-1 sm:p-2"> {i}:00 </div>
                )
            } else if (i == 1) {
                columns.push(
                    <div className="text-center text-black text-sm sm:text-base font-bold p-1 sm:p-2"> {i}:00 </div>
                )
            }
            
        }

        return (
            <div className="flex flex-col flex-none mx-5 mt-5 bg-sky-100 ">
                <div className="grid grid-cols-24 overflow-y-auto gap-x-0 gap-y-4 pb-4 border-black border-2 bg-white">
                    {columns}
                    
                    
                    {shifts.map((user, index) => (
                        <div className="flex col-span-full p-3 bg-amber-200 text-black justify-center" key={user.name}> {user.name} </div>
                    ))}
                            
                </div>
            </div>

        )
    }
        // function renderGrid() {
        //
        //     let columns = [] as any;
        //
        //     let counter = 6;
        //     while (true) {
        //         columns.push(
        //             <div className="text-black font-bold p-3 justify-center"> {counter}:00 </div>
        //         )
        //         if(counter == 24) {
        //             break;
        //         }
        //         counter++;
        //     }
        //
        //
        //     return (
        //         <div className="mx-5 mt-5 flex-grow-1 flex-shrink-1 overflow-x-scroll">
        //             <div className="flex border-2 border-black divide-x-2 divide-black bg-darkgrey ">
        //                     {columns}
        //             </div>
        //             <div className="flex flex-col border-2
        //                 border-black bg-lightgrey">
        //                 <div className="border-2 border-blue-500">
        //                     test
        //                 </div>
        //                 <div className="">
        //                     test
        //                 </div>
        //                 <div className="">
        //                     yoikk
        //                 </div>
        //             </div>
        //         </div>
        //
        //     )
        // }

    return (
        <div className="flex flex-col flex-auto bg-sky-400">
            {renderHeader()}
            {renderCells()}
        </div>
    );
}