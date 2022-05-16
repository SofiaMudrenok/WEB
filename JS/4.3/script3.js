let name = prompt("Ім'я: ", "Юрій")
let names = ["Олександр", "Юрій", "Василь", "Юрій", "Андрій", "Юрій", "Олег", "Степан"]
alert(names.filter(el => el === name).length)