export function generateDate() {
    const dictionaryMonth = {
        1: 'Jan',
        2: 'Feb',
        3: 'Mar',
        4: 'Apr',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'Aug',
        9: 'Sept',
        10: 'Oct',
        11: 'Nov',
        12: 'Dec',
    };
    
    const date = new Date();
    let d = '0';
    if ((date.getDate()) < 10) {
        d = `${d}${date.getDate()}`;
    } else {
        d = date.getDate();
    }
    return `${date.getHours()}:${date.getMinutes()} ${d} ${
        dictionaryMonth[date.getMonth() + 1]
    }`;
}
    