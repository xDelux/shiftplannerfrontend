import React, {useState, useEffect} from "react";
import { addMonths, format, isSameMonth, addDays, startOfWeek, endOfWeek, startOfMonth, endOfMonth,  } from "date-fns";
import './Calendar_View__Month.css'
import {ShiftComponent} from "./Calender_Shift_Component";


export const Calendar = () => {

    const [currentMonth, setCurrentMonth] = useState(new Date())
    const [shifts, setShifts] = useState([])

    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1))
    };

    const prevMonth = () => {
        setCurrentMonth(addMonths(currentMonth, -1))
    };

    const renderHeader = () => {
        const dateFormat = "LLLL yyyy";
        return (
            <div className="header">
                <div className="icon ml-5" onClick={prevMonth}> chevron_left </div>
                <span className=""> {format(currentMonth, dateFormat)} </span>
                <div className="icon" onClick={nextMonth}> chevron_right </div>
            </div>
        );
    }

    const renderDays = () => {
        const dateFormat = "EEE";
        const days = [];

        let startDate = startOfWeek(currentMonth,{weekStartsOn: 1}) ;

        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="col text-center box-content border-2" key={i}>
                    {format(addDays(startDate, i%7), dateFormat)}
                </div>
            );
        }
        return <div className="days flex flex-wrap flex-row w-full  ">{days}</div>;
    }

    const renderCells = () => {
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart,{weekStartsOn: 1});
        const endDate = endOfWeek(monthEnd,{weekStartsOn: 1});

        const dateFormat = "d";
        const rows = [];

        let days = [];
        let day = startDate;
        let formattedDate = "";

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = format(day, dateFormat);
                days.push(
                    <div className={`col cell ${!isSameMonth(day, monthStart) ? "disabled" : ""}`} key={day}>
                        <div className="number float-right pr-3 pt-3">{formattedDate}</div>
                        <ul className='clear-right overflow-y-auto h-32 disable-scrollbars'>
                            <li><ShiftComponent /></li>
                            <li><ShiftComponent /></li>
                            <li><ShiftComponent /></li>
                            <li><ShiftComponent /></li>
                        </ul>
                    </div>
                );
                day = addDays(day, 1);
            }
            rows.push(
                <div className="row" key={day}>
                    {days}
                </div>
            );
            days = [];
        }
        return <div className="body">{rows}</div>;
    }

    return (
        <main className="calendar p-5">
            {renderHeader()}
            {renderDays()}
            {renderCells()}
        </main>
    );
}