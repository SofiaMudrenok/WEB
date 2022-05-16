let n = parseInt(prompt("Кількість оцінок "));
let grades = [];
let sum = 0;

for (let i = 0; i < K; i++) 
{
    grades.push(parseInt(prompt("Бал: ", "")));
}

alert(`середній бал ${sum / n}`);
if (grades.includes(2)) {
    alert("Двійочник");
}
else if (grades.includes(3)) {
    alert("Трійочник");
}
else if ((sum / n) >= 10){
    alert("Відмінник");  
}
else {
    alert("Хорошист");
}