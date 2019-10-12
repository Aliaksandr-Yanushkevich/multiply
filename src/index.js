module.exports = function multiply(first, second) {
  // your solution
  let a = BigInt(first); // for operate with huge number > 2^53 -1 use BigInt()
  let b = BigInt(second); // read more about https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER 
  let outputString = String(a * b); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
  return outputString
}
