//Task1
// const newWin = window.open("", "Task1", "width=300, height=300");
// setTimeout(() => newWin.resizeTo(500, 500), 2000);
// setTimeout(() => newWin.moveTo(200, 200), 4000);
// setTimeout(() => newWin.close(), 6000);

//Task2
// const changeCSS = function(){
//     const myP = document.getElementById("text");
//     myP.style.color = "orange";
//     myP.style.fontSize = "20px";
//     myP.style.fontFamily = "Comic Sans MS";
// }

// document.getElementsByTagName("button")[0].addEventListener('click', changeCSS);

//Task3
// document.getElementById("blue").addEventListener('click', ()=>{document.body.style.backgroundColor = "blue"});
// document.getElementById("pink").addEventListener('dblclick', ()=>{document.body.style.backgroundColor = "pink"});
// document.getElementById("brown").addEventListener('mousedown', ()=>{document.body.style.backgroundColor = "brown"});
// document.getElementById("brown").addEventListener('mouseup', ()=>{document.body.style.backgroundColor = "white"});
// document.getElementById("yellow").addEventListener('mouseover', ()=>{document.body.style.backgroundColor = "yellow"});
// document.getElementById("yellow").addEventListener('mouseout', ()=>{document.body.style.backgroundColor = "white"});

//Task4
// document.getElementById("del").addEventListener('click', ()=>{
//     const mySel = document.getElementById("select");
//     mySel.options[mySel.options.selectedIndex] = null;
// });

//Task5
// const myButton = document.getElementById("liveB");
// const myP = document.getElementById("liveP");
// myButton.addEventListener('click', ()=>{myP.innerHTML+="I was pressed!<br/>"});
// myButton.addEventListener('mouseover', ()=>{myP.innerHTML+="Mouse on me!<br/>"});
// myButton.addEventListener('mouseout', ()=>{myP.innerHTML+="Mouse is not on me!<br/>"});

//Task6
// window.addEventListener('resize', ()=>{
//     document.getElementById("resize").innerHTML=(`Width=${window.innerWidth}, Height=${window.innerHeight}`);
// });

//Task7
// const arrGermany = ["Berlin", "Munich", "Hamburg", "Frankfurt"];
// const arrUSA = ["New-York", "Washington", "Boston", "Chikago"];
// const arrUkraine = ["Kyiv", "Rivne", "Lviv", "Odesa"];
// const myCountrys = [arrGermany, arrUSA, arrUkraine];

// const myCities = document.getElementById("cities");
// const myCountry = document.getElementById("country");
// const myCountryP = document.getElementById("countryP");

// let newSel;
// for (let i = 0; i < 4; ++i) {
//     newSel = new Option(myCountrys[0][i]);
//     myCities.options[i] = newSel;
// }
// myCountryP.innerHTML = myCountry[myCountry.options.selectedIndex].innerHTML + ", " + myCities[myCities.options.selectedIndex].innerHTML;

// myCountry.addEventListener('change', () => {
//     let newSel;
//     for (let i = 0; i < 4; ++i) {
//         newSel = new Option(myCountrys[myCountry.options.selectedIndex][i]);
//         myCities.options[i] = newSel;
//     }
//     myCountryP.innerHTML = myCountry[myCountry.options.selectedIndex].innerHTML + ", " + myCities[myCities.options.selectedIndex].innerHTML;
// });
// myCities.addEventListener('change', ()=>{
//     myCountryP.innerHTML = myCountry[myCountry.options.selectedIndex].innerHTML + ", " + myCities[myCities.options.selectedIndex].innerHTML
// });