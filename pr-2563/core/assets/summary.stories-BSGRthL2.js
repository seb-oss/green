import{x as t}from"./iframe-DB_oVbyA.js";import{a}from"./argTableProps-B76e1JNV.js";import"./summary-EHXbsnVM.js";import"./datepicker-CS7ONeAD.js";import"./dropdown-B3U0iAiy.js";import"./option-C7NXqJbF.js";import"./menu-heading-DVPNAXjJ.js";import"./input-C7v7mX3L.js";import"./rocket-D_BfUJmy.js";import"./checkbox-group-BYb_HvSe.js";import"./radio-group-BsdMKUvk.js";import"./summary.component-CpOHYyz7.js";import"./query-async-C8OqxdsG.js";import"./datepicker.component-Dm54ObE5.js";import"./localized-decorator-DlNuqE9w.js";import"./ref-CGZEREFu.js";import"./dropdown.component-DR5Qkzd_.js";import"./icon.component-vvk5QY31.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-CBmIABk_.js";import"./form-control-header.component-BkI4QHH4.js";import"./badge.component-m1k_23uO.js";import"./flex.component-BuewdMkP.js";import"./triangle-exclamation.component-CrymZ3b8.js";import"./card.component-Cs6wsFd_.js";import"./unwrap-slots-Dtoh0pzo.js";import"./checkmark.component-JBh7TGp8.js";import"./rbcb-toggle.template-Zr7BKGCW.js";import"./chevron-bottom.component-DxurLAAp.js";import"./cross-small.component-CQtxVTMV.js";import"./popover.component-BUPAN7Fk.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-CUHGWxEO.js";import"./calender-add.component-CX0xkMEn.js";import"./chevron-left.component-B78iQqQ5.js";import"./chevron-right.component-_0iyOLN4.js";import"./arrow-up.component-CCcETn_v.js";import"./menu-heading.component-DNUWWm7c.js";import"./input.component-DHGZMvhr.js";import"./textarea.component-DYiY599N.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-8szwAUPC.js";import"./checkbox-group.component-CbyV4to7.js";import"./toggle-control-base.component-BmbxIuzN.js";import"./minus-small.component-DxR6sAgG.js";import"./radio-group.component-DrDO29Vz.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
