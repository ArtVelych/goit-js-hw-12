import{A as q,S as E,i as c}from"./assets/vendor-db5ad915.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const O=document.querySelector(".form"),u=document.querySelector(".input-name"),l=document.querySelector(".loader"),p=document.querySelector(".gallery"),m=document.querySelector(".load-btn");let n=0,d=0,h=1;const f=q.create({baseURL:"https://pixabay.com",params:{key:"42444486-bc4896f356324bce186cf1418",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:1}});let P=new E(".image-link",{captionsData:"alt",captionDelay:250});async function $(r){r.preventDefault();const t=u.value.trim();if(t===""){c.show({title:"Error",message:"Please enter a search query"});return}u.value="",p.innerHTML="",h=1,n=0,g(),l.classList.add("visible");try{const i=(await f.get("/api/",{params:{q:t}})).data;d=i.totalHits,n=y(i.hits,d,n)}catch(s){console.log("Error fetching data:",s),c.show({title:"Error",message:"Oops, something went wrong"})}finally{l.classList.remove("visible")}}function y(r,t,s){if(r.length===0){c.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",messageColor:"white",messageSize:"25"});return}return r.forEach(i=>{const{webformatURL:e,largeImageURL:o,tags:a,likes:b,views:v,comments:w,downloads:L}=i,S=x(e,o,a,b,v,w,L);p.insertAdjacentHTML("beforeend",S)}),s+=r.length,P.refresh(),k(s,t),s}function x(r,t,s,i,e,o,a){return`<li class="photo">
  <div class="photo-card">
    <a class="image-link" data-lightbox="image" href="${t}">
    <img class="gallery-image" data-source="${t}"  src="${r}" alt="${s}"></img>
    </a>
    </div>
      <div class="description">
        <p class="description-item"> Likes ${i}</p>
        <p class="description-item"> Views ${e}</p>
        <p class="description-item"> Comments ${o}</p>
        <p class="description-item"> Downloads ${a}</p>

    </div>
  </li>`}async function C(){g(),l.classList.add("visible");const r=u.value.trim();try{const s=(await f.get("/api/",{params:{q:r,page:h+=1}})).data;d=s.totalHits,n=y(s.hits,d,n),H()}catch(t){console.log("Error fetching data:",t),c.show({title:"Error",message:"Oops, something went wrong"})}finally{l.classList.remove("visible")}}function k(r,t){if(r>=t){c.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#125487",messageColor:"white",messageSize:"25"}),g();return}else M()}function H(){const r=document.querySelector(".photo").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}function M(){m.style.visibility="visible"}function g(){m.style.visibility="hidden"}O.addEventListener("submit",$);m.addEventListener("click",C);
//# sourceMappingURL=commonHelpers.js.map
