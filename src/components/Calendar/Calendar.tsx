import React from 'react';
import {DayCalendar, MonthCalendar, WeekCalendar, YearCalendar} from "./types";

export interface CalendarProps {
    type: string;
}

const selectCalendarType = (props: CalendarProps) => {

    const {type} = props;

    switch (type) {
        case "Day":
            return <DayCalendar {...props}/>
        case "Week":
            return <WeekCalendar {...props}/>
        case "Month":
            return <MonthCalendar {...props}/>
        case "Year":
            return <YearCalendar {...props}/>
        default:
            return <MonthCalendar {...props}/>
    }
}

const Calendar = (props: CalendarProps) => {
    return selectCalendarType(props);
};

export default Calendar;