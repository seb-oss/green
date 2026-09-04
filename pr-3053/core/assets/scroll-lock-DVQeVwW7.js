import{k as c,i as n}from"./iframe-CuywSVrm.js";const o=new Set;function i(){c.instance.injectGlobalStyles("dialog-scroll-lock",n`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `)}function m(t){if(o.add(t),!document.documentElement.classList.contains("gds-scroll-lock")){const l=s()+d();let e=getComputedStyle(document.documentElement).scrollbarGutter;(!e||e==="auto")&&(e="stable"),l<2&&(e=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",e),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size",`${l}px`)}}function u(t){o.delete(t),o.size===0&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}function s(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function d(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}export{m as l,i as r,u};
