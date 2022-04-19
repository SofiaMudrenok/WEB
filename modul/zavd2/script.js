let arr = []; 
let l = prompt("lenght "); 
for(i = 0; i < l; i++) 
{ 
    arr[i] = getRandom(-10, 10); 
} 
function getRandom(min, max) 
{ 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
} 
alert(arr); 
let a = prompt("a"); 
let b = prompt("b"); 
let sum = 0; 
if((b-a+1) > arr.length) 
{ 
    alert("Incorect value") 
} 
else 
{ 
    for(j = a-1; j <= b-1; j++) 
    { 
        sum += arr[j] 
    } 
} 
alert(sum);