function Random(min, max) 
{
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}
let n = parseInt(prompt("введіть макс кількість ходів:"))
let presents = Array();
for (let i = 1; i <= n; i++) {
    presents.push(Random(-500, 500))
}
let win=0;
let play=confirm("Почати гру");
while(play==true){
    
    let new_play=parseInt(prompt("Введіть вибраний номер: "))-1;
    if(arr1[new_play]=="Empty")
        {
            alert("Ви вибирали уже цей номер")
        }
    else{
        win+=arr1[new_play];
        presents[new_play]="Empty";
    }
    alert(`Сума виграшу ${win}`)
    play=confirm("Чи бажаєте ви грати далі?");
}
alert(`Ваш виграш: ${parseInt(win)}`);