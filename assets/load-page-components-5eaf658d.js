import{M as f,H as g,C as v}from"./mobile-burger-menu-2042cb4b.js";class y{init(){this.preloader(),this.heroAnimation(),this.initSlick(),this.checkScrollPosition(),this.initScrollers(),this.initIndustryExpander(),this.initBioViewer(),this.updateDates(),new f().initMobileMenu(),new g(".card")}preloader(){document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("preloader");e&&setTimeout(function(){e.style.animation="bounce 2s infinite",setTimeout(function(){e.style.display="none"},1500)},700)})}heroAnimation(){const i=document.querySelector(".hero"),t=window.innerWidth>680;!i||!t||i.addEventListener("mousemove",o=>{const r=o.clientX-window.innerWidth/2,n=o.clientY-window.innerHeight/2,c=r/window.innerWidth*10,a=n/window.innerHeight*10;i.style.backgroundPosition=`${50+c}% ${60+a}%`})}initSlick(){$(".logo-slider").slick({slidesToShow:5,slidesToScroll:1,autoplay:!0,speed:3e3,arrows:!1,autoplaySpeed:0,variableWidth:!0,responsive:[{breakpoint:1100,settings:{slidesToShow:4}},{breakpoint:680,settings:{slidesToShow:3}},{breakpoint:580,settings:{slidesToShow:1}}]}),$(".testimonial-slider").slick({dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:5e3,arrows:!0,fade:!0,cssEase:"linear",adaptiveHeight:!0,prevArrow:'<button type="button" class="slick-prev" aria-label="Previous"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></button>',nextArrow:'<button type="button" class="slick-next" aria-label="Next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg></button>',responsive:[{breakpoint:768,settings:{arrows:!1,dots:!0}}]}),$(".success-stories-slider").slick({slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!0,infinite:!0,autoplay:!0,autoplaySpeed:4e3,fade:!0,cssEase:"linear"})}checkScrollPosition(){let e=!1,i=0,t=0;$(".handle").on("mousedown",o=>{e=!0,i=o.clientY,t=parseInt($(".handle").css("top"))||0,$(".handle").css("cursor","grabbing")}),$(document).on("mousemove",o=>{var r,n;if(e){o.preventDefault();const c=o.clientY-i,a=t+c,d=window.innerHeight,s=d/6/2,p=d,u=Math.min(p,Math.max(s,a));$(".handle").css("top",u);const l=((n=(r=$("#division-sections"))==null?void 0:r.offset())==null?void 0:n.top)||0,w=$("#division-sections").outerHeight()||1,h=(u-s)/(p-s)*w+l;window.scrollTo(0,h)}}),$(document).on("mouseup",()=>{e=!1,$(".handle").css("cursor","grab")}),document.addEventListener("scroll",()=>{var u,l;const o=$(window).scrollTop()||0,r=(l=(u=$("#division-sections"))==null?void 0:u.offset())==null?void 0:l.top,n=$("#division-sections").outerHeight();if(!o||!r||!n)return;const c=r+n-n/6;o>=r&&o<=c?$(".section-progress").addClass("is-visible"):$(".section-progress").removeClass("is-visible");const a=window.innerHeight,d=a/6/2,s=a,p=(o-r)/n*(s-d)+d;$(".handle").css("top",p)})}initScrollers(){this.initIndustryScroller(),this.initCardScroller()}initIndustryScroller(){const e=document.querySelector("#industries .motion-scroller"),i=e==null?void 0:e.querySelector(".viewport");!e||!i||e.addEventListener("mousemove",t=>{const o=t.clientX,r=i.offsetWidth,n=i.scrollWidth,c=o/r*n-r/2;i.scrollLeft=c})}initCardScroller(){const e=document.querySelector(".our-work .motion-scroller"),i=e==null?void 0:e.querySelector(".viewport");if(!e||!i)return;let t=!1,o,r,n=null;const a=(()=>window.innerWidth>2180?850:window.innerWidth>1280?300:window.innerWidth>768?200:100)(),d=150,s=i.querySelector(".content");if(!s)return;const p=l=>{const w=s.getBoundingClientRect(),h=l.clientX;n&&(window.clearInterval(n),n=null),!t&&(h<w.left+a?n=window.setInterval(()=>{s.scrollLeft-=d},1):h>w.right-a&&(n=window.setInterval(()=>{s.scrollLeft+=d},1)))},u=()=>{n&&(window.clearInterval(n),n=null)};s.addEventListener("mousedown",l=>{t=!0,s.style.cursor="grabbing",o=l.pageX-s.offsetLeft,r=s.scrollLeft,u()}),s.addEventListener("mouseleave",()=>{t=!1,s.style.cursor="grab",u()}),s.addEventListener("mouseup",()=>{t=!1,s.style.cursor="grab"}),s.addEventListener("mousemove",l=>{if(t){l.preventDefault();const h=(l.pageX-s.offsetLeft-o)*2;s.scrollLeft=r-h}else p(l)}),s.style.cursor="grab"}initIndustryExpander(){if(window.innerWidth<=640){const e=document.querySelectorAll(".item");e.forEach(i=>{const t=i.querySelector(".title");t&&t.addEventListener("click",o=>{o.preventDefault(),e.forEach(r=>{r==i?r.classList.toggle("open"):r.classList.remove("open")})})})}}updateDates(){const e=new v;e.current(),e.yearsSince()}initBioViewer(){$(document).on("click",".js-bio-more",e=>{const t=$(e.target).closest(".member");if(t.hasClass("is-expanded")){t.removeClass("is-expanded");return}t.addClass("is-expanded")})}}class L{async loadComponents(){const e=document.querySelectorAll("[data-component]");for(const i of e){const t=i.getAttribute("data-component");if(t)try{if(!/^[a-zA-Z0-9-_]+\.html$/.test(t))throw new Error("Invalid component filename");const o=await fetch(`/page-components/${t}`,{credentials:"omit",mode:"same-origin",headers:{Accept:"text/html"}});if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);const r=await o.text(),n=new DOMParser().parseFromString(r,"text/html").body.innerHTML;if(i.innerHTML=n,t==="footer.html"){const c=document.getElementById("current-year");c&&(c.textContent=new Date().getFullYear().toString())}}catch(o){console.error(`Error loading component ${t}:`,o)}}}constructor(){document.addEventListener("DOMContentLoaded",()=>this.loadComponents())}}export{y as A,L};