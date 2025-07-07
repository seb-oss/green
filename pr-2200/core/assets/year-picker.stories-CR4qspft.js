import{i as Ne,x as o}from"./lit-element-Bx14lxc-.js";import{a as Ae}from"./argTableProps-CpW5Ei0t.js";import{l as Oe}from"./runtime-CNluP0A8.js";import{n,r as Ue,G as We,g as Ge}from"./gds-element-DKcDvDP5.js";import{a as Re}from"./query-p8xgzTDt.js";import{e as He}from"./class-map-CXsQwv0r.js";import{o as Ke}from"./if-defined-CVqwUuaf.js";import{t as je}from"./tokens.style-Khpz0lp_.js";import{T as qe}from"./transitional-styles-BiORlPgX.js";import{w as Je}from"./watch-tFciLXSI.js";import{d as S}from"./attribute-converters-CdI0trPX.js";import"./popover-BBLM5Rv4.js";import"./backdrop-DlRfOXOV.js";import"./button-BQq6yv7d.js";import"./calendar-Bg5jShN_.js";import"./chevron-left-D3cL12Bx.js";import"./chevron-right-jFYay9xV.js";import"./flex-6YMVJR_L.js";import"./custom-elements-CXhGd4Fs.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./popover.component-2Azy5OjP.js";import"./floating-ui.dom-BmFOYU71.js";import"./cross-small.component-CF8Pyq63.js";import"./icon-BPdtWFmz.js";import"./unsafe-html-CYO4avEf.js";import"./declarative-layout-mixins-D-CzJZ0x.js";import"./button.component-CP7I7SJN.js";import"./when-BR7zwNJC.js";import"./static-B8S6DEnV.js";import"./observe-light-dom-CmJPHUQ4.js";import"./calendar.component-Sa-MbF-n.js";import"./chevron-right.component-Be7TENGg.js";import"./flex.component-C1NAGQHk.js";import"./div.component-BCGMV-IS.js";const Qe=Ne`
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
`;var Ve=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,Be=e=>{throw TypeError(e)},a=(e,r,t,d)=>{for(var u=d>1?void 0:d?Xe(r,t):r,g=e.length-1,i;g>=0;g--)(i=e[g])&&(u=(d?i(r,t,u):i(u))||u);return d&&u&&Ve(r,t,u),u},$e=(e,r,t)=>r.has(e)||Be("Cannot "+t),h=(e,r,t)=>($e(e,r,"read from private field"),t?t.call(e):r.get(e)),f=(e,r,t)=>r.has(e)?Be("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(e):r.set(e,t),p=(e,r,t)=>($e(e,r,"access private method"),t),c,Me,B,E,P,$,M,ze,y,Le,Te;let s=class extends We{constructor(){super(...arguments),f(this,c),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.hideExtraneousYears=!1,this.columns=5,this.rows=5,this.noCurrentYear=!1,this.changeYearsControls=!1,this.focusedDate=new Date,this.size="large",this._currentLocale=navigator.language,f(this,E,e=>{p(this,c,$).call(this),e.preventDefault()}),f(this,P,e=>{p(this,c,M).call(this),e.preventDefault()}),f(this,y,e=>{console.log("Button Focused"),this._elFocusedButton=e.target}),f(this,Le,()=>{delete this._elFocusedButton})}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(e){this.focusedDate=new Date(e,0,1,12)}getYearCell(e){var r;return(r=this.shadowRoot)==null?void 0:r.querySelector(`#yearCell-${e}`)}getStartYear(){const e=this.columns*this.rows,r=this.max.getFullYear()-this.min.getFullYear()+1;let t=this.min.getFullYear()-Math.floor((e-r)/2);if(this.focusedYear<t)do t-=e;while(this.focusedYear<t);else if(this.focusedYear>t+e-1)do t+=e;while(this.focusedYear>t+e-1);return t}connectedCallback(){super.connectedCallback(),qe.instance.apply(this,"gds-year-picker"),this.addEventListener("keydown",p(this,c,Te)),window.addEventListener("lit-localize-status",e=>{e.detail.status==="ready"&&(this._currentLocale=e.detail.readyLocale)})}focus(){var e;console.log("Super Focused"),super.focus(),(e=this._elFocusedCell)==null||e.focus()}render(){const e=new Date().getFullYear(),r=this.getStartYear();return o` <gds-div overflow="auto">
      ${this.changeYearsControls?o`<gds-flex
            justify-content="space-around"
            align-items="center"
            class="controls"
          >
            <gds-button
              id="prev"
              rank="tertiary"
              label="Previous years"
              @click=${h(this,E)}
              @focusin=${h(this,y)}
              @focusout=${h(this,y)}
            >
              <gds-icon-chevron-left></gds-icon-chevron-left>
            </gds-button>
            <span id="range">${p(this,c,ze).call(this)}</span>
            <gds-button
              id="next"
              rank="tertiary"
              label="Next years"
              @click=${h(this,P)}
              @focusin=${h(this,y)}
              @focusout=${h(this,y)}
            >
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
          </gds-flex>`:null}
      <table role="grid" aria-label="${Ke(this.label)}">
        <tbody role="rowgroup">
          ${Array.from({length:this.rows}).map((t,d)=>o`
              <tr role="row">
                ${Array.from({length:this.columns}).map((u,g)=>{const i=r+d*this.columns+g,m=i<this.min.getFullYear()||i>this.max.getFullYear();return this.hideExtraneousYears&&m?o`<td inert></td>`:o`
                    <td
                      class="${He({small:this.size=="small",today:!this.noCurrentYear&&e==i,disabled:m})}"
                      ?disabled=${m}
                      tabindex="${this.focusedYear==i&&!m?0:-1}"
                      aria-selected="${p(this,c,Me).call(this)==i&&!m?"true":"false"}"
                      @click=${()=>m?null:p(this,c,B).call(this,i)}
                      id="yearCell-${d*this.columns+g}"
                    >
                      ${i}
                    </td>
                  `})}
              </tr>
            `)}
        </tbody>
      </table></gds-div
    >`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};c=new WeakSet;Me=function(){return this.value?this.value.getFullYear():-1};B=function(e){e<this.min.getFullYear()||e>this.max.getFullYear()||(this.value=new Date(e,1,1,12),this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!1,composed:!1})))};E=new WeakMap;P=new WeakMap;$=function(){const e=this.columns*this.rows,r=this.min.getFullYear();let t=this.focusedYear-e;t<r&&(t=r),this.focusedYear=t};M=function(){const e=this.columns*this.rows,r=this.max.getFullYear();let t=this.focusedYear+e;t>r&&(t=r),this.focusedYear=t};ze=function(){const e=this.columns*this.rows,r=this.getStartYear(),t=r+e-1;return r+" - "+t};y=new WeakMap;Le=new WeakMap;Te=function(e){var t;let r=!1;console.log("Key: "+e.key+" this._elFocusedButton: "+this._elFocusedButton+" this._elFocusedCell: "+this._elFocusedCell),!this._elFocusedButton&&(e.key==="ArrowLeft"?(this.focusedYear>this.min.getFullYear()&&(this.focusedYear-=1),r=!0):e.key==="ArrowRight"?(this.focusedYear<this.max.getFullYear()&&(this.focusedYear+=1),r=!0):e.key==="ArrowUp"?(this.focusedYear>this.min.getFullYear()&&(this.focusedYear-=this.columns),this.focusedYear<this.min.getFullYear()&&(this.focusedYear=this.min.getFullYear()),r=!0):e.key==="ArrowDown"?(this.focusedYear<this.max.getFullYear()&&(this.focusedYear+=this.columns),this.focusedYear>this.max.getFullYear()&&(this.focusedYear=this.max.getFullYear()),r=!0):e.key==="Home"?(this.focusedYear=this.min.getFullYear(),r=!0):e.key==="End"?(this.focusedYear=this.max.getFullYear(),r=!0):e.key==="PageUp"?(p(this,c,$).call(this),r=!0):e.key==="PageDown"?(p(this,c,M).call(this),r=!0):(e.key==="Enter"||e.key===" ")&&((t=this._elFocusedCell)!=null&&t.hasAttribute("disabled")||p(this,c,B).call(this,this.focusedYear),r=!0),r&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then(()=>{var d;(d=this._elFocusedCell)==null||d.focus()})))};s.styles=[je,Qe];s.shadowRootOptions={mode:"open",delegatesFocus:!0};a([n()],s.prototype,"value",2);a([n({converter:S})],s.prototype,"min",2);a([n({converter:S})],s.prototype,"max",2);a([n({type:Boolean,attribute:"hide-extraneous-years"})],s.prototype,"hideExtraneousYears",2);a([n({type:Number})],s.prototype,"columns",2);a([n({type:Number})],s.prototype,"rows",2);a([n({type:Boolean,attribute:"no-current-year"})],s.prototype,"noCurrentYear",2);a([n({type:Boolean,attribute:"change-years-controls"})],s.prototype,"changeYearsControls",2);a([n({converter:S,attribute:"focused-date"})],s.prototype,"focusedDate",2);a([n({type:Number,attribute:"focused-year"})],s.prototype,"focusedYear",1);a([n({reflect:!0})],s.prototype,"size",2);a([n()],s.prototype,"label",2);a([Ue()],s.prototype,"_currentLocale",2);a([Re('td[tabindex="0"]')],s.prototype,"_elFocusedCell",2);a([Je("value")],s.prototype,"_valueChanged",1);s=a([Ge("gds-year-picker"),Oe()],s);s.define();var z=Object.freeze,Ze=Object.defineProperty,Ie=(e,r)=>z(Ze(e,"raw",{value:z(e.slice())})),L,T;const Lr={title:"Components/Year picker",component:"gds-year-picker",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/year-picker)

The year picker component is a visual representation of a many years that allows users
to select a year. Keys to use: arrow-keys, home, and end to focus a year
and enter or space to select it.`}}},tags:["autodocs"],argTypes:{...Ae("gds-year-picker")}},l={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{}},D={...l,args:{label:"YearPicker"}},v={...l,name:"No current month",render:e=>o` <gds-year-picker no-current-year></gds-year-picker> `},Y={...l,render:e=>o` <gds-year-picker size="small"></gds-year-picker> `},b={...l,name:"Min and max",render:e=>o`
    <gds-year-picker min="2023-01-01" max="2032-01-01"></gds-year-picker>
  `},x={...l,render:e=>o`
    <gds-year-picker
      min="2023-01-01"
      max="2032-01-01"
      hide-extraneous-years
    ></gds-year-picker>
  `},k={...l,render:e=>o`
    <gds-year-picker columns="4" rows="3"></gds-year-picker>
  `},w={...l,render:e=>o`
    <gds-year-picker
      min="1900-01-01"
      max="${new Date().toISOString().split("T")[0]}"
    ></gds-year-picker>
  `},C={...l,render:e=>o(L||(L=Ie([`
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
  `])))},_={...l,render:e=>o`
    <gds-year-picker min="1950-01-01" max="2100-01-01" change-years-controls>
    </gds-year-picker>
  `},F={...l,render:e=>o(T||(T=Ie([`
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
  `])))};var I,N,A;D.parameters={...D.parameters,docs:{...(I=D.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    label: 'YearPicker'
  }
}`,...(A=(N=D.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var O,U,W,G,R;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'No current month',
  render: args => html\` <gds-year-picker no-current-year></gds-year-picker> \`
}`,...(W=(U=v.parameters)==null?void 0:U.docs)==null?void 0:W.source},description:{story:"Use the `no-current-year` attribute so the month right\nnow does not have a outer ring around it.",...(R=(G=v.parameters)==null?void 0:G.docs)==null?void 0:R.description}}};var H,K,j,q,J;Y.parameters={...Y.parameters,docs:{...(H=Y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\` <gds-year-picker size="small"></gds-year-picker> \`
}`,...(j=(K=Y.parameters)==null?void 0:K.docs)==null?void 0:j.source},description:{story:"Use the `small` attribute to use a smaller and condenced styling.",...(J=(q=Y.parameters)==null?void 0:q.docs)==null?void 0:J.description}}};var Q,V,X,Z,ee;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Min and max',
  render: args => html\`
    <gds-year-picker min="2023-01-01" max="2032-01-01"></gds-year-picker>
  \`
}`,...(X=(V=b.parameters)==null?void 0:V.docs)==null?void 0:X.source},description:{story:"Use `min` and `max` attributes to limit the months you can choose from.\nThe rest is greyed out. Note that by default it uses from the current year -10\nto current year +10 years.",...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var re,te,se,ae,oe;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-year-picker
      min="2023-01-01"
      max="2032-01-01"
      hide-extraneous-years
    ></gds-year-picker>
  \`
}`,...(se=(te=x.parameters)==null?void 0:te.docs)==null?void 0:se.source},description:{story:"Use `hide-extraneous-years` in combination with `min` and `max` attributes\nto to fully hide the non-selectable years.",...(oe=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:oe.description}}};var ne,ie,ce,de,le;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-year-picker columns="4" rows="3"></gds-year-picker>
  \`
}`,...(ce=(ie=k.parameters)==null?void 0:ie.docs)==null?void 0:ce.source},description:{story:"Use `columns` and `rows` to override the default 5x5 cell table.",...(le=(de=k.parameters)==null?void 0:de.docs)==null?void 0:le.description}}};var pe,ue,ge,me,he;w.parameters={...w.parameters,docs:{...(pe=w.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-year-picker
      min="1900-01-01"
      max="\${new Date().toISOString().split('T')[0]}"
    ></gds-year-picker>
  \`
}`,...(ge=(ue=w.parameters)==null?void 0:ue.docs)==null?void 0:ge.source},description:{story:"Example of choosing a birth year.",...(he=(me=w.parameters)==null?void 0:me.docs)==null?void 0:he.description}}};var ye,fe,ve,Ye,be;C.parameters={...C.parameters,docs:{...(ye=C.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ve=(fe=C.parameters)==null?void 0:fe.docs)==null?void 0:ve.source},description:{story:"Example of a button that opens up the year-picker.",...(be=(Ye=C.parameters)==null?void 0:Ye.docs)==null?void 0:be.description}}};var xe,ke,we,Ce,_e;_.parameters={..._.parameters,docs:{...(xe=_.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-year-picker min="1950-01-01" max="2100-01-01" change-years-controls>
    </gds-year-picker>
  \`
}`,...(we=(ke=_.parameters)==null?void 0:ke.docs)==null?void 0:we.source},description:{story:"Use `change-years-controls` to show controls for selecting previous and next years.",...(_e=(Ce=_.parameters)==null?void 0:Ce.docs)==null?void 0:_e.description}}};var Fe,De,Ee,Pe,Se;F.parameters={...F.parameters,docs:{...(Fe=F.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Ee=(De=F.parameters)==null?void 0:De.docs)==null?void 0:Ee.source},description:{story:"Example of a button that opens up the year-picker.",...(Se=(Pe=F.parameters)==null?void 0:Pe.docs)==null?void 0:Se.description}}};const Tr=["Default","NoCurrentMonth","Small","MinAndMax","Hide","LessCells","BirthYear","Popover","ChangeYear","PopoverChange"];export{w as BirthYear,_ as ChangeYear,D as Default,x as Hide,k as LessCells,b as MinAndMax,v as NoCurrentMonth,C as Popover,F as PopoverChange,Y as Small,Tr as __namedExportsOrder,Lr as default};
