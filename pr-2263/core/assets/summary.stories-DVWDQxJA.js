import{x as o}from"./lit-element-Bx14lxc-.js";import{a as w}from"./argTableProps-DPxgxip9.js";import{G as D}from"./summary.component-B9OqHMy3.js";import"./datepicker-CbYgSCU7.js";import"./dropdown-D0Z-Sisu.js";import"./option-DKd3kX-Y.js";import"./menu-heading-C4bL2v-L.js";import"./input-DGf9wXDD.js";import"./rocket-Cjor054m.js";import"./custom-elements-DfYVWaAI.js";import"./runtime-BL31MtW8.js";import"./gds-element-DKcDvDP5.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-async-MEroNOeJ.js";import"./query-p8xgzTDt.js";import"./datepicker.component-DqzGYy4K.js";import"./localized-decorator-DtmrKsyB.js";import"./directive-CF8sV3Lr.js";import"./directive-helpers-BF33kFuJ.js";import"./ref-R0wBYijq.js";import"./when-BR7zwNJC.js";import"./button.component-BkcuxinN.js";import"./if-defined-BAXgs-ZI.js";import"./static-B8S6DEnV.js";import"./tokens.style-BJN0iJ4Z.js";import"./transitional-styles-D1hSHNWN.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-Bw_LIblW.js";import"./watch-tFciLXSI.js";import"./dropdown.component-mpVYh_a0.js";import"./icon-B8lys3o1.js";import"./floating-ui.dom-BmFOYU71.js";import"./form-control-host.style-DwE6PniO.js";import"./form-control-header.component-vpadqcyN.js";import"./badge.component-0s0z8gFC.js";import"./flex.component-CFOjodgy.js";import"./div.component-C2xH1QCG.js";import"./triangle-exclamation.component-Bojk6KCv.js";import"./card.component-D4L7sTXJ.js";import"./unwrap-slots-DbM1_JFj.js";import"./checkmark.component-C-24DmIV.js";import"./rbcb-toggle.template-BwdIBVxJ.js";import"./chevron-bottom.component-MKoQRIt_.js";import"./popover.component-BoOcYSQb.js";import"./cross-small.component-DYGxDGWL.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-Bt-nxGsI.js";import"./calender-add.component-B6xBsEo-.js";import"./chevron-right.component-CbIXEccM.js";import"./arrow-up.component-TQdWYk6r.js";import"./menu-heading.component-DB5By7oI.js";import"./input.component-Bov6nicI.js";import"./cross-large.component-BIXjQpCK.js";import"./rocket.component-CFz6aIVy.js";D.define();const At={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-errorsummary)

Form summary shows all form errors in one place.`}}},tags:["autodocs"],argTypes:{...w("gds-form-summary")}},i={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},r={...i,render:s=>o`<form style="width: 450px" novalidate>
      <gds-card display="flex" flex-direction="column" gap="m" padding="l">
        <gds-text tag="h2" font="heading-l">Launch control</gds-text>
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
        <gds-form-summary reactive></gds-form-summary>
        <gds-flex gap="m" justify-content="center" margin="s 0 0 0">
          <gds-button type="reset" rank="tertiary">Reset</gds-button>
          <gds-button type="submit">
            Launch
            <gds-icon-rocket slot="trail"></gds-icon-rocket>
          </gds-button>
        </gds-flex>
      </gds-card>
    </form>`},e={...i,render:s=>o`<form style="width: 450px" novalidate>
      <gds-form-summary id="summary"></gds-form-summary>
      <gds-flex flex-direction="column" gap="m" align-items="start">
        <gds-input
          label="Designation"
          .validator=${{validate:t=>{if(t.value==="")return[{...t.validity,valid:!1,customError:!0},"A designation is required"]}}}
        ></gds-input>
        <gds-button
          type="submit"
          onclick="document.getElementById('summary').refresh()"
          >Submit</gds-button
        >
      </gds-flex>
    </form> `},a={...i,render:s=>o`<form style="width: 450px">
      <gds-flex flex-direction="column" gap="m">
        <label for="designation">Designation</label>
        <input
          id="designation"
          type="text"
          aria-invalid="true"
          data-label="Designation"
          data-errormessage="A designation is required"
          required
        />
        <gds-form-summary id="summary"></gds-form-summary>
      </gds-flex>
    </form> `};var n,d,m,l,u;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<form style="width: 450px" novalidate>
      <gds-card display="flex" flex-direction="column" gap="m" padding="l">
        <gds-text tag="h2" font="heading-l">Launch control</gds-text>
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
        <gds-form-summary reactive></gds-form-summary>
        <gds-flex gap="m" justify-content="center" margin="s 0 0 0">
          <gds-button type="reset" rank="tertiary">Reset</gds-button>
          <gds-button type="submit">
            Launch
            <gds-icon-rocket slot="trail"></gds-icon-rocket>
          </gds-button>
        </gds-flex>
      </gds-card>
    </form>\`
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source},description:{story:"To use the `gds-form-summary` component, simply place it inside a form element.\n\nIn this example we're using a reactive form summary below the form controls. The `reactive` attribute makes the summary\nupdate automatically as the user interacts with the form.",...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.description}}};var p,g,c,f,y;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<form style="width: 450px" novalidate>
      <gds-form-summary id="summary"></gds-form-summary>
      <gds-flex flex-direction="column" gap="m" align-items="start">
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
        <gds-button
          type="submit"
          onclick="document.getElementById('summary').refresh()"
          >Submit</gds-button
        >
      </gds-flex>
    </form> \`
}`,...(c=(g=e.parameters)==null?void 0:g.docs)==null?void 0:c.source},description:{story:'The `gds-form-summary` component can also be used in a non-reactive way.\nIn this example, the summary is placed above the form controls and\nis updated manually when the user clicks the "Submit" button.',...(y=(f=e.parameters)==null?void 0:f.docs)==null?void 0:y.description}}};var v,b,h,x,k;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<form style="width: 450px">
      <gds-flex flex-direction="column" gap="m">
        <label for="designation">Designation</label>
        <input
          id="designation"
          type="text"
          aria-invalid="true"
          data-label="Designation"
          data-errormessage="A designation is required"
          required
        />
        <gds-form-summary id="summary"></gds-form-summary>
      </gds-flex>
    </form> \`
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source},description:{story:"`gds-form-summary` can also be used with native controls by specifying label and error message as data attributes on the control.\nAny control that has `aria-invalid` set to `true` will be included in the summary.",...(k=(x=a.parameters)==null?void 0:x.docs)==null?void 0:k.description}}};const qt=["Usage","ManualUpdate","NativeControls"];export{e as ManualUpdate,a as NativeControls,r as Usage,qt as __namedExportsOrder,At as default};
