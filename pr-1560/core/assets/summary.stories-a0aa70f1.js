import{i as f,x as v}from"./lit-element-2a5e401f.js";import{n as y}from"./when-cf7256a5.js";import{m as h,s as b}from"./lit-localize-87611c26.js";import{g as w,G as x,h as m}from"./gds-element-24e794df.js";import"./flex-2da73efe.js";import"./card-55b2a775.js";import"./rocket-e61bc03d.js";import"./datepicker-a9050c4c.js";import"./dropdown-5fc01757.js";import"./menu-heading-f2ea806e.js";import"./input-e52579f1.js";import"./_commonjsHelpers-725317a4.js";import"./tokens.style-681e2422.js";import"./style-expression-property-45d22dc5.js";import"./watch-c4961afe.js";import"./icon-9eb1b5fc.js";import"./directive-12249aa5.js";import"./query-b9d3c2af.js";import"./query-async-1ff18261.js";import"./until-87c9e354.js";import"./directive-helpers-5872e68c.js";import"./async-directive-71ec3066.js";import"./class-map-43969d56.js";import"./form-control-0ab31465.js";import"./transitional-styles-3f5f5b40.js";import"./attribute-converters-ae269b4b.js";import"./popover-38537494.js";import"./floating-ui.dom-373c8bf6.js";import"./cross-small-d60aea14.js";import"./backdrop-3ac2ea4c.js";import"./calendar-f9245291.js";import"./if-defined-39fa3d49.js";import"./button-33f6b31b.js";import"./static-50b4adfb.js";import"./constrain-slots-08d8606c.js";import"./calendar-c792254d.js";import"./chevron-right-0245b7b1.js";import"./chevron-bottom-27e6f9ff.js";import"./checkmark-8afb0c89.js";import"./ref-f09415fa.js";var k=Object.defineProperty,E=Object.getOwnPropertyDescriptor,O=(o,t,n,r)=>{for(var e=r>1?void 0:r?E(t,n):t,i=o.length-1,a;i>=0;i--)(a=o[i])&&(e=(r?a(t,n,e):a(e))||e);return r&&e&&k(t,n,e),e};let d=class extends x{connectedCallback(){super.connectedCallback(),this.form=this.closest("form")||void 0,this.form&&(this.formObserver=new MutationObserver(()=>{this.requestUpdate()}),this.formObserver.observe(this.form,{attributes:!0,subtree:!0}))}disconnectedCallback(){var o;super.disconnectedCallback(),(o=this.formObserver)==null||o.disconnect()}render(){var n;const t=Array.from(((n=this.form)==null?void 0:n.elements)||[]).filter(r=>r.invalid);return y(t.length>0,()=>m`<gds-card border="4xs/error-text" radius="2xs" padding="m" color="error-text">
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
  `;d=O([w("gds-form-summary")],d);const ct={title:"Docs/Form validation/Summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form/summary)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-errorsummary)


When a user attempts to submit a form with errors, this component displays a summary of those errors.
Including an error summary greatly assists users in promptly identifying and addressing multiple errors
in a consolidated manner. It provides a clear indication of what went wrong and what needs to be corrected.

Each form component that contains an error is listed as a row, displaying the name of the field and
linking it to the corresponding form element.`}}},tags:["autodocs"]},$={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},s={...$,render:o=>v`<form style="width: 450px">
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
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source},description:{story:"To use the `gds-form-summary` component, simply place it inside a form element.\n\nThe suammry component will automatically detect any form elements with validation errors and display them.",...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.description}}};const ut=["Usage"];export{s as Usage,ut as __namedExportsOrder,ct as default};
