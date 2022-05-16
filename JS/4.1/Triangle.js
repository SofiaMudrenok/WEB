let i = 0;
let j = 0;
let max = parseInt(prompt("Height", ""));
let space = "";
let symbol = "";
while (i < max) {
  space = "";
  symbol = "";
  for (j = 0; j < max - i; j++) space += " ";
  for (j = 0; j < 2 * i + 1; j++) symbol += "^";
  console.log(space + symbol);
  i++;
}
