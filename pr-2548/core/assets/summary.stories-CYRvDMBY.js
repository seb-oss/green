import{x as o}from"./iframe-oOFCRMz6.js";import{a as w}from"./argTableProps-BhXPemI_.js";import"./summary-2H4yEUp3.js";import"./datepicker-Bn8KFIiF.js";import"./dropdown-EgY8qrVk.js";import"./option-akCMgffv.js";import"./menu-heading-DSCy4Yfj.js";import"./input-PR3yJ4iR.js";import"./rocket-DrXH_7ks.js";import"./checkbox-group-Dwaq2XtS.js";import"./radio-group-CJc8ogy0.js";import"./preload-helper-Dp1pzeXC.js";import"./summary.component-JlqbAK_W.js";import"./query-async-C5p-l540.js";import"./datepicker.component-BhglW_SE.js";import"./ref-BJSw7Z4Q.js";import"./dropdown.component-C6UzgzFJ.js";import"./floating-ui.dom-B1INwmQZ.js";import"./form-control-host.style-DlCy7m9c.js";import"./form-control-header.component-BGnADStw.js";import"./badge.component-CLfERe6M.js";import"./flex.component-DZK24Y7H.js";import"./triangle-exclamation.component-BFEDBCBO.js";import"./icon.component-CT_2bsWL.js";import"./card.component-CaLuDAou.js";import"./unwrap-slots-C_MXp_9T.js";import"./checkmark.component-gD0xAzsb.js";import"./rbcb-toggle.template-C_zAcgSg.js";import"./chevron-bottom.component-DFyvBJY0.js";import"./cross-small.component-DLcXMi5T.js";import"./popover.component-DeMB5zfr.js";import"./attribute-converters-CdI0trPX.js";import"./calendar.component-C4WXaePo.js";import"./calender-add.component-4yGDKfrQ.js";import"./chevron-left.component-CBCFkv22.js";import"./chevron-right.component-CFsrtec6.js";import"./arrow-up.component-BFmy0QNb.js";import"./menu-heading.component-Czr-wTmZ.js";import"./input.component-Vwqmy_yu.js";import"./textarea.component-Ct4h3nQZ.js";import"./resize-observer-B9k8v2TZ.js";import"./rocket.component-X6KkjQKx.js";import"./checkbox-group.component-BnzEgznN.js";import"./toggle-control-base.component-BJ7vlzf3.js";import"./minus-small.component-DfwUoWXm.js";import"./radio-group.component-C2NY-JUz.js";const ve={title:"Components/Form summary",component:"gds-form-summary",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-errorsummary)

Form summary shows all form errors in one place.`}}},tags:["autodocs"],argTypes:{...w("gds-form-summary")}},s={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}}},r={...s,render:i=>o`<form style="width: 450px" novalidate>
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
          .validator=${{validate:e=>{if(e.value.length===0)return[{...e.validity,valid:!1,customError:!0},"At least one mission type is required"]}}}
        >
          <gds-checkbox value="exploration" label="Exploration"></gds-checkbox>
          <gds-checkbox value="research" label="Research"></gds-checkbox>
          <gds-checkbox value="rescue" label="Rescue"></gds-checkbox>
          <gds-checkbox value="other" label="Other"></gds-checkbox>
        </gds-checkbox-group>
        <gds-radio-group
          direction="row"
          label="Rocket type"
          .validator=${{validate:e=>{if(e.value===void 0)return[{...e.validity,valid:!1,customError:!0},"A rocket type is required"]}}}
        >
          <gds-radio value="falcon" label="Falcon"></gds-radio>
          <gds-radio value="starship" label="Starship"></gds-radio>
          <gds-radio value="saturn" label="Saturn"></gds-radio>
          <gds-radio value="other" label="Other"></gds-radio>
        </gds-radio-group>
        <gds-dropdown
          label="Astronaut"
          .validator=${{validate:e=>{if(e.value!=="cat")return[{...e.validity,valid:!1,customError:!0},e.value===void 0?"An astronaut is required":"Only cats can pilot rockets!"]}}}
        >
          <gds-option>Pick your astronaut</gds-option>
          <gds-option value="dog">Dog</gds-option>
          <gds-option value="cat">Cat</gds-option>
          <gds-option value="fish">Fish</gds-option>
        </gds-dropdown>
        <gds-datepicker
          label="Launch date"
          .validator=${{validate:e=>{if(e.value===void 0)return[{...e.validity,valid:!1,customError:!0},"A date is required"]}}}
        ></gds-datepicker>
        <gds-input
          label="Designation"
          .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"A designation is required"]}}}
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
    </form>`},t={...s,render:i=>o`<form style="width: 450px" novalidate>
      <gds-form-summary id="summary"></gds-form-summary>
      <gds-flex flex-direction="column" gap="m" align-items="start">
        <gds-input
          label="Designation"
          .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"A designation is required"]}}}
        ></gds-input>
        <gds-button
          type="submit"
          onclick="document.getElementById('summary').refresh()"
          >Submit</gds-button
        >
      </gds-flex>
    </form> `},a={...s,render:i=>o`<form style="width: 450px">
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
    </form> `};var d,n,l,m,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<form style="width: 450px" novalidate>
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
          .validator=\${{
    validate: (el: any) => {
      if (el.value.length === 0) return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'At least one mission type is required'];
    }
  }}
        >
          <gds-checkbox value="exploration" label="Exploration"></gds-checkbox>
          <gds-checkbox value="research" label="Research"></gds-checkbox>
          <gds-checkbox value="rescue" label="Rescue"></gds-checkbox>
          <gds-checkbox value="other" label="Other"></gds-checkbox>
        </gds-checkbox-group>
        <gds-radio-group
          direction="row"
          label="Rocket type"
          .validator=\${{
    validate: (el: any) => {
      if (el.value === undefined) return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'A rocket type is required'];
    }
  }}
        >
          <gds-radio value="falcon" label="Falcon"></gds-radio>
          <gds-radio value="starship" label="Starship"></gds-radio>
          <gds-radio value="saturn" label="Saturn"></gds-radio>
          <gds-radio value="other" label="Other"></gds-radio>
        </gds-radio-group>
        <gds-dropdown
          label="Astronaut"
          .validator=\${{
    validate: (el: any) => {
      if (el.value !== 'cat') return [{
        ...el.validity,
        valid: false,
        customError: true
      }, el.value === undefined ? 'An astronaut is required' : 'Only cats can pilot rockets!'];
    }
  }}
        >
          <gds-option>Pick your astronaut</gds-option>
          <gds-option value="dog">Dog</gds-option>
          <gds-option value="cat">Cat</gds-option>
          <gds-option value="fish">Fish</gds-option>
        </gds-dropdown>
        <gds-datepicker
          label="Launch date"
          .validator=\${{
    validate: (el: any) => {
      if (el.value === undefined) return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'A date is required'];
    }
  }}
        ></gds-datepicker>
        <gds-input
          label="Designation"
          .validator=\${{
    validate: (el: any) => {
      if (el.value === '') return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'A designation is required'];
    }
  }}
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
    </form>\`
}`,...(l=(n=r.parameters)==null?void 0:n.docs)==null?void 0:l.source},description:{story:"To use the `gds-form-summary` component, simply place it inside a form element.\n\nIn this example we're using a reactive form summary below the form controls. The `reactive` attribute makes the summary\nupdate automatically as the user interacts with the form.",...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.description}}};var c,g,p,v,f;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<form style="width: 450px" novalidate>
      <gds-form-summary id="summary"></gds-form-summary>
      <gds-flex flex-direction="column" gap="m" align-items="start">
        <gds-input
          label="Designation"
          .validator=\${{
    validate: (el: any) => {
      if (el.value === '') return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'A designation is required'];
    }
  }}
        ></gds-input>
        <gds-button
          type="submit"
          onclick="document.getElementById('summary').refresh()"
          >Submit</gds-button
        >
      </gds-flex>
    </form> \`
}`,...(p=(g=t.parameters)==null?void 0:g.docs)==null?void 0:p.source},description:{story:'The `gds-form-summary` component can also be used in a non-reactive way.\nIn this example, the summary is placed above the form controls and\nis updated manually when the user clicks the "Submit" button.',...(f=(v=t.parameters)==null?void 0:v.docs)==null?void 0:f.description}}};var y,b,h,x,k;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<form style="width: 450px">
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
    </form> \`
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source},description:{story:"`gds-form-summary` can also be used with native controls by specifying label and error message as data attributes on the control.\nAny control that has `aria-invalid` set to `true` will be included in the summary.",...(k=(x=a.parameters)==null?void 0:x.docs)==null?void 0:k.description}}};const fe=["Usage","ManualUpdate","NativeControls"];export{t as ManualUpdate,a as NativeControls,r as Usage,fe as __namedExportsOrder,ve as default};
