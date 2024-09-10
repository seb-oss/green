import{i as f,x as v}from"./lit-element-2a5e401f.js";import{n as y}from"./when-cf7256a5.js";import{m as h,s as b}from"./lit-localize-87611c26.js";import{g as w,G as x,h as m}from"./gds-element-90c5f05b.js";import"./container-45eca99d.js";import"./card-f1e333ae.js";import"./flex-f3c1e8c5.js";import"./triangle-exclamation-cb4a0a22.js";import"./datepicker-d148b38a.js";import"./dropdown-b998e196.js";import"./menu-heading-09c3770a.js";import"./input-770f5af1.js";import"./_commonjsHelpers-725317a4.js";import"./tokens.style-681e2422.js";import"./style-expression-property-5a4dd319.js";import"./watch-c4961afe.js";import"./icon-f5e30329.js";import"./directive-12249aa5.js";import"./query-b9d3c2af.js";import"./query-async-1ff18261.js";import"./until-87c9e354.js";import"./directive-helpers-5872e68c.js";import"./async-directive-71ec3066.js";import"./class-map-43969d56.js";import"./form-control-341856bb.js";import"./transitional-styles-7b8b97bc.js";import"./attribute-converters-ae269b4b.js";import"./popover-c2b0a7b2.js";import"./floating-ui.dom-373c8bf6.js";import"./cross-small-7d290a22.js";import"./backdrop-8fb40f42.js";import"./calendar-33d07044.js";import"./if-defined-39fa3d49.js";import"./button-8f6f3c9a.js";import"./static-50b4adfb.js";import"./constrain-slots-08d8606c.js";import"./calendar-79e0d96d.js";import"./chevron-right-300a14c6.js";import"./chevron-bottom-e55f6467.js";import"./checkmark-104a6d13.js";import"./ref-f09415fa.js";var k=Object.defineProperty,E=Object.getOwnPropertyDescriptor,C=(o,t,n,r)=>{for(var e=r>1?void 0:r?E(t,n):t,i=o.length-1,a;i>=0;i--)(a=o[i])&&(e=(r?a(t,n,e):a(e))||e);return r&&e&&k(t,n,e),e};let d=class extends x{connectedCallback(){super.connectedCallback(),this.form=this.closest("form")||void 0,this.form&&(this.formObserver=new MutationObserver(()=>{this.requestUpdate()}),this.formObserver.observe(this.form,{attributes:!0,subtree:!0}))}disconnectedCallback(){var o;super.disconnectedCallback(),(o=this.formObserver)==null||o.disconnect()}render(){var n;const t=Array.from(((n=this.form)==null?void 0:n.elements)||[]).filter(r=>r.invalid);return y(t.length>0,()=>m`<gds-card border="4xs/error-text" radius="2xs" padding="m" color="error-text">
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
linking it to the corresponding form element.`}}},tags:["autodocs"]},O={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},s={...O,render:o=>v`<form style="width: 450px">
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
    </form>`};var l,p,c,u,g;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source},description:{story:"To use the `gds-form-summary` component, simply place it inside a form element.\n\nThe suammry component will automatically detect any form elements with validation errors and display them.",...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.description}}};const gt=["Usage"];export{s as Usage,gt as __namedExportsOrder,ut as default};
