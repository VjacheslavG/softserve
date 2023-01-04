//Task1
// document.getElementById("btn").addEventListener("click", () => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json());
//     const myDate = new Date();
//     document.getElementById("btn").innerText = `Your vote is accepted: ${myDate}`;
// })

//Task2
// document.getElementById("books").addEventListener("click", () => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(books => {
//         let myUl = document.getElementById("ulbooks");
//         let newLi;
//         for (let i = 0; i < books.length; ++i){
//             newLi = document.createElement("li");
//             newLi.innerHTML = books[i].name;
//             myUl.append(newLi);
//         }
//     });
// });