import{x as a}from"./lit-element-Bx14lxc-.js";import{a as w}from"./argTableProps-DKL_mzwu.js";import{G as A}from"./checkbox-group-CJmDMr-8.js";import"./datepicker-BcFRUK30.js";import"./option-C2Koe4Rq.js";import"./menu-heading-CnkVyl9r.js";import"./input-C7GmdqxL.js";import"./rocket-CG9Z_nX_.js";import"./radio-group-6Q5bIe2m.js";import"./custom-elements-BasR93Qa.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./query-p8xgzTDt.js";import"./if-defined-BAXgs-ZI.js";import"./directive-CF8sV3Lr.js";import"./radio.component-Ccdi8xhH.js";import"./runtime-CNluP0A8.js";import"./form-control-header.component-C8yNg31b.js";import"./when-BR7zwNJC.js";import"./badge.component-DH6BYabK.js";import"./gds-element-DJNCW3iR.js";import"./tokens.style-B41Dpirr.js";import"./declarative-layout-mixins-CquYcIh8.js";import"./flex.component-C7Ornwwu.js";import"./div.component-BL4QQsYF.js";import"./triangle-exclamation.component-VpIEn-wc.js";import"./icon-DdzZnqx5.js";import"./unsafe-html-CYO4avEf.js";import"./watch-tFciLXSI.js";import"./button.component-DkxkWQde.js";import"./static-B8S6DEnV.js";import"./transitional-styles-DTrj-OFY.js";import"./observe-light-dom-CmJPHUQ4.js";import"./card.component-CHcv557n.js";import"./rbcb-toggle.template-KVNld5aR.js";import"./dropdown.component-BeOZwy4N.js";import"./query-async-MEroNOeJ.js";import"./floating-ui.dom-BmFOYU71.js";import"./form-control-host.style-Cqr2fwLY.js";import"./ref-R0wBYijq.js";import"./directive-helpers-BF33kFuJ.js";import"./unwrap-slots-Z1-BFqVx.js";import"./checkmark.component-CPU33izo.js";import"./chevron-bottom.component-BUZ1T0bL.js";import"./popover.component-SrErJWu7.js";import"./cross-small.component-lsLj_Icj.js";import"./menu-heading.component-Do2zbgFN.js";import"./context-menu.component-IXeYcU30.js";import"./dot-grid-one-horizontal-C4ZDFmVS.js";import"./breadcrumbs.component-Dp2CTLy9.js";import"./chevron-right.component-BNwNCLCd.js";import"./coachmark.component-CByhkZgF.js";import"./datepicker.component-Bj7LG1MC.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BZ8UcX0f.js";import"./calender-add.component-BX2eMxv8.js";import"./dialog.component-B3OggxZK.js";import"./divider.component-Cx8iHpM0.js";import"./filter-chips.component-gUyqbH96.js";import"./resize-observer-B9k8v2TZ.js";import"./arrow-up.component-D4l3oHcB.js";import"./grid.component-CPVIXEzB.js";import"./grouped-list.component-U5zdNa31.js";import"./zoom-out.component-B5uFw9h5.js";import"./arrow-down.component-DhiV4FJc.js";import"./arrow-left.component-DoZKSsbm.js";import"./arrow-right.component-DEGzaL9p.js";import"./arrow-rotate-counter-clockwise.component-5KX1tasR.js";import"./sun.component-B8irRYJK.js";import"./star.component-BzadgZf9.js";import"./bubbles.component-Dmu4_meM.js";import"./cain-link.component-DfhrGL3G.js";import"./chevron-top.component-CRCLmlqo.js";import"./circle-check.component-LwG5igky.js";import"./circles-three.component-BOH5p8mJ.js";import"./credit-card.component-5d8nQv42.js";import"./cross-large.component-CPZTBL9A.js";import"./folder.component-FCvk97_4.js";import"./magnifying-glass.component-DfdStmOd.js";import"./people-profile.component-Bg4WQRYp.js";import"./push.component-CExozTo2.js";import"./rocket.component-Ck2GeZe1.js";import"./square-grid-circle.component-CT32zQ6V.js";import"./img.component-B-YzZTK_.js";import"./input.component-BVpozbvN.js";import"./link.component-DmHRXCXC.js";import"./mask.component-DKJ0RPjX.js";import"./menu-button.component-BzVmJVUQ.js";import"./segmented-control.component-DZF2JPfG.js";import"./select.component-CqUExY7g.js";import"./signal.component-xX7ZjUov.js";import"./spinner.component-DL9g3Iaw.js";import"./text.component-Z1EVQ77F.js";import"./textarea.component-ByxZzuuc.js";import"./theme.component-bGE4VX_N.js";import"./video.component-CawQXpsV.js";A.define();const ue={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
