class Developer {
    constructor(name) {
        this.name = name;
    }
    startWork() {
        return `${this.name} start work ...`;
    }
    endWork() {
        return `${this.name} end work ...`;
    }
}

class Frontend extends Developer {
    constructor(name, websiteName) {
        super(name);
        this.websiteName = websiteName;
    }

    buildWebSite() {
        return `${this.name} start build website`; 
    }
}

class Backend extends Developer {
    constructor(name) {
        super(name);
    }

    buildServer() {
        return `${this.name} start build server`; 
    }
}

const alex = new Frontend('Alex', 'VK');
alex.buildWebSite();
alex.startWork();
alex.endWork();

const jack = new Backend('Jack');
jack.buildServer();
jack.startWork();
jack.endWork();