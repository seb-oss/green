import{a as i,d as t,h as r}from"./iframe-DeOIKC_g.js";const m=c=>b({...c,type:"checkbox"}),k=c=>b({...c,type:"radio"}),b=c=>{const{type:e,checked:s,indeterminate:o,disabled:d,invalid:a}=c;return r`
    <div class="rbcb ${i({"rbcb--checkbox":e==="checkbox","rbcb--radio":e==="radio","--checked":s,"--indeterminate":o,"--disabled":d,"--invalid":a})}">
      <div class="rbcb__perimeter"></div>
      <div class="rbcb__toggle">
        ${t(e==="checkbox",()=>r`
            <gds-icon-minus-small
              class=${i({rbcb__icon:!0,"rbcb__icon--visible":o})}
              stroke="4"
            ></gds-icon-minus-small>
            <gds-icon-checkmark
              class=${i({rbcb__icon:!0,"rbcb__icon--visible":s})}
              stroke="4"
            ></gds-icon-checkmark>
          `)}
      </div>
    </div>
  `};export{m as c,k as r};
