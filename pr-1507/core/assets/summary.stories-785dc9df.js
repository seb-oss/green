import{i as f,x as y}from"./lit-element-2a5e401f.js";import{n as h}from"./when-cf7256a5.js";import{m as v,s as b}from"./lit-localize-87611c26.js";import{g as w,G as x,h as m}from"./gds-element-24e794df.js";import"./flex-8ee48756.js";import"./card-03c2d9cc.js";import"./rocket-b00a97a3.js";import"./datepicker-e048cfcc.js";import"./dropdown-fa265832.js";import"./menu-heading-69e5cbd3.js";import{a as k,b as O,c as $}from"./transitional-styles-63f7f7e5.js";import"./_commonjsHelpers-725317a4.js";import"./tokens.style-f52cb050.js";import"./style-expression-property-45d22dc5.js";import"./watch-c4961afe.js";import"./icon-228a1b71.js";import"./directive-12249aa5.js";import"./query-b9d3c2af.js";import"./query-async-1ff18261.js";import"./directive-helpers-5872e68c.js";import"./ref-783c8f8f.js";import"./class-map-43969d56.js";import"./button-84cc7829.js";import"./if-defined-76b9fd71.js";import"./constrain-slots-08d8606c.js";import"./attribute-converters-ae269b4b.js";import"./popover-c218e73b.js";import"./floating-ui.dom-373c8bf6.js";import"./cross-small-90b94e0f.js";import"./backdrop-3ac2ea4c.js";import"./calendar-31afe5fb.js";import"./calendar-d8a5d094.js";import"./chevron-right-aff86d55.js";import"./chevron-bottom-ff60f39a.js";var C=Object.defineProperty,E=Object.getOwnPropertyDescriptor,D=(o,r,s,t)=>{for(var e=t>1?void 0:t?E(r,s):r,a=o.length-1,i;a>=0;a--)(i=o[a])&&(e=(t?i(r,s,e):i(e))||e);return t&&e&&C(r,s,e),e};let d=class extends x{connectedCallback(){super.connectedCallback(),this.form=this.closest("form")||void 0,this.form&&(this.formObserver=new MutationObserver(()=>{this.requestUpdate()}),this.formObserver.observe(this.form,{attributes:!0,subtree:!0}))}disconnectedCallback(){var o;super.disconnectedCallback(),(o=this.formObserver)==null||o.disconnect()}render(){var s;const r=Array.from(((s=this.form)==null?void 0:s.elements)||[]).filter(t=>t.invalid);return h(r.length>0,()=>m`<gds-card border="4xs/error-text" radius="2xs" padding="m" color="error-text">
          <gds-flex gap="s">
            <gds-container>
              <gds-icon-triangle-exclamation></gds-icon-triangle-exclamation>
            </gds-container>
            <gds-container>
            ${v(b`There are ${r.length} errors to correct before you can continue:`)}
            <ul>
              ${r.map(t=>m`<li><a href @click=${e=>{e.preventDefault(),t.focus()}}>${t.label}</li>`)}
            </ul>
          </gds-container>
        <gds-flex>
      </gds-card>`)}};d.styles=f`
    :host {
      font-weight: 500;
    }
    ul {
      list-style-type: none;
      margin: 1rem 0 0;
      padding: 0;
    }
    li {
      margin: 0.5rem 0;
    }
    a {
      color: var(--gds-sys-color-primary-text);
      font-weight: 500;
    }
  `;d=D([w("gds-form-summary")],d);k();O();$();const mr={title:"Docs/Form validation/Summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/sebgroup/green/tree/main/libs/core/src/components/form/summary)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-errorsummary)


When a user attempts to submit a form with errors, this component displays a summary of those errors.
Including an error summary greatly assists users in promptly identifying and addressing multiple errors
in a consolidated manner. It provides a clear indication of what went wrong and what needs to be corrected.

Each form component that contains an error is listed as a row, displaying the name of the field and
linking it to the corresponding form element.`}}},tags:["autodocs"]},P={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},n={...P,render:o=>y`<form style="width: 450px">
      <gds-dropdown
        label="Astronaut"
        .validator=${{validate:r=>{if(r.value!=="cat")return[{...r.validity,valid:!1,customError:!0},r.value===void 0?"An astronaut is required":"Only cats can pilot rockets!"]}}}
      >
        <gds-option>Pick your astronaut</gds-option>
        <gds-option value="dog">Dog</gds-option>
        <gds-option value="cat">Cat</gds-option>
        <gds-option value="fish">Fish</gds-option>
      </gds-dropdown>
      <gds-datepicker
        label="Launch date"
        .validator=${{validate:r=>{if(r.value===void 0)return[{...r.validity,valid:!1,customError:!0},"A date is required"]}}}
      ></gds-datepicker>
      <gds-container margin="s 0 s">
        <gds-form-summary></gds-form-summary>
      </gds-container>
      <gds-button type="submit">
        Launch
        <gds-icon-rocket slot="trail"></gds-icon-rocket>
      </gds-button>
      <gds-button type="reset">Reset</gds-button>
    </form>`};var l,c,p,u,g;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<form style="width: 450px">
      <gds-dropdown
        label="Astronaut"
        .validator=\${{
    validate: (el: any) => {
      if (el.value !== 'cat') return [{
        ...el.validity,
        valid: false,
        customError: true
      }, el.value === undefined ? 'An astronaut is required' : 'Only cats can pilot rockets!'];
    }
  }}
      >
        <gds-option>Pick your astronaut</gds-option>
        <gds-option value="dog">Dog</gds-option>
        <gds-option value="cat">Cat</gds-option>
        <gds-option value="fish">Fish</gds-option>
      </gds-dropdown>
      <gds-datepicker
        label="Launch date"
        .validator=\${{
    validate: (el: any) => {
      if (el.value === undefined) return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'A date is required'];
    }
  }}
      ></gds-datepicker>
      <gds-container margin="s 0 s">
        <gds-form-summary></gds-form-summary>
      </gds-container>
      <gds-button type="submit">
        Launch
        <gds-icon-rocket slot="trail"></gds-icon-rocket>
      </gds-button>
      <gds-button type="reset">Reset</gds-button>
    </form>\`
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source},description:{story:"To use the `gds-form-summary` component, simply place it inside a form element.\n\nThe suammry component will automatically detect any form elements with validation errors and display them.",...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.description}}};const lr=["Usage"];export{n as Usage,lr as __namedExportsOrder,mr as default};
