//Task1
// $(function () {
//     if (/^https:\/\//.test($("a").attr("href"))) {
//         $("a").attr("target", "_blank");
//     };
// });

//Task2
// $(function () {
//     $("h2.head").css("background-color", "green");
//     $("h2.head").children(".inner").css("font-size", "35px");
// });

//Task3
// $(function () {
//     let myDiv = $("h3").next("div");

//     for (let i = 0; i < myDiv.length; ++i) {
//         myDiv[i].previousElementSibling.prepend(myDiv[i]);
//     }
// });

//Task4
// $(document).change(function () {
//     let n = 0;
//     const checkArr = $("input");

//     for (let i = 0; i < checkArr.length; ++i) {
//         if (checkArr[i].checked) ++n;
//     }

//     if (n >= 3)
//         for (let i = 0; i < checkArr.length; ++i) {
//             checkArr[i].disabled = true
//         };
// });