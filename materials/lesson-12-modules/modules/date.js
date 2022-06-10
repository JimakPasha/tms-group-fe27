const date = new Date();

function getTime() {
    return `${date.getHours()}:${date.getMinutes()}`;
}

function getDate() {
    return `${date.getDate()}:${date.getMonth() + 1}`;
}

export { getTime, getDate };