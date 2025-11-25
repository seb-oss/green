const n=t=>`
    <section class="gds-in-page-wizard-step-card card${t.isCompleted?" completed":""}${t.isStarted?" active":""}">
      <header class="gds-in-page-wizard-step-card__header">
        <div class="gds-in-page-wizard-step-card__header__icon">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false"><path d="M17.6203 6.60836L9.40014 14.8285L6.37976 11.8081C6.23332 11.6617 5.99588 11.6617 5.84942 11.8081L4.96554 12.692C4.8191 12.8384 4.8191 13.0759 4.96554 13.2223L9.13495 17.3917C9.28138 17.5382 9.51882 17.5382 9.66529 17.3917L19.0344 8.02258C19.1809 7.87614 19.1809 7.63871 19.0344 7.49224L18.1506 6.60836C18.0041 6.46193 17.7667 6.46193 17.6203 6.60836Z" fill="white"></path></svg>
        </div>
        <div class="gds-in-page-wizard-step-card__header__progress">
          ${t.stepText}
        </div>
        <div class="gds-in-page-wizard-step-card__header__title">
          <h2 class="h4">${t.title}</h2>
        </div>
        ${t.isCompleted?`
        <div class="gds-in-page-wizard-step-card__footer gds-in-page-wizard-step-card__footer--edit">
          <button class="secondary small">Edit</button>
        </div>`:""}
      </header>
      ${t.isStarted?`<div class="gds-in-page-wizard-step-card__content">${t.content}</div>
            <footer class="gds-in-page-wizard-step-card__footer">
              <button class="primary">Next</button>
            </footer>
          `:t.isCompleted?`<div class="gds-in-page-wizard-step-card__content">${t.content}</div>
              <footer class="gds-in-page-wizard-step-card__footer gds-in-page-wizard-step-card__footer--edit">
                <button class="secondary">Edit</button>
              </footer>
            `:""}
    </section>`,z={title:"Components/In-page Wizard",tags:["autodocs"],parameters:{componentIds:["component-inpagewizard"]},argTypes:{isCompleted:{control:"boolean"},isStarted:{control:"boolean"},stepText:{control:"text"},title:{control:"text"},content:{control:"text"}}},e={render:t=>n(t),name:"In-page Wizard Step Card",args:{isCompleted:!0,isStarted:!1,stepText:"Step 1 of 6",title:"Title",content:'<dl class="gds-list"><dt>Sub title</dt><dd>Sub section text</dd><dt>Sub title</dt><dd>Sub section text</dd><dt>Sub title</dt><dd>Sub section text</dd></dl>'}},d={render:t=>n(t),name:"Completed step",args:{isCompleted:!0,isStarted:!1,stepText:"Step 1 of 6",title:"Title",content:'<dl class="gds-list"><dt>Sub title</dt><dd>Sub section text</dd><dt>Sub title</dt><dd>Sub section text</dd></dl>'}},s={render:t=>n(t),name:"Current step (active)",args:{isCompleted:!1,isStarted:!0,stepText:"Step 2 of 6",title:"Title",content:`<div class="form-group">
          <label for="inputInvalid">Input label</label>
          <span class="form-info">Lorem ipsum very long description of input and what should be entered</span>
          <input id="inputInvalid" type="text" />
        </div>
        <div class="form-group">
          <label for="inputInvalid">Input label</label>
          <span class="form-info">Lorem ipsum very long description of input and what should be entered</span>
          <input id="inputInvalid" type="text" />
        </div>`}},a={render:t=>n(t),name:"Not started step",args:{isCompleted:!1,isStarted:!1,stepText:"Step 3 of 6",title:"Title",content:'<dl class="gds-list"><dt>Sub title</dt><dd>Sub section text</dd><dt>Sub title</dt><dd>Sub section text</dd></dl>'}};var r,i,o,l,p;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => Template(args),
  name: 'In-page Wizard Step Card',
  args: {
    isCompleted: true,
    isStarted: false,
    stepText: 'Step 1 of 6',
    title: 'Title',
    content: \`<dl class="gds-list"><dt>Sub title</dt><dd>Sub section text</dd><dt>Sub title</dt><dd>Sub section text</dd><dt>Sub title</dt><dd>Sub section text</dd></dl>\`
  }
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source},description:{story:"Presents a sequence that leads the user through well-defined steps within a page.",...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.description}}};var c,u,m,g,S;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => Template(args),
  name: 'Completed step',
  args: {
    isCompleted: true,
    isStarted: false,
    stepText: 'Step 1 of 6',
    title: 'Title',
    content: \`<dl class="gds-list"><dt>Sub title</dt><dd>Sub section text</dd><dt>Sub title</dt><dd>Sub section text</dd></dl>\`
  }
}`,...(m=(u=d.parameters)==null?void 0:u.docs)==null?void 0:m.source},description:{story:"A completed step has a green check mark icon and an Edit-button which allows the user to change previously entered information.",...(S=(g=d.parameters)==null?void 0:g.docs)==null?void 0:S.description}}};var b,f,h,v,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => Template(args),
  name: 'Current step (active)',
  args: {
    isCompleted: false,
    isStarted: true,
    stepText: 'Step 2 of 6',
    title: 'Title',
    content: \`<div class="form-group">
          <label for="inputInvalid">Input label</label>
          <span class="form-info">Lorem ipsum very long description of input and what should be entered</span>
          <input id="inputInvalid" type="text" />
        </div>
        <div class="form-group">
          <label for="inputInvalid">Input label</label>
          <span class="form-info">Lorem ipsum very long description of input and what should be entered</span>
          <input id="inputInvalid" type="text" />
        </div>\`
  }
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source},description:{story:"The current step is the one the user is currently interacting with.",...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.description}}};var _,w,C,T,y;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => Template(args),
  name: 'Not started step',
  args: {
    isCompleted: false,
    isStarted: false,
    stepText: 'Step 3 of 6',
    title: 'Title',
    content: \`<dl class="gds-list"><dt>Sub title</dt><dd>Sub section text</dd><dt>Sub title</dt><dd>Sub section text</dd></dl>\`
  }
}`,...(C=(w=a.parameters)==null?void 0:w.docs)==null?void 0:C.source},description:{story:"An upcoming step that only shows the title and step number, but hides the details in order to reduce clutter.",...(y=(T=a.parameters)==null?void 0:T.docs)==null?void 0:y.description}}};const I=["InPageWizardStepCard","CompletedStep","CurrentStep","NotStartedStep"];export{d as CompletedStep,s as CurrentStep,e as InPageWizardStepCard,a as NotStartedStep,I as __namedExportsOrder,z as default};
