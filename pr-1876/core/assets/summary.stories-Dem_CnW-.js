import{i as f,x as v}from"./lit-element-C_s9q329.js";import{m as y,s as h}from"./runtime-CMQcyTl6.js";import{n as b}from"./when-BR7zwNJC.js";import{g as x,G as w,h as m}from"./custom-element-scoping-BRwcB39g.js";import"./container-CwIOipYz.js";import"./card-jDpO6Z0G.js";import"./flex-U3KxNhbH.js";import"./text-C6tqUTyI.js";import"./datepicker-BB9VgnnT.js";import"./dropdown-CVC_SsFw.js";import"./menu-heading-XFxs8GKd.js";import"./input-D49f3Hhk.js";import"./rocket-By36vGMQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./tokens.style-ORrtMT1R.js";import"./style-expression-property-Dbto4vYM.js";import"./static-_ukc2i0J.js";import"./default-typography.styles-Bl0hQgz1.js";import"./localized-decorator-iufJoRiP.js";import"./query-p8xgzTDt.js";import"./query-async-MEroNOeJ.js";import"./field-base-CtS2wKvo.js";import"./button-C98Bowv3.js";import"./class-map-Bz98xO8-.js";import"./directive-CF8sV3Lr.js";import"./if-defined-Ct9lF4W9.js";import"./transitional-styles-DmGQO-4x.js";import"./observe-light-dom-CmJPHUQ4.js";import"./watch-tFciLXSI.js";import"./triangle-exclamation-B-wIpajX.js";import"./icon-B0MZHPzy.js";import"./badge-CBDLysbI.js";import"./directive-helpers-C6DiESt7.js";import"./ref-D_ho-JAG.js";import"./attribute-converters-CdI0trPX.js";import"./calendar-D0A6jyrK.js";import"./calender-add-DHBc5WbP.js";import"./chevron-right-PBmRoEoM.js";import"./popover-Sgqol2dX.js";import"./floating-ui.dom-BmFOYU71.js";import"./cross-small-yxU1jNo3.js";import"./backdrop-ec3yctIc.js";import"./checkmark-U2REtlhW.js";import"./chevron-bottom-bIUUPBrH.js";import"./choose-Dh3k58u9.js";import"./cross-large-Bcz2yPOv.js";var k=Object.defineProperty,E=Object.getOwnPropertyDescriptor,C=(o,t,s,e)=>{for(var r=e>1?void 0:e?E(t,s):t,a=o.length-1,n;a>=0;a--)(n=o[a])&&(r=(e?n(t,s,r):n(r))||r);return e&&r&&k(t,s,r),r};let d=class extends w{connectedCallback(){super.connectedCallback(),this.form=this.closest("form")||void 0,this.form&&(this.formObserver=new MutationObserver(()=>{this.requestUpdate()}),this.formObserver.observe(this.form,{attributes:!0,subtree:!0}))}disconnectedCallback(){var o;super.disconnectedCallback(),(o=this.formObserver)==null||o.disconnect()}render(){var s;const t=Array.from(((s=this.form)==null?void 0:s.elements)||[]).filter(e=>e.invalid);return b(t.length>0,()=>m`<gds-card level="2" border="4xs/negative" border-radius="xs" padding="l" background="negative" color="negative">
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
  `;d=C([x("gds-form-summary")],d);const ht={title:"Components/Form/Validation/Summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form/summary)
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
}`,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source},description:{story:"To use the `gds-form-summary` component, simply place it inside a form element.\n\nThe suammry component will automatically detect any form elements with validation errors and display them.",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.description}}};const bt=["Usage"];export{i as Usage,bt as __namedExportsOrder,ht as default};
