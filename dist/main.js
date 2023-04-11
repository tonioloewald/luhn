function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "luhn", () => $8abf7fda564dafae$export$abcf6ff89c3603f5);
const $8abf7fda564dafae$export$abcf6ff89c3603f5 = (cc)=>{
    // simple regex will pull all the numbers out
    // reverse the digits to simplify positional operation "counting from the backl"
    const digits = String(cc).match(/\d/g)?.map((d)=>Number(d)).reverse();
    return digits != null ? digits.map((d, idx)=>{
        // double even-numbered digits counting from the back
        d = idx % 2 !== 0 ? d * 2 : d;
        // adding the digits if the result > 9 is just adding 1 to the modulus
        return d > 9 ? d % 10 + 1 : d;
    }).reduce((s, d)=>s + d, 0) % 10 === 0 : false;
};


//# sourceMappingURL=main.js.map
