//Task1
// const upperCase = function(str){
//     alert (`String's${/^[A-Z]/.test(str) ? " " : " not "}starts with uppercase character`);
// }
// upperCase('regexp');
// upperCase('RegExp');

//Task2
// const checkEmail = function(str){
//     let res = str.match(/[A-Za-z0-9-._!]+@[a-z]+.[a-z]{2,3}/);
//     if (res === null) return false;
//     return res[0] === str ? true : false
// }

// alert (checkEmail("Qmail2@gmail.com"));
// alert (checkEmail("Qmail2@.com"));
// alert (checkEmail("Qmail2@gmail.comQmail2@gmail.com"));

//Task3
// let str = "asdfdBbbdoijDbbdppmjdBDojn"
// let res = str.match (/db+d/gi);
// for (let i in res){
//     console.log (res[i] + " " + /b+/gi.exec(res[i]) + " " + /d/gi.exec(res[i]));
// }

//Task4
// let str = prompt ("Enter the string");
// alert (str.split(/\ /).reverse().join(", "));

//Task5
// const checkBank = function (str){
//     let check = /\d{4}-\d{4}-\d{4}-\d{4}/;
//     if (str.match(check) === null) return false;
//     return str.match(check)[0] === str ? true : false;
// }
// alert(checkBank("9499-9999-9999-9999"));
// alert(checkBank("9499-93999-9999-9999"));
// alert(checkBank("9499-9a99-9999"));

//Task6
// const checkEmail = function(str){
//     let res = str.match(/^[A-Za-z0-9]\w*-?\w*@[a-z]+.[a-z]{2,3}/);
//     if (res === null) {
//         alert("Email is not correct!");
//         return;
//     }
//     if (res[0] === str) alert("Email is correct!")
//     else alert("Email is not correct!");
// }

// checkEmail('my_mail@gmail.com');
// checkEmail('#my_mail@gmail.com');
// checkEmail('my_ma--il@gmail.com');

//Task7
// const checkLogin = function (str){
//     let res = str.match(/^[A-Za-z][A-Za-z(\d+(\.\d+)?)]{1,9}/);
//     let resNum = str.match(/\d+(\.\d+)?/g);
//     if (res === null) console.log(false)
//     else if (str === res[0]) console.log(true)
//     else console.log(false);
//     console.log(resNum.join(", "));
// }
// checkLogin('ee1.1ret3');
// checkLogin('ee1*1ret3');