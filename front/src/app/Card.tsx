'use client';
import { useState } from "react";

const montharr = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]

type Props = {
    num: number;
  };

export const Card: React.FC<Props> = ({num}) => {

    const [date, setDate] = useState("loading...");
    const [name, setName] = useState("loading...");
    const [place, setPlace] = useState("loading...");
    const [inf, setInf] = useState("loading...");
    

    fetch("http://localhost:8000/ivent")
        .then(response => response.json())
        .then(data => {
            data = data.arr[num - 1]
            setName(data.name);
            setPlace(data.place);
            setInf(data.iventer);
            setDate(data.date.split("-")[2].split(" ")[0] + " " + montharr[Number(data.date.split("-")[1]) - 1] + " В " + data.date.split(" ")[1])
        })
    return (
        <div className="card">
            <div className="date">{date}</div>
            <div className="time">{name}</div>
            <div className="place">{place}</div>
            <div className="inf">{inf}</div>
        </div>
    )
}