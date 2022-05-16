let width, els, res;
do {
  width = Number(prompt("Width="));
} while (width < 0 || isNaN(width));
do {
  els = Number(prompt("els"));
} while (els < 0 || isNaN(els));
res = width / els;
alert(res);
