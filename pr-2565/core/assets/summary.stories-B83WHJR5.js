import{x as t}from"./iframe--vWvZ7y_.js";import{a}from"./argTableProps-C-PfqTu8.js";import"./summary-Usdn7jxc.js";import"./datepicker-DOyZKmXJ.js";import"./dropdown-BmWpTBvX.js";import"./option-DwCLeYvm.js";import"./menu-heading-DbbiWerV.js";import"./input-DzssE53R.js";import"./rocket-CiAZFkz4.js";import"./checkbox-group-D_UlbC0B.js";import"./radio-group-BLf_czG6.js";import"./summary.component-D9L0owxW.js";import"./query-async-DWZxqPii.js";import"./datepicker.component-UkeJpUyb.js";import"./localized-decorator-DFTApz3b.js";import"./ref-CqdQ0_Cl.js";import"./dropdown.component-Cni0BbgY.js";import"./icon.component-CY3ew2P1.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-D0q-mwUm.js";import"./form-control-header.component-Dw9skxrI.js";import"./badge.component-DNWv_Tpe.js";import"./flex.component-Bu9Fk6VG.js";import"./triangle-exclamation.component-ClxGBMmW.js";import"./card.component-DVsY5IqQ.js";import"./unwrap-slots-C2-RXtB_.js";import"./checkmark.component-BeqLxXbm.js";import"./rbcb-toggle.template-BGLxDsUr.js";import"./chevron-bottom.component-DtNdPb5B.js";import"./cross-small.component-B4nl_1Ce.js";import"./popover.component-HKG-Ha3y.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-CgkxWZYM.js";import"./calender-add.component-CKnozN60.js";import"./chevron-left.component-BKUYy8rd.js";import"./chevron-right.component-DWWdOAki.js";import"./arrow-up.component-DsdRw_Vw.js";import"./menu-heading.component-QOMUt2tA.js";import"./input.component-WNIDM5uW.js";import"./textarea.component-C9ywXU2Y.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DRaDP6f2.js";import"./checkbox-group.component-Cp72VLKb.js";import"./toggle-control-base.component-CqmBnMT4.js";import"./minus-small.component-C0-aakNs.js";import"./radio-group.component-DkP4UEpM.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
