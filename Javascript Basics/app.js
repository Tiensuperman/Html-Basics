//let cash = 50;
//let price = 40;
//let count = 1;
//let isStoreOpen = true;

//let str = cash >= price && isStoreOpen ? "Give Receipt" : "Do Not Give Receipt"
//console.log (str)

//while (count <= 10) {
//console.log (count)
//count = count + 1
//}

//for (let i = 1; i <= 20; ++i) {
//if (i % 3 === 0) {
//console.log(`${i} -> Frontend`)
//}
//else if (i % 5 === 0) {
//console.log(`${i} -> Simplified`)
//}
//else if (i % 3 === 0 && i % 5 === 0) {
//console.log(`${i} -> Frontend Simplified`)
//}
//else {
//console.log(`${i} -> ${i}`)
//}
//}

//const str = "Frontend Simplified"

//for (let i = 0; i < str.length; ++1) {
//console.log (str[i])
//}

//Function Defenition
//function welcomePersonToFES (name) {
//console.log (`Welcome to Frontend Simplified, ${name}`)
//}

//Call The Function
//welcomePersonToFES ('Mitri');
//welcomePersonToFES ('Tien');
//welcomePersonToFES ('Jimmy');

//function sumOfTwoNumbers(num1, num2) {
//return num1 + num2
//}

//console.log(sumOfTwoNumbers(10, 10));

//function convertCelsiusToFahrenheit(celsius) {
//return celsius * 1.8 + 32
//}

//console.log(convertCelsiusToFahrenheit(0))
//console.log(convertCelsiusToFahrenheit(10))
//console.log(convertCelsiusToFahrenheit(20))

//const convertCelsiusToFahrenheit = () => {
//return celsius * 1.8 + 32
//}

//console.log(convertCelsiusToFahrenheit(0))

//let item1 = 20
//let item2 = 30
//let item3 = 40
//let item4 = 50

//let arr = [20, 30, 40, 50, 100]

//console.log(arr[0])

//console.log(arr[arr.length - 1])

//arr.push(200)

//let arr = [20, 30, 40, 50, 100]

//let newArr = arr.filter(element => element >= 50)

//console.log(newArr);

//let grades = ['A+', 'A', 'FAIL']

//let goodGrades = grades.filter((element => element !== 'FAIL'))

//console.log(goodGrades)

//let grades = ['A+', 'A', 'FAIL']

//let goodGrades = []

//for (let i = 0; i < grades.length; ++i) {
//if (grades [i] !=='FAIL') {
//goodGrades.push(grades[i]);
//}
//}

//console.log(goodGrades);

//let arr = [1, 4, 9, 16]

//let newArray = arr.map(element => {
//return 'dog';
//})

//console.log(newArray)

//let dollars = [1, 5, 10, 3];

//let cents = dollar.map(element => {
//return dollar * 100;
//})

//let dollars = [1, 5, 10, 3];

//let cents = [];

//for (let i = 0; i < dollars.length; ++i) {
//cents.push(dollars[i] * 100);
//}

//console.log(cents);

//let userFirstName = "Dinh";
//let userLastName = "Tien Dang";
//let userDiscordId = "Tiensuperman#2061";
//let userSubscriptionStatus = "VIP";

//let users = [
//{
//username: "Tiensuperman",
//email: "ddtien@outlook.com",
//password: "test123",
//subscriptionStatus: "VIP",
//discordId: "Tiensuperman#2061",
// lessonsCompleted: [0, 1],
//},
//{
//  username: "Jimmy",
// email: "jimmy@outlook.com",
// password: "tien123",
//subscriptionStatus: "VIP",
//discordId: "Jimmy#2061",
// lessonsCompleted: [0, 1, 2, 3],
//},
//];

//function login(email, password) {
//for (let i = 0; i < users.length; ++i) {
// console.log(users[i]);
// }
//}

//login("ddtien@outlook.com", "test123");

//function register(user) {
  //user.push(user);
//}

//register({
  //username: "Tien",
  //email: "ddtien@outlook.com",
  //password: "deeznuts",
 //subscriptionStatus: "VIP",
  //discordId: "Tiensuperman#2061",
 // lessonsCompleted: [0, 1],
//});

//console.log(user);

//First way
//console.log(document.querySelector('.title'))
//Second way
//console.log(document.getElementById('title'))

//Change HTML
//document.querySelector('.title').innerHTML = 'Frontend Simplified'

//Change CSS
//document.querySelector('.title').style.fontSize = '18px'

//function changeTitleToRed() {
  //document.querySelector('.title').style.color = 'red'
//}

function toggleDark() {
  document.querySelector('body').classList.toggle("dark-theme")
}

