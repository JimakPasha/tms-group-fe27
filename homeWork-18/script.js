class Developer {
    constructor(name){
        this.name = name;
    }

     startWork(){
        return `${this.name} starts work` 
    }

    endtWork(){
        return `${this.name} ends work` 
    }
}

const dev = new Developer('Egor');
// console.log(dev.startWork());

class Backend extends Developer {
 
    constructor(name){
        super(name)
    }

    buildServer(){
        return `${this.name} starts building server` 
    }
}

const back = new Backend("Max")
// console.log(back.buildServer())

class Frontend extends Developer {
 
    constructor(name, websiteName){
        super(name)
        this.websiteName = websiteName;
    }

    buildWebsite(){
        return `${this.name} starts building website ${this.websiteName}` 
    }
}

const front = new Frontend("John", 'Pinterst')
console.log(front.startWork())
console.log(front.buildWebsite())
console.log(back.startWork())
console.log(back.buildServer())

