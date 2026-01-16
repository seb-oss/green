import{a as t,b as s,h as e}from"./iframe-UufRagcw.js";const m=c=>a({...c,type:"checkbox"}),k=c=>a({...c,type:"radio"}),a=c=>{const{type:i,checked:o,indeterminate:r,disabled:d,invalid:b}=c;return e`
    <div class="rbcb ${t({"rbcb--checkbox":i==="checkbox","rbcb--radio":i==="radio","--checked":o,"--indeterminate":r,"--disabled":d,"--invalid":b})}">
      <div class="rbcb__perimeter"></div>
      <div class="rbcb__toggle">
        ${s(i==="checkbox",()=>e`
            ${s(r,()=>e`<gds-icon-minus-small
                  class="rbcb__icon"
                  stroke="4"
                ></gds-icon-minus-small>`,()=>s(o,()=>e`<gds-icon-checkmark
                      class="rbcb__icon"
                      stroke="4"
                    ></gds-icon-checkmark>`))}
          `)}
      </div>
    </div>
  `};export{m as c,k as r};
