import{b as t}from"./iframe-DK0RITXN.js";import"./checkbox-group-iC-l7Foi.js";import"./flex-CF1KIpAj.js";import"./card-BhtpjOp6.js";import"./text-CFGZV6Vb.js";import"./divider-BJE5VIaB.js";import"./circle-check-DkKSyDQR.js";import"./cross-small-DHSJZwA3.js";import"./minus-small-iZeVTj3n.js";import{a as ce}from"./argTableProps-DKKQpteZ.js";import"./preload-helper-Dp1pzeXC.js";import"./checkbox-group.component-mjQjEl3H.js";import"./toggle-control-base.component-CU4E0Ncl.js";import"./localized-decorator-LoyucnFP.js";import"./rbcb-toggle.template-nW-7FWac.js";import"./checkmark.component-DL2op7s7.js";import"./icon.component-Bo_miqGC.js";import"./minus-small.component-DmS4bvG7.js";import"./form-control-header.component-CcdAq8Cw.js";import"./badge.component-DYTAQi2n.js";import"./flex.component-wPtAFch1.js";import"./triangle-exclamation.component-B-6NJYkq.js";import"./card.component-CUp0wnzS.js";import"./circle-info.component-B6y18lk3.js";import"./text.component-cCX79pHX.js";import"./default-typography.styles-DA0MYNa-.js";import"./circle-check.component-Br2wyoXJ.js";import"./cross-small.component-a4zL_Dpb.js";const Ve={title:"Components/Checkbox",component:"gds-checkbox-group",subcomponents:{GdsCheckbox:"gds-checkbox"},tags:["autodocs"],argTypes:{...ce("gds-checkbox-group")},parameters:{docs:{description:{component:`A checkbox is a form element that allows users to select one or multiple options.<br/>
They can be grouped together using a checkbox group, which makes value management and validation easier.

Groups support vertical and horizontal layouts, and can be sized to fit different space requirements.`}}}},e={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0},args:{label:"Label",supportingText:"Label support text."}}},o={...e,name:"Checkbox",args:{label:"Pick an option",supportingText:"Label support text.",innerHTML:`
    <gds-checkbox label="Checkbox Option 1" supporting-text="Supporting text" value="1"></gds-checkbox>
    <gds-checkbox label="Checkbox Option 2" supporting-text="Supporting text" value="2" checked></gds-checkbox>
    <gds-checkbox label="Checkbox Option 3" supporting-text="Supporting text" value="3"></gds-checkbox>`}},s={...e,name:"Validation",render:()=>t`
    <form method="dialog">
      <gds-flex flex-direction="column" align-items="flex-start" gap="m">
        <gds-checkbox-group
          label="Group Label"
          name="checkbox-group"
          supporting-text="Support text for the group"
          show-extended-supporting-text
          .validator=${{validate:x=>{if(x.value.length<1)return[{...x.validity,valid:!1,customError:!0},"This is required"]}}}
        >
          <span slot="extended-supporting-text">
            Extended supporting text for the group
          </span>
          <gds-checkbox
            label="Checkbox Label"
            value="1"
            supporting-text="Example support text"
          ></gds-checkbox>
          <gds-checkbox
            label="Checkbox Label"
            value="2"
            supporting-text="Example support text"
          ></gds-checkbox>
        </gds-checkbox-group>
        <gds-button type="submit">Submit</gds-button>
      </gds-flex>
    </form>
  `},g={...e,name:"Do's and don'ts",render:()=>t`
    <gds-flex gap="xl">
      <gds-flex gap="l" flex-direction="column" flex="1">
        <gds-card
          align-items="center"
          flex-direction="row"
          gap="2xs"
          padding="s"
          variant="positive"
        >
          <gds-icon-circle-check></gds-icon-circle-check>
          <gds-text tag="small">Do provide both Label and Value</gds-text>
        </gds-card>
        <gds-card align-items="flex-start" gap="m">
          <gds-checkbox-group
            label="Group Label"
            supporting-text="Support text"
          >
            <span slot="extended-supporting-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
            <gds-checkbox label="Checkbox Label" value="1"></gds-checkbox>
            <gds-checkbox label="Checkbox Label" value="2"></gds-checkbox>
          </gds-checkbox-group>
        </gds-card>
      </gds-flex>
      <gds-flex gap="l" flex-direction="column" flex="1">
        <gds-card
          align-items="center"
          flex-direction="row"
          gap="2xs"
          padding="s"
          variant="negative"
        >
          <gds-icon-cross-small></gds-icon-cross-small>
          <gds-text tag="small">Never exclude the label</gds-text>
        </gds-card>
        <form method="dialog">
          <gds-card align-items="flex-start" gap="m">
            <gds-checkbox-group
              label="Group Label"
              supporting-text="Support text"
            >
              <span slot="extended-supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
              <gds-checkbox value="1"></gds-checkbox>
              <gds-checkbox value="2"></gds-checkbox>
            </gds-checkbox-group>
          </gds-card>
        </form>
      </gds-flex>
      <gds-flex gap="l" flex-direction="column" flex="1">
        <gds-card
          align-items="center"
          flex-direction="row"
          gap="2xs"
          padding="s"
          variant="negative"
        >
          <gds-icon-cross-small></gds-icon-cross-small>
          <gds-text tag="small">Never exclude the value </gds-text>
        </gds-card>
        <form method="dialog">
          <gds-card align-items="flex-start" gap="m">
            <gds-checkbox-group
              label="Group Label"
              supporting-text="Support text"
            >
              <span slot="extended-supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
              <gds-checkbox label="Checkbox Label"></gds-checkbox>
              <gds-checkbox label="Checkbox Label"></gds-checkbox>
            </gds-checkbox-group>
          </gds-card>
        </form>
      </gds-flex>
    </gds-flex>
  `},a={...e,name:"Disabled",render:()=>t`
    <div class="checkbox-group">
      <gds-checkbox-group
        label="Group Label"
        supporting-text="Support text for the group"
        show-extended-supporting-text
      >
        <span slot="extended-supporting-text">
          Extended supporting text for the group
        </span>
        <gds-checkbox
          label="Checkbox Label"
          value="1"
          disabled
          supporting-text="Example support text"
        ></gds-checkbox>
        <gds-checkbox
          label="Checkbox Label"
          value="2"
          disabled
          supporting-text="Example support text"
        ></gds-checkbox>
      </gds-checkbox-group>
    </div>
  `},n={...e,name:"Size",render:()=>t`
    <div class="checkbox-group">
      <gds-flex gap="xl" margin="0 auto">
        <gds-flex gap="s" flex-direction="column" flex="1">
          <gds-text tag="small">Size: Large(default)</gds-text>
          <gds-divider opacity="0.1"></gds-divider>
          <gds-checkbox-group
            label="Group Label"
            supporting-text="Support text for the group"
            show-extended-supporting-text
          >
            <span slot="extended-supporting-text">
              Extended supporting text for the group
            </span>
            <gds-checkbox
              label="Checkbox Label"
              value="1"
              supporting-text="Example support text"
              checked
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="2"
              supporting-text="Example support text"
            ></gds-checkbox>
          </gds-checkbox-group>
        </gds-flex>
        <gds-flex gap="s" flex-direction="column" flex="1">
          <gds-text tag="small">Size: small</gds-text>
          <gds-divider opacity="0.1"></gds-divider>
          <gds-checkbox-group
            label="Group Label"
            supporting-text="Support text for the group"
            size="small"
            show-extended-supporting-text
          >
            <span slot="extended-supporting-text">
              Extended supporting text for the group
            </span>
            <gds-checkbox
              label="Checkbox Label"
              value="1"
              supporting-text="Example support text."
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="2"
              supporting-text="Example support text"
            ></gds-checkbox>
          </gds-checkbox-group>
        </gds-flex>
      </gds-flex>
    </div>
  `},r={...e,name:"Direction",render:()=>t`
    <div class="checkbox-group">
      <gds-flex gap="xl" margin="0 auto">
        <gds-flex gap="s" flex-direction="column">
          <gds-text tag="small">Column (default)</gds-text>
          <gds-divider opacity="0.1"></gds-divider>
          <gds-checkbox-group
            label="Group Label"
            supporting-text="Support text for the group"
            show-extended-supporting-text
          >
            <span slot="extended-supporting-text">
              Extended supporting text for the group
            </span>
            <gds-checkbox
              label="Checkbox Label"
              value="1"
              supporting-text="Example support text"
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="2"
              supporting-text="Example support text"
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="3"
              supporting-text="Example support text"
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="4"
              supporting-text="Example support text"
            ></gds-checkbox>
          </gds-checkbox-group>
        </gds-flex>
        <gds-flex gap="s" flex="1" flex-direction="column">
          <gds-text tag="small">Row</gds-text>
          <gds-divider opacity="0.1"></gds-divider>
          <gds-checkbox-group
            label="Group Label"
            supporting-text="Support text for the group"
            size="small"
            flex-direction="row"
            show-extended-supporting-text
          >
            <span slot="extended-supporting-text">
              Extended supporting text for the group
            </span>
            <gds-checkbox
              label="Checkbox Label"
              value="1"
              supporting-text="Example support text"
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="2"
              supporting-text="Example support text"
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="3"
              supporting-text="Example support text"
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="4"
              supporting-text="Example support text"
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="5"
              supporting-text="Example support text"
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="6"
              supporting-text="Example support text"
            ></gds-checkbox>
          </gds-checkbox-group>
        </gds-flex>
      </gds-flex>
    </div>
  `},c={...e,name:"Checkbox group label",render:()=>t`
    <div class="checkbox-group">
      <gds-checkbox-group>
        <gds-checkbox label="Checkbox Label" value="1"></gds-checkbox>
        <gds-checkbox label="Checkbox Label" value="2"></gds-checkbox>
      </gds-checkbox-group>
      <br />
      <br />
      <br />
      <gds-checkbox-group size="small">
        <gds-checkbox label="Checkbox Label" value="1"></gds-checkbox>
        <gds-checkbox label="Checkbox Label" value="2"></gds-checkbox>
      </gds-checkbox-group>
    </div>
  `},l={...e,name:"Indeterminate",render:()=>t`
    <gds-checkbox label="Select all" value="1" indeterminate></gds-checkbox>
  `},d={...e,name:"Single checkbox",render:()=>t`
    <gds-checkbox-group label="Group Label" hide-label>
      <gds-checkbox label="Checkbox Label" value="1" checked></gds-checkbox>
    </gds-checkbox-group>
  `},p={...e,render:()=>t`
    <gds-flex flex-direction="column" gap="xl" width="500px">
      <gds-flex flex-direction="column" gap="m">
        <gds-text tag="small">GdsCheckbox</gds-text>
        <gds-text id="checkbox-aria-label" tag="label"
          >Single checkbox label</gds-text
        >
        <gds-text id="checkbox-aria-desc" font-size="detail-s">
          Description for the single checkbox control.
        </gds-text>
        <gds-checkbox
          label="Accept terms"
          value="terms"
          gds-aria-labelledby="checkbox-aria-label"
          gds-aria-describedby="checkbox-aria-desc"
        ></gds-checkbox>
      </gds-flex>

      <gds-divider opacity="0.1"></gds-divider>

      <gds-flex flex-direction="column" gap="m">
        <gds-text tag="small">GdsCheckboxGroup</gds-text>
        <gds-text id="checkbox-group-aria-label" tag="label"
          >Notification preferences</gds-text
        >
        <gds-text id="checkbox-group-aria-desc" font-size="detail-s">
          Select one or more options from the group below.
        </gds-text>
        <gds-checkbox-group
          label="Group Label"
          supporting-text="Support text"
          gds-aria-labelledby="checkbox-group-aria-label"
          gds-aria-describedby="checkbox-group-aria-desc"
        >
          <gds-checkbox label="Email" value="email"></gds-checkbox>
          <gds-checkbox label="SMS" value="sms"></gds-checkbox>
        </gds-checkbox-group>
      </gds-flex>
    </gds-flex>
  `};var i,b,u,h,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Checkbox',
  args: {
    label: 'Pick an option',
    supportingText: 'Label support text.',
    innerHTML: \`
    <gds-checkbox label="Checkbox Option 1" supporting-text="Supporting text" value="1"></gds-checkbox>
    <gds-checkbox label="Checkbox Option 2" supporting-text="Supporting text" value="2" checked></gds-checkbox>
    <gds-checkbox label="Checkbox Option 3" supporting-text="Supporting text" value="3"></gds-checkbox>\`
  }
}`,...(u=(b=o.parameters)==null?void 0:b.docs)==null?void 0:u.source},description:{story:`Checkboxes allow users to select one or more option from a list of options.<br />
Each checkbox must have both a label and a value.

Usage:

\`\`\`html
<gds-checkbox-group label="Select an option">
  <gds-checkbox label="Option 1" value="1"></gds-checkbox>
  <gds-checkbox label="Option 2" value="2"></gds-checkbox>
</gds-checkbox-group>
\`\`\`

Interactive example with supporting texts:`,...(m=(h=o.parameters)==null?void 0:h.docs)==null?void 0:m.description}}};var k,f,v,L,C;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Validation',
  render: () => html\`
    <form method="dialog">
      <gds-flex flex-direction="column" align-items="flex-start" gap="m">
        <gds-checkbox-group
          label="Group Label"
          name="checkbox-group"
          supporting-text="Support text for the group"
          show-extended-supporting-text
          .validator=\${{
    validate: (el: GdsCheckboxGroup) => {
      if (el.value!.length < 1) return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'This is required'];
    }
  }}
        >
          <span slot="extended-supporting-text">
            Extended supporting text for the group
          </span>
          <gds-checkbox
            label="Checkbox Label"
            value="1"
            supporting-text="Example support text"
          ></gds-checkbox>
          <gds-checkbox
            label="Checkbox Label"
            value="2"
            supporting-text="Example support text"
          ></gds-checkbox>
        </gds-checkbox-group>
        <gds-button type="submit">Submit</gds-button>
      </gds-flex>
    </form>
  \`
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source},description:{story:`Checkbox groups support validation using Green Core's [form validation API](/docs/components-form-validation-documentation--docs).

The error message appears below the checkbox group, and can be set either trough a validator, or explicitly using the using the \`error-message\` attribute.

If you click on 'submit' first on the example below it will validate the checkbox group and show the error message.`,...(C=(L=s.parameters)==null?void 0:L.docs)==null?void 0:C.description}}};var S,w,y;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...DefaultParams,
  name: "Do's and don'ts",
  render: () => html\`
    <gds-flex gap="xl">
      <gds-flex gap="l" flex-direction="column" flex="1">
        <gds-card
          align-items="center"
          flex-direction="row"
          gap="2xs"
          padding="s"
          variant="positive"
        >
          <gds-icon-circle-check></gds-icon-circle-check>
          <gds-text tag="small">Do provide both Label and Value</gds-text>
        </gds-card>
        <gds-card align-items="flex-start" gap="m">
          <gds-checkbox-group
            label="Group Label"
            supporting-text="Support text"
          >
            <span slot="extended-supporting-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
            <gds-checkbox label="Checkbox Label" value="1"></gds-checkbox>
            <gds-checkbox label="Checkbox Label" value="2"></gds-checkbox>
          </gds-checkbox-group>
        </gds-card>
      </gds-flex>
      <gds-flex gap="l" flex-direction="column" flex="1">
        <gds-card
          align-items="center"
          flex-direction="row"
          gap="2xs"
          padding="s"
          variant="negative"
        >
          <gds-icon-cross-small></gds-icon-cross-small>
          <gds-text tag="small">Never exclude the label</gds-text>
        </gds-card>
        <form method="dialog">
          <gds-card align-items="flex-start" gap="m">
            <gds-checkbox-group
              label="Group Label"
              supporting-text="Support text"
            >
              <span slot="extended-supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
              <gds-checkbox value="1"></gds-checkbox>
              <gds-checkbox value="2"></gds-checkbox>
            </gds-checkbox-group>
          </gds-card>
        </form>
      </gds-flex>
      <gds-flex gap="l" flex-direction="column" flex="1">
        <gds-card
          align-items="center"
          flex-direction="row"
          gap="2xs"
          padding="s"
          variant="negative"
        >
          <gds-icon-cross-small></gds-icon-cross-small>
          <gds-text tag="small">Never exclude the value </gds-text>
        </gds-card>
        <form method="dialog">
          <gds-card align-items="flex-start" gap="m">
            <gds-checkbox-group
              label="Group Label"
              supporting-text="Support text"
            >
              <span slot="extended-supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
              <gds-checkbox label="Checkbox Label"></gds-checkbox>
              <gds-checkbox label="Checkbox Label"></gds-checkbox>
            </gds-checkbox-group>
          </gds-card>
        </form>
      </gds-flex>
    </gds-flex>
  \`
}`,...(y=(w=g.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var E,G,D,z,P;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Disabled',
  render: () => html\`
    <div class="checkbox-group">
      <gds-checkbox-group
        label="Group Label"
        supporting-text="Support text for the group"
        show-extended-supporting-text
      >
        <span slot="extended-supporting-text">
          Extended supporting text for the group
        </span>
        <gds-checkbox
          label="Checkbox Label"
          value="1"
          disabled
          supporting-text="Example support text"
        ></gds-checkbox>
        <gds-checkbox
          label="Checkbox Label"
          value="2"
          disabled
          supporting-text="Example support text"
        ></gds-checkbox>
      </gds-checkbox-group>
    </div>
  \`
}`,...(D=(G=a.parameters)==null?void 0:G.docs)==null?void 0:D.source},description:{story:`Disabled checkboxes cannot be interacted with and appear visually muted.

In general, this state should never be used. Instead, aim to explain to the user why the choice is wrong in an error message and make sure they understand how to correct it.`,...(P=(z=a.parameters)==null?void 0:z.docs)==null?void 0:P.description}}};var T,I,A,O,q;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Size',
  render: () => html\`
    <div class="checkbox-group">
      <gds-flex gap="xl" margin="0 auto">
        <gds-flex gap="s" flex-direction="column" flex="1">
          <gds-text tag="small">Size: Large(default)</gds-text>
          <gds-divider opacity="0.1"></gds-divider>
          <gds-checkbox-group
            label="Group Label"
            supporting-text="Support text for the group"
            show-extended-supporting-text
          >
            <span slot="extended-supporting-text">
              Extended supporting text for the group
            </span>
            <gds-checkbox
              label="Checkbox Label"
              value="1"
              supporting-text="Example support text"
              checked
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="2"
              supporting-text="Example support text"
            ></gds-checkbox>
          </gds-checkbox-group>
        </gds-flex>
        <gds-flex gap="s" flex-direction="column" flex="1">
          <gds-text tag="small">Size: small</gds-text>
          <gds-divider opacity="0.1"></gds-divider>
          <gds-checkbox-group
            label="Group Label"
            supporting-text="Support text for the group"
            size="small"
            show-extended-supporting-text
          >
            <span slot="extended-supporting-text">
              Extended supporting text for the group
            </span>
            <gds-checkbox
              label="Checkbox Label"
              value="1"
              supporting-text="Example support text."
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="2"
              supporting-text="Example support text"
            ></gds-checkbox>
          </gds-checkbox-group>
        </gds-flex>
      </gds-flex>
    </div>
  \`
}`,...(A=(I=n.parameters)==null?void 0:I.docs)==null?void 0:A.source},description:{story:`Checkboxes support two sizes:
- Large (default): Standard size for most use cases
- Small: Compact size for space-constrained layouts

The size can be set on the checkbox group and applies to all checkboxes within.`,...(q=(O=n.parameters)==null?void 0:O.docs)==null?void 0:q.description}}};var V,N,R,M,B;r.parameters={...r.parameters,docs:{...(V=r.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Direction',
  render: () => html\`
    <div class="checkbox-group">
      <gds-flex gap="xl" margin="0 auto">
        <gds-flex gap="s" flex-direction="column">
          <gds-text tag="small">Column (default)</gds-text>
          <gds-divider opacity="0.1"></gds-divider>
          <gds-checkbox-group
            label="Group Label"
            supporting-text="Support text for the group"
            show-extended-supporting-text
          >
            <span slot="extended-supporting-text">
              Extended supporting text for the group
            </span>
            <gds-checkbox
              label="Checkbox Label"
              value="1"
              supporting-text="Example support text"
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="2"
              supporting-text="Example support text"
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="3"
              supporting-text="Example support text"
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="4"
              supporting-text="Example support text"
            ></gds-checkbox>
          </gds-checkbox-group>
        </gds-flex>
        <gds-flex gap="s" flex="1" flex-direction="column">
          <gds-text tag="small">Row</gds-text>
          <gds-divider opacity="0.1"></gds-divider>
          <gds-checkbox-group
            label="Group Label"
            supporting-text="Support text for the group"
            size="small"
            flex-direction="row"
            show-extended-supporting-text
          >
            <span slot="extended-supporting-text">
              Extended supporting text for the group
            </span>
            <gds-checkbox
              label="Checkbox Label"
              value="1"
              supporting-text="Example support text"
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="2"
              supporting-text="Example support text"
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="3"
              supporting-text="Example support text"
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="4"
              supporting-text="Example support text"
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="5"
              supporting-text="Example support text"
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="6"
              supporting-text="Example support text"
            ></gds-checkbox>
          </gds-checkbox-group>
        </gds-flex>
      </gds-flex>
    </div>
  \`
}`,...(R=(N=r.parameters)==null?void 0:N.docs)==null?void 0:R.source},description:{story:`Checkboxes can be arranged in two directions:
- Column (default): Vertical stacking for clear separation
- Row: Horizontal alignment for compact layouts that will break to new line when not enough space is available

Choose the direction based on available space and number of options.`,...(B=(M=r.parameters)==null?void 0:M.docs)==null?void 0:B.description}}};var F,H,_,$,U;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Checkbox group label',
  render: () => html\`
    <div class="checkbox-group">
      <gds-checkbox-group>
        <gds-checkbox label="Checkbox Label" value="1"></gds-checkbox>
        <gds-checkbox label="Checkbox Label" value="2"></gds-checkbox>
      </gds-checkbox-group>
      <br />
      <br />
      <br />
      <gds-checkbox-group size="small">
        <gds-checkbox label="Checkbox Label" value="1"></gds-checkbox>
        <gds-checkbox label="Checkbox Label" value="2"></gds-checkbox>
      </gds-checkbox-group>
    </div>
  \`
}`,...(_=(H=c.parameters)==null?void 0:H.docs)==null?void 0:_.source},description:{story:`While checkbox groups can be created without a label, it's recommended to always provide one for clarity and accessibility.
The label helps users understand what the options are for.

In certain cases when space is limited, the group label can be omitted.`,...(U=($=c.parameters)==null?void 0:$.docs)==null?void 0:U.description}}};var W,j,J,K,Q;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Indeterminate',
  render: () => html\`
    <gds-checkbox label="Select all" value="1" indeterminate></gds-checkbox>
  \`
}`,...(J=(j=l.parameters)==null?void 0:j.docs)==null?void 0:J.source},description:{story:`The indeterminate state is used when a checkbox represents a group of sub-options with mixed selected states.
Common use cases include:
- Parent checkboxes in a tree structure where some but not all children are checked
- "Select all" checkboxes when some items are selected
- Bulk actions where the selection applies to only some items in a group`,...(Q=(K=l.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var X,Y,Z,ee,te;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Single checkbox',
  render: () => html\`
    <gds-checkbox-group label="Group Label" hide-label>
      <gds-checkbox label="Checkbox Label" value="1" checked></gds-checkbox>
    </gds-checkbox-group>
  \`
}`,...(Z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:`Sometimes you need a single checkbox where the checkbox group label should be visually hidden but still accessible to screen readers.
In this case you should still provide a meaningful group label and hide it visually with the \`hide-label\` attribute or \`hideLabel\` property.
Common use cases include:
- Confirming that one has read terms and conditions
- Agreeing to privacy policies
- Opting into newsletters or marketing communications`,...(te=(ee=d.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};var oe,se,ae,ne,re;p.parameters={...p.parameters,docs:{...(oe=p.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  ...DefaultParams,
  render: () => html\`
    <gds-flex flex-direction="column" gap="xl" width="500px">
      <gds-flex flex-direction="column" gap="m">
        <gds-text tag="small">GdsCheckbox</gds-text>
        <gds-text id="checkbox-aria-label" tag="label"
          >Single checkbox label</gds-text
        >
        <gds-text id="checkbox-aria-desc" font-size="detail-s">
          Description for the single checkbox control.
        </gds-text>
        <gds-checkbox
          label="Accept terms"
          value="terms"
          gds-aria-labelledby="checkbox-aria-label"
          gds-aria-describedby="checkbox-aria-desc"
        ></gds-checkbox>
      </gds-flex>

      <gds-divider opacity="0.1"></gds-divider>

      <gds-flex flex-direction="column" gap="m">
        <gds-text tag="small">GdsCheckboxGroup</gds-text>
        <gds-text id="checkbox-group-aria-label" tag="label"
          >Notification preferences</gds-text
        >
        <gds-text id="checkbox-group-aria-desc" font-size="detail-s">
          Select one or more options from the group below.
        </gds-text>
        <gds-checkbox-group
          label="Group Label"
          supporting-text="Support text"
          gds-aria-labelledby="checkbox-group-aria-label"
          gds-aria-describedby="checkbox-group-aria-desc"
        >
          <gds-checkbox label="Email" value="email"></gds-checkbox>
          <gds-checkbox label="SMS" value="sms"></gds-checkbox>
        </gds-checkbox-group>
      </gds-flex>
    </gds-flex>
  \`
}`,...(ae=(se=p.parameters)==null?void 0:se.docs)==null?void 0:ae.source},description:{story:"Demonstrates how `gds-aria-labelledby` and `gds-aria-describedby` are\nforwarded for both `gds-checkbox` and `gds-checkbox-group`.",...(re=(ne=p.parameters)==null?void 0:ne.docs)==null?void 0:re.description}}};const Ne=["CheckboxButton","Validation","DosAndDonts","Disabled","Size","Direction","GroupLabel","Indeterminate","SingleCheckbox","ARIAForwarding"];export{p as ARIAForwarding,o as CheckboxButton,r as Direction,a as Disabled,g as DosAndDonts,c as GroupLabel,l as Indeterminate,d as SingleCheckbox,n as Size,s as Validation,Ne as __namedExportsOrder,Ve as default};
