//Task1
// let arr = ["Tom", "Sam", "Ray", "Bob"];
// let [x, y, , ...z] = arr;
// console.log(x);
// console.log(y);
// console.log(z);

//Task2
// let data = {
//     names: ["Sam", "Tom", "Ray", "Bob"],
//     ages: [20, 24, 22, 26],
//  };
//  let {names: [, name2, , name4], ages: [, age2, , age4]} = data;
//  console.log(name2);
//  console.log(age2);
//  console.log(name4);
//  console.log(age4); 

//Task3
// function mul(...arr) {
//     let m = 1;
//     let n = 0;
//     for ( let i in arr){
//         if (typeof(arr[i]) === "number") {
//             m *= arr[i];
//             n = 1;
//         }
//     }
//     return m * n;
//  }
//  console.log(mul(1, "str", 2, 3, true));
//  console.log(mul(null, "str", false, true));

//Task4
// let server = {
//     data: 0,
//     convertToString: callback => {
//         callback((() => server.data + ""));
//     }
// };

// let client = {
//     server: server,
//     result: "",
//     calc: (data) => {
//         client.server.data = data;
//         client.server.convertToString(client.notification());
//     },
//     notification: function () {
//         return ((callback) => {
//             this.result = callback();
//         });
//     }
// };

// client.calc(123);
// console.log(client.result);
// console.log(typeof client.result);

//Task5
// let mapBuilder = function (k, v) {
//     const myMap = new Map();
//     for (let i in k) {
//         myMap.set(k[i], v[i]);
//     }
//     return myMap;
// }
// let keys = [1, 2, 3, 4];
// let values = ["div", "span", "b", "i"];
// let map = mapBuilder(keys, values);
// console.log(map.size);
// console.log(map.get(2));