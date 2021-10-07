import React, {useState, useEffect} from "react";
import { addMonths, format, isSameMonth, addDays, startOfWeek, endOfWeek, startOfMonth, endOfMonth, getWeek, getISOWeek, isSameDay  } from "date-fns";
import {ShiftComponent} from "./Calender_Shift_Component";

export const CalenderDay = () => {

    const [currentDay, setCurrentDay] = useState(new Date());

    const [shifts, setShifts] = useState([
        {"name":"Shania", "timeStart":"08:00", "timeEnd":"16:00", "date":new Date()},
        {"name":"Mikkel", "timeStart":"10:00", "timeEnd":"14:00", "date":addDays(new Date(), -1)},
        {"name":"Mads", "timeStart":"??:??", "timeEnd":"??:??", "date":new Date()},
        {"name":"Jacob", "timeStart":"09:00", "timeEnd":"16:00", "date":addDays(new Date(), -3)}])


    function nextDay() {
        setCurrentDay(addDays(currentDay, +1))
    }
    function prevDay() {
        setCurrentDay(addDays(currentDay, -1))
    }

    const renderHeader = () => {
        const dateFormat = "B..BBB";
        return (
            <div className="header">
                <div className="icon cursor-pointer ml-5" onClick={prevDay}> chevron_left </div>
                <span className=""> {format(currentDay, dateFormat)} </span>
                <div className="icon cursor-pointer" onClick={nextDay}> chevron_right </div>
            </div>
        );
    }

    function renderWorkers(workHours) {
        const dayHours = 24;
        const hour = 0;

        let columns = [];
        let calendarRend = [];

        for (let i = 0; i < dayHours ; i++) {
            columns.push(
                <div className="">

                </div>
            )
            calendarRend.push(
                <div class="flex flex-columns overflow-hidden">

                </div>
            )
        }
        return <div class="body" >{calendarRend}</div>
    }

    function renderCells() {
        let columns = [];


        for (let i = 1; i <= 24; i++) {
            columns.push(
                <div class="span-1 text-black font-bold flex-grow p-5 text-center"> {i}:00 </div>
            )
        }


        return (
            <div class="mx-5 mt-5">
                <div className="flex items-center flex-row flex-nowrap border-2 border-black divide-x-2 divide-black bg-darkgrey">
                    {columns}
                </div>
                <div class="relative flex flex-col border-2 border-black divide-y divide-black bg-lightgrey" >
                    <div className=" text-white font-bold"> 00</div>
                    <div className="left-10 text-white font-bold"> 00</div>


                    {/*<div className="absolute text-white font-bold"> 00</div>*/}
                    {/*<div className="span-1 text-black font-bold flex-grow p-5 text-center"> 00</div>*/}
                </div>
            </div>

            // <div class="grid grid-cols-24 gap-1 place-items-stretch content-start bg-gray-100">
            //     <div className="bg-green-300 rounded col-span-1"> 1</div>
            //     <div className="bg-green-300 rounded col-span-1"> 2</div>
            //
            //
            // </div>
        )


        // for (let i = 0; i < 24; i++) {
        //     columns.push(
        //         <div class="flex flex-col">
        //
        //         </div>
        //
        //     )
        //
        // }
        // return <div class="body flex flex-col"> {columns} </div>
    }

    return (
        <div class="w-full">
            {/*{renderHeader()}*/}
            {/*{renderWorkers()}*/}
            {renderCells()}
        </div>
    );
}