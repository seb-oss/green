import{i as f,x as v}from"./lit-element-da1d3957.js";import{n as y}from"./when-cf7256a5.js";import{m as h,s as b}from"./lit-localize-87611c26.js";import{g as w,G as x,h as m}from"./gds-element-7aeb5dea.js";import"./flex-adf52020.js";import"./card-cd302103.js";import"./rocket-f6dd5d64.js";import"./datepicker-6feea671.js";import"./dropdown-dfc8bfcd.js";import"./menu-heading-d741b6bd.js";import"./input-bec70a75.js";import"./_commonjsHelpers-725317a4.js";import"./tokens.style-8a0fa4c3.js";import"./style-expression-property-10f12bac.js";import"./watch-c4961afe.js";import"./icon-b03b5b36.js";import"./directive-12249aa5.js";import"./query-b9d3c2af.js";import"./query-async-1ff18261.js";import"./until-b31a68a9.js";import"./directive-helpers-a760bbfe.js";import"./async-directive-d03ddf37.js";import"./class-map-4d7ebbd7.js";import"./form-control-86c8becc.js";import"./transitional-styles-05c0db21.js";import"./attribute-converters-ae269b4b.js";import"./popover-9aae7909.js";import"./floating-ui.dom-fef04946.js";import"./cross-small-cd5463a5.js";import"./backdrop-f8e85519.js";import"./calendar-2b89714a.js";import"./if-defined-86aa62fe.js";import"./button-948d0024.js";import"./static-1a858edb.js";import"./constrain-slots-08d8606c.js";import"./calendar-3a4f95ae.js";import"./chevron-right-f70c81eb.js";import"./chevron-bottom-9285428f.js";import"./checkmark-6542ac50.js";import"./ref-1b5a919a.js";var k=Object.defineProperty,E=Object.getOwnPropertyDescriptor,O=(o,t,n,r)=>{for(var e=r>1?void 0:r?E(t,n):t,i=o.length-1,a;i>=0;i--)(a=o[i])&&(e=(r?a(t,n,e):a(e))||e);return r&&e&&k(t,n,e),e};let d=class extends x{connectedCallback(){super.connectedCallback(),this.form=this.closest("form")||void 0,this.form&&(this.formObserver=new MutationObserver(()=>{this.requestUpdate()}),this.formObserver.observe(this.form,{attributes:!0,subtree:!0}))}disconnectedCallback(){var o;super.disconnectedCallback(),(o=this.formObserver)==null||o.disconnect()}render(){var n;const t=Array.from(((n=this.form)==null?void 0:n.elements)||[]).filter(r=>r.invalid);return y(t.length>0,()=>m`<gds-card border="4xs/error-text" radius="2xs" padding="m" color="error-text">
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
