import { addDays, addMonths, endOfMonth, endOfWeek, format, getISOWeek, isSameDay, isSameMonth, startOfMonth, startOfWeek } from "date-fns";
import React, { useEffect, useState } from "react";
import './Calendar_View__Month.css';
import { ShiftComponent } from "./Calender_Shift_Component";
import {Route, useHistory} from 'react-router-dom'
import {CalendarDay} from "./Calender_View_Day";
import { Link } from 'react-router-dom'

export const Calendar = () => {

    const [currentMonth, setCurrentMonth] = useState(new Date())
    const history = useHistory()

    const [shifts, setShifts] = useState([
        {"name":"Shania", "timeStart":"08:00", "timeEnd":"16:00", "date":new Date()},
        {"name":"Mikkel", "timeStart":"10:00", "timeEnd":"14:00", "date":addDays(new Date(), -1)},
        {"name":"Mads", "timeStart":"??:??", "timeEnd":"??:??", "date":new Date()},
        {"name":"Jacob", "timeStart":"09:00", "timeEnd":"16:00", "date":addDays(new Date(), -3)}]
    )
    useEffect(() => {
        //get('/something').then((responce) => {
        // setShifts(response.data)
        // }
    }, shifts);

    const handleRoute = ({onClick}) => {
        history.push(`/calenderDay`);
    };

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
                <div className="icon cursor-pointer ml-5" onClick={prevMonth}> chevron_left </div>
                <span className=""> {format(currentMonth, dateFormat)} </span>
                <div className="icon cursor-pointer" onClick={nextMonth}> chevron_right </div>
            </div>
        );
    }

    const renderDays = () => {
        const dateFormat = "EEE";
        const days = [];

        let startDate = startOfWeek(currentMonth,{weekStartsOn: 1}) ;
        days.push(
            <div className="border-filler" className={`h-full w-5`}>

            </div>
        )
        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="col text-center box-content" key={i}>
                    {format(addDays(startDate, i%7), dateFormat)}
                </div>
            );
        }
        return <div className="days flex flex-wrap flex-row w-full uppercase font-normal text-base border divide-x">{days}</div>;
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
        console.log(shifts)
        console.log("start day: " + startDate)
        console.log("Object Day: " + shifts[0].date)
        console.log(isSameDay(startDate, shifts[0].date))
        let formattedDate = "";

        while (day <= endDate) {
            //Inserting a collumn with the week numer first.
            days.push(
                <div className={`flex flex-col justify-end h-40 w-5`}>
                    <div className="font-bold">{getISOWeek(day)}</div>
                </div>
            )
            //then we insert the days.
            for (let i = 0; i < 7; i++) {
                formattedDate = format(day, dateFormat);
                days.push(
                    <div className={`col cell ${!isSameMonth(day, monthStart) ? "disabled" : ""}`} key={day} onClick={() => history.push('/calendarDay')}>
                        <div className="number font-bold float-right pr-3 pt-3 text-xs ">{formattedDate}</div>
                        <ul className='clear-right overflow-y-auto h-32 text-base disable-scrollbars' >

                            {shifts.map(({ name, timeStart, timeEnd, date}) => (
                                // Link for routing to day page
                                isSameDay(day, date) ? <li className={'float-left'}>
                                    <Link to="/calendarDay">
                                        <ShiftComponent name={name} timeStart={timeStart} timeEnd={timeEnd} />
                                    </Link> </li>
                                    : <li/>
                            ))}
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
        <main className="calendar p-5 leading-none">
            {renderHeader()}
            {renderDays()}
            {renderCells()}
        </main>
    );
}