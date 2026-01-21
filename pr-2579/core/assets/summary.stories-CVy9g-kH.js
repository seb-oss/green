import{x as t}from"./iframe-DMVDZK-F.js";import{a}from"./argTableProps-DMeyZ76X.js";import"./summary-C0B_ngTO.js";import"./datepicker-BqMtFl36.js";import"./dropdown-DFcVcLAy.js";import"./option-Cm_4hNqX.js";import"./menu-heading-CS6Ylg90.js";import"./input-mqWHq0eI.js";import"./rocket-RwPbS7Gw.js";import"./checkbox-group-C5YeJM8a.js";import"./radio-group-GCjgXQQj.js";import"./summary.component-DVzV22_u.js";import"./query-async-DSgUWN1w.js";import"./datepicker.component-CfTf4wux.js";import"./localized-decorator-DU-mJU0o.js";import"./ref-By9UehS8.js";import"./dropdown.component-DavHeW06.js";import"./icon.component-Da4pJnMV.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-CTSx9vmk.js";import"./form-control-header.component-c1Ykmh4V.js";import"./badge.component-HeRQXwua.js";import"./flex.component-EdCVezaM.js";import"./triangle-exclamation.component-CWH96Ec7.js";import"./card.component-B2BzVFUU.js";import"./unwrap-slots-D5I8iXbt.js";import"./checkmark.component-RCtX7Zav.js";import"./rbcb-toggle.template-DmsQiC9g.js";import"./chevron-bottom.component-BTlgSAPw.js";import"./cross-small.component-Ccz8mlUw.js";import"./popover.component-1obP0BBf.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-8si0vxCS.js";import"./calender-add.component-BVp9C9tx.js";import"./chevron-left.component-CbQwnSNQ.js";import"./chevron-right.component-BhSDgjG1.js";import"./arrow-up.component-kBqvGgso.js";import"./menu-heading.component-DWpffdIo.js";import"./input.component-Q-oeW--3.js";import"./textarea.component-CqEqKNyJ.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-CD7oKHBB.js";import"./checkbox-group.component-BoKwnMvB.js";import"./toggle-control-base.component-BwrjrzBl.js";import"./minus-small.component-Czyt-YFT.js";import"./radio-group.component-DgM7UmOX.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-errorsummary)

Form summary shows all form errors in one place.`}}},tags:["autodocs"],argTypes:{...a("gds-form-summary")}},o={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},Y={...o,render:e=>t`<form style="width: 450px" novalidate>
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
    </form>`},Z={...o,render:e=>t`<form style="width: 450px" novalidate>
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
    </form> `},rr={...o,render:e=>t`<form style="width: 450px">
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
    </form> `},tr=["Usage","ManualUpdate","NativeControls"];export{Z as ManualUpdate,rr as NativeControls,Y as Usage,tr as __namedExportsOrder,X as default};
