import{i as o}from"./lit-element-2a5e401f.js";import{t as a,_ as s,s as t,g as p,G as i,h as l}from"./chunk.ZQ4D5K7J-2f4d3401.js";var d=o`
  :host {
    display: contents;
  }

  hr {
    border-radius: 200px;
    background: currentColor;
    font-size: 0;
    border: 0;
    height: 1px;
    width: 100%;
    margin-top: calc((var(--_size) / 2) - (1px / 2));
    margin-bottom: calc((var(--_size) / 2) - (1px / 2));
    opacity: var(--_opacity, 1);
  }
`,c=d,e=class extends i{render(){return l`<slot><hr /></slot>`}};e.styles=[a,c];s([t({property:"color",valueTemplate:r=>`var(--gds-sys-color-${r})`})],e.prototype,"color",2);s([t({property:"--_size",valueTemplate:r=>`var(--gds-sys-space-spacer-${r})`})],e.prototype,"size",2);s([t({property:"--_opacity",valueTemplate:r=>r})],e.prototype,"opacity",2);e=s([p("gds-divider")],e);
