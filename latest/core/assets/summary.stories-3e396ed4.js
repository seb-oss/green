import{i as f,k as v}from"./lit-element-1d72f0ce.js";import{n as y}from"./when-748fcf30.js";import{m as h,s as b}from"./runtime-c06dc943.js";import{g as w,G as k,h as m}from"./gds-element-86064462.js";import"./container-f57b0c68.js";import"./card-a2ffcd2e.js";import"./flex-ba3deebf.js";import"./triangle-exclamation-d2ff01eb.js";import"./datepicker-2984d559.js";import"./dropdown-8e3bddd6.js";import"./menu-heading-1af2cf1d.js";import"./input-30ba0749.js";import"./_commonjsHelpers-725317a4.js";import"./tokens.style-b5b8efd2.js";import"./style-expression-property-a96dbce8.js";import"./watch-c4961afe.js";import"./icon-a640baec.js";import"./directive-dd518ee3.js";import"./query-b9d3c2af.js";import"./query-async-1ff18261.js";import"./until-27bb1490.js";import"./directive-helpers-8f06cd33.js";import"./async-directive-1808f33b.js";import"./class-map-f04c1558.js";import"./form-control-e1f3f4f4.js";import"./transitional-styles-8ea9588a.js";import"./attribute-converters-ae269b4b.js";import"./popover-dd11fc1b.js";import"./floating-ui.dom-7bad3c97.js";import"./cross-small-7e719cb3.js";import"./backdrop-0315f321.js";import"./calendar-43cdf181.js";import"./if-defined-5f576255.js";import"./button-5347bd66.js";import"./static-c0094392.js";import"./constrain-slots-08d8606c.js";import"./calendar-cdd5732a.js";import"./chevron-right-f371f6a8.js";import"./chevron-bottom-2d87aad2.js";import"./checkmark-da617071.js";import"./ref-f16d4147.js";var x=Object.defineProperty,E=Object.getOwnPropertyDescriptor,C=(o,t,s,r)=>{for(var e=r>1?void 0:r?E(t,s):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(e=(r?n(t,s,e):n(e))||e);return r&&e&&x(t,s,e),e};let d=class extends k{connectedCallback(){super.connectedCallback(),this.form=this.closest("form")||void 0,this.form&&(this.formObserver=new MutationObserver(()=>{this.requestUpdate()}),this.formObserver.observe(this.form,{attributes:!0,subtree:!0}))}disconnectedCallback(){var o;super.disconnectedCallback(),(o=this.formObserver)==null||o.disconnect()}render(){var s;const t=Array.from(((s=this.form)==null?void 0:s.elements)||[]).filter(r=>r.invalid);return y(t.length>0,()=>m`<gds-card border="4xs/error-text" radius="2xs" padding="m" color="error-text">
          <gds-flex gap="s">
            <gds-container>
              <gds-icon-triangle-exclamation></gds-icon-triangle-exclamation>
            </gds-container>
            <gds-container>
            ${h(b`There are ${t.length} errors to correct before you can continue:`)}
            <ul>
              ${t.map(r=>m`<li><a href @click=${e=>{e.preventDefault(),r.focus()}}>${r.label}</li>`)}
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
  `;d=C([w("gds-form-summary")],d);const ut={title:"Docs/Components/Form/Validation/Summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form/summary)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-errorsummary)


When a user attempts to submit a form with errors, this component displays a summary of those errors.
Including an error summary greatly assists users in promptly identifying and addressing multiple errors
in a consolidated manner. It provides a clear indication of what went wrong and what needs to be corrected.

Each form component that contains an error is listed as a row, displaying the name of the field and
linking it to the corresponding form element.`}}},tags:["autodocs"]},O={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},a={...O,render:o=>v`<form style="width: 450px">
      <gds-dropdown
        label="Astronaut"
        .validator=${{validate:t=>{if(t.value!=="cat")return[{...t.validity,valid:!1,customError:!0},t.value===void 0?"An astronaut is required":"Only cats can pilot rockets!"]}}}
      >
        <gds-option>Pick your astronaut</gds-option>
        <gds-option value="dog">Dog</gds-option>
        <gds-option value="cat">Cat</gds-option>
        <gds-option value="fish">Fish</gds-option>
      </gds-dropdown>
      <gds-datepicker
        label="Launch date"
        .validator=${{validate:t=>{if(t.value===void 0)return[{...t.validity,valid:!1,customError:!0},"A date is required"]}}}
      ></gds-datepicker>
      <gds-input
        label="Designation"
        .validator=${{validate:t=>{if(t.value==="")return[{...t.validity,valid:!1,customError:!0},"A designation is required"]}}}
      ></gds-input>
      <gds-container margin="s 0 s">
        <gds-form-summary></gds-form-summary>
      </gds-container>
      <gds-button type="submit">
        Launch
        <gds-icon-rocket slot="trail"></gds-icon-rocket>
      </gds-button>
      <gds-button type="reset">Reset</gds-button>
    </form>`};var l,p,c,u,g;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
      <gds-input
        label="Designation"
        .validator=\${{
    validate: (el: any) => {
      if (el.value === '') return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'A designation is required'];
    }
  }}
      ></gds-input>
      <gds-container margin="s 0 s">
        <gds-form-summary></gds-form-summary>
      </gds-container>
      <gds-button type="submit">
        Launch
        <gds-icon-rocket slot="trail"></gds-icon-rocket>
      </gds-button>
      <gds-button type="reset">Reset</gds-button>
    </form>\`
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source},description:{story:"To use the `gds-form-summary` component, simply place it inside a form element.\n\nThe suammry component will automatically detect any form elements with validation errors and display them.",...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.description}}};const gt=["Usage"];export{a as Usage,gt as __namedExportsOrder,ut as default};
