function toolsPageHandle(){const o=document.querySelector(".tools-nav-box");if(!o){return}const e=o.querySelector(".tool-item-list");const t=e.querySelectorAll(".tool-category-name");const n=o.querySelectorAll(".tools-nav-list .tool-nav-category");const l=()=>{t.forEach(e=>{let t=false;const o=[];let l=e.nextElementSibling;while(l){if(l.classList.contains("tool-item")){o.push(l);l=l.nextElementSibling}else{break}}const n=e.querySelector(".fold");n.addEventListener("click",()=>{t=!t;n.classList.remove(`fa-chevron-${t?"down":"left"}`);n.classList.add(`fa-chevron-${t?"left":"down"}`);o.forEach(e=>e.style.display=t?"none":"block")})})};l();const s=()=>{n.forEach(e=>e.classList.remove("active"))};const c=()=>{n.forEach(e=>{const t=o.querySelector(`#${e.dataset.anchor}`);KEEP.utils.title2Top4HTag(e,t,300,()=>{s();e.classList.add("active")})});const e=[...t].map(e=>e.getBoundingClientRect().top);let l=KEEP.utils.headerWrapperDom.getBoundingClientRect().height;if(KEEP.utils.isHideHeader){l=0}window.addEventListener("scroll",()=>{const o=document.body.scrollTop||document.documentElement.scrollTop;e.forEach((e,t)=>{if(o+l>e){s();n[t].classList.add("active")}})})};c()}if(KEEP.theme_config?.pjax?.enable===true&&KEEP.utils){toolsPageHandle()}else{window.addEventListener("DOMContentLoaded",toolsPageHandle)}