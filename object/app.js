// let cars = [
//     {
//       "brand": "Toyota",
//       "famousModel": "Camry",
//       "color": "Super White"
//     },
//     {
//       "brand": "Ford",
//       "famousModel": "Mustang",
//       "color": "Race Red"
//     },
//     {
//       "brand": "BMW",
//       "famousModel": "3 Series",
//       "color": "Alpine White"
//     },
//     {
//       "brand": "Mercedes-Benz",
//       "famousModel": "C-Class",
//       "color": "Obsidian Black"
//     },
//     {
//       "brand": "Honda",
//       "famousModel": "Civic",
//       "color": "Crystal Black Pearl"
//     },
//     {
//       "brand": "Tesla",
//       "famousModel": "Model S",
//       "color": "Midnight Silver Metallic"
//     },
//     {
//       "brand": "Audi",
//       "famousModel": "A4",
//       "color": "Ibis White"
//     },
//     {
//       "brand": "Chevrolet",
//       "famousModel": "Corvette",
//       "color": "Torch Red"
//     },
//     {
//       "brand": "Nissan",
//       "famousModel": "Altima",
//       "color": "Gun Metallic"
//     },
//     {
//       "brand": "Hyundai",
//       "famousModel": "Elantra",
//       "color": "Phantom Black"
//     }
//   ]

//   for(let keys in cars){
//     console.log(cars[keys].famousModel)
//   }


// let input = document.getElementById("input");
// let output = document.querySelector("#output");
// let getdata = [];


// function add(){
//     event.preventDefault();
//    for(let i=0; i<getdata.length; i++)
//     output.innerHTML += `
//     <p>${getdata[i]}</p>
//     console.log(${getdata[i]})`
// }

// let arr = [44,87,5,67,89,34,90];
// localstorage.setItem("number",JSON.stringify(arr))

// let abc = document.getElementById("abc");
// let localdata = JSON.parse(localStorage.getItem("number"));
// for(let i=0; i<localdata; i++){
//     abc.innerHTML += `<li>${localdata[i]}</li>`
// }

//  let obj = {
//     name : "Faizan",
//     age : 19,
//     institute: "SMIT",

//  }
// // obj.institute = "formen";
// obj.institute = "Computer Skills";
// // delete obj.age;
// obj.field = "CS"
// console.log(obj) 

// let main = document.querySelector('.main');
const arrofObj = [
{ name : "Sadiq" , age:26},
{name:"Abdullah",age:34},
{name:"Faizan",age:44},
{name:"Ali",age:54},
{name:"Salman",age:4},
{name:"Sami",age:3},
{name:"Ahsan",age:14},
{name:"Izam",age:29},
{name:"Sallu",age:31},
{name:"Jimmy",age:22},
{name:"Annonmus",age:25},
{name:"Sherry",age:35},
{name:"Aliyan",age:38},
{name:"Tanvir",age:39},
{name:"Abid",age:12},
{name:"Salim",age:27},
{name:"Salman",age:17},
]

for (keys in arrofObj){
    console.log(arrofObj[keys].name)
    console.log(arrofObj[keys].age)
}

// console.log(arrofObj[1])
// console.log(arrofObj[10])




//  for(let i=0; i<arrofObj.length; i++){
// let keys = Object.keys(arrofObj[i]);
//     main.innerHTML += `<tr>
//     <td>${arrofObj[i].name}</td><br>
//     <td>${arrofObj[i].age}</td><br>

//     </tr>`
// }
