import{a as g,S as L,i as c}from"./assets/vendor-ee72e1a4.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const u="/goit-js-hw-12/assets/error-ed7f5b38.svg",b="https://pixabay.com",w="api/",C="44801301-54ead35aff71c3b10e6d6b08d";g.defaults.baseURL=b;function p({q:r="",page:s=1,per_page:i=15,orientationPhoto:l="horizontal",typeImage:e="photo",safesearch:t="true"}={}){return g.get(w,{params:{key:C,q:r,page:s,per_page:i,language:"en",orientationPhoto:l,typeImage:e,safesearch:t}}).then(({data:n})=>n)}const v=new L(".gallery a",{captionsData:"alt",captionDelay:250}),d=document.querySelector(".gallery");function h(r){d.innerHTML="";const s=r.map(({largeImageURL:i,webformatURL:l,tags:e,likes:t,views:n,comments:f,downloads:y})=>`<li class="gallery-item">
        <a href="${i}">
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
      `).join("");d.insertAdjacentHTML("afterbegin",s),v.refresh()}const o={form:document.querySelector(".form"),list:document.querySelector(".gallery"),buttonLoadMore:document.querySelector('[data-action="load-more"]'),spinner:document.querySelector(".loader")},a={q:"",page:1,per_page:15,maxPage:0,orientationPhoto:"horizontal",typeImage:"photo",safesearch:"true"};o.form.addEventListener("submit",M);o.buttonLoadMore.classList.add("visually-hidden");console.log(o.buttonLoadMore);async function M(r){r.preventDefault(),o.list.innerHTML="",a.page=1;const s=r.currentTarget;if(a.q=s.elements.query.value.trim(),!a.q){c.show({backgroundColor:"#ef4040",close:!1,closeOnClick:!0,progressBarColor:"white",title:"Error",titleColor:"white",position:"topRight",messageColor:"white",messageSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!",icon:"icon-error.svg",iconUrl:u}),s.reset();return}console.log(a.q),o.buttonLoadMore.classList.remove("visually-hidden"),o.buttonLoadMore.disabled=!0,o.spinner.classList.remove("visually-hidden");try{const{hits:i,total:l}=await p(a);a.maxPage=Math.ceil(l/a.per_page),h(i),i.length>0&&i.length!==l?(o.buttonLoadMore.disabled=!1,o.spinner.classList.add("visually-hidden"),o.buttonLoadMore.addEventListener("click",m)):(o.buttonLoadMore.classList.add("visually-hidden"),c.show({backgroundColor:"#ef4040",close:!1,closeOnClick:!0,progressBarColor:"white",title:"Error",titleColor:"white",position:"topRight",messageColor:"white",messageSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!",icon:"icon-error.svg",iconUrl:u}))}catch(i){console.log(i),c.show({backgroundColor:"#ef4040",close:!1,closeOnClick:!0,progressBarColor:"white",title:"Error",titleColor:"white",position:"topRight",messageColor:"white",messageSize:"16px",message:"Схоже виникла помилка!",icon:"icon-error.svg",iconUrl:u})}finally{s.reset()}}async function m(){a.page+=1,o.buttonLoadMore.disabled=!0,o.spinner.classList.remove("visually-hidden");try{const{hits:r}=await p(a);h(r)}catch(r){console.log(r),c.show({backgroundColor:"#ef4040",close:!1,closeOnClick:!0,progressBarColor:"white",title:"Error",titleColor:"white",position:"topRight",messageColor:"white",messageSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!",icon:"icon-error.svg",iconUrl:u})}finally{o.buttonLoadMore.disabled=!1,o.spinner.classList.add("visually-hidden"),a.page===a.maxPage&&(o.buttonLoadMore.classList.add("visually-hidden"),o.buttonLoadMore.removeEventListener("click",m),c.show({backgroundColor:"#ef4040",close:!1,closeOnClick:!0,progressBarColor:"white",title:"Error",titleColor:"white",position:"topRight",messageColor:"white",messageSize:"16px",message:"Це остання сторінка з можливих!",icon:"icon-error.svg",iconUrl:u}))}}
//# sourceMappingURL=commonHelpers.js.map
