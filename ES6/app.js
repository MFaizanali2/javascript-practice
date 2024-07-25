// function add(a){
//     return a;
// }
// console.log(add(2));

// function sum(){
//     console.log("hello billi")
// }
// sum()




let obj = [
    {
        name : "faizan",
        age :20,
    },
    {
        name : "anus",
        age :22,
    },
    {
        name : "ali",
        age :24,
    }
];

// let abc = obj.filter((sum) =>{
//     return sum.name === "faizan" ;
//     console.log(sum)
// });
// console.log(abc);

// let data = obj.find((sum) => {
//     return sum.name === "faizan"
// });
// console.log(data)





// let data = [45, 56, 7, 23, 9, 6, 99, 103, 167, 75]

// let returndata = data.filter((item) => {
//     return item < 10
// }) 
// console.log(returndata);

// let returndata1 = data.find((item) => {
//     return item > 10
// }) 
// console.log(returndata1);



let userinfo = [
    {
        name : "faizan",
        email : "faizan@gmail.com"
    },
    {
        name : "sami",
        email : "sami@gmail.com"
    },
    {
        name : "ali",
        email : "ali@gmail.com"
    },
];

let email = prompt("enter email");
let existing = userinfo.find((item) => {
    return item.email === email;
})
console.log(existing)

if(existing){
    alert("email already use")
}else{
    alert("stored data")
}