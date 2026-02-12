import{x as t}from"./iframe-BeOaLZjf.js";import{a}from"./argTableProps-B9nRRHG0.js";import"./summary-DIlxJAA4.js";import"./datepicker-DszV-QI3.js";import"./dropdown-jXC5Zjoh.js";import"./option-D_R5Art-.js";import"./menu-heading-DknM5QTm.js";import"./input-Bsc7sq7G.js";import"./rocket-DtUMyWJN.js";import"./checkbox-group-DiuiJIcz.js";import"./radio-group-FNLCMZ-G.js";import"./summary.component-Cl5WD0Tz.js";import"./query-async-CywWd7aF.js";import"./datepicker.component-C2x1uBnJ.js";import"./localized-decorator-8g8mZYvT.js";import"./ref-MhBei6io.js";import"./dropdown.component-UTY1Mkcy.js";import"./icon.component-D3mUFOjJ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-COGVIFqv.js";import"./form-control-header.component-Dh0XGzGI.js";import"./badge.component-BK4bPnmm.js";import"./flex.component-Dzm4lvmQ.js";import"./triangle-exclamation.component-CBt56mvX.js";import"./card.component-BconUH57.js";import"./unwrap-slots--8Zj2VHl.js";import"./checkmark.component-BLIBtG0c.js";import"./rbcb-toggle.template-BN-0j27d.js";import"./chevron-bottom.component-xA2g2m3n.js";import"./cross-small.component-DW8WKBBZ.js";import"./popover.component-D-HspmfA.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-DupMX2RG.js";import"./calender-add.component-yuHa_VjC.js";import"./chevron-left.component-DZWWAl5n.js";import"./chevron-right.component-xFPaWKUC.js";import"./arrow-up.component-CiDX8nuq.js";import"./menu-heading.component-EcsSywx1.js";import"./input.component-B_6fh-TN.js";import"./textarea.component-BR6ErWNV.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-Cyd1G9Yl.js";import"./checkbox-group.component-BYC9h-l-.js";import"./toggle-control-base.component-CawlCCDR.js";import"./minus-small.component-CJuWZVAV.js";import"./radio-group.component-Ck_9rmGH.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
