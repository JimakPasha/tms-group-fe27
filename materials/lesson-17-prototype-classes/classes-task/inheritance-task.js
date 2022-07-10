class Human {
    constructor({name, age}) {
        this.name = name;
        this.age = age;
    }

    sayHi() {
        return 'Hello everybody!';
    }
}

class Programmer extends Human {
    constructor({ technologies, ...otherProps }) {
        super(otherProps);
        this.technologies = technologies;
    }

    startCoding() {
        return `${this.name} is coding using ${this.technologies}`
    }
}

class Sportsman extends Human {
    constructor({ medals, ...otherProps }) {
        super(otherProps);
        this.medals = medals;
    }
}

class FootballPlayer extends Sportsman {
    constructor({team, ...otherProps}) {
        super(otherProps);
        this.team = team;
    }

    run(speed) {
        return `${this.name} is running ${speed} kmph`
    }
}

class HockeyPlayer extends Sportsman {
    constructor({ weight, ...otherProps }) {
      super(otherProps);
      this.weight = weight;
    }
  
    pushOpponent(opponentName) {
      return `${this.name} pushed ${opponentName} and used ${this.weight}kgs`;
    }
  }

const chara = new HockeyPlayer({
    name: 'Zdeno',
    age: 44,
    medals: 9,
    weight: 116,
});

const cantona = new FootballPlayer({
    name: 'Eric',
    age: 55,
    medals: 4,
    team: null
})

const coder = new Programmer({
    name: 'David',
    age: 40,
    technologies: ['HTML', 'CSS', 'JS']
})

const alex = new Human({name: 'Alex', age: 35});
const jack = new Human({name: 'Jack', age: 15});
