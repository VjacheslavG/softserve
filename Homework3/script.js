//Task1
// const my_array=[2, 3, 4, 5];
// let d=1;
// for (let i=0; i<my_array.length; ++i)
// {
//     d*=my_array[i];
// }
// alert(d);

// const my_array=[2, 3, 4, 5];
// let d=1, i=0;
// while (i<my_array.length)
// {
//     d*=my_array[i];
//     ++i;
// }
// alert(d);

//Task2
// for (let i=0; i<=15; ++i)
// {
//     console.log(`${i} is ${(i%2)?"odd":"even"}`);
// }

//Task3
// const my_array=[];
// let k=+prompt("enter the length of the array");
// for (let i=0; i<k; ++i)
// {
//     my_array[i]=Math.floor(Math.random() * 4999+1);
// }
// console.log(my_array);

//Task4
// let raiseToDegree=function(a,b)
// {
//     let res=1;
//     for (let i=1; i<=b; ++i)
//     {
//         res*=parseInt(a);
//     }
//     return res;
// }
// alert (raiseToDegree(3.75, 2.6));

//Task5
// let findMin=function()
// {
//     let min=arguments[0];
//     for (let i in arguments)
//     {
//         if (min>arguments[i]) min=arguments[i];
//     }
//     return min;
// }
// alert(findMin(-12, 12, 14, 4, -4, 0.2, -11));

//Task6
// let findUnique=function(arr)
// {
//     for (let i=0; i<arr.length; ++i)
//     {
//         if (arr.includes(arr[i],i+1)) return false;
//     }
//     return true;
// }
// alert(findUnique([1, 2, 3, 5, 11, 11]));

//Task7
// let lastElem=function(arr, k=1)
// {
//     const new_arr=[];
//     let i=arr.length-1;
//     while(k>0 && i>=0)
//     {
//         new_arr.unshift(arr[i]);
//         --i;
//         --k;
//     }
//     return new_arr;
// }
// console.log(lastElem([3, 4, 10, -5]));
// console.log(lastElem([3, 4, 10, -5],2));
// console.log(lastElem([3, 4, 10, -5],8));

//Task8
// let upWords=function(str)
// {
//     let arr_str=str.split(" ");
//     for (let i=0; i<arr_str.length; ++i)
//     {
//         arr_str[i]=arr_str[i][0].toUpperCase()+arr_str[i].substr(1);        
//     }
//     return arr_str.join(" ");
// }
// alert (upWords("i love java script"));