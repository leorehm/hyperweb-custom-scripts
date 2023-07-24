// ==UserScript==
// @match http://i.redd.it/*
// @match https://i.redd.it/*
// ==/UserScript==

window.addEventListener('load', function () {

  alert("its loaded!");
  
  if (document.getElmentsByTagName("img")[0] = window.location.href) 
  document.body.innerHTML = document.getElementsByTagName("img")[0].outerHTML;
})
