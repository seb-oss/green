import{e as b}from"./class-map-CXsQwv0r.js";import{n as o}from"./when-BR7zwNJC.js";import{h as e}from"./gds-element-DTROifYq.js";const h=c=>d({...c,type:"checkbox"}),g=c=>d({...c,type:"radio"}),d=c=>{const{type:i,checked:s,indeterminate:r,disabled:t,invalid:a}=c;return e`
    <div class="rbcb ${b({"rbcb--checkbox":i==="checkbox","rbcb--radio":i==="radio","--checked":s,"--indeterminate":r,"--disabled":t,"--invalid":a})}">
      <div class="rbcb__perimeter"></div>
      <div class="rbcb__toggle">
        ${o(i==="checkbox",()=>e`
            ${o(r,()=>e`<gds-icon-minus-small
                  class="rbcb__icon"
                  stroke="4"
                ></gds-icon-minus-small>`,()=>o(s,()=>e`<gds-icon-checkmark
                      class="rbcb__icon"
                      stroke="4"
                    ></gds-icon-checkmark>`))}
          `)}
      </div>
    </div>
  `};export{h as c,g as r};
