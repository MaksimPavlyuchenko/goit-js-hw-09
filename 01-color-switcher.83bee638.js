const t=document.querySelector(["button[data-start]"]),e=document.querySelector(["button[data-stop]"]),o=document.querySelector("body");let r=o.style.backgroundColor;function a(){o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.addEventListener("click",(()=>{r=setInterval(a,1e3),t.disabled="true"})),e.addEventListener("click",(()=>{clearInterval(r),t.disabled=""}));
//# sourceMappingURL=01-color-switcher.83bee638.js.map