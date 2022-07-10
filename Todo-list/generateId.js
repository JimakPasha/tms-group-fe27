export function generateId() {
    return String((Math.random() * 10000) + (Math.random() * 1000 / (Math.random() * 100))).replace('.','0');
};