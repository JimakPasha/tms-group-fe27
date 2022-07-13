class Developer {
    constructor(name) {
        this.name = name;
    }
    startWork() {
        return `${this.name} start work...`
    }
    endWork() {
        return `${this.name} end work...`
    }
}

class Frontend extends Developer {
    constructor(websiteName, ...otherprops) {
        super(otherprops);
        this.websiteName = websiteName;
    }
    buildWebSite() {
        return `${this.name} start build website ${this.websiteName}`
    }
}

class Backend extends Developer {
    constructor(...otherprops) {
        super(otherprops);
    }
    buildServer() {
        return `${this.name} start build server`
    }
}

const alexFront = new Frontend('telegram', 'alex');
console.log(alexFront.startWork())
console.log(alexFront.endWork())
console.log(alexFront.buildWebSite())

const billBack = new Backend('bill');
console.log(billBack.startWork());
console.log(billBack.endWork());
console.log(billBack.buildServer());