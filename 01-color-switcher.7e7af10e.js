let e,t=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]"),a=document.querySelector("body");t.addEventListener("click",(r=>{e=setInterval((()=>{a.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.disabled=!0,d.disabled=!1})),d.addEventListener("click",(a=>{clearInterval(e),d.disabled=!0,t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.7e7af10e.js.map