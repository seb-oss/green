import{x as a}from"./lit-element-Bx14lxc-.js";import{a as w}from"./argTableProps-D-y8dqKP.js";import"./summary-CPJLXCY8.js";import"./datepicker-C17g09dm.js";import"./option-4ENHEwPk.js";import"./menu-heading-Du5XH7I9.js";import"./input-LgVVBZK9.js";import"./rocket-JL-UIoCB.js";import"./checkbox-group-DE86pDfS.js";import"./radio-group-ACsJGRyI.js";import"./custom-elements-B__lYVH5.js";import"./datepicker.component-ekTBew1r.js";import"./runtime-CNluP0A8.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./query-async-MEroNOeJ.js";import"./directive-CF8sV3Lr.js";import"./directive-helpers-BF33kFuJ.js";import"./ref-R0wBYijq.js";import"./when-BR7zwNJC.js";import"./button.component-JM-idc4o.js";import"./if-defined-BAXgs-ZI.js";import"./static-B8S6DEnV.js";import"./gds-element-DTROifYq.js";import"./tokens.style-BdDo8hO3.js";import"./transitional-styles-DiLOIj5O.js";import"./observe-light-dom-CmJPHUQ4.js";import"./declarative-layout-mixins-DjJmHTNk.js";import"./watch-tFciLXSI.js";import"./dropdown.component-BmSt8G4m.js";import"./unsafe-html-CYO4avEf.js";import"./floating-ui.dom-BmFOYU71.js";import"./form-control-host.style-b1pago7S.js";import"./form-control-header.component-8Iem-cUl.js";import"./badge.component-CcUMZhCa.js";import"./flex.component-CpiOY5Nh.js";import"./div.component-Bwhn3sdF.js";import"./triangle-exclamation.component-Wl9k6JsN.js";import"./icon-IppnH7m0.js";import"./card.component-C3pzAMBo.js";import"./unwrap-slots-dIUgOhQO.js";import"./checkmark.component-CvDnT4vK.js";import"./rbcb-toggle.template-B-MDayTD.js";import"./chevron-bottom.component-DvdFtQAh.js";import"./cross-large.component-CDU66MN7.js";import"./popover.component-npmmEDVR.js";import"./cross-small.component-DfZOVszh.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-Cptz_iuB.js";import"./calender-add.component-BCnvMiOu.js";import"./chevron-right.component-CXkGvv_P.js";import"./menu-heading.component-C-1yHDoM.js";import"./input.component-C0qhSiHQ.js";import"./rocket.component-Smg9cQAb.js";import"./radio.component-U6tbLPdi.js";import"./context-menu.component-Cj_rVABB.js";import"./dot-grid-one-horizontal-BTutLRUE.js";import"./breadcrumbs.component-D0W-_hBL.js";import"./coachmark.component-qv9mg8wx.js";import"./divider.component-COOAmeIr.js";import"./filter-chips.component-CxQRfhfL.js";import"./resize-observer-B9k8v2TZ.js";import"./arrow-up.component-D1sr9uL9.js";import"./grid.component-B85TAkCc.js";import"./grouped-list.component-DBKpcvsq.js";import"./zoom-out.component-B9JD1bqo.js";import"./arrow-down.component-CAbsNufV.js";import"./arrow-left.component-CYyHBDTq.js";import"./arrow-right.component-CUb1GLeX.js";import"./arrow-rotate-counter-clockwise.component-B7NHWReD.js";import"./sun.component-BbIGy7_I.js";import"./star.component-hFwriIMN.js";import"./bubbles.component-C7xc8nzR.js";import"./chain-link.component-CcdP8-Zn.js";import"./chevron-top.component-BqJH81S_.js";import"./circle-check.component-7EuvVyb5.js";import"./circles-three.component-BVD-foMp.js";import"./credit-card.component-xyNytqtg.js";import"./folder.component-DO_xGeco.js";import"./magnifying-glass.component-o_DOm4Vp.js";import"./people-profile.component-DcSJWcs9.js";import"./push.component-jZQsbeg-.js";import"./square-grid-circle.component-BILywVe6.js";import"./img.component-DrPtgga7.js";import"./link.component-Bm2yRdY6.js";import"./mask.component-BqdWgCdj.js";import"./menu-button.component-DY6qFUJs.js";import"./segmented-control.component-DrHwiGgU.js";import"./select.component-PZNyVxdV.js";import"./signal.component-ChLmyohN.js";import"./spinner.component-ePQ0Axho.js";import"./text.component-o6W9k7P5.js";import"./textarea.component-DeLcRO-K.js";import"./theme.component-Dd_EmnBC.js";import"./video.component-72UyvUOs.js";const pe={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source},description:{story:"`gds-form-summary` can also be used with native controls by specifying label and error message as data attributes on the control.\nAny control that has `aria-invalid` set to `true` will be included in the summary.",...(k=(x=o.parameters)==null?void 0:x.docs)==null?void 0:k.description}}};const ue=["Usage","ManualUpdate","NativeControls"];export{t as ManualUpdate,o as NativeControls,e as Usage,ue as __namedExportsOrder,pe as default};
