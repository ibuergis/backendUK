let answer = 0;
process.argv.splice(0, 2);
process.argv.forEach(number => {
    answer += parseInt(number);
    
});

console.log(answer);