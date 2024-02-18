function maskify(cc) {
    return cc.length > 4 ? "#".repeat(cc.length - 4) + cc.slice(-4) : cc
}

console.log(maskify("4556364607935616"))
console.log(maskify("64607935616"))
console.log(maskify("1"))