import{d as l}from"./index-DrFu-skq.js";import{Q as _}from"./lit-element-BoQqPHl6.js";import{n as O}from"./directive-helpers-8zWUTkHM.js";const{global:h}=__STORYBOOK_MODULE_GLOBAL__,{simulatePageLoad:p,simulateDOMContentLoaded:m}=__STORYBOOK_MODULE_PREVIEW_API__;var{Node:u}=h,T=(i,d)=>{let{id:s,component:o}=d;if(!o)throw new Error(`Unable to render story ${s} as the component annotation is missing from the default export`);let t=document.createElement(o);return Object.entries(i).forEach(([n,e])=>{t[n]=e}),t};function a({storyFn:i,kind:d,name:s,showMain:o,showError:t,forceRemount:n},e){let r=i();if(o(),O(r)){(n||!e.querySelector('[id="root-inner"]'))&&(e.innerHTML='<div id="root-inner"></div>');let f=e.querySelector('[id="root-inner"]');_(r,f),p(e)}else if(typeof r=="string")e.innerHTML=r,p(e);else if(r instanceof u){if(e.firstChild===r&&!n)return;e.innerHTML="",e.appendChild(r),m()}else t({title:`Expecting an HTML snippet or DOM node from the story: "${s}" of "${d}".`,description:l`
        Did you forget to return the HTML snippet from the story?
        Use "() => <your snippet or node>" or when defining the story.
      `})}var g={renderer:"web-components"};export{g as parameters,T as render,a as renderToCanvas};