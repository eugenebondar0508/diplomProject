(()=>{"use strict";(()=>{const e=document.querySelector(".modal-callback"),t=document.querySelector(".modal-overlay"),l=document.querySelector(".modal-close"),o=document.querySelector(".header"),n=document.querySelector(".quest-section");o.addEventListener("click",(l=>{l.target.matches(".callback-btn")&&(e.style.display="block",t.style.display="block")})),document.addEventListener("click",(l=>{l.target.matches(".modal-overlay")&&(e.style.display="none",t.style.display="none")})),l.addEventListener("click",(l=>{e.style.display="none",t.style.display="none"})),n.addEventListener("click",(l=>{l.target.matches(".button-services")&&(e.style.display="block",t.style.display="block")}))})(),(()=>{const e=document.querySelectorAll(".item");let t=0;document.querySelector(".top-slider"),setInterval((()=>{e[t].style.display="none",t++,t>=e.length&&(t=0),e[t].style.display="block",(e[t].style.display="block")&&e[t].querySelector(".table").classList.add("active")}),3e3)})(),(()=>{new SliderCarousel({main:".services-elements",wrap:".services-carousel",next:".arrow-right",prev:".arrow-left",slideToShow:3,infinity:!0,responsive:[{breakpoint:1024,slideToShow:3},{breakpoint:768,slideToShow:2},{breakpoint:576,slideToShow:1}]}).init();const e=document.querySelector(".modal-callback"),t=document.querySelector(".modal-overlay");document.querySelectorAll(".slider__item").forEach((l=>{l.addEventListener("click",(l=>{l.target.matches(".absolute")&&(e.style.display="block",t.style.display="block")}))}))})(),(()=>{const e=document.querySelector(".accordeon"),t=(e.querySelectorAll(".element"),e.querySelectorAll(".title")),l=e.querySelectorAll(".element-content");e.addEventListener("click",(e=>{let o=e.target;o.matches(".title")&&t.forEach(((e,t)=>{e===o&&(e=>{for(let t=0;t<l.length;t++)e===t?(l[t].style.display="block",l[t].parentNode.classList.add("active")):(l[t].style.display="none",l[t].parentNode.classList.remove("active"))})(t)}))}))})(),(()=>{const e=document.querySelector(".up");let t,l;function o(){t>0?(window.scrollTo(0,t),t-=100,l=setTimeout(o,15)):(clearTimeout(l),window.scrollTo(0,0))}e.style.display="none",e.addEventListener("click",(()=>{t=window.pageYOffset,o()})),window.addEventListener("scroll",(()=>{pageYOffset<document.documentElement.clientHeight?e.style.display="none":e.style.display="block"}))})(),document.addEventListener("input",(e=>{e.target.matches('input[name = "fio"]')&&(e.target.value=e.target.value.replace(/[^А-Яа-яЁё\ '']/g,"")),e.target.matches('input[name = "tel"]')&&(e.target.value=e.target.value.replace(/[^0-9\+]/g,""))})),(()=>{const e=document.getElementById("callback"),t=document.createElement("div"),l=e.querySelector('input[name ="fio"]'),o=e.querySelector('input[name ="tel"]');t.style.cssText="font-size: 2rem";const n=[l,o];document.addEventListener("submit",(n=>{if(n.preventDefault(),n.target.matches("form")){if(!o.value||o.value.length<5||o.value.length>14)return void(o.style.border="solid red");if(!l.value||l.value.length<2)return void(l.style.border="solid red");l.style.border="none",o.style.border="none",e.appendChild(t),t.textContent="Загрузка..."}if(n.target.matches("form")){const e=new FormData(n.target);let l={};e.forEach(((e,t)=>{l[t]=e})),r(l,(()=>{t.textContent="Спасибо! Мы скоро с вами свяжемся"}),(e=>{t.textContent="Что-то пошло не так... ",console.error(e)}))}}));const r=(e,t,l)=>{const o=new XMLHttpRequest;o.addEventListener("readystatechange",(()=>{4===o.readyState&&(200===o.status?(t(),n.forEach((e=>{e.value=""}))):l(o.status))})),o.open("POST","./server.php"),o.setRequestHeader("Content-Type","application/json"),o.send(JSON.stringify(e))}})(),(()=>{const e=[document.querySelector('a[href*="services"]'),document.querySelector('a[href*="faq"]'),document.querySelector('a[href*="contacts"]')];for(let t of e)t.addEventListener("click",(e=>{e.preventDefault();const l=t.getAttribute("href");document.querySelector(""+l).scrollIntoView({behavior:"smooth",block:"start"})}))})()})();