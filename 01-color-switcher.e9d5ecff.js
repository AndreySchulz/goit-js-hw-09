const t={bodyDocument:document.querySelector("body"),btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")};let e=null;t.btnStart.addEventListener("click",(()=>{t.btnStart.setAttribute("disabled","disabled"),e=setInterval((()=>{t.bodyDocument.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.btnStop.addEventListener("click",(()=>{t.btnStart.removeAttribute("disabled","disabled"),clearInterval(e)}));
//# sourceMappingURL=01-color-switcher.e9d5ecff.js.map
