(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();(()=>{const c=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),o=()=>{const e=c.querySelectorAll('a[href*="#"]'),t=n.getAttribute("aria-expanded")==="true"||!1;n.setAttribute("aria-expanded",!t),c.classList.toggle("is-open");const s=t?"enableBodyScroll":"disableBodyScroll";if(bodyScrollLock[s](document.body),e.length!==0){if(!t){e.forEach(l=>{l.addEventListener("click",o)});return}e.forEach(l=>{l.removeEventListener("click",o)})}};n.addEventListener("click",o),r.addEventListener("click",o),window.matchMedia("(min-width: 375px)").addEventListener("change",e=>{e.matches&&(c.classList.remove("is-open"),n.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();(function(c){typeof c.matches!="function"&&(c.matches=c.msMatchesSelector||c.mozMatchesSelector||c.webkitMatchesSelector||function(n){for(var r=this,o=(r.document||r.ownerDocument).querySelectorAll(n),e=0;o[e]&&o[e]!==r;)++e;return Boolean(o[e])}),typeof c.closest!="function"&&(c.closest=function(n){for(var r=this;r&&r.nodeType===1;){if(r.matches(n))return r;r=r.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var c=document.querySelectorAll(".js-open-modal"),n=document.querySelector(".js-overlay-modal"),r=document.querySelectorAll(".js-modal-close");c.forEach(function(o){o.addEventListener("click",function(e){e.preventDefault();var t=this.getAttribute("data-modal"),s=document.querySelector('.modal[data-modal="'+t+'"]');s.classList.add("active"),n.classList.add("active")})}),r.forEach(function(o){o.addEventListener("click",function(e){var t=this.closest(".modal");t.classList.remove("active"),n.classList.remove("active")})}),document.body.addEventListener("keyup",function(o){var e=o.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),n.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});
//# sourceMappingURL=commonHelpers.js.map
