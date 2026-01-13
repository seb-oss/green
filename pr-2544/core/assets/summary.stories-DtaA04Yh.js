import{x as t}from"./iframe-BuI_3Mva.js";import{a}from"./argTableProps-CNZq1neL.js";import"./summary-D70BVpfp.js";import"./datepicker-ZT8boaei.js";import"./dropdown-BAGoW9rm.js";import"./option-USUiSzAa.js";import"./menu-heading-BC74Ulhl.js";import"./input-BLrcW3DJ.js";import"./rocket-XQT8NkpU.js";import"./checkbox-group-DDleVNCJ.js";import"./radio-group-3cg3CwRq.js";import"./summary.component-D1mZuzt0.js";import"./query-async-CdxZ0fl2.js";import"./datepicker.component-CFz47QZW.js";import"./localized-decorator-WRRZVpPy.js";import"./ref-56KXTwPO.js";import"./dropdown.component-CyN7dhkl.js";import"./icon.component-5RBNwOY8.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-CtgavwA-.js";import"./form-control-header.component-Bgm7ADf7.js";import"./badge.component-BB8O2jBS.js";import"./flex.component-eYoLGB_i.js";import"./triangle-exclamation.component-Bq7pD_SP.js";import"./card.component-BbIheG_I.js";import"./unwrap-slots-CuRJd9cS.js";import"./checkmark.component-n9cFHEMB.js";import"./rbcb-toggle.template-DaNDhQrE.js";import"./chevron-bottom.component-xho7-Fap.js";import"./cross-small.component-CjanmNQ-.js";import"./popover.component-wX-3OT-k.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-D4mQo4Y3.js";import"./calender-add.component-CvV7oeFH.js";import"./chevron-left.component-DoepgVlX.js";import"./chevron-right.component-BsFV37ke.js";import"./arrow-up.component-CY7d4uPJ.js";import"./menu-heading.component-JVW8EMUs.js";import"./input.component-CgjkxIKk.js";import"./textarea.component-QE59j3rA.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-B_1OZg7j.js";import"./checkbox-group.component-C3nf2H20.js";import"./toggle-control-base.component-bCoQc4Tm.js";import"./minus-small.component-BWAHdtoq.js";import"./radio-group.component-BWikIUhV.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
