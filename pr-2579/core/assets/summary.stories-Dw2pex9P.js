import{x as t}from"./iframe-QVvLFfte.js";import{a}from"./argTableProps-CGx5Lvoq.js";import"./summary-BAgfFZeN.js";import"./datepicker-DdE1EaAq.js";import"./dropdown-CilLCK_q.js";import"./option-CwP-Fa3A.js";import"./menu-heading-Bk9Nxd4i.js";import"./input-DaKOAC0i.js";import"./rocket-D6b6LT6X.js";import"./checkbox-group-By0kln0u.js";import"./radio-group-DDhKplAd.js";import"./summary.component-qh_OFgR-.js";import"./query-async-CKROHTJO.js";import"./datepicker.component-BLOmHlMR.js";import"./localized-decorator-o4Dzz4ZV.js";import"./ref-hDEIUQ9-.js";import"./dropdown.component-BSmd3Mg9.js";import"./icon.component-B2_WfcN3.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-BejgHUVz.js";import"./form-control-header.component-DHEhxjLB.js";import"./badge.component-B6F2FtpB.js";import"./flex.component-C0rle56H.js";import"./triangle-exclamation.component-Cqx7pcO0.js";import"./card.component-_54X5HSj.js";import"./unwrap-slots-C784xl9g.js";import"./checkmark.component-qHqw5dgx.js";import"./rbcb-toggle.template-9Zoyijnn.js";import"./chevron-bottom.component-Ckxuv7jp.js";import"./cross-small.component-BrSzyNWt.js";import"./popover.component-DD1lUmJc.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-D0zignb4.js";import"./calender-add.component-C6S2YhHp.js";import"./chevron-left.component-Bs0Se58m.js";import"./chevron-right.component-9R7kG0eE.js";import"./arrow-up.component-DjrvabEw.js";import"./menu-heading.component-C-4YP6N2.js";import"./input.component-jLmVnESl.js";import"./textarea.component-CBJzfwyN.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-DAemh41L.js";import"./checkbox-group.component-lpXc9dBD.js";import"./toggle-control-base.component-DQwNeXJm.js";import"./minus-small.component-CclFEShl.js";import"./radio-group.component-ByfqZi5C.js";const X={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
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
