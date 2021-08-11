"use strict";const body=document.querySelector("body"),header=document.querySelector("header.header"),menuBody=document.querySelector(".header__menu"),menuBurger=document.querySelector(".header__burger");let numOffClicks=0;function disable(){const e=window.scrollY;body.classList.add("lock"),body.dataset.position=e,body.style.top=-e+"px"}function enable(){const e=parseInt(body.dataset.position,10);body.style.top="auto",body.classList.remove("lock"),window.scroll({top:e,left:0}),body.removeAttribute("class")}function addClass(){menuBurger.classList.add("active"),menuBody.classList.add("active"),header.classList.add("not-opacity")}function removeClass(){menuBurger.classList.remove("active"),menuBody.classList.remove("active"),header.classList.remove("not-opacity")}menuBurger&&menuBurger.addEventListener("click",(function(){numOffClicks++,numOffClicks%2!=0?(addClass(),disable()):(removeClass(),enable(),body.removeAttribute("data-position"))})),window.addEventListener("scroll",(function(){let e=window.scrollY;document.querySelectorAll(".block").forEach(((t,o)=>{t.offsetTop-header.clientHeight<e&&(document.querySelectorAll(".header__link").forEach((e=>{e.classList.contains("active-page")&&e.classList.remove("active-page")})),document.querySelectorAll(".header__menu li")[o].querySelector("a").classList.add("active-page"))}))}));const menuLinks=document.querySelectorAll(".link[data-goto]");if(menuLinks.length>0)for(let e=0;e<menuLinks.length;e++)menuLinks.forEach((e=>{e.addEventListener("click",(function(e){const t=e.target;if(t.dataset.goto&&document.querySelector(t.dataset.goto)){const o=document.querySelector(t.dataset.goto).getBoundingClientRect().top+pageYOffset-header.offsetHeight+20;menuBurger&&menuBurger.classList.contains("active")&&(numOffClicks++,removeClass(),enable()),window.scrollTo({top:o,behavior:"smooth"}),e.preventDefault()}}))}));let backToTopEL=document.querySelector(".back-to-top");function backToTop(){window.addEventListener("scroll",(function(){window.pageYOffset>=200?backToTopEL.classList.add("open"):backToTopEL.classList.remove("open")}));const e=document.querySelectorAll(".smooth");for(let t of e)t.addEventListener("click",(function(e){e.preventDefault();const o=t.getAttribute("href").replace("#","");document.querySelector(o).scrollIntoView({behavior:"smooth",block:"start"})}))}function Focus(e){e.parentElement.classList.add("focus")}function Blur(e){""===e.value.trim()&&e.parentElement.classList.remove("focus")}function advantages(){let e=document.querySelectorAll(".advantages__item"),t=e.length/2;function o(e){return(0^e)===e}if(console.log(t),console.log(o(t)),o(t)||(t=t+1-t,console.log(t)),1===t){e[e.length-1].classList.add("advantages__center")}}backToTop(),advantages();const form=document.getElementById("form");function wpguruLink(){var e=document.getElementsByTagName("body")[0],t=window.getSelection(),o=document.location.href,n=t+("<br /><br />Источник: <a href='"+o+"'>"+o+"</a><br />© Asia-Tower.kz"),s=document.createElement("div");s.style.position="absolute",s.style.left="-99999px",e.appendChild(s),s.innerHTML=n,t.selectAllChildren(s),window.setTimeout((function(){e.removeChild(s)}),0)}form&&document.addEventListener("DOMContentLoaded",(function(){function e(e){e.parentElement.classList.add("_error"),e.classList.add("_error")}function t(e){e.parentElement.classList.remove("_error"),e.classList.remove("_error")}function o(e){return!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value)}function n(e){return!/^[0-9]+$/.test(e.value)}form.addEventListener("submit",(async function(s){s.preventDefault();let c=function(s){let c=0,a=document.querySelectorAll(".input-req");for(let s=0;s<a.length;s++){const r=a[s];t(r),r.classList.contains("email")?o(r)&&(e(r),c++):r.classList.contains("phone")?n(r)&&(e(r),c++):("checkbox"===r.getAttribute("type")&&!1===r.checked||""===r.value)&&(e(r),c++)}return c}(),a=new FormData(form);if(0===c){form.classList.add("_sending");let e=await fetch("sendmail.php",{method:"POST",body:a});if(e.ok){let t=await e.json();alert(t.message),document.querySelectorAll(".input-req").reset(),form.classList.remove("_sending")}else alert("Ошибка соединения. Повторите попытку позже"),form.classList.remove("_sending")}else alert("Введите обязательные поля корректно!");console.log(c)}))})),window.onscroll=function(){window.pageYOffset>140?header.classList.add("active__scroll"):header.classList.remove("active__scroll")},document.oncopy=wpguruLink;