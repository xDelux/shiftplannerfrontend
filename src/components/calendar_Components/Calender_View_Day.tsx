import React, {useState, useEffect} from "react";
import { addMonths, format, isSameMonth, addDays, startOfWeek, endOfWeek, startOfMonth, endOfMonth, getWeek, getISOWeek, isSameDay  } from "date-fns";
import {ShiftComponent} from "./Calender_Shift_Component";
import {Link} from "react-router-dom";

export const CalendarDay = () => {

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


    /*function renderCells() {
        let columns = [] as any;


        for (let i = 1; i <= 24; i++) {
            columns.push(
                <div className="span-1 text-black font-bold flex-grow p-5 text-center"> {i}:00 </div>
            )
        }


        return (
            <div className="mx-5 mt-5">
                <div
                    className="flex items-center flex-row flex-nowrap border-2 border-black divide-x-2 divide-black bg-darkgrey">
                    {columns}
                </div>
                <div className="relative flex flex-col border-2 border-black divide-y divide-black bg-lightgrey">
                    <div className="">
                        <div className=" text-white font-bold col-span-5"> 00</div>
                    </div>

                    <div className="left-10 text-white font-bold"> 00</div>

                </div>
            </div>

        )
    }*/
        function renderGrid() {

            let columns = [] as any;

            let counter = 0;
            while (true) {
                columns.push(
                    <div className="text-black font-bold p-3 justify-center"> {counter}:00 </div>
                )
                if(counter == 24) {
                    break;
                }
                counter++;
            }


            return (
                <div className="mx-5 mt-5 flex-grow-1 flex-shrink-1 overflow-x-scroll">
                    <div className="flex border-2 border-black divide-x-2 divide-black bg-darkgrey ">
                            {columns}
                    </div>
                    <div className="flex flex-col border-2
                        border-black bg-lightgrey">
                        <div className="border-2 border-blue-500">
                            test
                        </div>
                        <div className="">
                            test
                        </div>
                        <div className="">
                            yoikk
                        </div>
                    </div>
                </div>

            )
        }

    return (
        renderGrid()
    );
}