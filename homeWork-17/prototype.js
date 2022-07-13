class Developer {
    constructor(name) {
        this.name = name;
    }
    startWork() {
        return `${this.name} Start work ...`;
    }
    endWork() {
        return `${this.name} End work ...`;
    }
};

class Frontend extends Developer {
    constructor(name, websiteName) {
        super(name);
        this.websiteName = websiteName;
    }
    buildWebsite() {
        return `${this.name} Start build website`;
    }
};

class Backend extends Developer {
    constructor(name) {
        super(name);
    }
    buildServer() {
        return `${this.name} Start build server`;
    }
};

const stewie = new Frontend('Stewie', 'Ubisoft');
stewie.buildWebsite();
stewie.startWork();
stewie.endWork();

const nicole = Backend('Nicole', 'EA Games');
nicole.buildServer();
nicole.startWork(),
nicole.endWork();

