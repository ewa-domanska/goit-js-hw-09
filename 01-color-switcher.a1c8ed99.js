var startButton=document.querySelector("[data-start]"),stopButton=document.querySelector("[data-stop]"),background=document.querySelector("body");function getRandomHexColor(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}startButton.addEventListener("click",(function(t){setInterval((function(){background.style.backgroundColor=getRandomHexColor()}),1e3),startButton.disabled=!0}));
//# sourceMappingURL=01-color-switcher.a1c8ed99.js.map