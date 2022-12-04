//Task1
// const calcRectangleArea = function (width, height)
// {
//     if (isNaN(width) || isNaN(height))
//     {
//         throw new Error("The data is not correct");
//     }
//     return width*height;
// }
// try
// {
//     alert ("the area is "+ calcRectangleArea("cfgh",5));
// }
// catch (err)
// {
//     alert(err.message);
// }

//Task2
// const checkAge = function (age) 
// {
//     if (age === "" || age == null)
//     {
//         throw new Error ("The field is empty! Please enter your age");
//     }
//     else if (isNaN(age))
//     {
//         throw new Error ("The field is not numeric");
//     }
//     else if (age<14)
//     {
//         throw new Error ("You are too young");
//     }
//     else 
//     {
//         alert ("You got access to watch the movie");
//     }
// }
// try
// {
//     checkAge();
// }
// catch (err)
// {
//     alert(err.name+": "+err.message);
// }

// //Task3
// class MonthException {
//     constructor (message) {
//         this.month=message;
//     }
//     showMonthName()
//     {
//         switch (this.month)
//         {
//             case 1: return "January";
//             case 2: return "February";
//             case 3: return "March";
//             case 4: return "April";
//             case 5: return "May";
//             case 6: return "June";
//             case 7: return "July";
//             case 8: return "August";
//             case 9: return "September";
//             case 10: return "October";
//             case 11: return "November";
//             case 12: return "December";
//             default: throw new Error ("MonthException Incorrect month number");
//         }
//     }
// }
// let month=new MonthException(8);
// try
// {
//     console.log(month.showMonthName());
// }
// catch (err)
// {
//     console.log(err.message);
// }

//Task4
// const showUser = function (id)
// {
//     if (id<0)
//     {
//         throw new Error ("ID must not be negative");
//     }
//     return {id:id}
// }
// const showUsers = function(ids) 
// {
//     const ids_obj=[];
//     for (i=0; i<ids.length; ++i)
//     {
//         try {
//             ids_obj.push(showUser(ids[i]));
//         }
//         catch (err)
//         {
//             console.log(err.name+": "+err.message+": "+ids[i]);
//         }
//     }
//     return ids_obj;
// }
// console.log(showUsers([7, -12, 44, 22]));