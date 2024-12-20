import{i as f,x as v}from"./lit-element-C_s9q329.js";import{m as y,s as h}from"./runtime-CMQcyTl6.js";import{n as b}from"./when-BR7zwNJC.js";import{g as x,G as w,h as m}from"./custom-element-scoping-b4lD3laR.js";import"./container-C9hIB2Az.js";import"./card-XqiHdOAu.js";import"./flex-DnAdyWkx.js";import"./text-Cp4uT8zv.js";import"./datepicker-DNkjpkJa.js";import"./dropdown-B3lb2_Ew.js";import"./menu-heading-Do8mweoD.js";import"./input-CW-mONvX.js";import"./rocket-DZwDY5xD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./tokens.style-B6Zq2CtY.js";import"./style-expression-property-CYg4CGI6.js";import"./static-_ukc2i0J.js";import"./default-typography.styles-Bl0hQgz1.js";import"./localized-decorator-B8fm5KIw.js";import"./query-p8xgzTDt.js";import"./query-async-MEroNOeJ.js";import"./directive-CF8sV3Lr.js";import"./directive-helpers-C6DiESt7.js";import"./ref-D_ho-JAG.js";import"./transitional-styles-6hf7tRoc.js";import"./watch-tFciLXSI.js";import"./attribute-converters-CdI0trPX.js";import"./button-JbY0W8yK.js";import"./class-map-Bz98xO8-.js";import"./if-defined-Ct9lF4W9.js";import"./observe-light-dom-CmJPHUQ4.js";import"./calendar-DNOxsyKs.js";import"./calender-add-BZH2uut0.js";import"./icon-BAGUC4Iy.js";import"./chevron-right-BwEVIrUT.js";import"./popover-R5_F7LQe.js";import"./floating-ui.dom-BmFOYU71.js";import"./cross-small-CgIxxlLH.js";import"./backdrop-BGzK9qgd.js";import"./chevron-bottom-CTTxLLl8.js";import"./checkmark-D62oMl69.js";import"./form-control-footer-CpU6jekn.js";import"./triangle-exclamation-di0WtSeu.js";import"./badge-B7pEuVzS.js";var k=Object.defineProperty,E=Object.getOwnPropertyDescriptor,C=(o,t,s,e)=>{for(var r=e>1?void 0:e?E(t,s):t,a=o.length-1,n;a>=0;a--)(n=o[a])&&(r=(e?n(t,s,r):n(r))||r);return e&&r&&k(t,s,r),r};let d=class extends w{connectedCallback(){super.connectedCallback(),this.form=this.closest("form")||void 0,this.form&&(this.formObserver=new MutationObserver(()=>{this.requestUpdate()}),this.formObserver.observe(this.form,{attributes:!0,subtree:!0}))}disconnectedCallback(){var o;super.disconnectedCallback(),(o=this.formObserver)==null||o.disconnect()}render(){var s;const t=Array.from(((s=this.form)==null?void 0:s.elements)||[]).filter(e=>e.invalid);return b(t.length>0,()=>m`<gds-card level="2" border="4xs/negative" border-radius="xs" padding="l" background="negative" color="negative">
          <gds-flex gap="s"></gds-flex>
            <gds-text font-size="heading-xs" font-weight="book">
              ${y(h`There are ${t.length} errors to correct before you can continue:`)}
            </gds-text>
            <ul>
              ${t.map(e=>m`<li><a href @click=${r=>{r.preventDefault(),e.focus()}}>${e.label}</li>`)}
            </ul>
        <gds-flex>
      </gds-card>`)}};d.styles=f`
    ul {
      list-style-type: none;
      margin: 1rem 0 0;
      padding: 0;
    }
    li {
      margin: 0.5rem 0;
    }
    a {
      color: inherit;
    }
  `;d=C([x("gds-form-summary")],d);const vt={title:"Components/Form/Validation/Summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form/summary)
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
    </form>`};var l,p,u,c,g;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source},description:{story:"To use the `gds-form-summary` component, simply place it inside a form element.\n\nThe suammry component will automatically detect any form elements with validation errors and display them.",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.description}}};const yt=["Usage"];export{i as Usage,yt as __namedExportsOrder,vt as default};
