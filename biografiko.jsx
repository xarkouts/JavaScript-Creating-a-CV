let potografia=document.getElementById("po");
document.getElementById("onma").innerHTML=localStorage.getItem("onoma");
let ilikia=document.getElementById("ili");
console.log(ilikia)
let txr=document.getElementById("txr");
let tilefono=document.getElementById("tile");
let email=document.getElementById("email");
let glosa1=document.getElementById("proti");
let glosa2=document.getElementById("deyteri");
let titlos_spoydon=document.getElementById("spoyd");
let batmos=document.getElementById("bath");
let epagkelma=document.getElementById("doylia");

ilikia.innerHTML=localStorage.getItem("ilikia");
tilefono.innerHTML=localStorage.getItem("tilefono");
email.innerHTML=localStorage.getItem("email");
txr.innerHTML=localStorage.getItem("bio");
glosa1.innerHTML=localStorage.getItem("g1");
glosa2.innerHTML=localStorage.getItem("g2");
titlos_spoydon.innerHTML=localStorage.getItem("titlos");
batmos.innerHTML=localStorage.getItem("batmos");
epagkelma.innerHTML=localStorage.getItem("epagkelma");