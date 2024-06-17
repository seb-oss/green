import{g as h,G as x,h as _}from"./gds-element-4f5906f2.js";import{t as w}from"./tokens.style-1e462ec5.js";import{r as y,i as b}from"./lit-element-2a5e401f.js";import{n as $}from"./Reflect-a49e984a.js";import{w as k}from"./watch-c4961afe.js";const T={0:"0px","2xs":"320px",xs:"425px",s:"768px",m:"1024px",l:"1280px",xl:"1440px","2xl":"2560px","3xl":"3840px","4xl":"4320px","5xl":"6016px","6xl":"7680px"},C=/^([<|>]=?)?([0-9a-z]+)/,g=["{","}",";",","],d=[" ","/n"];function S(t){const r=[];let a="";for(let e=0;e<t.length;e++){const n=t[e];if(d.includes(n)||(a+=n),g.includes(n)){r.push(a.slice(0,-1)),r.push(n),a="";continue}if(d.includes(n)||e===t.length-1){r.push(a),a="";continue}}return r.filter(e=>e!=="")}function G(t){const r=[];let a="bp",e,n=!1;for(const l of t){if(!g.includes(l)){if(a==="val"&&e)l!=="}"&&e.values.push(l);else{if(e&&n){e.breakpoint+=`,${l}`,n=!1;continue}e?(a="val",e.values.push(e.breakpoint),e.values.push(l),e.breakpoint="-"):(e={breakpoint:l,values:[]},r.push(e))}continue}if(l===","){n=!0;continue}if(l==="{"){a="val";continue}if(l==="}"||l===";"){a="bp",e=void 0;continue}}return r.map(l=>(l.values.length===0&&(l.values.push(l.breakpoint),l.breakpoint="-"),l))}function j(t){return t.split(",").map(a=>{const e=a.trim().match(C);if(!e)throw new Error(`Invalid breakpoint specifier: ${a}`);return{condition:e[1],value:e[2]}})}function P(t,r,a,e=l=>l,n=(l,c)=>`${l}: ${c.join(" ")};`){let l="";for(const c of a){const i=`@media ${(c.breakpoint==="-"?[{condition:">=",value:"0"}]:j(c.breakpoint)).map(o=>{var f;return`(${(f=o.condition)!=null&&f.includes("<")?"max-width":"min-width"}: ${T[o.value]??o.value})`}).join(" and ")} {${t}{${n(r,c.values.map(e))}}}`;l+=i}return l}function u(t){return(r,a)=>{const e=(t==null?void 0:t.selector)??":host",n=(t==null?void 0:t.property)??String(a),l=(t==null?void 0:t.valueTemplate)??(m=>`var(--gds-sys-space-spacer-${m})`),c=t==null?void 0:t.styleTemplate;$({attribute:t==null?void 0:t.attribute})(r,a),k(a)(r,a,{value:function(m,v){const i=G(S(v)),o=P(e,n,i,l,c);this[`__${String(a)}_ast`]=i,console.log(o),this._dynamicStylesController.inject(`sep_${String(a)}`,y(o))}})}}const E=b`
  :host {
    --_c: 12;
    --_grid-col: repeat(var(--_c), 1fr);
    display: grid;
    width: 100%;
    grid-template-columns: var(--_grid-col);
    grid-column-gap: var(--_gap-column, 0px);
    grid-row-gap: var(--_gap-row, 0px);
  }

  :host([auto-columns]) {
    --_col-count: var(--_c, 0);
    --_gap-count: calc(var(--_col-count) - 1);
    --_total-gap-width: calc(var(--_gap-count) * var(--_gap-column, 0px));
    --_col-width-max: calc(
      (100% - var(--_total-gap-width)) / var(--_col-count)
    );
    grid-template-columns: repeat(
      auto-fill,
      minmax(max(var(--_col-width), var(--_col-width-max)), 1fr)
    );
  }
`;var O=Object.defineProperty,q=Object.getOwnPropertyDescriptor,p=(t,r,a,e)=>{for(var n=e>1?void 0:e?q(r,a):r,l=t.length-1,c;l>=0;l--)(c=t[l])&&(n=(e?c(r,a,n):c(n))||n);return e&&n&&O(r,a,n),n};let s=class extends x{render(){return _`<slot></slot>`}};s.styles=[w,E];p([u({property:"--_c",valueTemplate:t=>t})],s.prototype,"columns",2);p([u({styleTemplate:(t,r)=>{const a=r[0],e=r[1]||a;return`--_gap-column: ${a}; --_gap-row: ${e};`}})],s.prototype,"gap",2);p([u()],s.prototype,"padding",2);p([u({attribute:"auto-columns",property:"--_col-width",valueTemplate:t=>`${t}px`})],s.prototype,"autoColumns",2);s=p([h("gds-grid")],s);
