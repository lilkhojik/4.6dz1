var age = +prompt("Yoshingizni kiriting ")
if (age > 0 && age <= 18) {
    alert("Siz o'qishingiz kerak " + age)
} else if (age > 18 && age <= 50) {
    alert("Siz ishlashingiz kerak " + age)
} else if (age > 50 && age <= 59) {
    alert("Siz yaqinda pensiyaga chiqasiz" +age)
} else if (age > 59 && age <= 150) {
    alert("Pensionerga o'xhsaysiz, agar hali ham tirik bo'lsangiz :) "+age)
} else {
    alert("Nimadir noto'g'ri terildi")
}
// if (age >= 0 && age >= 18 ) {
//     alert("Siz o'qishingiz kerak "+age);
// } else if(age >18 && age >= 50){
//     alert("Siz ishlashingiz kerak "+age);
// } else if(age > 50 && age >= 59){
//     alert("Siz yaqinda pensiyaga chiqasiz "+age);
// } else(age > 59 && age >= 150 ) {
//     alert("Pensionerga o'xhsaysiz, agar hali ham tirik bo'lsangiz :)");
// } else {
//     alert("Nimadir noto'g'ri terildi :( ");
// } 