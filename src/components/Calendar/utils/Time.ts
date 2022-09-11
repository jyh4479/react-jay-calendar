import {trimHour, trimMilliSecond, trimMinute, trimSecond} from "./Trim";

export const getWeekOfDate = (date: string | number | Date) => {
    const curDate = new Date(date);
    const curWeek = new Array<number>;

    //Setting Sun
    while (curDate.getDay() !== 0) {
        curDate.setDate(curDate.getDate() - 1);
    }

    //Make Week
    for (let index = 0; index <= 6; index++, curDate.setDate(curDate.getDate() + 1)) {
        curWeek.push(trimHour(trimMinute(trimSecond(trimMilliSecond(curDate)))));
    }

    return curWeek;
}