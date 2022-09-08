import React, { useState, useEffect } from 'react';

function Clock() {

    const [time, setTime] = useState(0);

    useEffect(() => {
        const days = ["SUN", "MON", "TUES", "WED", "THU", "FRI", "SAT"];
        let currentTime;
        setInterval(() => {
            const date = new Date();
            currentTime = days[date.getDay()] + "  " + date.toLocaleTimeString()
            setTime(currentTime);
        }, 1000);
    }, []);


    return (
        <>
            {time}
        </>
    )
}

export default Clock