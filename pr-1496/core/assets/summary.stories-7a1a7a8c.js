import{i as f,x as y}from"./lit-element-71e04f06.js";import{n as h}from"./when-cf7256a5.js";import{m as v,s as b}from"./lit-localize-87611c26.js";import{g as w,G as x,h as m}from"./gds-element-54cd6e2a.js";import"./flex-8f214d1b.js";import"./card-156a0b5e.js";import"./rocket-89c6d494.js";import"./datepicker-aa885727.js";import"./dropdown-2a13683d.js";import"./menu-heading-3b3c7fe9.js";import"./_commonjsHelpers-725317a4.js";import"./tokens.style-880811e7.js";import"./style-expression-property-89161d08.js";import"./watch-c4961afe.js";import"./icon-35869773.js";import"./directive-12249aa5.js";import"./query-b9d3c2af.js";import"./query-async-1ff18261.js";import"./directive-helpers-9aabd8ef.js";import"./class-map-4ef1884f.js";import"./form-control-be1a61da.js";import"./transitional-styles-c1ac9719.js";import"./attribute-converters-ae269b4b.js";import"./popover-3ff8a5f8.js";import"./cross-small-edc2ae06.js";import"./backdrop-24fc6001.js";import"./calendar-694ea588.js";import"./if-defined-e4b5fcf9.js";import"./button-73c14736.js";import"./static-c6782857.js";import"./constrain-slots-08d8606c.js";import"./calendar-afca666d.js";import"./chevron-right-1a9f7b07.js";var k=Object.defineProperty,O=Object.getOwnPropertyDescriptor,C=(o,t,s,r)=>{for(var e=r>1?void 0:r?O(t,s):t,a=o.length-1,i;a>=0;a--)(i=o[a])&&(e=(r?i(t,s,e):i(e))||e);return r&&e&&k(t,s,e),e};let d=class extends x{connectedCallback(){super.connectedCallback(),this.form=this.closest("form")||void 0,this.form&&(this.formObserver=new MutationObserver(()=>{this.requestUpdate()}),this.formObserver.observe(this.form,{attributes:!0,subtree:!0}))}disconnectedCallback(){var o;super.disconnectedCallback(),(o=this.formObserver)==null||o.disconnect()}render(){var s;const t=Array.from(((s=this.form)==null?void 0:s.elements)||[]).filter(r=>r.invalid);return h(t.length>0,()=>m`<gds-card border="4xs/error-text" radius="2xs" padding="m" color="error-text">
          <gds-flex gap="s">
            <gds-container>
              <gds-icon-triangle-exclamation></gds-icon-triangle-exclamation>
            </gds-container>
            <gds-container>
            ${v(b`There are ${t.length} errors to correct before you can continue:`)}
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
  `;d=C([w("gds-form-summary")],d);const nt={title:"Docs/Form validation/Summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/sebgroup/green/tree/main/libs/core/src/components/form/summary)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-errorsummary)


When a user attempts to submit a form with errors, this component displays a summary of those errors.
Including an error summary greatly assists users in promptly identifying and addressing multiple errors
in a consolidated manner. It provides a clear indication of what went wrong and what needs to be corrected.

Each form component that contains an error is listed as a row, displaying the name of the field and
linking it to the corresponding form element.`}}},tags:["autodocs"]},E={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{chips:{control:{type:"array"}}}},n={...E,render:o=>y`<form style="width: 450px">
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
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source},description:{story:"To use the `gds-form-summary` component, simply place it inside a form element.\n\nThe suammry component will automatically detect any form elements with validation errors and display them.",...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.description}}};const at=["Usage"];export{n as Usage,at as __namedExportsOrder,nt as default};
