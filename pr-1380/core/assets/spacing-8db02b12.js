import{j as o}from"./jsx-runtime-c595db08.js";import"./chunk-HLWAVYOI-4f8f8865.js";import{M as Q}from"./index-c5c6153d.js";import{i as S,r as b,x as Y,s as Z}from"./lit-element-2a5e401f.js";import{n as W,t as G,r as ee}from"./Reflect-a49e984a.js";import{u as N}from"./index-bf94c21c.js";import"./iframe-170724ed.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d38538b0.js";import"./index-356e4a49.js";var se=S`
  :host {
    --gds-shadow-xs: 0px 0px 1px 0px rgba(0, 0, 0, 0.1),
      0px 0px 1px 0px rgba(0, 0, 0, 0.1);
    --gds-shadow-s: 0px 1px 3px 0px rgba(0, 0, 0, 0.1),
      0px 1px 2px 0px rgba(0, 0, 0, 0.06);
    --gds-shadow-m: 0px 4px 8px -2px rgba(0, 0, 0, 0.1),
      0px 2px 4px -2px rgba(0, 0, 0, 0.06);
    --gds-shadow-l: 0px 12px 16px -4px rgba(0, 0, 0, 0.08),
      0px 4px 6px -2px rgba(0, 0, 0, 0.03);
    --gds-shadow-xl: 0px 20px 24px -4px rgba(0, 0, 0, 0.08),
      0px 8px 8px -4px rgba(0, 0, 0, 0.03);
    display: block;
  }
`,re=se,J=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,L=Object.getOwnPropertySymbols,te=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable,X=(e,s,r)=>s in e?J(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,ne=(e,s)=>{for(var r in s||(s={}))te.call(s,r)&&X(e,r,s[r]);if(L)for(var r of L(s))le.call(s,r)&&X(e,r,s[r]);return e},l=(e,s,r,t)=>{for(var d=t>1?void 0:t?oe(s,r):s,n=e.length-1,c;n>=0;n--)(c=e[n])&&(d=(t?c(s,r,d):c(d))||d);return t&&d&&J(s,r,d),d},$=(e,s,r)=>{if(!s.has(e))throw TypeError("Cannot "+r)},g=(e,s,r)=>($(e,s,"read from private field"),r?r.call(e):s.get(e)),m=(e,s,r)=>{if(s.has(e))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(e):s.set(e,r)},O=(e,s,r,t)=>($(e,s,"write to private field"),t?t.call(e,r):s.set(e,r),r),R=(e,s,r)=>($(e,s,"access private method"),r);function ae(e,s){const r=ne({waitUntilFirstUpdate:!1},s);return(t,d,n)=>{const{update:c}=t,j=Array.isArray(e)?e:[e];t.update=function(y){j.forEach(k=>{var u;const x=k;if(y.has(x)){const f=y.get(x),E=this[x];f!==E&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&((u=n.value)==null||u.call(this,f,E))}}),c.call(this,y)}}}var de={0:"0px","2xs":"320px",xs:"425px",s:"768px",m:"1024px",l:"1280px",xl:"1440px","2xl":"2560px","3xl":"3840px","4xl":"4320px","5xl":"6016px","6xl":"7680px"},ie=/^([<|>]=?)?([0-9a-z]+)/,q=["{","}",";",","],P=[" ","/n"];function ce(e){const s=[];let r="";for(let t=0;t<e.length;t++){const d=e[t];if(P.includes(d)||(r+=d),q.includes(d)){s.push(r.slice(0,-1)),s.push(d),r="";continue}if(P.includes(d)||t===e.length-1){s.push(r),r="";continue}}return s.filter(t=>t!=="")}function ge(e){const s=[];let r="bp",t,d=!1;for(const n of e){if(!q.includes(n)){if(r==="val"&&t)n!=="}"&&t.values.push(n);else{if(t&&d){t.breakpoint+=`,${n}`,d=!1;continue}t?(r="val",t.values.push(t.breakpoint),t.values.push(n),t.breakpoint="-"):(t={breakpoint:n,values:[]},s.push(t))}continue}if(n===","){d=!0;continue}if(n==="{"){r="val";continue}if(n==="}"||n===";"){r="bp",t=void 0;continue}}return s.map(n=>(n.values.length===0&&(n.values.push(n.breakpoint),n.breakpoint="-"),n))}function pe(e){return e.split(",").map(r=>{const t=r.trim().match(ie);if(!t)throw new Error(`Invalid breakpoint specifier: ${r}`);return{condition:t[1],value:t[2]}})}function ue(e,s,r,t=n=>n,d=(n,c)=>`${n}: ${c.join(" ")};`){let n="";for(const c of r){const k=`@media ${(c.breakpoint==="-"?[{condition:">=",value:"0"}]:pe(c.breakpoint)).map(u=>{var x,f;return`(${(x=u.condition)!=null&&x.includes("<")?"max-width":"min-width"}: ${(f=de[u.value])!=null?f:u.value})`}).join(" and ")} {${e}{${d(s,c.values.map(t))}}}`;n+=k}return n}function a(e){return(s,r)=>{var t,d,n;const c=(t=e==null?void 0:e.selector)!=null?t:":host",j=(d=e==null?void 0:e.property)!=null?d:String(r),y=(n=e==null?void 0:e.valueTemplate)!=null?n:u=>`var(--gds-space-${u})`,k=e==null?void 0:e.styleTemplate;W({attribute:e==null?void 0:e.attribute})(s,r),ae(r)(s,r,{value:function(u,x){const f=ge(ce(x)),E=ue(c,j,f,y,k);this[`__${String(r)}_ast`]=f,console.log(E),this._dynamicStylesController.inject(`sep_${String(r)}`,b(E))}})}}var he=`/**
 * Do not edit directly
 * Generated on Tue, 25 Jun 2024 12:44:55 GMT
 */

:host {
  --gds-ref-color-neutral000: #ffffff;
  --gds-ref-color-neutral050: #f8f8f8;
  --gds-ref-color-neutral100: #e9e9e9;
  --gds-ref-color-neutral150: #eeeeee;
  --gds-ref-color-neutral200: #dedede;
  --gds-ref-color-neutral250: #cecece;
  --gds-ref-color-neutral300: #ababab;
  --gds-ref-color-neutral350: #adadad;
  --gds-ref-color-neutral400: #868686;
  --gds-ref-color-neutral450: #757575;
  --gds-ref-color-neutral500: #494949;
  --gds-ref-color-neutral525: #464646;
  --gds-ref-color-neutral550: #333333;
  --gds-ref-color-neutral600: #2c2c2c;
  --gds-ref-color-neutral650: #272727;
  --gds-ref-color-neutral700: #222222;
  --gds-ref-color-neutral750: #1a1a1a;
  --gds-ref-color-neutral800: #121212;
  --gds-ref-color-blue100: #58b8ee;
  --gds-ref-color-blue200: #41b0ee;
  --gds-ref-color-blue300: #00adff;
  --gds-ref-color-blue400: #2c9cd9;
  --gds-ref-color-blue500: #0092e1;
  --gds-ref-color-blue600: #007ac7;
  --gds-ref-color-blue700: #0062bc;
  --gds-ref-color-green100: #75b44a;
  --gds-ref-color-green200: #60cd18;
  --gds-ref-color-green300: #45b400;
  --gds-ref-color-green400: #308800;
  --gds-ref-color-red100: #f7706d;
  --gds-ref-color-red200: #ff594f;
  --gds-ref-color-red300: #f03529;
  --gds-ref-color-red400: #d81a1a;
  --gds-ref-color-red500: #c82a29;
  --gds-ref-color-red600: #bb000c;
  --gds-ref-color-red700: #9f000a;
  --gds-ref-color-red800: #9e2120;
  --gds-ref-color-purple100: #ad91dc;
  --gds-ref-color-purple200: #7e52cc;
  --gds-ref-color-purple300: #673ab6;
  --gds-ref-color-purple400: #4f2C99;
  --gds-ref-color-purple500: #4a328f;
  --gds-ref-color-purple600: #3f2587;
  --gds-ref-color-yellow100: #ffe182;
  --gds-ref-color-yellow200: #ffc500;
  --gds-ref-color-yellow300: #ffb400;
  --gds-ref-color-yellow400: #f8a000;
  --gds-ref-color-yellow500: #f0be47;
  --gds-ref-color-yellow600: #ebab39;
  --gds-ref-color-blue-5: #001127;
  --gds-ref-color-blue-10: #001C39;
  --gds-ref-color-blue-15: #00264B;
  --gds-ref-color-blue-20: #00315D;
  --gds-ref-color-blue-25: #003C70;
  --gds-ref-color-blue-30: #004883;
  --gds-ref-color-blue-35: #005397;
  --gds-ref-color-blue-40: #005FAC;
  --gds-ref-color-blue-45: #006CC1;
  --gds-ref-color-blue-50: #0078D7;
  --gds-ref-color-blue-55: #0085EC;
  --gds-ref-color-blue-60: #1992FF;
  --gds-ref-color-blue-65: #4EA0FF;
  --gds-ref-color-blue-70: #6FAEFF;
  --gds-ref-color-blue-75: #8ABBFF;
  --gds-ref-color-blue-80: #A4C9FF;
  --gds-ref-color-blue-85: #BCD6FF;
  --gds-ref-color-blue-90: #D4E3FF;
  --gds-ref-color-blue-95: #EBF1FF;
  --gds-ref-color-blue-98: #F8F9FF;
  --gds-ref-color-green-5: #001505;
  --gds-ref-color-green-10: #00210E;
  --gds-ref-color-green-15: #002D10;
  --gds-ref-color-green-20: #003916;
  --gds-ref-color-green-25: #00461D;
  --gds-ref-color-green-30: #005323;
  --gds-ref-color-green-35: #00602A;
  --gds-ref-color-green-40: #006D31;
  --gds-ref-color-green-45: #007B38;
  --gds-ref-color-green-50: #138942;
  --gds-ref-color-green-55: #29964D;
  --gds-ref-color-green-60: #39A459;
  --gds-ref-color-green-65: #48B265;
  --gds-ref-color-green-70: #57C071;
  --gds-ref-color-green-75: #65CE7E;
  --gds-ref-color-green-80: #73DC8A;
  --gds-ref-color-green-85: #81EA97;
  --gds-ref-color-green-90: #8FF9A4;
  --gds-ref-color-green-95: #C5FFCA;
  --gds-ref-color-green-98: #EAFFE8;
  --gds-ref-color-black: #000000;
  --gds-ref-color-white: #FFFFFF;
  --gds-ref-color-grey-5: #0D0D0C;
  --gds-ref-color-grey-10: #1B1B18;
  --gds-ref-color-grey-15: #282825;
  --gds-ref-color-grey-20: #353531;
  --gds-ref-color-grey-25: #42423D;
  --gds-ref-color-grey-30: #505049;
  --gds-ref-color-grey-35: #5D5D56;
  --gds-ref-color-grey-40: #6A6A62;
  --gds-ref-color-grey-45: #77776E;
  --gds-ref-color-grey-50: #85857A;
  --gds-ref-color-grey-55: #919188;
  --gds-ref-color-grey-60: #9D9D95;
  --gds-ref-color-grey-65: #A9A9A2;
  --gds-ref-color-grey-70: #B6B6AF;
  --gds-ref-color-grey-75: #C2C2BD;
  --gds-ref-color-grey-80: #CECECA;
  --gds-ref-color-grey-85: #DADAD7;
  --gds-ref-color-grey-90: #E7E7E4;
  --gds-ref-color-grey-95: #F3F3F2;
  --gds-ref-color-grey-98: #F9F9F9;
  --gds-ref-color-orange-5: #1A0F00;
  --gds-ref-color-orange-10: #271900;
  --gds-ref-color-orange-15: #352200;
  --gds-ref-color-orange-20: #422C00;
  --gds-ref-color-orange-25: #503700;
  --gds-ref-color-orange-30: #503700;
  --gds-ref-color-orange-35: #6E4C00;
  --gds-ref-color-orange-40: #7D5700;
  --gds-ref-color-orange-45: #8D6300;
  --gds-ref-color-orange-50: #9D6E00;
  --gds-ref-color-orange-55: #AE7A00;
  --gds-ref-color-orange-60: #BE8600;
  --gds-ref-color-orange-65: #CF9300;
  --gds-ref-color-orange-70: #E19F00;
  --gds-ref-color-orange-75: #F2AC00;
  --gds-ref-color-orange-80: #FFBA30;
  --gds-ref-color-orange-85: #FFCC77;
  --gds-ref-color-orange-90: #FFDEAB;
  --gds-ref-color-orange-95: #FFEED9;
  --gds-ref-color-orange-98: #FFF8F3;
  --gds-ref-color-red-5: #2B0200;
  --gds-ref-color-red-10: #3E0400;
  --gds-ref-color-red-15: #510700;
  --gds-ref-color-red-20: #650B00;
  --gds-ref-color-red-25: #790F00;
  --gds-ref-color-red-30: #8E1400;
  --gds-ref-color-red-35: #A31800;
  --gds-ref-color-red-40: #BA1D00;
  --gds-ref-color-red-45: #D02200;
  --gds-ref-color-red-50: #E23010;
  --gds-ref-color-red-55: #F53E1D;
  --gds-ref-color-red-60: #FF5636;
  --gds-ref-color-red-65: #FF7257;
  --gds-ref-color-red-70: #FF8A73;
  --gds-ref-color-red-75: #FFA08D;
  --gds-ref-color-red-80: #FFB4A5;
  --gds-ref-color-red-85: #FFC8BC;
  --gds-ref-color-red-90: #FFDAD3;
  --gds-ref-color-red-95: #FFEDE9;
  --gds-ref-color-red-98: #FFF8F6;
}
`,xe=`/**
 * Do not edit directly
 * Generated on Tue, 25 Jun 2024 12:44:55 GMT
 */

:host {
  color-scheme: light;
  --gds-sys-color-blue: #41b0ee;
  --gds-sys-color-dark-blue-1: #41b0ee;
  --gds-sys-color-dark-blue-2: #007ac7;
  --gds-sys-color-green: #60cd18;
  --gds-sys-color-dark-green-1: #45b400;
  --gds-sys-color-dark-green-2: #308800;
  --gds-sys-color-yellow: #ffc500;
  --gds-sys-color-dark-yellow-1: #ffb400;
  --gds-sys-color-dark-yellow-2: #f8a000;
  --gds-sys-color-primary-text: #333333;
  --gds-sys-color-secondary-text: #ababab;
  --gds-sys-color-white-text: #ffffff;
  --gds-sys-color-link-text: #0062bc;
  --gds-sys-color-error-text: #9f000a;
  --gds-sys-color-disabled-text: #adadad;
  --gds-sys-color-red: #f03529;
  --gds-sys-color-dark-red-1: #d81a1a;
  --gds-sys-color-dark-red-2: #bb000c;
  --gds-sys-color-purple: #673ab6;
  --gds-sys-color-dark-purple-1: #4f2C99;
  --gds-sys-color-dark-purple-2: #3f2587;
  --gds-sys-color-base-white: #ffffff;
  --gds-sys-color-base100: #f8f8f8;
  --gds-sys-color-base200: #e9e9e9;
  --gds-sys-color-base300: #dedede;
  --gds-sys-color-base400: #cecece;
  --gds-sys-color-base500: #adadad;
  --gds-sys-color-base600: #868686;
  --gds-sys-color-base700: #494949;
  --gds-sys-color-base800: #333333;
  --gds-sys-color-base900: #1a1a1a;
  --gds-sys-color-accent-accent-green: #006D31;
  --gds-sys-color-accent-on-accent-green: #FFFFFF;
  --gds-sys-color-accent-accent-orange: #FFBA30;
  --gds-sys-color-accent-on-accent-orange: #353531;
  --gds-sys-color-background-background: #FFFFFF;
  --gds-sys-color-background-background-dim: #F3F3F2;
  --gds-sys-color-container-container: #F3F3F2;
  --gds-sys-color-container-container-dim1: #E7E7E4;
  --gds-sys-color-container-container-dim2: #DADAD7;
  --gds-sys-color-container-container-bright: #FFFFFF;
  --gds-sys-color-container-container-shade1: #353531;
  --gds-sys-color-container-container-shade2: #1B1B18;
  --gds-sys-color-container-container-shade3: #353531;
  --gds-sys-color-container-container-disabled: #F9F9F9;
  --gds-sys-color-container-container-positive: #006D31;
  --gds-sys-color-container-container-negative: #BA1D00;
  --gds-sys-color-container-container-negative-bright: #FFEDE9;
  --gds-sys-color-content-content: #353531;
  --gds-sys-color-content-content-inverse: #FFFFFF;
  --gds-sys-color-content-content-secondary: #6A6A62;
  --gds-sys-color-content-content-positive: #006D31;
  --gds-sys-color-content-content-positive-bright: #EAFFE8;
  --gds-sys-color-content-content-negative: #BA1D00;
  --gds-sys-color-content-content-negative-bright: #FFF8F6;
  --gds-sys-color-content-content-custom-blue-bright: #F8F9FF;
  --gds-sys-color-content-content-disabled: #9D9D95;
  --gds-sys-color-custom-custom-blue: #005FAC;
  --gds-sys-color-custom-on-custom-blue: #D4E3FF;
  --gds-sys-color-custom-custom-blue-bright: #D4E3FF;
  --gds-sys-color-custom-on-custom-blue-bright: #00315D;
  --gds-sys-color-custom-custom-green: #003916;
  --gds-sys-color-custom-on-custom-green: #EAFFE8;
  --gds-sys-color-custom-custom-green-bright: #EAFFE8;
  --gds-sys-color-custom-on-custom-green-bright: #003916;
  --gds-sys-color-custom-custom-grey: #353531;
  --gds-sys-color-custom-on-custom-grey: #E7E7E4;
  --gds-sys-color-custom-custom-grey-bright: #E7E7E4;
  --gds-sys-color-custom-on-custom-grey-bright: #353531;
  --gds-sys-color-primary-primary: #353531;
  --gds-sys-color-state-layers-state-black: #000000 10%;
  --gds-sys-color-state-layers-state-black-dim1: #000000 20%;
  --gds-sys-color-state-layers-state-black-dim2: #000000 40%;
  --gds-sys-color-state-layers-state-black-shade: #000000 60%;
  --gds-sys-color-state-layers-state-positive: #006d31 10%;
  --gds-sys-color-state-layers-state-positive-dim: #006d31 20%;
  --gds-sys-color-state-layers-state-negative: #ba1d00 10%;
  --gds-sys-color-state-layers-state-negative-dim: #ba1d00 20%;
  --gds-sys-color-state-layers-state-custom-blue: #005fac 20%;
  --gds-sys-color-status-information-information: #353531;
  --gds-sys-color-status-information-on-information: #FFFFFF;
  --gds-sys-color-status-information-information-bright: #F3F3F2;
  --gds-sys-color-status-information-on-information-bright: #353531;
  --gds-sys-color-status-negative-negative: #BA1D00;
  --gds-sys-color-status-negative-on-negative: #FFFFFF;
  --gds-sys-color-status-negative-negative-bright: #FFEDE9;
  --gds-sys-color-status-negative-on-negative-bright: #BA1D00;
  --gds-sys-color-status-warning-warning: #9D6E00;
  --gds-sys-color-status-warning-on-warning: #FFFFFF;
  --gds-sys-color-status-warning-warning-bright: #FFEED9;
  --gds-sys-color-status-warning-on-warning-bright: #7D5700;
  --gds-sys-color-status-positive-positive: #006D31;
  --gds-sys-color-status-positive-on-positive: #FFFFFF;
  --gds-sys-color-status-positive-positive-bright: #EAFFE8;
  --gds-sys-color-status-positive-on-positive-bright: #006D31;
  --gds-sys-color-status-notice-notice: #005FAC;
  --gds-sys-color-status-notice-on-notice: #FFFFFF;
  --gds-sys-color-status-notice-notice-bright: #EBF1FF;
  --gds-sys-color-status-notice-on-notice-bright: #005FAC;
  --gds-sys-color-stroke-stroke: #353531;
  --gds-sys-color-stroke-stroke-variant1: #85857A;
  --gds-sys-color-stroke-stroke-variant2: #CECECA;
  --gds-sys-color-stroke-stroke-disabled: #9D9D95;
  --gds-sys-color-stroke-stroke-notice: #005FAC;
  --gds-sys-color-stroke-stroke-positive: #006D31;
  --gds-sys-color-stroke-stroke-warning: #7D5700;
  --gds-sys-color-stroke-stroke-negative: #BA1D00;
  --gds-sys-color-stroke-stroke-custom-blue: #005FAC;
  --gds-sys-color-stroke-stroke-custom-blue-bright: #6FAEFF;
  --gds-sys-color-stroke-stroke-inversed: #FFFFFF;
}
`,fe=`/**
 * Do not edit directly
 * Generated on Tue, 25 Jun 2024 12:44:55 GMT
 */

:host {
  --gds-space-max: 999px;
  --gds-space-8xl: 120px;
  --gds-space-7xl: 112px;
  --gds-space-6xl: 96px;
  --gds-space-5xl: 80px;
  --gds-space-4xl: 64px;
  --gds-space-3xl: 48px;
  --gds-space-2xl: 40px;
  --gds-space-xl: 32px;
  --gds-space-l: 24px;
  --gds-space-m: 16px;
  --gds-space-s: 12px;
  --gds-space-xs: 8px;
  --gds-space-2xs: 4px;
  --gds-space-3xs: 2px;
  --gds-space-0: 0px;
}
`,ye=`/**
 * Do not edit directly
 * Generated on Tue, 25 Jun 2024 12:44:55 GMT
 */

:host {
  --gds-text-weight-bold: 700;
  --gds-text-weight-medium: 500;
  --gds-text-weight-book: 450;
  --gds-text-weight-regular: 400;
  --gds-text-weight-light: 300;
  --gds-text-size-label-overline: 14px;
  --gds-text-size-label-input-medium: 14px;
  --gds-text-size-label-input-large: 16px;
  --gds-text-size-label-information-medium: 14px;
  --gds-text-size-label-information-large: 16px;
  --gds-text-size-label-small: 12px;
  --gds-text-size-label-medium: 14px;
  --gds-text-size-label-large: 16px;
  --gds-text-size-body-small: 12px;
  --gds-text-size-body-medium: 14px;
  --gds-text-size-body-large: 16px;
  --gds-text-size-title-small: 14px;
  --gds-text-size-title-medium: 16px;
  --gds-text-size-title-large: 22px;
  --gds-text-size-headline-small: 24px;
  --gds-text-size-headline-medium: 28px;
  --gds-text-size-headline-large: 32px;
  --gds-text-size-display-small: 40px;
  --gds-text-size-display-medium: 64px;
  --gds-text-size-display-large: 82px;
  --gds-text-line-height-label-overline: 18px;
  --gds-text-line-height-label-input-medium: 20px;
  --gds-text-line-height-label-input-large: 20px;
  --gds-text-line-height-label-information-medium: 20px;
  --gds-text-line-height-label-information-large: 20px;
  --gds-text-line-height-label-small: 16px;
  --gds-text-line-height-label-medium: 20px;
  --gds-text-line-height-label-large: 20px;
  --gds-text-line-height-body-small: 16px;
  --gds-text-line-height-body-medium: 20px;
  --gds-text-line-height-body-large: 20px;
  --gds-text-line-height-title-small: 20px;
  --gds-text-line-height-title-medium: 24px;
  --gds-text-line-height-title-large: 28px;
  --gds-text-line-height-headline-small: 30px;
  --gds-text-line-height-headline-medium: 36px;
  --gds-text-line-height-headline-large: 40px;
  --gds-text-line-height-display-small: 52px;
  --gds-text-line-height-display-medium: 80px;
  --gds-text-line-height-display-large: 98px;
}
`,me=`/**
 * Do not edit directly
 * Generated on Tue, 25 Jun 2024 12:44:55 GMT
 */

:host {
  --gds-sys-motion-play-state: running;
  --gds-sys-motion-fill-mode: none;
  --gds-sys-motion-direction: normal;
  --gds-sys-motion-iteration-count: 1;
  --gds-sys-motion-delay: 0s;
  --gds-sys-motion-timing-function: ease;
  --gds-sys-motion-duration: 1.2s;
  --gds-sys-motion-easing: cubic-bezier(0.46, 0.03, 0.52, 0.96);
}
`,z=[b(he),b(xe),b(fe),b(ye),b(me)],_,F,v,w,A,H,T,K,be=class{constructor(e){m(this,A),m(this,T),m(this,_,!Fe()),m(this,F,[]),m(this,v,new Map),m(this,w,new Map),this.host=e,this.host.addController(this)}hostConnected(){this.host.shadowRoot&&g(this,F).length===0&&O(this,F,[...this.host.shadowRoot.adoptedStyleSheets||[]])}inject(e,s){const r=Array.isArray(s)?s.map(t=>t.toString()).join(""):s.toString();g(this,_)?R(this,A,H).call(this,e,r):R(this,T,K).call(this,e,r)}clearAll(){var e;g(this,_)?(g(this,w).forEach(s=>s.remove()),(e=this.host.shadowRoot)==null||e.querySelectorAll("style").forEach(s=>s.innerHTML=""),g(this,w).clear()):this.host.shadowRoot&&(this.host.shadowRoot.adoptedStyleSheets=[],g(this,v).clear(),O(this,F,[]))}};_=new WeakMap;F=new WeakMap;v=new WeakMap;w=new WeakMap;A=new WeakSet;H=function(e,s){var r;let t=g(this,w).get(e);t||(t=document.createElement("style"),g(this,w).set(e,t)),t.textContent=s,(r=this.host.shadowRoot)==null||r.appendChild(t)};T=new WeakSet;K=function(e,s){if(!this.host.shadowRoot)return;let r=g(this,v).get(e);r||(r=new CSSStyleSheet,g(this,v).set(e,r)),r.replaceSync(s),this.host.shadowRoot.adoptedStyleSheets=[...g(this,F),...Array.from(g(this,v).values())]};function Fe(){try{return new CSSStyleSheet,!0}catch{return!1}}var ve="-7affd4",C=new Map,B=e=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return C.set(e,e),G(e);const s=e+ve;return C.set(e,s),customElements.get(s)?r=>!1:G(s)},U=new WeakMap;function we(e,...s){let r=U.get(e);return r||(r=I(e),r.raw=I(e.raw),U.set(e,r)),[r,...s]}var I=e=>e.map(s=>{for(const[r,t]of C.entries())s=s.replace(new RegExp(`${r}(?![-a-z])`,"mg"),t);return s});function ke(e){return(s,...r)=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return e(s,...r);const[t,...d]=we(s,...r);return e(t,...d)}}var M=ke(Y);function Ee(e){var s;return(s=[...C.entries()].find(([,r])=>r===e))==null?void 0:s[0]}var D=class extends Z{constructor(){super(),this.gdsElementName="",this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new be(this)}connectedCallback(){super.connectedCallback(),this.gdsElementName=Ee(this.tagName.toLowerCase())||this.gdsElementName,this.setAttribute("gds-element",this.gdsElementName)}};l([ee()],D.prototype,"_isUsingTransitionalStyles",2);var h=class extends D{render(){return M`<slot></slot>`}};h.styles=[z,re];l([a({property:"overflow",valueTemplate:e=>e})],h.prototype,"overflow",2);l([a({property:"box-shadow",valueTemplate:e=>`var(--gds-shadow-${e})`})],h.prototype,"shadow",2);l([a({property:"border-radius",valueTemplate:e=>`var(--gds-space-${e})`})],h.prototype,"radius",2);l([a({property:"background",valueTemplate:e=>`var(--gds-sys-color-${e})`})],h.prototype,"background",2);l([a({valueTemplate:e=>`1px solid ${e}`,styleTemplate:(e,s)=>{const r=s[0],t=s.length>1?s[1]:r,d=s.length>2?s[2]:r,n=s.length>3?s[3]:r;return`border-top: ${r}; border-right: ${t}; border-bottom: ${d}; border-left: ${n};`}})],h.prototype,"border",2);l([a()],h.prototype,"padding",2);h=l([B("gds-card")],h);var je=S`
  :host {
    gap: var(--_gap-column) var(--_gap-row);
    box-sizing: border-box;
  }
`,_e=je,i=class extends D{render(){return M`<slot></slot>`}};i.styles=[z,_e];l([a({styleTemplate:(e,s)=>{const r=s[0],t=s[1]||r;return`--_gap-column: ${r}; --_gap-row: ${t};`}})],i.prototype,"gap",2);l([a({property:"--_row-gap",valueTemplate:e=>e})],i.prototype,"rowGap",2);l([a()],i.prototype,"padding",2);l([a()],i.prototype,"margin",2);l([a({property:"display",valueTemplate:e=>e})],i.prototype,"display",2);l([a({property:"position",valueTemplate:e=>e})],i.prototype,"position",2);l([a({property:"inset",valueTemplate:e=>e})],i.prototype,"inset",2);l([a({property:"overflow",valueTemplate:e=>e})],i.prototype,"overflow",2);l([a({property:"opacity",valueTemplate:e=>e})],i.prototype,"opacity",2);l([a({property:"align-items",valueTemplate:e=>e})],i.prototype,"align",2);l([a({property:"justify-content",valueTemplate:e=>e})],i.prototype,"justify",2);l([a({property:"flex-direction",valueTemplate:e=>e})],i.prototype,"direction",2);l([a({property:"grid-column",valueTemplate:e=>`${e}`})],i.prototype,"column",2);l([a({property:"grid-row",valueTemplate:e=>`${e}`})],i.prototype,"row",2);l([a({property:"backdrop-filter",valueTemplate:e=>`blur(${e})`})],i.prototype,"filter",2);l([a({property:"border-radius",valueTemplate:e=>`var(--gds-space-${e})`})],i.prototype,"radius",2);l([a({property:"background",valueTemplate:e=>e})],i.prototype,"background",2);l([a({valueTemplate:e=>`1px solid ${e}`,styleTemplate:(e,s)=>{const r=s[0],t=s.length>1?s[1]:r,d=s.length>2?s[2]:r,n=s.length>3?s[3]:r;return`border-top: ${r}; border-right: ${t}; border-bottom: ${d}; border-left: ${n};`}})],i.prototype,"border",2);l([a({property:"color",valueTemplate:e=>`var(--gds-sys-color-${e})`})],i.prototype,"color",2);l([a({property:"height",valueTemplate:e=>e})],i.prototype,"height",2);l([a({property:"width",valueTemplate:e=>e})],i.prototype,"width",2);l([a({property:"z-index",valueTemplate:e=>e})],i.prototype,"stack",2);l([a({property:"mask-image",valueTemplate:e=>`linear-gradient(to ${e}, currentColor 40%, transparent)`})],i.prototype,"mask",2);i=l([B("gds-container")],i);var Ce=S`
  :host {
    display: block;

    & > * {
      margin: unset;
      font-weight: normal;
      font-size: inherit;
      line-height: inherit;
      text-wrap: inherit;
    }
  }
`,De=Ce,p=class extends D{constructor(){super(...arguments),this.tag="p"}createTag(){const e=document.createElement(this.tag);return e.appendChild(document.createElement("slot")),e}render(){return M`${this.createTag()}`}};p.styles=[z,De];l([W({type:String})],p.prototype,"tag",2);l([a({valueTemplate:e=>`${e}`,styleTemplate:(e,s)=>{const r=s[0];return`font-size: var(--gds-text-size-${r}); line-height: var(--gds-sys-typography-line-height-${r});`}})],p.prototype,"size",2);l([a()],p.prototype,"margin",2);l([a({property:"text-wrap",valueTemplate:e=>e})],p.prototype,"wrap",2);l([a({property:"max-width",valueTemplate:e=>`${e}ch`})],p.prototype,"length",2);l([a({property:"min-width",valueTemplate:e=>`${e}ch`})],p.prototype,"min",2);l([a({property:"text-align",valueTemplate:e=>e})],p.prototype,"align",2);p=l([B("gds-text")],p);function V(e){const s=Object.assign({h1:"h1",h3:"h3",p:"p",pre:"pre",code:"code"},N(),e.components);return o.jsxs(o.Fragment,{children:[o.jsx(Q,{title:"Style/Size"}),`
`,o.jsx(s.h1,{id:"size",children:"Size"}),`
`,o.jsx(s.h3,{id:"the-spacing-scale-is-based-on-a-4px-grid",children:"The spacing scale is based on a 4px grid."}),`
`,o.jsx(s.p,{children:"The spacing scale is used for margin, padding, gap, radius and all the spacing values."}),`
`,o.jsx(s.h3,{id:"spacing-scale",children:"Spacing Scale"}),`
`,o.jsxs("gds-container",{display:"flex",direction:"column",gap:"s",children:[o.jsx("gds-card",{shadow:"s",radius:"s",children:o.jsxs("gds-container",{display:"flex",gap:"s",padding:"s l",align:"center",overflow:"hidden",children:[o.jsx("gds-text",{min:"10",align:"left",children:"MAX*"}),o.jsx("gds-container",{radius:"xs",display:"inline-block",width:"1px",height:"40px",padding:"0 max 0 0",background:"currentColor",mask:"right"})]})}),o.jsx("gds-card",{shadow:"s",radius:"s",children:o.jsxs("gds-container",{display:"flex",gap:"s",padding:"s l",align:"center",children:[o.jsx("gds-text",{min:"10",align:"left",children:"8XL"}),o.jsx("gds-container",{radius:"xs",display:"inline-block",width:"1px",height:"40px",padding:"0 8xl 0 0",background:"currentColor"})]})}),o.jsx("gds-card",{shadow:"s",radius:"s",children:o.jsxs("gds-container",{display:"flex",gap:"s",padding:"s l",align:"center",children:[o.jsx("gds-text",{min:"10",align:"left",children:"7XL"}),o.jsx("gds-container",{radius:"xs",display:"inline-block",width:"1px",height:"40px",padding:"0 7xl 0 0",background:"currentColor"})]})}),o.jsx("gds-card",{shadow:"s",radius:"s",children:o.jsxs("gds-container",{display:"flex",gap:"s",padding:"s l",align:"center",children:[o.jsx("gds-text",{min:"10",align:"left",children:"6XL"}),o.jsx("gds-container",{radius:"xs",display:"inline-block",width:"1px",height:"40px",padding:"0 6xl 0 0",background:"currentColor"})]})}),o.jsx("gds-card",{shadow:"s",radius:"s",children:o.jsxs("gds-container",{display:"flex",gap:"s",padding:"s l",align:"center",children:[o.jsx("gds-text",{min:"10",align:"left",children:"5XL"}),o.jsx("gds-container",{radius:"xs",display:"inline-block",width:"1px",height:"40px",padding:"0 5xl 0 0",background:"currentColor"})]})}),o.jsx("gds-card",{shadow:"s",radius:"s",children:o.jsxs("gds-container",{display:"flex",gap:"s",padding:"s l",align:"center",children:[o.jsx("gds-text",{min:"10",align:"left",children:"4XL"}),o.jsx("gds-container",{radius:"xs",display:"inline-block",width:"1px",height:"40px",padding:"0 4xl 0 0",background:"currentColor"})]})}),o.jsx("gds-card",{shadow:"s",radius:"s",children:o.jsxs("gds-container",{display:"flex",gap:"s",padding:"s l",align:"center",children:[o.jsx("gds-text",{min:"10",align:"left",children:"3XL"}),o.jsx("gds-container",{radius:"xs",display:"inline-block",width:"1px",height:"40px",padding:"0 3xl 0 0",background:"currentColor"})]})}),o.jsx("gds-card",{shadow:"s",radius:"s",children:o.jsxs("gds-container",{display:"flex",gap:"s",padding:"s l",align:"center",children:[o.jsx("gds-text",{min:"10",align:"left",children:"2XL"}),o.jsx("gds-container",{radius:"xs",display:"inline-block",width:"1px",height:"40px",padding:"0 2xl 0 0",background:"currentColor"})]})}),o.jsx("gds-card",{shadow:"s",radius:"s",children:o.jsxs("gds-container",{display:"flex",gap:"s",padding:"s l",align:"center",children:[o.jsx("gds-text",{min:"10",align:"left",children:"XL"}),o.jsx("gds-container",{radius:"xs",display:"inline-block",width:"1px",height:"40px",padding:"0 xl 0 0",background:"currentColor"})]})}),o.jsx("gds-card",{shadow:"s",radius:"s",children:o.jsxs("gds-container",{display:"flex",gap:"s",padding:"s l",align:"center",children:[o.jsx("gds-text",{min:"10",align:"left",children:"L"}),o.jsx("gds-container",{radius:"xs",display:"inline-block",width:"1px",height:"40px",padding:"0 l 0 0",background:"currentColor"})]})}),o.jsx("gds-card",{shadow:"s",radius:"s",children:o.jsxs("gds-container",{display:"flex",gap:"s",padding:"s l",align:"center",children:[o.jsx("gds-text",{min:"10",align:"left",children:"M"}),o.jsx("gds-container",{radius:"xs",display:"inline-block",width:"1px",height:"40px",padding:"0 m 0 0",background:"currentColor"})]})}),o.jsx("gds-card",{shadow:"s",radius:"s",children:o.jsxs("gds-container",{display:"flex",gap:"s",padding:"s l",align:"center",children:[o.jsx("gds-text",{min:"10",align:"left",children:"S"}),o.jsx("gds-container",{radius:"xs",display:"inline-block",width:"1px",height:"40px",padding:"0 s 0 0",background:"currentColor"})]})}),o.jsx("gds-card",{shadow:"s",radius:"s",children:o.jsxs("gds-container",{display:"flex",gap:"s",padding:"s l",align:"center",children:[o.jsx("gds-text",{min:"10",align:"left",children:"XS"}),o.jsx("gds-container",{radius:"xs",display:"inline-block",width:"1px",height:"40px",padding:"0 xs 0 0",background:"currentColor"})]})}),o.jsx("gds-card",{shadow:"s",radius:"s",children:o.jsxs("gds-container",{display:"flex",gap:"s",padding:"s l",align:"center",children:[o.jsx("gds-text",{min:"10",align:"left",children:"2XS"}),o.jsx("gds-container",{radius:"xs",display:"inline-block",width:"1px",height:"40px",padding:"0 2xs 0 0",background:"currentColor"})]})}),o.jsx("gds-card",{shadow:"s",radius:"s",children:o.jsxs("gds-container",{display:"flex",gap:"s",padding:"s l",align:"center",children:[o.jsx("gds-text",{min:"10",align:"left",children:"3XS"}),o.jsx("gds-container",{radius:"xs",display:"inline-block",width:"1px",height:"40px",padding:"0 3xs 0 0",background:"currentColor"})]})}),o.jsx("gds-card",{shadow:"s",radius:"s",children:o.jsxs("gds-container",{display:"flex",gap:"s",padding:"s l",align:"center",children:[o.jsx("gds-text",{min:"10",align:"left",children:"0"}),o.jsx("gds-container",{radius:"xs",display:"inline-block",width:"1px",height:"40px",padding:"0 0 0 0",background:"currentColor"})]})})]}),`
`,o.jsx("br",{}),`
`,o.jsx("br",{}),`
`,o.jsx("br",{}),`
`,o.jsx(s.h3,{id:"1-max",children:"*1 MAX"}),`
`,o.jsx(s.p,{children:"The MAX size is the maximum size of the spacing scale used when you want to create a circular shape."}),`
`,o.jsx(s.p,{children:"Example"}),`
`,o.jsx(s.pre,{children:o.jsx(s.code,{children:`    <gds-container radius="max">MAX</gds-container>
`})}),`
`,o.jsx("br",{}),`
`,o.jsx("br",{}),`
`,o.jsx("br",{}),`
`,o.jsx("gds-container",{display:"flex",align:"center",justify:"center",width:"200px",height:"200px",background:"black",border:"currentColor",color:"base800",radius:"max",children:o.jsx(s.p,{children:"MAX (999px)"})})]})}function Re(e={}){const{wrapper:s}=Object.assign({},N(),e.components);return s?o.jsx(s,Object.assign({},e,{children:o.jsx(V,e)})):V(e)}export{Re as default};
