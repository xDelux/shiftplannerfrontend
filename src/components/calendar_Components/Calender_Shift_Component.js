import React, {useState, useEffect} from "react";

export const ShiftComponent = (props) => {

    const [worker, setWorker] = useState({});

    const [day, setDay] = useState(null);
    const [time, setTime] = useState([]);
    const [workAssignment, setWorkAssignment] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="flex clear-right pt-3 pl-3 items-center">
            <img className="rounded-full flex items-center justify-center w-6 h-6" src='https://content.codecademy.com/courses/React/react_photo-octopus.jpg' alt={props.name}/>
            <p className="pl-1 h-6 text-center align-middle text-xl">{props.name}</p>
            <p className="pl-3 h-6 text-center align-middle text-xl">{props.timeStart} - {props.timeEnd}</p>
        </div>
    );

}