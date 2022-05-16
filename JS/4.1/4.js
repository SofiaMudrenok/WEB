let a = parseInt(prompt());
let b = parseInt(prompt());
let res = 0;
for (a; a <= b; a++) {
  if (a % 2 === 1) {
    res += a;
  }
}
alert(res);
