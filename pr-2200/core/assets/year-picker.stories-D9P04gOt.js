import{i as Pe,x as i}from"./lit-element-Bx14lxc-.js";import{a as Se}from"./argTableProps-TTpvdYqJ.js";import{l as Ee}from"./runtime-CNluP0A8.js";import{n as l,r as $e,G as Be,g as Me}from"./gds-element-DKcDvDP5.js";import{a as ze}from"./query-p8xgzTDt.js";import{e as Le}from"./class-map-CXsQwv0r.js";import{o as Te}from"./if-defined-CVqwUuaf.js";import{t as Ae}from"./tokens.style-Khpz0lp_.js";import{T as Oe}from"./transitional-styles-BiORlPgX.js";import{w as Ne}from"./watch-tFciLXSI.js";import{d as E}from"./attribute-converters-CdI0trPX.js";import"./popover-BBLM5Rv4.js";import"./backdrop-DlRfOXOV.js";import"./button-BQq6yv7d.js";import"./calendar-Bg5jShN_.js";import"./chevron-left-D3cL12Bx.js";import"./chevron-right-jFYay9xV.js";import"./flex-6YMVJR_L.js";import"./custom-elements-BP0drBCS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./popover.component-2Azy5OjP.js";import"./floating-ui.dom-BmFOYU71.js";import"./cross-small.component-CF8Pyq63.js";import"./icon-BPdtWFmz.js";import"./unsafe-html-CYO4avEf.js";import"./declarative-layout-mixins-D-CzJZ0x.js";import"./button.component-CP7I7SJN.js";import"./when-BR7zwNJC.js";import"./static-B8S6DEnV.js";import"./observe-light-dom-CmJPHUQ4.js";import"./calendar.component-Sa-MbF-n.js";import"./chevron-right.component-Be7TENGg.js";import"./flex.component-C1NAGQHk.js";import"./div.component-BCGMV-IS.js";const Ue=Pe`
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
`;var Ie=Object.defineProperty,We=Object.getOwnPropertyDescriptor,we=e=>{throw TypeError(e)},o=(e,r,t,a)=>{for(var n=a>1?void 0:a?We(r,t):r,u=e.length-1,c;u>=0;u--)(c=e[u])&&(n=(a?c(r,t,n):c(n))||n);return a&&n&&Ie(r,t,n),n},_e=(e,r,t)=>r.has(e)||we("Cannot "+t),h=(e,r,t)=>(_e(e,r,"read from private field"),t?t.call(e):r.get(e)),g=(e,r,t)=>r.has(e)?we("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(e):r.set(e,t),_=(e,r,t)=>(_e(e,r,"access private method"),t),p,Ce,$,P,S,De,D,F,Fe;let s=class extends Be{constructor(){super(...arguments),g(this,p),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.hideExtraneousYears=!1,this.columns=5,this.rows=5,this.noCurrentYear=!1,this.changeYearsControls=!1,this.focusedDate=new Date,this.size="large",this._currentLocale=navigator.language,g(this,P,e=>{const r=this.columns*this.rows,t=this.min.getFullYear(),a=this.getStartYear();t<a&&(this.focusedYear-=r),e.preventDefault()}),g(this,S,e=>{const r=this.columns*this.rows,t=this.max.getFullYear(),a=this.getStartYear();t>a+r&&(this.focusedYear+=r),e.preventDefault()}),g(this,D,e=>{this._elFocusedButton=e.target}),g(this,F,()=>{delete this._elFocusedButton})}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(e){this.focusedDate=new Date(e,1,1,12)}getYearCell(e){var r;return(r=this.shadowRoot)==null?void 0:r.querySelector(`#yearCell-${e}`)}getStartYear(){const e=this.columns*this.rows,r=this.max.getFullYear()-this.min.getFullYear()+1;let t=this.min.getFullYear()-Math.floor((e-r)/2);if(this.focusedYear<t)do t-=e;while(this.focusedYear<t);else if(this.focusedYear>t+e-1)do t+=e;while(this.focusedYear>t+e-1);return t}connectedCallback(){super.connectedCallback(),Oe.instance.apply(this,"gds-year-picker"),this.addEventListener("keydown",_(this,p,Fe)),window.addEventListener("lit-localize-status",e=>{e.detail.status==="ready"&&(this._currentLocale=e.detail.readyLocale)})}focus(){var e;super.focus(),(e=this._elFocusedCell)==null||e.focus()}render(){const e=new Date().getFullYear(),r=this.getStartYear();return i` <gds-div overflow="auto">
      ${this.changeYearsControls?i`<gds-flex justify-content="space-around" align-items="center">
            <gds-button
              id="prev"
              rank="tertiary"
              label="Previous years"
              @click=${h(this,P)}
              @focus=${h(this,D)}
              @blur=${h(this,F)}
            >
              <gds-icon-chevron-left></gds-icon-chevron-left>
            </gds-button>
            <span id="range">${_(this,p,De).call(this)}</span>
            <gds-button
              id="next"
              rank="tertiary"
              label="Next years"
              @click=${h(this,S)}
              @focus=${h(this,D)}
              @blur=${h(this,F)}
            >
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
          </gds-flex>`:null}
      <table role="grid" aria-label="${Te(this.label)}">
        <tbody role="rowgroup">
          ${Array.from({length:this.rows}).map((t,a)=>i`
              <tr role="row">
                ${Array.from({length:this.columns}).map((n,u)=>{const c=r+a*this.columns+u,m=c<this.min.getFullYear()||c>this.max.getFullYear();return this.hideExtraneousYears&&m?i`<td inert></td>`:i`
                    <td
                      class="${Le({small:this.size=="small",today:!this.noCurrentYear&&e==c,disabled:m})}"
                      ?disabled=${m}
                      tabindex="${this.focusedYear==c&&!m?0:-1}"
                      aria-selected="${_(this,p,Ce).call(this)==c&&!m?"true":"false"}"
                      @click=${()=>m?null:_(this,p,$).call(this,c)}
                      id="yearCell-${a*this.columns+u}"
                    >
                      ${c}
                    </td>
                  `})}
              </tr>
            `)}
        </tbody>
      </table></gds-div
    >`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};p=new WeakSet;Ce=function(){return this.value?this.value.getFullYear():-1};$=function(e){this.value=new Date(e,1,1,12),this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!1,composed:!1}))};P=new WeakMap;S=new WeakMap;De=function(){const e=this.columns*this.rows,r=this.getStartYear(),t=r+e-1;return r+" - "+t};D=new WeakMap;F=new WeakMap;Fe=function(e){var t;let r=!1;if(!this._elFocusedButton){if(e.key==="ArrowLeft")this.focusedYear>this.min.getFullYear()&&(this.focusedYear-=1),r=!0;else if(e.key==="ArrowRight")this.focusedYear<this.max.getFullYear()&&(this.focusedYear+=1),r=!0;else if(e.key==="ArrowUp")this.focusedYear>this.min.getFullYear()&&(this.focusedYear-=this.columns),this.focusedYear<this.min.getFullYear()&&(this.focusedYear=this.min.getFullYear()),r=!0;else if(e.key==="ArrowDown")this.focusedYear<this.max.getFullYear()&&(this.focusedYear+=this.columns),this.focusedYear>this.max.getFullYear()&&(this.focusedYear=this.max.getFullYear()),r=!0;else if(e.key==="Home")this.focusedYear=this.min.getFullYear(),r=!0;else if(e.key==="End")this.focusedYear=this.max.getFullYear(),r=!0;else if(e.key==="PageUp"||e.key==="PageDown"){const a=this.columns*this.rows;let n=this.focusedYear+(e.key==="PageUp"?-a:a);n<this.min.getFullYear()&&(n=this.min.getFullYear()),n>this.max.getFullYear()&&(n=this.max.getFullYear()),this.focusedYear=n,r=!0}else(e.key==="Enter"||e.key===" ")&&((t=this._elFocusedCell)!=null&&t.hasAttribute("disabled")||_(this,p,$).call(this,this.focusedYear),r=!0);r&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then(()=>{var a;(a=this._elFocusedCell)==null||a.focus()}))}};s.styles=[Ae,Ue];s.shadowRootOptions={mode:"open",delegatesFocus:!0};o([l()],s.prototype,"value",2);o([l({converter:E})],s.prototype,"min",2);o([l({converter:E})],s.prototype,"max",2);o([l({type:Boolean,attribute:"hide-extraneous-years"})],s.prototype,"hideExtraneousYears",2);o([l({type:Number})],s.prototype,"columns",2);o([l({type:Number})],s.prototype,"rows",2);o([l({type:Boolean,attribute:"no-current-year"})],s.prototype,"noCurrentYear",2);o([l({type:Boolean,attribute:"change-years-controls"})],s.prototype,"changeYearsControls",2);o([l({converter:E,attribute:"focused-date"})],s.prototype,"focusedDate",2);o([l({type:Number,attribute:"focused-year"})],s.prototype,"focusedYear",1);o([l({reflect:!0})],s.prototype,"size",2);o([l()],s.prototype,"label",2);o([$e()],s.prototype,"_currentLocale",2);o([ze('td[tabindex="0"]')],s.prototype,"_elFocusedCell",2);o([Ne("value")],s.prototype,"_valueChanged",1);s=o([Me("gds-year-picker"),Ee()],s);s.define();var B=Object.freeze,Ge=Object.defineProperty,Re=(e,r)=>B(Ge(e,"raw",{value:B(e.slice())})),M;const Dr={title:"Components/Year picker",component:"gds-year-picker",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/year-picker)

The year picker component is a visual representation of a many years that allows users
to select a year. Keys to use: arrow-keys, home, and end to focus a year
and enter or space to select it.`}}},tags:["autodocs"],argTypes:{...Se("gds-year-picker")}},d={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{}},C={...d,args:{label:"YearPicker"}},y={...d,name:"No current month",render:e=>i` <gds-year-picker no-current-year></gds-year-picker> `},f={...d,render:e=>i` <gds-year-picker size="small"></gds-year-picker> `},v={...d,name:"Min and max",render:e=>i`
    <gds-year-picker min="2023-01-01" max="2032-01-01"></gds-year-picker>
  `},Y={...d,render:e=>i`
    <gds-year-picker
      min="2023-01-01"
      max="2032-01-01"
      hide-extraneous-years
    ></gds-year-picker>
  `},b={...d,render:e=>i`
    <gds-year-picker columns="4" rows="3"></gds-year-picker>
  `},x={...d,render:e=>i`
    <gds-year-picker
      min="1900-01-01"
      max="${new Date().toISOString().split("T")[0]}"
    ></gds-year-picker>
  `},k={...d,render:e=>i(M||(M=Re([`
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
  `])))},w={...d,render:e=>i`
    <gds-year-picker min="1950-01-01" max="2100-01-01" change-years-controls>
    </gds-year-picker>
  `};var z,L,T;C.parameters={...C.parameters,docs:{...(z=C.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    label: 'YearPicker'
  }
}`,...(T=(L=C.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var A,O,N,U,I;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'No current month',
  render: args => html\` <gds-year-picker no-current-year></gds-year-picker> \`
}`,...(N=(O=y.parameters)==null?void 0:O.docs)==null?void 0:N.source},description:{story:"Use the `no-current-year` attribute so the month right\nnow does not have a outer ring around it.",...(I=(U=y.parameters)==null?void 0:U.docs)==null?void 0:I.description}}};var W,G,R,H,j;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\` <gds-year-picker size="small"></gds-year-picker> \`
}`,...(R=(G=f.parameters)==null?void 0:G.docs)==null?void 0:R.source},description:{story:"Use the `small` attribute to use a smaller and condenced styling.",...(j=(H=f.parameters)==null?void 0:H.docs)==null?void 0:j.description}}};var K,q,J,Q,V;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Min and max',
  render: args => html\`
    <gds-year-picker min="2023-01-01" max="2032-01-01"></gds-year-picker>
  \`
}`,...(J=(q=v.parameters)==null?void 0:q.docs)==null?void 0:J.source},description:{story:"Use `min` and `max` attributes to limit the months you can choose from.\nThe rest is greyed out. Remember that by default it uses the current year.",...(V=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:V.description}}};var X,Z,ee,re,te;Y.parameters={...Y.parameters,docs:{...(X=Y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-year-picker
      min="2023-01-01"
      max="2032-01-01"
      hide-extraneous-years
    ></gds-year-picker>
  \`
}`,...(ee=(Z=Y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"Use `hide-extraneous-years` in combination with `min` and `max` attributes\nto to fully hide the non-selectable years.",...(te=(re=Y.parameters)==null?void 0:re.docs)==null?void 0:te.description}}};var se,ae,oe,ne,ie;b.parameters={...b.parameters,docs:{...(se=b.parameters)==null?void 0:se.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-year-picker columns="4" rows="3"></gds-year-picker>
  \`
}`,...(oe=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:oe.source},description:{story:"Use `columns` and `rows` to override the default 5x5 cell table.",...(ie=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:ie.description}}};var le,ce,de,pe,ue;x.parameters={...x.parameters,docs:{...(le=x.parameters)==null?void 0:le.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-year-picker
      min="1900-01-01"
      max="\${new Date().toISOString().split('T')[0]}"
    ></gds-year-picker>
  \`
}`,...(de=(ce=x.parameters)==null?void 0:ce.docs)==null?void 0:de.source},description:{story:"Example of choosing a birth year.",...(ue=(pe=x.parameters)==null?void 0:pe.docs)==null?void 0:ue.description}}};var me,he,ge,ye,fe;k.parameters={...k.parameters,docs:{...(me=k.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ge=(he=k.parameters)==null?void 0:he.docs)==null?void 0:ge.source},description:{story:"Example of a button that opens up the year-picker.",...(fe=(ye=k.parameters)==null?void 0:ye.docs)==null?void 0:fe.description}}};var ve,Ye,be,xe,ke;w.parameters={...w.parameters,docs:{...(ve=w.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-year-picker min="1950-01-01" max="2100-01-01" change-years-controls>
    </gds-year-picker>
  \`
}`,...(be=(Ye=w.parameters)==null?void 0:Ye.docs)==null?void 0:be.source},description:{story:"Use `change-years-controls` to show controls for selecting previous and next years.",...(ke=(xe=w.parameters)==null?void 0:xe.docs)==null?void 0:ke.description}}};const Fr=["Default","NoCurrentMonth","Small","MinAndMax","Hide","LessCells","BirthYear","Popover","ChangeYear"];export{x as BirthYear,w as ChangeYear,C as Default,Y as Hide,b as LessCells,v as MinAndMax,y as NoCurrentMonth,k as Popover,f as Small,Fr as __namedExportsOrder,Dr as default};
