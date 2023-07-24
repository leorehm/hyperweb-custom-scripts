// ==UserScript==
// @match http://i.redd.it/*
// @match https://i.redd.it/*
// ==/UserScript==


alert("its loaded!");

window.addEventListener('load', function () {

  
  if (document.getElmentsByTagName("img")[0] = window.location.href) 
  document.body.innerHTML = document.getElementsByTagName("img")[0].outerHTML;
})
