document.getElementById("mouse").addEventListener("mouseleave", faizi);
document.getElementById("mouse").addEventListener("click", ali);
function faizi() {
    document.getElementById("mouse").style.backgroundColor = "red";
}
function ali() {
    document.getElementById("mouse").removeEventListener("mouseleave", faizi);
}

// document.querySelector('#outer').addEventListener("mouseenter", function(){
//     console.log('outer div');
// }),false;
// document.querySelector('#inner').addEventListener("mouseenter",function(){
//     console.log('inner div');
// }),false;

// document.getElementById("mouse").addEventListener('mouseenter',faizi);
// document.getElementById("mouse").addEventListener('mouseenter', function(){
//     document.getElementById("mouse").style.border = "10px solid purple";
// });


// document.getElementById("mouse").onclick = faizi;


document.getElementById("click").onmouseenter = button;
function button() {
    document.getElementById("click").style.backgroundColor = 'royalblue';
    document.getElementById("click").style.border = 'none';
    document.getElementById("click").style.padding = '10px 20px';
    document.getElementById("click").style.overflow = 'hidden';
    document.getElementById("click").style.borderRadius = '20px';
    document.getElementById("click").style.Color = 'white';
    document.getElementById("click").style.fontWeight = 'bolder';
    console.log("click the btn");
    document.getElementById("click").style.float = 'left';
}

// function mouseover(){
//     document.getElementById("mouse").style.backgroundColor= 'black';

// }

// let me = document.querySelector("#click");
//  me.onclick = () => {
//     console.log("btn was click");
//     let num = 25;
//     num++
//     console.log(num);
// }