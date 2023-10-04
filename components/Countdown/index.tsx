import React from "react";
import Countdown from "react-countdown";

export default function CountdownTimer(props: {text: string, date: number}) {
    return (
        <div>
            {props.text}
            <div className="ml-2.5 text-6xl">
                <Countdown date={props.date}/>
            </div>
        </div>
    )
}
