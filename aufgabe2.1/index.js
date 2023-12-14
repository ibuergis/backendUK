function doubleIt(number, callback) {
    let trueNumber = number*2;
    callback(number)
}

doubleIt(4, (number) => {
    console.log("this is number " + number)
})