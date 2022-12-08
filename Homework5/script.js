//Task1
// let mentor = { 
//     course: "JS fundamental", 
//     duration: 3,
//     direction: "web-development" 
// };
// const propsCount=function (currentObject)
// {
//     alert (Object.keys(currentObject).length);
// }
// propsCount(mentor);

//Task2
// let my_object = {
//     field1: 24,
//     field2: 94,
//     field3: 36,
//     field4: 56,
//     field5: 34
// }

// const showProps = function(obj)
// {
//     alert(Object.keys(obj));
// }

// showProps(my_object);
// alert (Object.values(my_object));

//Task3
// class Person 
// {
//     constructor(name, surname)
//     {
//         this.name=name;
//         this.surname=surname;
//     }
//     showFullName()
//     {
//         return this.surname+" "+this.surname;
//     }
// }
// class Student extends Person
// {
//     constructor (name, surname, year)
//     {
//         super (name, surname);
//         this.year=year;
//     }
//     showFullName (midleName)
//     {
//         return this.surname+" "+this.surname+" "+midleName;
//     }
//     showCourse()
//     {
//         let date = new Date();
//         return date.getFullYear()-this.year;
//     }
// }
// const stud1 = new Student("Petro", "Petrenko", 2015);
// console.log(stud1.showFullName("Petrovych"));
// console.log("Current course: " + stud1.showCourse());

//Task4
// class Worker {
//         constructor (fullName, dayRate, workingDays){
//             this.fullName=fullName;
//             this.dayRate=dayRate;
//             this.workingDays=workingDays;
//         }
//         get showSalary(){
//             return this.dayRate*this.workingDays;
//         }
//         #experience=1.2;
//         get showSalaryWithExperience(){
//             return this.showSalary*this.#experience;
//         }
//         get Experience(){
//             return this.#experience;
//         }
//         set Experience(exp){
//             this.#experience=exp;
//         }
// }
// const sort_arr=function(){
//     let sortArr=[];
//     for (let i in arguments){
//         sortArr[i]=arguments[i];
//     }
//     sortArr.sort(function (a, b) {return a.showSalaryWithExperience - b.showSalaryWithExperience});
//     sortArr.forEach(el=>console.log(el.fullName+": "+el.showSalaryWithExperience));
// }
// const work =new Worker("Ivan Ivanov", 200, 150);
// console.log(work.showSalaryWithExperience);
// work.Experience=1.5;
// console.log(work.Experience);
// console.log(work.showSalaryWithExperience);

// const worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);                 
// console.log(worker1.showSalary);
// console.log("Experience: " + worker1.Experience);
// console.log(worker1.showSalaryWithExperience);
// worker1.Experience=1.5;
// console.log("New experience: " + worker1.Experience);
// console.log(worker1.showSalaryWithExperience);

// const worker2 = new Worker("Tom Tomson", 48, 22);
// const worker3 = new Worker("Andy Ander", 29, 23);

// console.log("Sorted salary:");
// sort_arr(work, worker1, worker2, worker3);

//Task5
// class GeometricFigure{
//     getArea() {
//         return 0;
//     }
//     toString() {
//         return Object.getPrototypeOf(this).constructor.name;
//    }    
// }
// class Triangle extends GeometricFigure{
//     constructor(a,b,c){
//         super();
//         this.a=a;
//         this.b=b;
//         this.c=c;
//     }
//     getArea(){
//         let p=(this.a+this.b+this.c)/2;
//         return ((p-this.a)*(p-this.b)*(p-this.c))**0.5;
//     }

// }
// class Square extends GeometricFigure{
//     constructor (a){
//         super();
//         this.a=a;
//     }
//     getArea(){
//         return this.a**2;
//     }
    
// }
// class Circle extends GeometricFigure{
//     constructor (r){
//         super();
//         this.r=r;
//     }
//     getArea(){
//         return 3.14*this.r**2
//     }
    
// }
// let handleFigures= function(figures){
//     const arrFigure=[];
//     figures.forEach(element => {
//         if (element instanceof GeometricFigure) {
//             console.log(`${element.constructor.prototype}: ${element.toString()} - area: ${element.getArea()}`);
//             arrFigure.push(element.getArea());
//         }
//     });
    
//     console.log(`total area is ${arrFigure.reduce(function(sum, element){return sum+element})}`);
// }
// const figures = [new Triangle(4, 5, 3), new Square(7), new Circle(5)];
// handleFigures(figures);

