export {};
type sn = number | string;

function combine(n1: sn, n2: sn) {
  let result;
  if (typeof n1 === "number" && typeof n2 === "number") {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
}

console.log(combine("1", " test"));
