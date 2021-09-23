import React, {useState, useEffect} from "react";
import { addMonths, format, isSameMonth, isSameDay, addDays, startOfWeek, endOfWeek, startOfMonth, endOfMonth,  } from "date-fns";
import './Calendar_View__Month.css'

export const Calendar = () => {

    const [currentMonth, setCurrentMonth] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState(new Date())

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
                    <span className="float-left ml-5"> {format(currentMonth, dateFormat)} </span>
                    <div className="clear-left">
                        <div className="icon" onClick={prevMonth}> chevron_left </div>
                        <div className="icon ml-24" onClick={nextMonth}> chevron_right </div>
                    </div>
                </div>
        );
    }

    const renderDays = () => {
        const dateFormat = "EEE";
        const days = [];

        let startDate = startOfWeek(currentMonth);

        for (let i = 1; i < 8; i++) {
            days.push(
                <div className="col col-center" key={i}>
                    {format(addDays(startDate, i%7), dateFormat)}
                </div>
            );
        }

        return <div className="days row">{days}</div>;
    }

    const renderCells = () => {
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);

        const dateFormat = "d";
        const rows = [];

        let days = [];
        let day = startDate;
        let formattedDate = "";

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = format(day, dateFormat);
                days.push(
                    <div className={`col cell ${!isSameMonth(day, monthStart) ? "disabled" : isSameDay(day, selectedDate) ? "selected" : ""}`} key={day}>
                        <span className="number">{formattedDate}</span>
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
        <main className="calendar">
            {renderHeader()}
            {renderDays()}
            {renderCells()}
        </main>
    );
}