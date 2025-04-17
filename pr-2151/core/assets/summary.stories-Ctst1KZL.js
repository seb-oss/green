import{i as f,x as v}from"./lit-element-Bx14lxc-.js";import{a as y}from"./argTableProps-VH7JAiB_.js";import{m as h,s as b}from"./runtime-BL31MtW8.js";import{n as x}from"./when-BR7zwNJC.js";import{G as w,h as m,g as k}from"./custom-element-scoping-b4c89-hi.js";import{G as C}from"./card.component-NhDjIX8u.js";import{G as E}from"./flex.component-CPPMsy9S.js";import{G as O}from"./text.component-CVlwMV6p.js";import"./datepicker-WjCM18Yf.js";import"./dropdown-Cvgrk1Na.js";import"./option-4ifnKUll.js";import"./menu-heading-DRiBCIq2.js";import"./input-CmlyvXuj.js";import"./rocket-DxnqIoVB.js";import"./custom-elements-Bh7QQjxO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./tokens.style-FJSmZZcv.js";import"./declarative-layout-mixins-BgWwoHZ-.js";import"./div.component-BuGkGqpt.js";import"./static-B8S6DEnV.js";import"./localized-decorator-DtmrKsyB.js";import"./query-p8xgzTDt.js";import"./query-async-MEroNOeJ.js";import"./directive-CF8sV3Lr.js";import"./directive-helpers-BF33kFuJ.js";import"./ref-R0wBYijq.js";import"./button.component-DtF9Ct8d.js";import"./class-map-CXsQwv0r.js";import"./if-defined-CVqwUuaf.js";import"./transitional-styles-CLkQCQV5.js";import"./observe-light-dom-CmJPHUQ4.js";import"./watch-tFciLXSI.js";import"./dropdown.component-CI-IKTp2.js";import"./icon-61apcvHX.js";import"./floating-ui.dom-BmFOYU71.js";import"./form-control-host.style-C4yW1JWW.js";import"./form-control-header.component-B10A3La-.js";import"./badge.component-TZirAiZ9.js";import"./triangle-exclamation.component-CxJk4dIA.js";import"./option.styles-B-eFIeek.js";import"./checkmark.component-C_IlKIw3.js";import"./chevron-bottom.component-Dki1Ti7d.js";import"./popover.component-Cdagx_v3.js";import"./cross-small.component-CpVSYm7P.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BH8M2EJJ.js";import"./calender-add.component-CfgXJ5ZS.js";import"./chevron-right.component-PoZnyick.js";import"./menu-heading.component-Mi9hAkFF.js";import"./cross-large.component-q0mIQ94A.js";var $=Object.defineProperty,A=Object.getOwnPropertyDescriptor,D=(o,r,s,t)=>{for(var e=t>1?void 0:t?A(r,s):r,n=o.length-1,d;n>=0;n--)(d=o[n])&&(e=(t?d(r,s,e):d(e))||e);return t&&e&&$(r,s,e),e};let a=class extends w{connectedCallback(){super.connectedCallback(),this.form=this.closest("form")||void 0,this.form&&(this.formObserver=new MutationObserver(()=>{this.requestUpdate()}),this.formObserver.observe(this.form,{attributes:!0,subtree:!0}))}disconnectedCallback(){var o;super.disconnectedCallback(),(o=this.formObserver)==null||o.disconnect()}render(){var s;const r=Array.from(((s=this.form)==null?void 0:s.elements)||[]).filter(t=>t.invalid);return x(r.length>0,()=>m`<gds-card
          level="2"
          border="4xs"
          border-color="negative"
          border-radius="xs"
          padding="l"
          background="negative"
          color="negative"
        >
          <gds-flex gap="s">
            <gds-text font-size="heading-xs" font-weight="book">
              ${h(b`There are ${r.length} errors to correct before you can continue:`)}
            </gds-text>
            <ul>
              ${r.map(t=>m`<li>
                    <a
                      href=""
                      @click=${e=>{e.preventDefault(),t.focus()}}
                      >${t.label}</a
                    >
                  </li>`)}
            </ul>
          </gds-flex>
        </gds-card>`)}};a.styles=f`
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
  `;a=D([k("gds-form-summary",{dependsOn:[C,E,O]})],a);a.define();const $r={title:"Components/Form/Validation/Summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form/summary)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-errorsummary)


When a user attempts to submit a form with errors, this component displays a summary of those errors.
Including an error summary greatly assists users in promptly identifying and addressing multiple errors
in a consolidated manner. It provides a clear indication of what went wrong and what needs to be corrected.

Each form component that contains an error is listed as a row, displaying the name of the field and
linking it to the corresponding form element.`}}},tags:["autodocs"],argTypes:{...y("gds-form-summary")}},G={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},i={...G,render:o=>v`<form style="width: 450px">
      <gds-flex flex-direction="column" gap="m">
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
        <gds-input
          label="Designation"
          .validator=${{validate:r=>{if(r.value==="")return[{...r.validity,valid:!1,customError:!0},"A designation is required"]}}}
        ></gds-input>
        <gds-div margin="s 0 s">
          <gds-form-summary></gds-form-summary>
        </gds-div>
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
        <gds-div margin="s 0 s">
          <gds-form-summary></gds-form-summary>
        </gds-div>
        <gds-flex gap="m">
          <gds-button type="submit">
            Launch
            <gds-icon-rocket slot="trail"></gds-icon-rocket>
          </gds-button>
          <gds-button type="reset">Reset</gds-button>
        </gds-flex>
      </gds-flex>
    </form>\`
}`,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source},description:{story:"To use the `gds-form-summary` component, simply place it inside a form element.\n\nThe suammry component will automatically detect any form elements with validation errors and display them.",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.description}}};const Ar=["Usage"];export{i as Usage,Ar as __namedExportsOrder,$r as default};
