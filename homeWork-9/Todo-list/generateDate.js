export function generateDate() {
    const date = new Date();
    let x = '0';
    if ((date.getDate()) < 10) {
        x = `${x}${date.getDate()}`;
    } else {
        x = date.getDate();
    }
    return `${date.getHours()}:${date.getMinutes()} ${x} ${dictionaryMonth[date.getMonth() + 1]
        }`;
}


 export const dictionaryMonth = {
    1: 'янв',
    2: 'фев',
    3: 'март',
    4: 'апр',
    5: 'май',
    6: 'июнь',
    7: 'июль',
    8: 'авг',
    9: 'сен',
    10: 'окт',
    11: 'нояб',
    12: 'дек',
};
