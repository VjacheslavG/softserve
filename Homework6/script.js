//Task1
// document.getElementById("test").innerHTML = "Middle";
// document.querySelector("div").innerHTML = "Last";

//Task2
// document.querySelector("img").src = "./img/cat.jpg";
// alert (document.querySelector("img").outerHTML);

//Task3
// const myItem=document.getElementById("text").querySelectorAll("p");
// for (let i = 0; i < myItem.length; ++i) {
//     console.log(`Selector text ${i}: ${myItem[i].innerHTML}`);
//     }

//Task4
// let myList=document.getElementById("list").getElementsByTagName("li");
// alert (`${myList[0].innerHTML}, ${myList[4].innerHTML}, ${myList[1].innerHTML}, ${myList[3].innerHTML}, ${myList[2].innerHTML}`);
// let myList=document.getElementById("list");
// alert(myList.firstElementChild.innerHTML+ ", " + myList.lastElementChild.innerHTML + 
// ", " + myList.firstElementChild.nextElementSibling.innerHTML + ", " + 
// myList.lastElementChild.previousElementSibling.innerHTML + ", " +
// myList.firstElementChild.nextElementSibling.nextElementSibling.innerHTML);

//Task5
// document.querySelector("h1").style.backgroundColor="cyan";

// let myDiv=document.getElementById("myDiv").getElementsByTagName("p");
// myDiv[0].style.fontWeight="bold";
// myDiv[1].style.color="red";
// myDiv[2].style.textDecorationLine="underline";
// myDiv[3].style.fontStyle="italic";

// let myList=document.getElementById("myList");
// let myLi=myList.querySelectorAll ("li");
// myLi[0].innerHTML+=myLi[1].innerHTML+myLi[2].innerHTML;
// myList.removeChild(myLi[1]);
// myList.removeChild(myLi[2]);
// myList.style.listStyle="none";

// document.querySelector("span").style.visibility="hidden";

//Task6
// document.getElementById("input1").value=prompt("Enter input1");
// document.getElementById("input2").value=prompt("Enter input2");
// [document.getElementById("input1").value,document.getElementById("input2").value]=
// [document.getElementById("input2").value,document.getElementById("input1").value];

//Task7
// let scr=document.querySelector("script");

// let newMain=document.createElement("main");
// newMain.className="mainClass check item";
// scr.before(newMain);

// let newDiv=document.createElement("div");
// newDiv.id="myDiv";
// newMain.prepend(newDiv);

// let newP=document.createElement("p");
// newP.innerHTML="First paragraph";
// newDiv.prepend(newP);