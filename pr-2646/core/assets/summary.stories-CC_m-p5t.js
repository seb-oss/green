import{x as t}from"./iframe-DVjfo5Ln.js";import{a}from"./argTableProps-CnpqC5LF.js";import"./summary-CfSJL5bG.js";import"./datepicker-DGuelMs0.js";import"./dropdown-CEmsZSQG.js";import"./option-Cmqj6Wlk.js";import"./menu-heading-BFuZVlag.js";import"./input-DXSUA4J6.js";import"./rocket-BeuxSdvp.js";import"./checkbox-group-B4PUAplM.js";import"./radio-group-DJkMzKGh.js";import"./summary.component-C4RnH992.js";import"./query-async-B352F0-y.js";import"./datepicker.component-CvPOeL8b.js";import"./localized-decorator-CZSlAWla.js";import"./ref-CqriZLxZ.js";import"./dropdown.component-ORB7QT0b.js";import"./icon.component-BtBCgRf6.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-BNdLfkPq.js";import"./form-control-header.component-CE4bm0Hl.js";import"./badge.component-Ib6Okjb_.js";import"./flex.component-DZ5xRByU.js";import"./triangle-exclamation.component-Cnf6kHSV.js";import"./card.component-pTOYvxvj.js";import"./unwrap-slots-DQ_WT6BF.js";import"./checkmark.component-C-3z3j5f.js";import"./rbcb-toggle.template--GXDZ2yj.js";import"./chevron-bottom.component-D7PhE0H9.js";import"./cross-small.component-I1_hNyTG.js";import"./popover.component-147-LKov.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-C8hc03_t.js";import"./calender-add.component-B2CPCDWg.js";import"./chevron-left.component-BrX-bVFF.js";import"./chevron-right.component-DaRR88Dh.js";import"./arrow-up.component-Dn_9wCE9.js";import"./menu-heading.component-DIWQPS7P.js";import"./input.component-lBEtirHQ.js";import"./textarea.component-DMQozlTs.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-BV4c5Jqx.js";import"./checkbox-group.component-CSXnBbd2.js";import"./toggle-control-base.component-qoI0Gb9j.js";import"./minus-small.component-BCwN8uyf.js";import"./radio-group.component-BLxV7bYA.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-errorsummary)

Form summary shows all form errors in one place.`}}},tags:["autodocs"],argTypes:{...a("gds-form-summary")}},o={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},X={...o,render:e=>t`<form style="width: 450px" novalidate>
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
        <gds-checkbox-group
          label="Terms and conditions"
          .hideLabel=${!0}
          .validator=${{validate:r=>{if(r.value.length===0)return[{...r.validity,valid:!1,customError:!0},"You must agree to the terms and conditions"]}}}
        >
          <gds-checkbox
            value="terms-and-conditions"
            label="I agree to the terms and conditions"
          ></gds-checkbox>
        </gds-checkbox-group>
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
    </form> `},tr=["Usage","ManualUpdate","NativeControls"];export{Z as ManualUpdate,rr as NativeControls,X as Usage,tr as __namedExportsOrder,W as default};
