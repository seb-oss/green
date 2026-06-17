import{j as t}from"./jsx-runtime-u17CrQMm.js";import{T as u,c as I}from"./buttonGroup-BdSLuXYL.js";import{G as T,L as m}from"./grouped-list-Bmi2TUCj.js";import{I as e}from"./inPageWizardStepCard-BKFxafft.js";import{I as S,a as g}from"./index-DDkH3zLM.js";const p=({children:l,...x})=>t.jsx(e,{...x,children:l}),v={title:"Components/InPageWizardStepCard",component:e},c={render:p.bind({}),name:"InPageWizardStepCard",args:{children:"Active step default content.",nextBtnText:"Next",stepStatus:"IsActive",stepText:"Active step default text",title:"Active step default title"}},r=p.bind({});r.args={children:"Active step textcontent.",nextBtnText:"My next button text",stepStatus:"IsActive",stepText:"Active step text text",title:"Active step text title"};const n=p.bind({});n.args={children:"Active step icon content.",nextBtnText:"Next",nextBtnIcon:t.jsx(S,{}),stepStatus:"IsActive",stepText:"Active step icon text",title:"Active step icon title"};const s=p.bind({});s.args={children:"Active step alt icon content.",nextBtnText:"Next",nextBtnIcon:t.jsx(g,{}),stepStatus:"IsActive",stepText:"Active step alt icon text",title:"Active step alt icon title"};const a=p.bind({});a.args={children:"Active step hidden footer content.",nextBtnText:"Next",nextBtnIcon:t.jsx(S,{}),stepStatus:"IsActive",stepText:"Active step hidden footer text",title:"Active step hidden footer title",hideFooter:!0};const i=p.bind({});i.args={children:"Completed step edit button content.",nextBtnText:"Next",editBtnText:"Redigera",stepStatus:"IsComplete",stepText:"Completed step edit button text",title:"Completed step edit button title"};const d=({children:l,...x})=>t.jsxs("div",{children:[t.jsx(e,{editBtnText:"Edit",nextBtnText:"Nästa",stepStatus:"IsComplete",stepText:"Step 1 of 3",title:"Completed step",children:"Content of Step 1"}),t.jsx(e,{editBtnText:"Edit",nextBtnText:"Next",stepStatus:"IsActive",stepText:"Step 2 of 3",title:"Active step",children:"Content of Step 2"}),t.jsx(e,{editBtnText:"Edit",nextBtnText:"Nästa",stepStatus:"NotStarted",stepText:"Step 3 of 3",title:"Not started step",children:"Content of Step 3"})]}),o=({children:l,...x})=>t.jsxs("div",{children:[t.jsx(e,{editBtnText:"Edit",nextBtnText:"Nästa",stepStatus:"IsComplete",stepText:"Step 1 of 3",title:"Completed step",children:t.jsxs(T,{children:[t.jsxs(m,{style:{display:"flex",flexDirection:"column",border:"none",padding:".5rem 1rem"},children:[t.jsx("div",{children:t.jsx("b",{style:{fontWeight:"500"},children:"Summary key"})}),t.jsx("div",{children:"Summary value"})]}),t.jsxs(m,{style:{display:"flex",flexDirection:"column",border:"none",padding:".5rem 1rem"},children:[t.jsx("div",{children:t.jsx("b",{style:{fontWeight:"500"},children:"Summary key"})}),t.jsx("div",{children:"Summary value"})]}),t.jsxs(m,{style:{display:"flex",flexDirection:"column",border:"none",padding:".5rem 1rem"},children:[t.jsx("div",{children:t.jsx("b",{style:{fontWeight:"500"},children:"Summary key"})}),t.jsx("div",{children:"Summary value"})]})]})}),t.jsxs(e,{editBtnText:"Edit",nextBtnText:"Next",stepStatus:"IsActive",stepText:"Step 2 of 3",title:"Active step",children:[t.jsx(u,{label:"Input 1"}),t.jsx(u,{label:"Input 2"}),t.jsx(I,{label:"Text area"})]}),t.jsx(e,{editBtnText:"Edit",nextBtnText:"Nästa",stepStatus:"NotStarted",stepText:"Step 3 of 3",title:"Not started step",children:"Content of Step 3"})]});d.__docgenInfo={description:"",methods:[],displayName:"Status"};o.__docgenInfo={description:"",methods:[],displayName:"Example"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'InPageWizardStepCard',
  args: {
    children: 'Active step default content.',
    nextBtnText: 'Next',
    stepStatus: 'IsActive',
    stepText: 'Active step default text',
    title: 'Active step default title'
  }
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
  children,
  ...props
}: InPageWizardStepCardProps) => <InPageWizardStepCard {...props}>{children}</InPageWizardStepCard>`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  children,
  ...props
}: InPageWizardStepCardProps) => <InPageWizardStepCard {...props}>{children}</InPageWizardStepCard>`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
  children,
  ...props
}: InPageWizardStepCardProps) => <InPageWizardStepCard {...props}>{children}</InPageWizardStepCard>`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  children,
  ...props
}: InPageWizardStepCardProps) => <InPageWizardStepCard {...props}>{children}</InPageWizardStepCard>`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
  children,
  ...props
}: InPageWizardStepCardProps) => <InPageWizardStepCard {...props}>{children}</InPageWizardStepCard>`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`({
  children,
  ...props
}) => <div>
    <InPageWizardStepCard editBtnText="Edit" nextBtnText="Nästa" stepStatus="IsComplete" stepText="Step 1 of 3" title="Completed step">
      Content of Step 1
    </InPageWizardStepCard>

    <InPageWizardStepCard editBtnText="Edit" nextBtnText="Next" stepStatus="IsActive" stepText="Step 2 of 3" title="Active step">
      Content of Step 2
    </InPageWizardStepCard>

    <InPageWizardStepCard editBtnText="Edit" nextBtnText="Nästa" stepStatus="NotStarted" stepText="Step 3 of 3" title="Not started step">
      Content of Step 3
    </InPageWizardStepCard>
  </div>`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  children,
  ...props
}) => <div>
    <InPageWizardStepCard editBtnText="Edit" nextBtnText="Nästa" stepStatus="IsComplete" stepText="Step 1 of 3" title="Completed step">
      <GroupedList>
        <ListItem style={{
        display: 'flex',
        flexDirection: 'column',
        border: 'none',
        padding: '.5rem 1rem'
      }}>
          <div>
            <b style={{
            fontWeight: '500'
          }}>Summary key</b>
          </div>

          <div>Summary value</div>
        </ListItem>

        <ListItem style={{
        display: 'flex',
        flexDirection: 'column',
        border: 'none',
        padding: '.5rem 1rem'
      }}>
          <div>
            <b style={{
            fontWeight: '500'
          }}>Summary key</b>
          </div>

          <div>Summary value</div>
        </ListItem>

        <ListItem style={{
        display: 'flex',
        flexDirection: 'column',
        border: 'none',
        padding: '.5rem 1rem'
      }}>
          <div>
            <b style={{
            fontWeight: '500'
          }}>Summary key</b>
          </div>

          <div>Summary value</div>
        </ListItem>
      </GroupedList>
    </InPageWizardStepCard>

    <InPageWizardStepCard editBtnText="Edit" nextBtnText="Next" stepStatus="IsActive" stepText="Step 2 of 3" title="Active step">
      <TextInput label="Input 1" />

      <TextInput label="Input 2" />

      <TextArea label="Text area" />
    </InPageWizardStepCard>

    <InPageWizardStepCard editBtnText="Edit" nextBtnText="Nästa" stepStatus="NotStarted" stepText="Step 3 of 3" title="Not started step">
      Content of Step 3
    </InPageWizardStepCard>
  </div>`,...o.parameters?.docs?.source}}};const f=["Default","NextButtonText","NextButtonIcon","NextButtonIconAlt","HiddenFooter","EditText","Status","Example"],W=Object.freeze(Object.defineProperty({__proto__:null,Default:c,EditText:i,Example:o,HiddenFooter:a,NextButtonIcon:n,NextButtonIconAlt:s,NextButtonText:r,Status:d,__namedExportsOrder:f,default:v},Symbol.toStringTag,{value:"Module"}));export{c as D,i as E,a as H,W as I,r as N,d as S,n as a,s as b,o as c};
