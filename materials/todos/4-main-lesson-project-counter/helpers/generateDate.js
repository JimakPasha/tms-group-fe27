export function generateDate() {
    const dictionaryMonth = {
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
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes()} ${date.getDate()} ${
        dictionaryMonth[date.getMonth() + 1]
    }`;
}
