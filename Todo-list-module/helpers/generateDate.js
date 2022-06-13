export function generateDate() {
    const dictionaryMonth = {
        1: 'january',
        2: 'february',
        3: 'march',
        4: 'april',
        5: 'may',
        6: 'june',
        7: 'july',
        8: 'august',
        9: 'september',
        10: 'october',
        11: 'november',
        12: 'december',
    }
    const currentDate = new Date();
    let hours = currentDate.getHours();
    if (hours < 10) {
        hours = '0' + hours;
    }
    let minute = currentDate.getMinutes();
    if (minute < 10) {
        minute = '0' + minute;
    }
    let day = currentDate.getDate();
    if (day < 10) {
        day = '0' + day;
    }
    let month = dictionaryMonth[currentDate.getMonth() + 1];

    return `${hours}:${minute} ${day} ${month}`;
}
