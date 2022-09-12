import React, {useEffect, useState} from 'react';
import {CalendarProps} from "../Calendar";
import {getWeekOfDate} from "../utils/Time";
import {getDay} from "../utils/Format";

const WeekCalendar = (props: CalendarProps) => {

    const {type} = props;
    const [curDate, setCurDate] = useState(new Date().getTime());
    const [curWeek, setCurWeek] = useState([0]);

    useEffect(() => {
        setCurWeek(getWeekOfDate(curDate));
    }, [curDate])

    return (
        <div>
            <div>
                <button
                    onClick={() => setCurDate(prev => new Date(new Date(prev).setDate(new Date(prev).getDate() - 7)).getTime())}>이전주
                </button>
                <button
                    onClick={() => setCurDate(prev => new Date(new Date(prev).setDate(new Date(prev).getDate() + 7)).getTime())}>다음주
                </button>
                <div style={{display: "flex"}}>
                    {curWeek.map(test => <div style={{width: "50px"}}>{getDay(test)}</div>)}
                </div>
                <div style={{display: "flex"}}>
                    {curWeek.map(test => <div style={{width: "50px"}}>{new Date(test).getDate()}</div>)}
                </div>
            </div>
            <div>
                Body (하루 Time 들어갈 공간)
            </div>
        </div>
    )
};

export default WeekCalendar;