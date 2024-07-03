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

let main = document.querySelector('.main');
const arrofObj = [
{ name : "Sadiq" , age:26},
{name:"Abdullah",age:34},
{name:"Abdullah",age:34},
{name:"Abdullah",age:34},
{name:"Abdullah",age:34},
{name:"Abdullah",age:34},
{name:"Abdullah",age:34},
{name:"Abdullah",age:34},
{name:"Abdullah",age:34},
{name:"Abdullah",age:34},
{name:"Abdullah",age:34},
{name:"Abdullah",age:34},
{name:"Abdullah",age:34},
{name:"Abdullah",age:34},
{name:"Abdullah",age:34},
{name:"Abdullah",age:34},
{name:"Abdullah",age:34},
]
console.log(arrofObj[1].item2)
console.log(arrofObj[0].item)




 for(let i=0; i<arrofObj.length; i++){
let keys = Object.keys(arrofObj[i]);
    main.innerHTML += `<tr>
    <td>${arrofObj[i].name}</td>
    <td>${arrofObj[i].age}</td>

    </tr>`
}