import React, { useEffect, useState } from "react";
import moment from "moment";

const Timer = ({ timer, onChange }) => {
    const [time, setTime] = useState({ s: 0, m: 0, h: 0 });

    function calculateTime() {
        const initalMoment = moment(timer);
        const finalMoment = moment(Date.now());

        const diffInSeconds = initalMoment.diff(finalMoment, "seconds");
        const diffInMinutes = initalMoment.diff(finalMoment, "minute");

        const seconds = Math.abs(diffInSeconds % 60);
        const hours = Math.floor(Math.abs(diffInMinutes / 60));
        const minutes = Math.floor(Math.abs(diffInSeconds / 60)) - hours * 60;

        const newTime = { s: seconds, m: minutes, h: hours };

        setTime(newTime);
        onChange(newTime);
    }

    useEffect(() => {
        calculateTime();
        const interval = setInterval(() => {
            calculateTime();
        }, 1000);

        return () => {
            window.clearInterval(interval);
        };
    }, []);

    return (
        <>
            <div className="alert__time">
                <span className="font-large font-bold">
                    <div className="time">
                        {time.h > 0 && (
                            <div className="time__item">
                                <span className="number">{time.h}</span> <span className="alert-tag">hrs</span>
                            </div>
                        )}
                        {time.m > 0 && (
                            <div className="time__item">
                                <span className="number">{time.m}</span> <span className="alert-tag">min</span>
                            </div>
                        )}
                        <div className="time__item">
                            <span className="number"> {time.s}</span> <span className="alert-tag">seg</span>
                        </div>
                    </div>
                </span>
            </div>
        </>
    );
};

export default Timer;
