async function sleep(ms) {
    return new Promise(resolve => {setTimeout(resolve, ms)});
}

async function addiereNachVerzögerung(a, b, ms) {
    await sleep(ms)
    console.log(a+b);
}
addiereNachVerzögerung(1, 2, 1);