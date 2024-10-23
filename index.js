import{S as l,i as d}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u="46669299-ebb68efeed7427af4171916f3",f="https://pixabay.com/api/",m=async s=>{const t=`${f}?key=${u}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`,o=await fetch(t);if(!o.ok)throw new Error("Error fetching images");return(await o.json()).hits},p=s=>{const t=document.querySelector(".list-photos");if(t.innerHTML="",s.length===0){h();return}const o=s.map(e=>`
        <li>
            <a href="${e.largeImageURL}">
                <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
            </a>
            <div>
                <p>Likes: ${e.likes}</p>
                <p>Views: ${e.views}</p>
                <p>Comments: ${e.comments}</p>
                <p>Downloads: ${e.downloads}</p>
            </div>
        </li>
    `).join("");t.insertAdjacentHTML("beforeend",o),new l(".list-photos a").refresh()},h=()=>{d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})},g=document.getElementById("search-form"),c=document.getElementById("search-field"),i=document.createElement("div");i.textContent="Loading...";i.classList.add("loading-indicator");g.addEventListener("submit",async s=>{s.preventDefault();const t=c.value.trim();if(t){document.body.appendChild(i);try{const o=await m(t);p(o)}catch(o){console.error(o)}finally{i.remove()}c.value=""}});
//# sourceMappingURL=index.js.map
