import{x as a}from"./lit-element-Bx14lxc-.js";import{a as w}from"./argTableProps-D4_Eb4lx.js";import{G as A}from"./checkbox-group-BQEez1GK.js";import"./datepicker-34Uwrtxp.js";import"./option-BE5mOLMq.js";import"./menu-heading-reSvGz2_.js";import"./input-xTYWuLeg.js";import"./rocket-CtxG3K_V.js";import"./radio-group-BFqhHxWA.js";import"./custom-elements-_qg00o7_.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./if-defined-BAXgs-ZI.js";import"./directive-CF8sV3Lr.js";import"./radio.component-BC5FgYgp.js";import"./runtime-CNluP0A8.js";import"./form-control-header.component-DaKwxvE7.js";import"./when-BR7zwNJC.js";import"./badge.component-BXstyslG.js";import"./gds-element-DTROifYq.js";import"./tokens.style-DW_p3hws.js";import"./declarative-layout-mixins-CquYcIh8.js";import"./flex.component-Ca7eLWps.js";import"./div.component-DaQR1erW.js";import"./triangle-exclamation.component-CsiTcZHL.js";import"./icon-DojjYwPd.js";import"./unsafe-html-CYO4avEf.js";import"./watch-tFciLXSI.js";import"./button.component-B47tSEyr.js";import"./static-B8S6DEnV.js";import"./transitional-styles-DOynpii0.js";import"./observe-light-dom-CmJPHUQ4.js";import"./card.component-BCUBr3QU.js";import"./rbcb-toggle.template-B-MDayTD.js";import"./dropdown.component-JHEuB6bS.js";import"./query-async-MEroNOeJ.js";import"./floating-ui.dom-BmFOYU71.js";import"./form-control-host.style-DCLs8Iwk.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./unwrap-slots-dIUgOhQO.js";import"./checkmark.component-BulL1WBX.js";import"./chevron-bottom.component-DNXEnIae.js";import"./cross-large.component-Bh0clgaq.js";import"./popover.component-DoSRASuY.js";import"./cross-small.component-BFx_I0HU.js";import"./menu-heading.component-DCorZ2oz.js";import"./context-menu.component-Ds80fSSD.js";import"./dot-grid-one-horizontal-HsUHtaLF.js";import"./breadcrumbs.component-DCU51WCj.js";import"./chevron-right.component-Cq1L1ZD9.js";import"./coachmark.component-qv9mg8wx.js";import"./datepicker.component-DAmwLo4D.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-DLzethqE.js";import"./calender-add.component-BDXFJ_rV.js";import"./dialog.component-C3_04nsM.js";import"./divider.component-BGWNZ2xd.js";import"./filter-chips.component-JOK2QrUr.js";import"./resize-observer-B9k8v2TZ.js";import"./arrow-up.component--NcEJstF.js";import"./grid.component-O4I_HBcu.js";import"./grouped-list.component-__kvP5al.js";import"./zoom-out.component-DfXW2sMH.js";import"./arrow-down.component-B-tu91gW.js";import"./arrow-left.component-C1q1Chw2.js";import"./arrow-right.component-Dky3JuU6.js";import"./arrow-rotate-counter-clockwise.component-DfeMKMBI.js";import"./sun.component-DRl8oJGw.js";import"./star.component-BpqCK7mk.js";import"./bubbles.component-8Ecfn-xg.js";import"./chain-link.component-DJyff3ot.js";import"./chevron-top.component-DqekN2os.js";import"./circle-check.component-mNA8pA7K.js";import"./circles-three.component-QFxPP8rj.js";import"./credit-card.component-BJb-S1LV.js";import"./folder.component-BCnl2fFS.js";import"./magnifying-glass.component-ffUqpVTj.js";import"./people-profile.component-4jcguwiR.js";import"./push.component-MR3i0VUS.js";import"./rocket.component-DabrSA2u.js";import"./square-grid-circle.component-CMdIxWZN.js";import"./img.component-ThCSJL_V.js";import"./input.component-BTKoXDBq.js";import"./link.component-Bcthl4sf.js";import"./mask.component-COE1gZK2.js";import"./menu-button.component-VCCswVTL.js";import"./segmented-control.component-DlVjrwzg.js";import"./select.component-GXk-00pp.js";import"./signal.component-BzbQi4kS.js";import"./spinner.component-CIQvRrhk.js";import"./text.component-CIskWtJh.js";import"./textarea.component-D4mmj4G8.js";import"./theme.component-BpYRebn8.js";import"./video.component-B9d3BK4H.js";A.define();const ue={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
