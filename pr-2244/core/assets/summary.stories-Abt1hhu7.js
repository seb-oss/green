import{x as a}from"./lit-element-Bx14lxc-.js";import{a as w}from"./argTableProps-6U5Y534d.js";import{G as A}from"./checkbox-group-Dc-9Jt63.js";import"./datepicker-QCsFN30p.js";import"./option-D4Z2pGr2.js";import"./menu-heading-SLHpJQAP.js";import"./input-P8KSzkNJ.js";import"./rocket-Dl6T6mKT.js";import"./radio-group-BbcHyn41.js";import"./custom-elements-DxSs-J3U.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./if-defined-BAXgs-ZI.js";import"./directive-CF8sV3Lr.js";import"./radio.component-Bl7okNgv.js";import"./runtime-CNluP0A8.js";import"./form-control-header.component-BPTUDchH.js";import"./when-BR7zwNJC.js";import"./badge.component-BsJn8GVw.js";import"./gds-element-DJNCW3iR.js";import"./tokens.style-iX6aIK9m.js";import"./declarative-layout-mixins-CquYcIh8.js";import"./flex.component-CHYyV8f-.js";import"./div.component-Cx0JXo06.js";import"./triangle-exclamation.component-BSRcVOcl.js";import"./icon-Ban3Gn5U.js";import"./unsafe-html-CYO4avEf.js";import"./watch-tFciLXSI.js";import"./button.component-CLPWbXlB.js";import"./static-B8S6DEnV.js";import"./transitional-styles-DRTvhbpp.js";import"./observe-light-dom-CmJPHUQ4.js";import"./card.component-yp2NQ7aE.js";import"./rbcb-toggle.template-DKcNVEZ_.js";import"./dropdown.component-DkQ9ahlc.js";import"./query-async-MEroNOeJ.js";import"./floating-ui.dom-BmFOYU71.js";import"./form-control-host.style-ClrCrq8A.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./unwrap-slots-dIUgOhQO.js";import"./checkmark.component-DoDUErgW.js";import"./chevron-bottom.component-Dgm8zoKz.js";import"./popover.component-BTUjX2CI.js";import"./cross-small.component-DhvOsnze.js";import"./menu-heading.component-CCWlRcsV.js";import"./context-menu.component-DAwphQAy.js";import"./dot-grid-one-horizontal-lq6PPZXO.js";import"./breadcrumbs.component-CswR3itJ.js";import"./chevron-right.component-DhYbfXgM.js";import"./coachmark.component-Dp73IxhO.js";import"./datepicker.component-C7s1LjSK.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-CVFm3FqJ.js";import"./calender-add.component-DPB7W6y3.js";import"./dialog.component-UnrnGypq.js";import"./divider.component-BcsSMN4l.js";import"./filter-chips.component-CmTPwP9y.js";import"./resize-observer-B9k8v2TZ.js";import"./arrow-up.component-yrFobrMY.js";import"./grid.component-WyVP2nUC.js";import"./grouped-list.component-CkKog7EN.js";import"./zoom-out.component-B4BpC31t.js";import"./arrow-down.component-63KtuItS.js";import"./arrow-left.component-Dp9ezhDx.js";import"./arrow-right.component-CbTGtAYP.js";import"./arrow-rotate-counter-clockwise.component-86jm4Jb4.js";import"./sun.component-DNB-jyfW.js";import"./star.component-rcbed6H3.js";import"./bubbles.component-C0QQW4q-.js";import"./chain-link.component-B8SLSmLj.js";import"./chevron-top.component-CUFanbr8.js";import"./circle-check.component-CNcE23qA.js";import"./circles-three.component-D1ZvTjra.js";import"./credit-card.component-ClYIiUex.js";import"./cross-large.component-D-03cj5-.js";import"./folder.component-dHk6nqA9.js";import"./magnifying-glass.component-Blq5Pb7R.js";import"./people-profile.component-D1CtNFQU.js";import"./push.component-5i57YIZk.js";import"./rocket.component-BFURyDjS.js";import"./square-grid-circle.component-CYv8ySiI.js";import"./img.component-BdEaOdYZ.js";import"./input.component-co7jIrYV.js";import"./link.component-KcyJx-0U.js";import"./mask.component-9eVBuO7S.js";import"./menu-button.component-DV5F8Hvw.js";import"./segmented-control.component-CsUNY3vB.js";import"./select.component-D8AzfOlw.js";import"./signal.component-J_G6qNWi.js";import"./spinner.component-xxDD_BQ1.js";import"./text.component-sQTeJzVf.js";import"./textarea.component-DJwNajLR.js";import"./theme.component-0g2dqLXp.js";import"./video.component-D6JAb8Dm.js";A.define();const ue={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-errorsummary)

Form summary shows all form errors in one place.`}}},tags:["autodocs"],argTypes:{...w("gds-form-summary")}},i={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},e={...i,render:s=>a`<form style="width: 450px" novalidate>
      <gds-card
        display="flex"
        flex-direction="column"
        gap="m"
        variant="secondary"
        border-color="subtle-01"
        padding="l"
      >
        <gds-text tag="h2" font="heading-l">Launch control</gds-text>
        <gds-checkbox-group
          direction="row"
          label="Mission type"
          .validator=${{validate:r=>{if(r.value.length===0)return[{...r.validity,valid:!1,customError:!0},"At least one mission type is required"]}}}
        >
          <gds-checkbox value="exploration" label="Exploration"></gds-checkbox>
          <gds-checkbox value="research" label="Research"></gds-checkbox>
          <gds-checkbox value="rescue" label="Rescue"></gds-checkbox>
          <gds-checkbox value="other" label="Other"></gds-checkbox>
        </gds-checkbox-group>
        <gds-radio-group
          direction="row"
          label="Rocket type"
          .validator=${{validate:r=>{if(r.value===void 0)return[{...r.validity,valid:!1,customError:!0},"A rocket type is required"]}}}
        >
          <gds-radio value="falcon" label="Falcon"></gds-radio>
          <gds-radio value="starship" label="Starship"></gds-radio>
          <gds-radio value="saturn" label="Saturn"></gds-radio>
          <gds-radio value="other" label="Other"></gds-radio>
        </gds-radio-group>
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
        <gds-form-summary reactive></gds-form-summary>
        <gds-flex gap="m" justify-content="center" margin="s 0 0 0">
          <gds-button type="reset" rank="tertiary">Reset</gds-button>
          <gds-button type="submit">
            Launch
            <gds-icon-rocket slot="trail"></gds-icon-rocket>
          </gds-button>
        </gds-flex>
      </gds-card>
    </form>`},t={...i,render:s=>a`<form style="width: 450px" novalidate>
      <gds-form-summary id="summary"></gds-form-summary>
      <gds-flex flex-direction="column" gap="m" align-items="start">
        <gds-input
          label="Designation"
          .validator=${{validate:r=>{if(r.value==="")return[{...r.validity,valid:!1,customError:!0},"A designation is required"]}}}
        ></gds-input>
        <gds-button
          type="submit"
          onclick="document.getElementById('summary').refresh()"
          >Submit</gds-button
        >
      </gds-flex>
    </form> `},o={...i,render:s=>a`<form style="width: 450px">
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
    </form> `};var d,n,l,m,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<form style="width: 450px" novalidate>
      <gds-card
        display="flex"
        flex-direction="column"
        gap="m"
        variant="secondary"
        border-color="subtle-01"
        padding="l"
      >
        <gds-text tag="h2" font="heading-l">Launch control</gds-text>
        <gds-checkbox-group
          direction="row"
          label="Mission type"
          .validator=\${{
    validate: (el: any) => {
      if (el.value.length === 0) return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'At least one mission type is required'];
    }
  }}
        >
          <gds-checkbox value="exploration" label="Exploration"></gds-checkbox>
          <gds-checkbox value="research" label="Research"></gds-checkbox>
          <gds-checkbox value="rescue" label="Rescue"></gds-checkbox>
          <gds-checkbox value="other" label="Other"></gds-checkbox>
        </gds-checkbox-group>
        <gds-radio-group
          direction="row"
          label="Rocket type"
          .validator=\${{
    validate: (el: any) => {
      if (el.value === undefined) return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'A rocket type is required'];
    }
  }}
        >
          <gds-radio value="falcon" label="Falcon"></gds-radio>
          <gds-radio value="starship" label="Starship"></gds-radio>
          <gds-radio value="saturn" label="Saturn"></gds-radio>
          <gds-radio value="other" label="Other"></gds-radio>
        </gds-radio-group>
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
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source},description:{story:"To use the `gds-form-summary` component, simply place it inside a form element.\n\nIn this example we're using a reactive form summary below the form controls. The `reactive` attribute makes the summary\nupdate automatically as the user interacts with the form.",...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.description}}};var u,c,g,f,v;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(c=t.parameters)==null?void 0:c.docs)==null?void 0:g.source},description:{story:'The `gds-form-summary` component can also be used in a non-reactive way.\nIn this example, the summary is placed above the form controls and\nis updated manually when the user clicks the "Submit" button.',...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.description}}};var y,b,h,x,k;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source},description:{story:"`gds-form-summary` can also be used with native controls by specifying label and error message as data attributes on the control.\nAny control that has `aria-invalid` set to `true` will be included in the summary.",...(k=(x=o.parameters)==null?void 0:x.docs)==null?void 0:k.description}}};const ce=["Usage","ManualUpdate","NativeControls"];export{t as ManualUpdate,o as NativeControls,e as Usage,ce as __namedExportsOrder,ue as default};
