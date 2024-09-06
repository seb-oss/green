import{i as f,k as v}from"./lit-element-1d72f0ce.js";import{n as y}from"./when-748fcf30.js";import{m as h,s as b}from"./runtime-c06dc943.js";import{g as w,G as k,h as m}from"./gds-element-d791ed3d.js";import"./flex-71c0c708.js";import"./card-c79f8d7f.js";import"./rocket-4c465682.js";import"./datepicker-f6d2a2fd.js";import"./dropdown-e905bc8a.js";import"./menu-heading-86615c64.js";import"./input-07ed5b7c.js";import"./_commonjsHelpers-725317a4.js";import"./tokens.style-711a3a94.js";import"./style-expression-property-731c6e0d.js";import"./watch-c4961afe.js";import"./icon-b442d341.js";import"./directive-dd518ee3.js";import"./query-b9d3c2af.js";import"./query-async-1ff18261.js";import"./until-27bb1490.js";import"./directive-helpers-8f06cd33.js";import"./async-directive-1808f33b.js";import"./class-map-f04c1558.js";import"./form-control-c8d4aaee.js";import"./transitional-styles-c75c0fd2.js";import"./attribute-converters-ae269b4b.js";import"./popover-e94a7434.js";import"./floating-ui.dom-7bad3c97.js";import"./cross-small-460d19cc.js";import"./backdrop-c8192df5.js";import"./calendar-3bb16108.js";import"./if-defined-5f576255.js";import"./button-1ab354d3.js";import"./static-c0094392.js";import"./constrain-slots-08d8606c.js";import"./calendar-fabb0a8a.js";import"./chevron-right-59e84500.js";import"./chevron-bottom-d68c2f0b.js";import"./checkmark-f1b1247c.js";import"./ref-f16d4147.js";var x=Object.defineProperty,E=Object.getOwnPropertyDescriptor,O=(o,t,s,r)=>{for(var e=r>1?void 0:r?E(t,s):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(e=(r?n(t,s,e):n(e))||e);return r&&e&&x(t,s,e),e};let d=class extends k{connectedCallback(){super.connectedCallback(),this.form=this.closest("form")||void 0,this.form&&(this.formObserver=new MutationObserver(()=>{this.requestUpdate()}),this.formObserver.observe(this.form,{attributes:!0,subtree:!0}))}disconnectedCallback(){var o;super.disconnectedCallback(),(o=this.formObserver)==null||o.disconnect()}render(){var s;const t=Array.from(((s=this.form)==null?void 0:s.elements)||[]).filter(r=>r.invalid);return y(t.length>0,()=>m`<gds-card border="4xs/error-text" radius="2xs" padding="m" color="error-text">
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
linking it to the corresponding form element.`}}},tags:["autodocs"]},$={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},a={...$,render:o=>v`<form style="width: 450px">
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
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source},description:{story:"To use the `gds-form-summary` component, simply place it inside a form element.\n\nThe suammry component will automatically detect any form elements with validation errors and display them.",...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.description}}};const ut=["Usage"];export{a as Usage,ut as __namedExportsOrder,ct as default};
