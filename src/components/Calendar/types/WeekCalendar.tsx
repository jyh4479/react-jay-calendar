import React, {useEffect, useState} from 'react';
import {CalendarProps} from "../Calendar";
import {getWeekOfDate} from "../utils/Time";

const WeekCalendar = (props: CalendarProps) => {

    const {type} = props;
    const [curDate, setCurDate] = useState(new Date().getTime());
    const [curWeek, setCurWeek] = useState([0]);

    useEffect(() => {
        setCurWeek(getWeekOfDate(curDate));
    }, [curDate])

    return (
        <div>{curWeek.map(test => <div>{new Date(test).toString()}</div>)}</div>
    )
};

export default WeekCalendar;