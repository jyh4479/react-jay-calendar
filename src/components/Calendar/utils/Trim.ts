export const trimMilliSecond = (date: string | number | Date) => {
    return new Date(new Date(date).setMilliseconds(0)).getTime();
}

export const trimSecond = (date: string | number | Date) => {
    return new Date(new Date(date).setSeconds(0)).getTime();
}

export const trimMinute = (date: string | number | Date) => {
    return new Date(new Date(date).setMinutes(0)).getTime();
}

export const trimHour = (date: string | number | Date) => {
    return new Date(new Date(date).setHours(0)).getTime();
}

// export const trimDay =  (date: string | number | Date) => {
// }

// export const trimDates = (date: Date) => {
//     return new Date(new Date(date).setDate(0));
// }