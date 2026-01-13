import{x as t}from"./iframe-DOJZ23y4.js";import{a}from"./argTableProps-tbwtV2-L.js";import"./summary-DIsTb_2x.js";import"./datepicker-BIro77wz.js";import"./dropdown-5U5C4pTg.js";import"./option-DBSCIbju.js";import"./menu-heading-Duxaf3Y8.js";import"./input-DiCx7iAo.js";import"./rocket-DbJhUioy.js";import"./checkbox-group-CzAVw4HP.js";import"./radio-group-DGsMW8sr.js";import"./summary.component-BjVykyDW.js";import"./query-async-DqBxOevM.js";import"./datepicker.component-1OIV2wem.js";import"./localized-decorator-BbXVxjad.js";import"./ref-x54S0qmx.js";import"./dropdown.component-BfsWOHXM.js";import"./icon.component-BlpY1Aja.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-BxnI6BzZ.js";import"./form-control-header.component-PyK2CiLc.js";import"./badge.component-68tZ5p0d.js";import"./flex.component-CiPQ6f85.js";import"./triangle-exclamation.component-DcP9TMzR.js";import"./card.component-DKolGwEG.js";import"./unwrap-slots-B9zDo62J.js";import"./checkmark.component-CjUgeTzt.js";import"./rbcb-toggle.template-DjjSGjdM.js";import"./chevron-bottom.component-D_J2RiH1.js";import"./cross-small.component-DANNROAF.js";import"./popover.component-BVV1u9fe.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-BE3idDrP.js";import"./calender-add.component-CwANTPpm.js";import"./chevron-left.component-B7eFou6P.js";import"./chevron-right.component-D09XzU8J.js";import"./arrow-up.component-mA8e98tU.js";import"./menu-heading.component-DSyW6156.js";import"./input.component-BdJyoiEw.js";import"./textarea.component-BBvoFfWe.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-C3F6RtjA.js";import"./checkbox-group.component-Bgdoqh6_.js";import"./toggle-control-base.component-eIB2mWA9.js";import"./minus-small.component-U_9_J4Id.js";import"./radio-group.component-Ch3bw8j_.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
