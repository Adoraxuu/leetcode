function digitalRoot(n) {
    return n < 10 ? n : digitalRoot([...n.toString()].reduce((sum, digit) => sum + parseInt(digit), 0));
}

function digitalRoot2(n) {
    return n === 0 ? 0 : (n - 1) % 9 + 1;
}

console.log(digitalRoot(1))
console.log(digitalRoot2(1))