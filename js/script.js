"use strict";

var txtWoord, divResultaat; 

window.addEventListener('load',Initieer);

function Initieer(){
  KoppelDomElementen();
  StandaardInput();
}

function KoppelDomElementen() {
  txtWoord = document.getElementById("txtWoord");
  divResultaat = document.getElementById("divResultaat");  
  let btnHorizontaal = document.querySelector("#btnHorizontaal");
  btnHorizontaal.addEventListener("click",ToonHorizontaal);  
  let btnKeerOm = document.querySelector("#btnKeerOm");
  btnKeerOm.addEventListener("click",KeerOm); 
  let btnEersteA = document.querySelector("#btnEersteA");
  btnEersteA.addEventListener("click",GeefPlaatsEersteA); 
  let btnPalindroom = document.querySelector("#btnPalindroom");
  btnPalindroom.addEventListener("click",CheckPalindroom); 
}

function CheckPalindroom() {
 
}

function KeerOm() {

}

function GeefPlaatsEersteA() {

}

function StandaardInput() {
  txtWoord.value = "radarke";
}

function ToonHorizontaal(){

}

