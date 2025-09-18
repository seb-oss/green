import{x as a}from"./lit-element-Bx14lxc-.js";import{a as w}from"./argTableProps-EwZq-HaQ.js";import"./summary-BveqnWrK.js";import"./datepicker-jwJ-4nFB.js";import"./option-Dc4-2w50.js";import"./menu-heading-Dq5Tinss.js";import"./input-7NEbU46a.js";import"./rocket-BiEipOg5.js";import"./checkbox-group-BgeNpLUs.js";import"./radio-group-BXj0pE2f.js";import"./custom-elements-BIlYvivv.js";import"./datepicker.component-BHXlm8Kr.js";import"./runtime-CNluP0A8.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./query-async-MEroNOeJ.js";import"./directive-CF8sV3Lr.js";import"./directive-helpers-BF33kFuJ.js";import"./ref-R0wBYijq.js";import"./when-BR7zwNJC.js";import"./button.component-HPQBaSXh.js";import"./if-defined-BAXgs-ZI.js";import"./static-B8S6DEnV.js";import"./gds-element-DTROifYq.js";import"./tokens.style-BS_h03Rl.js";import"./transitional-styles-D2m6PuZd.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-DjJmHTNk.js";import"./watch-tFciLXSI.js";import"./dropdown.component-DJL7z8kO.js";import"./unsafe-html-CYO4avEf.js";import"./floating-ui.dom-BmFOYU71.js";import"./form-control-host.style-CPtp5zqH.js";import"./form-control-header.component-DIQtapHK.js";import"./badge.component-CQ4vhMV_.js";import"./flex.component-BVj2qVI7.js";import"./div.component-u0ZDh3Rx.js";import"./triangle-exclamation.component-BE7gShXQ.js";import"./icon-B5K-CtrZ.js";import"./card.component-CZY7ZcCx.js";import"./unwrap-slots-CufDiWNZ.js";import"./checkmark.component-R2px8xUs.js";import"./rbcb-toggle.template-B-MDayTD.js";import"./chevron-bottom.component-DLaO4DBf.js";import"./cross-small.component-EFfw3vQm.js";import"./popover.component-Bht6TI0b.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-C_6Q8_Xn.js";import"./calender-add.component-D4WHeM4U.js";import"./chevron-right.component-KMhiJYh5.js";import"./menu-heading.component-BpdNZgWt.js";import"./input.component-CI_iDHVa.js";import"./rocket.component-DH5DuTAD.js";import"./radio.component-xcCzph_M.js";import"./context-menu.component-CsOjwKkz.js";import"./dot-grid-one-horizontal-CFHuegqJ.js";import"./breadcrumbs.component-Ct1LFuQk.js";import"./coachmark.component-qv9mg8wx.js";import"./zoom-out.component-DzcK4Bcl.js";import"./divider.component-D96LLYQk.js";import"./filter-chips.component-XuCbymy8.js";import"./resize-observer-B9k8v2TZ.js";import"./arrow-up.component-20TuBzq8.js";import"./grid.component-BZGwMAVG.js";import"./grouped-list.component-DokSLlFg.js";import"./arrow-down.component-Db438Dr9.js";import"./arrow-left.component-DO1OYTpQ.js";import"./arrow-right.component-DqJOsBto.js";import"./arrow-rotate-counter-clockwise.component-BK3CaQBt.js";import"./sun.component-C_Di9MSa.js";import"./star.component-CDOqquLq.js";import"./bubbles.component-D3eo4jZp.js";import"./chain-link.component-Dl9ViTGS.js";import"./chevron-top.component-Db4qw5lr.js";import"./circle-check.component-TAzvXILU.js";import"./circles-three.component-XG09Eidd.js";import"./credit-card.component-BdHQhPr2.js";import"./folder.component-DVcmruPG.js";import"./magnifying-glass.component-DjhG6JPp.js";import"./people-profile.component-mBCU0NPz.js";import"./push.component-GO9M03Sl.js";import"./square-grid-circle.component-wZlP9YQj.js";import"./img.component-MDK7xbH3.js";import"./link.component-Du_Uve17.js";import"./mask.component-DmqdlB6B.js";import"./menu-button.component-Di-BLVVz.js";import"./segmented-control.component-ClRJJeUA.js";import"./select.component-Bph21nNJ.js";import"./signal.component-rQ8yDA4J.js";import"./spinner.component-D__6Rmkk.js";import"./text.component-Cy4JnYRC.js";import"./textarea.component-DINdkJvA.js";import"./theme.component-CW2K_n3c.js";import"./video.component-RrMjNbsD.js";const me={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source},description:{story:"To use the `gds-form-summary` component, simply place it inside a form element.\n\nIn this example we're using a reactive form summary below the form controls. The `reactive` attribute makes the summary\nupdate automatically as the user interacts with the form.",...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.description}}};var u,c,g,v,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(c=t.parameters)==null?void 0:c.docs)==null?void 0:g.source},description:{story:'The `gds-form-summary` component can also be used in a non-reactive way.\nIn this example, the summary is placed above the form controls and\nis updated manually when the user clicks the "Submit" button.',...(f=(v=t.parameters)==null?void 0:v.docs)==null?void 0:f.description}}};var y,b,h,x,k;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source},description:{story:"`gds-form-summary` can also be used with native controls by specifying label and error message as data attributes on the control.\nAny control that has `aria-invalid` set to `true` will be included in the summary.",...(k=(x=o.parameters)==null?void 0:x.docs)==null?void 0:k.description}}};const pe=["Usage","ManualUpdate","NativeControls"];export{t as ManualUpdate,o as NativeControls,e as Usage,pe as __namedExportsOrder,me as default};
