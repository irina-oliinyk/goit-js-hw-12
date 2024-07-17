import{a as g,S as L,i as c}from"./assets/vendor-ee72e1a4.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const u="/goit-js-hw-12/assets/error-ed7f5b38.svg",b="https://pixabay.com",w="api/",v="44801301-54ead35aff71c3b10e6d6b08d";g.defaults.baseURL=b;function p({q:r="",page:s=1,per_page:a=15,orientationPhoto:l="horizontal",typeImage:e="photo",safesearch:t="true"}={}){return g.get(w,{params:{key:v,q:r,page:s,per_page:a,language:"en",orientationPhoto:l,typeImage:e,safesearch:t}}).then(({data:n})=>n)}const C=new L(".gallery a",{captionsData:"alt",captionDelay:250}),d=document.querySelector(".gallery");function h(r){d.innerHTML="";const s=r.map(({largeImageURL:a,webformatURL:l,tags:e,likes:t,views:n,comments:f,downloads:y})=>`<li class="gallery-item">
        <a href="${a}">
          <img src="${l}" alt="${e}" width="320" height=200" class="card-img"/>
        </a>
        <ul class="galery-item-description">
          <li>
            <p class="count-text">Likes</p>
            <p class="count">${t}</p>
          </li>
          <li>
            <p class="count-text">Views</p>
            <p class="count">${n}</p>
          </li>
          <li>
            <p class="count-text">Comments</p>
            <p class="count">${f}</p>
          </li>
          <li>
            <p class="count-text">Downloads</p>
            <p class="count">${y}</p>
          </li>
        </ul>
      </li>
      `).join("");d.insertAdjacentHTML("afterbegin",s),C.refresh()}const o={form:document.querySelector(".form"),list:document.querySelector(".gallery"),buttonLoadMore:document.querySelector('[data-action="load-more"]'),spinner:document.querySelector(".loader")},i={q:"",page:1,per_page:15,maxPage:0,orientationPhoto:"horizontal",typeImage:"photo",safesearch:"true"};o.form.addEventListener("submit",M);o.buttonLoadMore.classList.add("visually-hidden");console.log(o.buttonLoadMore);async function M(r){r.preventDefault(),o.list.innerHTML="",i.page=1;const s=r.currentTarget;if(i.q=s.elements.query.value.trim(),!i.q){c.show({backgroundColor:"#ef4040",close:!1,closeOnClick:!0,progressBarColor:"white",title:"Error",titleColor:"white",position:"topRight",messageColor:"white",messageSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!",icon:"icon-error.svg",iconUrl:u}),s.reset();return}console.log(i.q),o.buttonLoadMore.classList.remove("visually-hidden"),o.buttonLoadMore.disabled=!0,o.spinner.classList.remove("visually-hidden");try{const{hits:a,total:l}=await p(i);i.maxPage=Math.ceil(l/i.per_page),h(a),a.length>0&&a.length!==l?(o.buttonLoadMore.disabled=!1,o.spinner.classList.add("visually-hidden"),o.buttonLoadMore.addEventListener("click",m)):(o.buttonLoadMore.classList.add("visually-hidden"),c.show({backgroundColor:"#ef4040",close:!1,closeOnClick:!0,progressBarColor:"white",title:"Error",titleColor:"white",position:"topRight",messageColor:"white",messageSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!",icon:"icon-error.svg",iconUrl:u}))}catch(a){console.log(a),c.show({backgroundColor:"#ef4040",close:!1,closeOnClick:!0,progressBarColor:"white",title:"Error",titleColor:"white",position:"topRight",messageColor:"white",messageSize:"16px",message:"Схоже виникла помилка!",icon:"icon-error.svg",iconUrl:u})}finally{s.reset()}}async function m(){i.page+=1,o.buttonLoadMore.disabled=!0,o.spinner.classList.remove("visually-hidden");try{const{hits:r}=await p(i);h(r)}catch(r){console.log(r),c.show({backgroundColor:"#ef4040",close:!1,closeOnClick:!0,progressBarColor:"white",title:"Error",titleColor:"white",position:"topRight",messageColor:"white",messageSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!",icon:"icon-error.svg",iconUrl:u})}finally{o.buttonLoadMore.disabled=!1,o.spinner.classList.add("visually-hidden"),i.page===i.maxPage&&(o.buttonLoadMore.classList.add("visually-hidden"),o.buttonLoadMore.removeEventListener("click",m))}}
//# sourceMappingURL=commonHelpers.js.map
