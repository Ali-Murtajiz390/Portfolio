// Typing animation

const words = ["App Developer","UI Designer","Computer Science Student"];

let i=0;
let j=0;
let current="";
let isDeleting=false;

function type(){

current=words[i];

if(isDeleting){

document.getElementById("typing").textContent=current.substring(0,j--);

}else{

document.getElementById("typing").textContent=current.substring(0,j++);

}

if(!isDeleting && j===current.length){

isDeleting=true;
setTimeout(type,1000);
return;

}

if(isDeleting && j===0){

isDeleting=false;
i=(i+1)%words.length;

}

setTimeout(type,100);

}

type();


// Modal popup

function openModal(project){

document.getElementById("modal").style.display="block";

document.getElementById("modalText").innerText=
project + " is one of my academic development projects.";

}

function closeModal(){

document.getElementById("modal").style.display="none";

}
const toggle = document.getElementById("themeToggle");

toggle.onclick = function(){

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){
toggle.textContent="☀️";
}else{
toggle.textContent="🌙";
}

}