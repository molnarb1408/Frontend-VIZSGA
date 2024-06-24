exports.genarateRandomNumbers = function(){
    let numbers = [];
    let randomNumber;
    for (let i = 0; i < 10; i++) {
        randomNumber = Math.floor((Math.random() *100)+1);
        numbers.push(randomNumber);
    }
    return numbers;
}