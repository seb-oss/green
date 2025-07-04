import{i as Ae,x as o}from"./lit-element-Bx14lxc-.js";import{a as Ne}from"./argTableProps-CZ75xtzl.js";import{l as Oe}from"./runtime-CNluP0A8.js";import{n,r as Ue,G as We,g as Ge}from"./gds-element-DKcDvDP5.js";import{a as Re}from"./query-p8xgzTDt.js";import{e as He}from"./class-map-CXsQwv0r.js";import{o as je}from"./if-defined-CVqwUuaf.js";import{t as Ke}from"./tokens.style-Khpz0lp_.js";import{T as qe}from"./transitional-styles-BiORlPgX.js";import{w as Je}from"./watch-tFciLXSI.js";import{d as B}from"./attribute-converters-CdI0trPX.js";import"./popover-BBLM5Rv4.js";import"./backdrop-DlRfOXOV.js";import"./button-BQq6yv7d.js";import"./calendar-Bg5jShN_.js";import"./chevron-left-D3cL12Bx.js";import"./chevron-right-jFYay9xV.js";import"./flex-6YMVJR_L.js";import"./custom-elements-BVElRzn7.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./popover.component-2Azy5OjP.js";import"./floating-ui.dom-BmFOYU71.js";import"./cross-small.component-CF8Pyq63.js";import"./icon-BPdtWFmz.js";import"./unsafe-html-CYO4avEf.js";import"./declarative-layout-mixins-D-CzJZ0x.js";import"./button.component-CP7I7SJN.js";import"./when-BR7zwNJC.js";import"./static-B8S6DEnV.js";import"./observe-light-dom-CmJPHUQ4.js";import"./calendar.component-Sa-MbF-n.js";import"./chevron-right.component-Be7TENGg.js";import"./flex.component-C1NAGQHk.js";import"./div.component-BCGMV-IS.js";const Qe=Ae`
  @layer base, reset;

  @layer base {
    gds-flex {
      box-shadow: 0 var(--gds-sys-space-4xs) 0 0
        var(--gds-sys-color-l2-border-primary);
      padding-bottom: 0.25rem;
      margin: 0.5rem 1rem -0.5rem 1rem;
    }

    :host {
      display: flex;
      justify-content: center;
    }

    :host table {
      border-spacing: var(--gds-sys-space-2xs);
      flex-grow: 1;
      width: 100%;
      padding: 1ch;
    }

    thead {
      box-shadow: 0 var(--gds-sys-space-4xs) 0 0
        var(--gds-sys-color-l2-border-primary);
      th {
        height: var(--gds-sys-space-2xl);
        width: var(--gds-sys-space-2xl);
        box-sizing: border-box;
        text-align: center;
        font-weight: normal;
      }
    }

    tbody {
      td {
        padding: 0 12px;
        position: relative;
        height: var(--gds-sys-space-3xl);
        width: var(--gds-sys-space-3xl);
        box-sizing: border-box;
        text-align: center;
        user-select: none;
        border-width: var(--gds-sys-space-3xs);
        border-style: solid;
        border-color: transparent;
        border-radius: var(--gds-sys-space-2xs);
        transition: background 0.2s;
        outline-style: solid;
        outline-color: transparent;
        outline-width: 0px;
        outline-offset: var(--gds-sys-space-3xs);

        &:not(.disabled):hover,
        &[aria-selected='true'] {
          background: var(--gds-sys-color-l2-background-tertiary);
          cursor: pointer;
          color: var(--gds-sys-color-l2-content-tertiary);
        }

        &.today {
          border-color: var(--gds-sys-color-l2-background-tertiary);
        }

        &.disabled {
          color: var(--gds-sys-color-l3-content-disabled);
          cursor: not-allowed;
        }

        &:active:not(.disabled) {
          scale: 0.96;
        }

        &:focus-visible {
          outline-color: var(--gds-sys-color-l2-content-primary);
          outline-width: var(--gds-sys-space-3xs);
        }

        &.small {
          padding: 0 6px;
          height: var(--gds-sys-space-xl);
          font-size: var(--gds-sys-text-size-detail-s);
          line-height: var(--gds-sys-text-line-height-detail-s);
        }
      }

      .indicator-dot {
        display: flex;
        position: absolute;
        width: var(--gds-sys-space-2xs);
        height: var(--gds-sys-space-2xs);
        border-radius: var(--gds-sys-space-max);
        background-color: var(--_color, currentColor);
        inset: var(--gds-sys-space-2xs) var(--gds-sys-space-2xs) auto auto;
      }
    }
  }
`;var Ve=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,$e=e=>{throw TypeError(e)},a=(e,r,t,d)=>{for(var u=d>1?void 0:d?Xe(r,t):r,g=e.length-1,i;g>=0;g--)(i=e[g])&&(u=(d?i(r,t,u):i(u))||u);return d&&u&&Ve(r,t,u),u},Me=(e,r,t)=>r.has(e)||$e("Cannot "+t),h=(e,r,t)=>(Me(e,r,"read from private field"),t?t.call(e):r.get(e)),y=(e,r,t)=>r.has(e)?$e("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(e):r.set(e,t),p=(e,r,t)=>(Me(e,r,"access private method"),t),c,ze,$,P,S,M,z,Le,F,E,Te;let s=class extends We{constructor(){super(...arguments),y(this,c),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.hideExtraneousYears=!1,this.columns=5,this.rows=5,this.noCurrentYear=!1,this.changeYearsControls=!1,this.focusedDate=new Date,this.size="large",this._currentLocale=navigator.language,y(this,P,e=>{p(this,c,M).call(this),e.preventDefault()}),y(this,S,e=>{p(this,c,z).call(this),e.preventDefault()}),y(this,F,e=>{this._elFocusedButton=e.target}),y(this,E,()=>{delete this._elFocusedButton})}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(e){this.focusedDate=new Date(e,0,1,12)}getYearCell(e){var r;return(r=this.shadowRoot)==null?void 0:r.querySelector(`#yearCell-${e}`)}getStartYear(){const e=this.columns*this.rows,r=this.max.getFullYear()-this.min.getFullYear()+1;let t=this.min.getFullYear()-Math.floor((e-r)/2);if(this.focusedYear<t)do t-=e;while(this.focusedYear<t);else if(this.focusedYear>t+e-1)do t+=e;while(this.focusedYear>t+e-1);return t}connectedCallback(){super.connectedCallback(),qe.instance.apply(this,"gds-year-picker"),this.addEventListener("keydown",p(this,c,Te)),window.addEventListener("lit-localize-status",e=>{e.detail.status==="ready"&&(this._currentLocale=e.detail.readyLocale)})}focus(){var e;super.focus(),(e=this._elFocusedCell)==null||e.focus()}render(){const e=new Date().getFullYear(),r=this.getStartYear();return o` <gds-div overflow="auto">
      ${this.changeYearsControls?o`<gds-flex justify-content="space-around" align-items="center">
            <gds-button
              id="prev"
              rank="tertiary"
              label="Previous years"
              @click=${h(this,P)}
              @focus=${h(this,F)}
              @blur=${h(this,E)}
            >
              <gds-icon-chevron-left></gds-icon-chevron-left>
            </gds-button>
            <span id="range">${p(this,c,Le).call(this)}</span>
            <gds-button
              id="next"
              rank="tertiary"
              label="Next years"
              @click=${h(this,S)}
              @focus=${h(this,F)}
              @blur=${h(this,E)}
            >
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
          </gds-flex>`:null}
      <table role="grid" aria-label="${je(this.label)}">
        <tbody role="rowgroup">
          ${Array.from({length:this.rows}).map((t,d)=>o`
              <tr role="row">
                ${Array.from({length:this.columns}).map((u,g)=>{const i=r+d*this.columns+g,m=i<this.min.getFullYear()||i>this.max.getFullYear();return this.hideExtraneousYears&&m?o`<td inert></td>`:o`
                    <td
                      class="${He({small:this.size=="small",today:!this.noCurrentYear&&e==i,disabled:m})}"
                      ?disabled=${m}
                      tabindex="${this.focusedYear==i&&!m?0:-1}"
                      aria-selected="${p(this,c,ze).call(this)==i&&!m?"true":"false"}"
                      @click=${()=>m?null:p(this,c,$).call(this,i)}
                      id="yearCell-${d*this.columns+g}"
                    >
                      ${i}
                    </td>
                  `})}
              </tr>
            `)}
        </tbody>
      </table></gds-div
    >`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};c=new WeakSet;ze=function(){return this.value?this.value.getFullYear():-1};$=function(e){e<this.min.getFullYear()||e>this.max.getFullYear()||(this.value=new Date(e,1,1,12),this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!1,composed:!1})))};P=new WeakMap;S=new WeakMap;M=function(){const e=this.columns*this.rows,r=this.min.getFullYear();let t=this.focusedYear-e;t<r&&(t=r),this.focusedYear=t};z=function(){const e=this.columns*this.rows,r=this.max.getFullYear();let t=this.focusedYear+e;t>r&&(t=r),this.focusedYear=t};Le=function(){const e=this.columns*this.rows,r=this.getStartYear(),t=r+e-1;return r+" - "+t};F=new WeakMap;E=new WeakMap;Te=function(e){var t;let r=!1;this._elFocusedButton||(e.key==="ArrowLeft"?(this.focusedYear>this.min.getFullYear()&&(this.focusedYear-=1),r=!0):e.key==="ArrowRight"?(this.focusedYear<this.max.getFullYear()&&(this.focusedYear+=1),r=!0):e.key==="ArrowUp"?(this.focusedYear>this.min.getFullYear()&&(this.focusedYear-=this.columns),this.focusedYear<this.min.getFullYear()&&(this.focusedYear=this.min.getFullYear()),r=!0):e.key==="ArrowDown"?(this.focusedYear<this.max.getFullYear()&&(this.focusedYear+=this.columns),this.focusedYear>this.max.getFullYear()&&(this.focusedYear=this.max.getFullYear()),r=!0):e.key==="Home"?(this.focusedYear=this.min.getFullYear(),r=!0):e.key==="End"?(this.focusedYear=this.max.getFullYear(),r=!0):e.key==="PageUp"?(p(this,c,M).call(this),r=!0):e.key==="PageDown"?(p(this,c,z).call(this),r=!0):(e.key==="Enter"||e.key===" ")&&((t=this._elFocusedCell)!=null&&t.hasAttribute("disabled")||p(this,c,$).call(this,this.focusedYear),r=!0),r&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then(()=>{var d;(d=this._elFocusedCell)==null||d.focus()})))};s.styles=[Ke,Qe];s.shadowRootOptions={mode:"open",delegatesFocus:!0};a([n()],s.prototype,"value",2);a([n({converter:B})],s.prototype,"min",2);a([n({converter:B})],s.prototype,"max",2);a([n({type:Boolean,attribute:"hide-extraneous-years"})],s.prototype,"hideExtraneousYears",2);a([n({type:Number})],s.prototype,"columns",2);a([n({type:Number})],s.prototype,"rows",2);a([n({type:Boolean,attribute:"no-current-year"})],s.prototype,"noCurrentYear",2);a([n({type:Boolean,attribute:"change-years-controls"})],s.prototype,"changeYearsControls",2);a([n({converter:B,attribute:"focused-date"})],s.prototype,"focusedDate",2);a([n({type:Number,attribute:"focused-year"})],s.prototype,"focusedYear",1);a([n({reflect:!0})],s.prototype,"size",2);a([n()],s.prototype,"label",2);a([Ue()],s.prototype,"_currentLocale",2);a([Re('td[tabindex="0"]')],s.prototype,"_elFocusedCell",2);a([Je("value")],s.prototype,"_valueChanged",1);s=a([Ge("gds-year-picker"),Oe()],s);s.define();var L=Object.freeze,Ze=Object.defineProperty,Ie=(e,r)=>L(Ze(e,"raw",{value:L(e.slice())})),T,I;const Lr={title:"Components/Year picker",component:"gds-year-picker",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/year-picker)

The year picker component is a visual representation of a many years that allows users
to select a year. Keys to use: arrow-keys, home, and end to focus a year
and enter or space to select it.`}}},tags:["autodocs"],argTypes:{...Ne("gds-year-picker")}},l={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{}},D={...l,args:{label:"YearPicker"}},f={...l,name:"No current month",render:e=>o` <gds-year-picker no-current-year></gds-year-picker> `},v={...l,render:e=>o` <gds-year-picker size="small"></gds-year-picker> `},Y={...l,name:"Min and max",render:e=>o`
    <gds-year-picker min="2023-01-01" max="2032-01-01"></gds-year-picker>
  `},b={...l,render:e=>o`
    <gds-year-picker
      min="2023-01-01"
      max="2032-01-01"
      hide-extraneous-years
    ></gds-year-picker>
  `},x={...l,render:e=>o`
    <gds-year-picker columns="4" rows="3"></gds-year-picker>
  `},k={...l,render:e=>o`
    <gds-year-picker
      min="1900-01-01"
      max="${new Date().toISOString().split("T")[0]}"
    ></gds-year-picker>
  `},w={...l,render:e=>o(T||(T=Ie([`
    <gds-popover id="pop">
      <gds-button rank="secondary" slot="trigger">
        <span id="selected-year">Choose a year</span>
        <gds-icon-calendar slot="trail"></gds-icon-calendar>
      </gds-button>
      <div style="padding: 1rem 0 0 1.5rem">Choose a year</div>
      <gds-year-picker id="yearp"> </gds-year-picker>
    </gds-popover>
    <script>
      var yearp = document.getElementById('yearp')
      function onYearChange() {
        const selectedDate = yearp.value
        document.getElementById('selected-year').innerText =
          selectedDate.getFullYear()
        document.getElementById('pop').open = false
      }
      yearp.addEventListener('change', onYearChange)
    <\/script>
  `])))},C={...l,render:e=>o`
    <gds-year-picker min="1950-01-01" max="2100-01-01" change-years-controls>
    </gds-year-picker>
  `},_={...l,render:e=>o(I||(I=Ie([`
    <gds-popover id="popchange">
      <gds-button rank="secondary" slot="trigger">
        <span id="selected-year2">Choose a year</span>
        <gds-icon-calendar slot="trail"></gds-icon-calendar>
      </gds-button>
      <gds-year-picker
        id="yearp2"
        min="1950-01-01"
        max="2100-01-01"
        change-years-controls
      >
      </gds-year-picker>
    </gds-popover>
    <script>
      var yearp2 = document.getElementById('yearp2')
      function onYearChange2() {
        document.getElementById('selected-year2').innerText =
          yearp2.value.getFullYear()
        document.getElementById('popchange').open = false
      }
      yearp2.addEventListener('change', onYearChange2)
    <\/script>
  `])))};var A,N,O;D.parameters={...D.parameters,docs:{...(A=D.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    label: 'YearPicker'
  }
}`,...(O=(N=D.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var U,W,G,R,H;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'No current month',
  render: args => html\` <gds-year-picker no-current-year></gds-year-picker> \`
}`,...(G=(W=f.parameters)==null?void 0:W.docs)==null?void 0:G.source},description:{story:"Use the `no-current-year` attribute so the month right\nnow does not have a outer ring around it.",...(H=(R=f.parameters)==null?void 0:R.docs)==null?void 0:H.description}}};var j,K,q,J,Q;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\` <gds-year-picker size="small"></gds-year-picker> \`
}`,...(q=(K=v.parameters)==null?void 0:K.docs)==null?void 0:q.source},description:{story:"Use the `small` attribute to use a smaller and condenced styling.",...(Q=(J=v.parameters)==null?void 0:J.docs)==null?void 0:Q.description}}};var V,X,Z,ee,re;Y.parameters={...Y.parameters,docs:{...(V=Y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Min and max',
  render: args => html\`
    <gds-year-picker min="2023-01-01" max="2032-01-01"></gds-year-picker>
  \`
}`,...(Z=(X=Y.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:"Use `min` and `max` attributes to limit the months you can choose from.\nThe rest is greyed out. Remember that by default it uses the current year.",...(re=(ee=Y.parameters)==null?void 0:ee.docs)==null?void 0:re.description}}};var te,se,ae,oe,ne;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-year-picker
      min="2023-01-01"
      max="2032-01-01"
      hide-extraneous-years
    ></gds-year-picker>
  \`
}`,...(ae=(se=b.parameters)==null?void 0:se.docs)==null?void 0:ae.source},description:{story:"Use `hide-extraneous-years` in combination with `min` and `max` attributes\nto to fully hide the non-selectable years.",...(ne=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:ne.description}}};var ie,ce,de,le,pe;x.parameters={...x.parameters,docs:{...(ie=x.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-year-picker columns="4" rows="3"></gds-year-picker>
  \`
}`,...(de=(ce=x.parameters)==null?void 0:ce.docs)==null?void 0:de.source},description:{story:"Use `columns` and `rows` to override the default 5x5 cell table.",...(pe=(le=x.parameters)==null?void 0:le.docs)==null?void 0:pe.description}}};var ue,ge,me,he,ye;k.parameters={...k.parameters,docs:{...(ue=k.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-year-picker
      min="1900-01-01"
      max="\${new Date().toISOString().split('T')[0]}"
    ></gds-year-picker>
  \`
}`,...(me=(ge=k.parameters)==null?void 0:ge.docs)==null?void 0:me.source},description:{story:"Example of choosing a birth year.",...(ye=(he=k.parameters)==null?void 0:he.docs)==null?void 0:ye.description}}};var fe,ve,Ye,be,xe;w.parameters={...w.parameters,docs:{...(fe=w.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-popover id="pop">
      <gds-button rank="secondary" slot="trigger">
        <span id="selected-year">Choose a year</span>
        <gds-icon-calendar slot="trail"></gds-icon-calendar>
      </gds-button>
      <div style="padding: 1rem 0 0 1.5rem">Choose a year</div>
      <gds-year-picker id="yearp"> </gds-year-picker>
    </gds-popover>
    <script>
      var yearp = document.getElementById('yearp')
      function onYearChange() {
        const selectedDate = yearp.value
        document.getElementById('selected-year').innerText =
          selectedDate.getFullYear()
        document.getElementById('pop').open = false
      }
      yearp.addEventListener('change', onYearChange)
    <\/script>
  \`
}`,...(Ye=(ve=w.parameters)==null?void 0:ve.docs)==null?void 0:Ye.source},description:{story:"Example of a button that opens up the year-picker.",...(xe=(be=w.parameters)==null?void 0:be.docs)==null?void 0:xe.description}}};var ke,we,Ce,_e,De;C.parameters={...C.parameters,docs:{...(ke=C.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-year-picker min="1950-01-01" max="2100-01-01" change-years-controls>
    </gds-year-picker>
  \`
}`,...(Ce=(we=C.parameters)==null?void 0:we.docs)==null?void 0:Ce.source},description:{story:"Use `change-years-controls` to show controls for selecting previous and next years.",...(De=(_e=C.parameters)==null?void 0:_e.docs)==null?void 0:De.description}}};var Fe,Ee,Pe,Se,Be;_.parameters={..._.parameters,docs:{...(Fe=_.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-popover id="popchange">
      <gds-button rank="secondary" slot="trigger">
        <span id="selected-year2">Choose a year</span>
        <gds-icon-calendar slot="trail"></gds-icon-calendar>
      </gds-button>
      <gds-year-picker
        id="yearp2"
        min="1950-01-01"
        max="2100-01-01"
        change-years-controls
      >
      </gds-year-picker>
    </gds-popover>
    <script>
      var yearp2 = document.getElementById('yearp2')
      function onYearChange2() {
        document.getElementById('selected-year2').innerText =
          yearp2.value.getFullYear()
        document.getElementById('popchange').open = false
      }
      yearp2.addEventListener('change', onYearChange2)
    <\/script>
  \`
}`,...(Pe=(Ee=_.parameters)==null?void 0:Ee.docs)==null?void 0:Pe.source},description:{story:"Example of a button that opens up the year-picker.",...(Be=(Se=_.parameters)==null?void 0:Se.docs)==null?void 0:Be.description}}};const Tr=["Default","NoCurrentMonth","Small","MinAndMax","Hide","LessCells","BirthYear","Popover","ChangeYear","PopoverChange"];export{k as BirthYear,C as ChangeYear,D as Default,b as Hide,x as LessCells,Y as MinAndMax,f as NoCurrentMonth,w as Popover,_ as PopoverChange,v as Small,Tr as __namedExportsOrder,Lr as default};
