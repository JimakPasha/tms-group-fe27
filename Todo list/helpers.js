export function generateId() {
    return String(
      Math.random() * 10000 + (Math.random() * 10000) / (Math.random() * 100)
    ).replace('.', '0');
  }
  
  export function generateDate() {
    const date = new Date();
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
    return `${date.getHours()}:${date.getMinutes()} ${date.getDate()} ${
      dictionaryMonth[date.getMonth() + 1]
    }`;
 
    
  }
  

