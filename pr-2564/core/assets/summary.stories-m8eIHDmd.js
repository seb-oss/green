import{x as t}from"./iframe-DKGp6tbF.js";import{a}from"./argTableProps-BcqHuFCi.js";import"./summary-B4dQYBWO.js";import"./datepicker-BTn70Dh7.js";import"./dropdown-CjDzsXIV.js";import"./option-BcZi10M5.js";import"./menu-heading-DldwZe15.js";import"./input-DNQpqZPq.js";import"./rocket-DwXErrZX.js";import"./checkbox-group-eO6PcUs_.js";import"./radio-group-DzdlqLW1.js";import"./summary.component-d2msrKIW.js";import"./query-async-B7bF_jEv.js";import"./datepicker.component-qQ3uNlqq.js";import"./localized-decorator-CRfYRl6h.js";import"./ref-DalgA91g.js";import"./dropdown.component-CLtQ9P4A.js";import"./icon.component-DGVk6XJy.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-CPhYF0Ty.js";import"./form-control-header.component-BTgBjYlm.js";import"./badge.component-D_4hXUkY.js";import"./flex.component-GdH1hCnE.js";import"./triangle-exclamation.component-CplQt61S.js";import"./card.component-CiyntDtf.js";import"./unwrap-slots-C5fuViZI.js";import"./checkmark.component-kdUOqK4W.js";import"./rbcb-toggle.template-DSctgtSb.js";import"./chevron-bottom.component-C_TYGvB4.js";import"./cross-small.component-CjzBIs-o.js";import"./popover.component-B74XK85v.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-GH3ddKFj.js";import"./calender-add.component-XlQ6rSyw.js";import"./chevron-left.component-8KmmacIx.js";import"./chevron-right.component-DeCZjbiM.js";import"./arrow-up.component-BjLfuMJu.js";import"./menu-heading.component-COf7Gx0b.js";import"./input.component-DEsqOCLP.js";import"./textarea.component-DQkYINyL.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-n5R19mO5.js";import"./checkbox-group.component-BS60XlkN.js";import"./toggle-control-base.component-Bn3snHP8.js";import"./minus-small.component-sSiyayID.js";import"./radio-group.component-ORhutU_K.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
