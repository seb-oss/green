import{i as f,x as v}from"./lit-element-C_s9q329.js";import{n as y}from"./when-BR7zwNJC.js";import{m as h,s as b}from"./runtime-CMQcyTl6.js";import{g as x,G as w,h as m}from"./gds-element-DjAhZX8m.js";import"./container-CigMimob.js";import"./card-C7YiX9nn.js";import"./flex-BeWEu_BE.js";import"./triangle-exclamation-D8aXgUcH.js";import"./datepicker-D7cpLmb9.js";import"./dropdown-eSbRgZUM.js";import"./menu-heading-ByeIJItC.js";import"./input-CZb3zy35.js";import"./rocket-BKtbWZ5l.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./tokens.style-B_4vLAFn.js";import"./style-expression-property-aSqd3nq4.js";import"./icon-CGYi4oOO.js";import"./directive-CF8sV3Lr.js";import"./query-p8xgzTDt.js";import"./query-async-MEroNOeJ.js";import"./until-DXcpnd_9.js";import"./directive-helpers-C6DiESt7.js";import"./async-directive-D5OLKesb.js";import"./class-map-Bz98xO8-.js";import"./button-BasPfvHS.js";import"./static-_ukc2i0J.js";import"./if-defined-Ct9lF4W9.js";import"./transitional-styles-xlKQ3pQf.js";import"./watch-tFciLXSI.js";import"./attribute-converters-CdI0trPX.js";import"./popover-CLEfKD6h.js";import"./floating-ui.dom-DJ1BFLcT.js";import"./cross-small-WNT3EiwY.js";import"./backdrop-Bu3skj6N.js";import"./calendar-DOjMElzC.js";import"./calendar-D_ymF_hk.js";import"./chevron-right-8UlxPyMF.js";import"./chevron-bottom-CGxvb78d.js";import"./checkmark-DIyhF3AJ.js";import"./ref-DDJrdyS4.js";import"./choose-Dh3k58u9.js";import"./text-BpuZ4lK0.js";import"./badge-BOd5zLMj.js";var k=Object.defineProperty,E=Object.getOwnPropertyDescriptor,C=(o,t,s,e)=>{for(var r=e>1?void 0:e?E(t,s):t,a=o.length-1,n;a>=0;a--)(n=o[a])&&(r=(e?n(t,s,r):n(r))||r);return e&&r&&k(t,s,r),r};let d=class extends w{connectedCallback(){super.connectedCallback(),this.form=this.closest("form")||void 0,this.form&&(this.formObserver=new MutationObserver(()=>{this.requestUpdate()}),this.formObserver.observe(this.form,{attributes:!0,subtree:!0}))}disconnectedCallback(){var o;super.disconnectedCallback(),(o=this.formObserver)==null||o.disconnect()}render(){var s;const t=Array.from(((s=this.form)==null?void 0:s.elements)||[]).filter(e=>e.invalid);return y(t.length>0,()=>m`<gds-card level="3" border="4xs/negative" border-radius="2xs" padding="m" color="error-text">
          <gds-flex gap="s" level=="3" color="negative">
            <gds-container>
              <gds-icon-triangle-exclamation></gds-icon-triangle-exclamation>
            </gds-container>
            <gds-container >
            ${h(b`There are ${t.length} errors to correct before you can continue:`)}
            <ul>
              ${t.map(e=>m`<li><a href @click=${r=>{r.preventDefault(),e.focus()}}>${e.label}</li>`)}
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
  `;d=C([x("gds-form-summary")],d);const ft={title:"Components/Form/Validation/Summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form/summary)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-errorsummary)


When a user attempts to submit a form with errors, this component displays a summary of those errors.
Including an error summary greatly assists users in promptly identifying and addressing multiple errors
in a consolidated manner. It provides a clear indication of what went wrong and what needs to be corrected.

Each form component that contains an error is listed as a row, displaying the name of the field and
linking it to the corresponding form element.`}}},tags:["autodocs"]},O={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},i={...O,render:o=>v`<form style="width: 450px">
      <gds-flex flex-direction="column" gap="m">
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
        <gds-flex gap="m">
          <gds-button type="submit">
            Launch
            <gds-icon-rocket slot="trail"></gds-icon-rocket>
          </gds-button>
          <gds-button type="reset">Reset</gds-button>
        </gds-flex>
      </gds-flex>
    </form>`};var l,p,c,u,g;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<form style="width: 450px">
      <gds-flex flex-direction="column" gap="m">
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
        <gds-flex gap="m">
          <gds-button type="submit">
            Launch
            <gds-icon-rocket slot="trail"></gds-icon-rocket>
          </gds-button>
          <gds-button type="reset">Reset</gds-button>
        </gds-flex>
      </gds-flex>
    </form>\`
}`,...(c=(p=i.parameters)==null?void 0:p.docs)==null?void 0:c.source},description:{story:"To use the `gds-form-summary` component, simply place it inside a form element.\n\nThe suammry component will automatically detect any form elements with validation errors and display them.",...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.description}}};const vt=["Usage"];export{i as Usage,vt as __namedExportsOrder,ft as default};