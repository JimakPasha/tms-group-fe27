function sumAge(users) {
    let sumAge = 0;
    users.map((item) => {
        sumAge +=item.age;
    });
    return sumAge / users.length;
}

export default sumAge;