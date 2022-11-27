//Task1
// let x = 1;
// let y = 2;

// let res1 = String(x)+String(y);
// console.log(res1);
// console.log(typeof res1);

// let res2 = Boolean(x)+String(y);
// console.log(res2);
// console.log(typeof res2);

// let res3 = Boolean(x+y);
// console.log(res3);
// console.log(typeof res3);

// let res4 = parseInt(Boolean(x+y));
// console.log(res4);
// console.log(typeof res4);


//Task2
// let a=+prompt("enter the number");
// if (!(a%2) && a>0) alert("the number is even and >0")
// else alert("the number is not even or <0");
// if (!(a%7)) alert("the number is a multiple of 7")
// else alert("the number is not a multiple of 7");


//Task3
// let my_array =[];
// my_array[0]=5;
// my_array[1]="string";
// my_array[2]=true;
// my_array[3]=null;
// alert(my_array.length);
// my_array[4]=prompt("enter an array element");
// alert(my_array[4]);
// my_array.shift();
// alert(my_array);

//Task4
// let cities = ["Rome", "Lviv", "Warsaw"];
// alert(cities.join("*"));

//Task5
// let isAdult=+prompt("enter your age");
// alert((isAdult<18)?"Ви ще надто молоді":"Ви досягли повнолітнього віку");

//Task6
// let a=+prompt("enter a");
// let b=+prompt("enter b");
// let c=+prompt("enter c");
// let p=(a+b+c)/2;

// if (typeof(a)!="number" || typeof(b)!="number" || typeof(c)!="number") {
//     alert("the data is not correct");
// }
// else if (a+b<c || a+c<b || b+c<a) {
//     alert("the triangle does not exist");
// } 
// else {
//     let s=(p*(p-a)*(p-b)*(p-c))**0.5;
//     console.log("the area of the triangle = " + s.toFixed(3));
//     if (a*a+b*b==c*c || a*a+c*c==b*b || b*b+c*c==a*a) console.log ("the triangle is right");
// }

//Task7
// let date = new Date();
// let h=date.getHours();
// if (h>=23 || h<5) {
//     alert("Доброї ночі");
// } else if (h>=5 && h<11) {
//     alert("Доброго ранку");
// } else if (h>=11 && h<17) {
//     alert("Доброго дня");
// } else if (h>=17 && h<23) {
//     alert("Доброго вечора");
// }

// switch (true) {
//     case (h>=23 || h<5): alert("Доброї ночі");
//     break;
//     case (h>=5 && h<11): alert("Доброго ранку");
//     break;
//     case (h>=11 && h<17): alert("Доброго дня");
//     break;
//     case (h>=17 && h<23): alert("Доброго вечора");
//     break;
// }