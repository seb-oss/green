import{e as i,d as t,h as r}from"./iframe-C23GnPn7.js";const k=c=>d({...c,type:"checkbox"}),_=c=>d({...c,type:"radio"}),d=c=>{const{type:e,checked:s,indeterminate:o,disabled:a,readonly:b=!1,invalid:n}=c;return r`
    <div class="rbcb ${i({"rbcb--checkbox":e==="checkbox","rbcb--radio":e==="radio","--checked":s,"--indeterminate":o,"--disabled":a,"--readonly":b,"--invalid":n})}">
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
  `};export{k as c,_ as r};
