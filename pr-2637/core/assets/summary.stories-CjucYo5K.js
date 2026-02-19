import{x as t}from"./iframe-DGZYUm69.js";import{a}from"./argTableProps-Bd7W653B.js";import"./summary-BcdZIcN_.js";import"./datepicker-BtAHn8Bn.js";import"./dropdown-CTBomx5t.js";import"./option-KP59rEu0.js";import"./menu-heading-BGXrmDxH.js";import"./input-DdK8EYa3.js";import"./rocket-CbB5XpuT.js";import"./checkbox-group-vtsmL-FS.js";import"./radio-group-DWoTFJ5y.js";import"./summary.component-CC30IzWP.js";import"./query-async-BIu9SDjj.js";import"./datepicker.component-Bnnfz105.js";import"./localized-decorator-B9Pt1vYn.js";import"./ref-CVMvSVN9.js";import"./dropdown.component-JUYAoGrc.js";import"./icon.component-IHe_5eoj.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-BQAl9Di5.js";import"./form-control-header.component-CSzJbXYb.js";import"./badge.component-C7of5vD7.js";import"./flex.component-CHXmzPnI.js";import"./triangle-exclamation.component-Dx5WofqS.js";import"./card.component-3cgCKd7T.js";import"./unwrap-slots-D1-FSbbu.js";import"./checkmark.component-Qr-LvMSK.js";import"./rbcb-toggle.template-ButZoy1t.js";import"./chevron-bottom.component-CU0rUSKe.js";import"./cross-small.component-Cb-TaIy0.js";import"./popover.component-ClJXDJwr.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-CG5Jmxfe.js";import"./calender-add.component-BigaAX_f.js";import"./chevron-left.component-DEkLsl7b.js";import"./chevron-right.component-CcnGI1_q.js";import"./arrow-up.component-MsnkJcfu.js";import"./menu-heading.component-CROqdCss.js";import"./input.component-CR9wLQV6.js";import"./textarea.component-BlwPh0VR.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DyIVUoRg.js";import"./checkbox-group.component-D06tFy1P.js";import"./toggle-control-base.component-BGYjYV8Y.js";import"./minus-small.component-BmHz0sdE.js";import"./radio-group.component-MEre-9dA.js";const W={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
