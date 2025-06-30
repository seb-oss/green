import{i as ke,x as i}from"./lit-element-Bx14lxc-.js";import{a as we}from"./argTableProps-D-RyJFYb.js";import{l as Ce}from"./runtime-CNluP0A8.js";import{n as l,r as _e,G as De,g as Ee}from"./gds-element-DKcDvDP5.js";import{a as Fe}from"./query-p8xgzTDt.js";import{e as Pe}from"./class-map-CXsQwv0r.js";import{o as Se}from"./if-defined-CVqwUuaf.js";import{t as Be}from"./tokens.style-Khpz0lp_.js";import{T as Le}from"./transitional-styles-BiORlPgX.js";import{w as $e}from"./watch-tFciLXSI.js";import{d as C}from"./attribute-converters-CdI0trPX.js";import"./popover-BBLM5Rv4.js";import"./backdrop-DlRfOXOV.js";import"./button-BQq6yv7d.js";import"./calendar-Bg5jShN_.js";import"./chevron-left-D3cL12Bx.js";import"./chevron-right-jFYay9xV.js";import"./flex-6YMVJR_L.js";import"./custom-elements-C_LIPDaW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./directive-CF8sV3Lr.js";import"./popover.component-2Azy5OjP.js";import"./floating-ui.dom-BmFOYU71.js";import"./cross-small.component-CF8Pyq63.js";import"./icon-BPdtWFmz.js";import"./unsafe-html-CYO4avEf.js";import"./declarative-layout-mixins-D-CzJZ0x.js";import"./button.component-CP7I7SJN.js";import"./when-BR7zwNJC.js";import"./static-B8S6DEnV.js";import"./observe-light-dom-CmJPHUQ4.js";import"./calendar.component-Sa-MbF-n.js";import"./chevron-right.component-Be7TENGg.js";import"./flex.component-C1NAGQHk.js";import"./div.component-BCGMV-IS.js";const Ie=ke`
  @layer base, reset;

  @layer base {
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
`;var ze=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,ve=e=>{throw TypeError(e)},s=(e,r,t,n)=>{for(var o=n>1?void 0:n?Ne(r,t):r,p=e.length-1,d;p>=0;p--)(d=e[p])&&(o=(n?d(r,t,o):d(o))||o);return n&&o&&ze(r,t,o),o},Te=(e,r,t)=>r.has(e)||ve("Cannot "+t),Re=(e,r,t)=>r.has(e)?ve("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(e):r.set(e,t),w=(e,r,t)=>(Te(e,r,"access private method"),t),m,Ye,_,xe;let a=class extends De{constructor(){super(...arguments),Re(this,m),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.hideExtraneousYears=!1,this.columns=5,this.rows=5,this.noCurrentYear=!1,this.focusedDate=new Date,this.size="large",this._currentLocale=navigator.language}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(e){this.focusedDate=new Date(e,1,1,12)}getYearCell(e){var r;return(r=this.shadowRoot)==null?void 0:r.querySelector(`#yearCell-${e}`)}getStartYear(){const e=this.columns*this.rows,r=this.max.getFullYear()-this.min.getFullYear()+1;let t=this.min.getFullYear()-Math.floor((e-r)/2);if(this.focusedYear<t)do t-=e;while(this.focusedYear<t);else if(this.focusedYear>t+e-1)do t+=e;while(this.focusedYear>t+e-1);return t}connectedCallback(){super.connectedCallback(),Le.instance.apply(this,"gds-year-picker"),this.addEventListener("keydown",w(this,m,xe)),window.addEventListener("lit-localize-status",e=>{e.detail.status==="ready"&&(this._currentLocale=e.detail.readyLocale)})}focus(){var e;super.focus(),(e=this._elFocusedCell)==null||e.focus()}render(){const e=new Date().getFullYear(),r=this.getStartYear();return i` <table role="grid" aria-label="${Se(this.label)}">
      <tbody role="rowgroup">
        ${Array.from({length:this.rows}).map((t,n)=>i`
            <tr role="row">
              ${Array.from({length:this.columns}).map((o,p)=>{const d=r+n*this.columns+p,u=d<this.min.getFullYear()||d>this.max.getFullYear();return this.hideExtraneousYears&&u?i`<td inert></td>`:i`
                  <td
                    class="${Pe({small:this.size=="small",today:!this.noCurrentYear&&e==d,disabled:u})}"
                    ?disabled=${u}
                    tabindex="${this.focusedYear==d&&!u?0:-1}"
                    aria-selected="${w(this,m,Ye).call(this)==d&&!u?"true":"false"}"
                    @click=${()=>u?null:w(this,m,_).call(this,d)}
                    id="yearCell-${n*this.columns+p}"
                  >
                    ${d}
                  </td>
                `})}
            </tr>
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};m=new WeakSet;Ye=function(){return this.value?this.value.getFullYear():-1};_=function(e){this.value=new Date(e,1,1,12),this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!1,composed:!1}))};xe=function(e){var t;let r=!1;if(e.key==="ArrowLeft")this.focusedYear>this.min.getFullYear()&&(this.focusedYear-=1),r=!0;else if(e.key==="ArrowRight")this.focusedYear<this.max.getFullYear()&&(this.focusedYear+=1),r=!0;else if(e.key==="ArrowUp")this.focusedYear>this.min.getFullYear()&&(this.focusedYear-=this.columns),this.focusedYear<this.min.getFullYear()&&(this.focusedYear=this.min.getFullYear()),r=!0;else if(e.key==="ArrowDown")this.focusedYear<this.max.getFullYear()&&(this.focusedYear+=this.columns),this.focusedYear>this.max.getFullYear()&&(this.focusedYear=this.max.getFullYear()),r=!0;else if(e.key==="Home")this.focusedYear=this.min.getFullYear(),r=!0;else if(e.key==="End")this.focusedYear=this.max.getFullYear(),r=!0;else if(e.key==="PageUp"||e.key==="PageDown"){const n=this.columns*this.rows;let o=this.focusedYear+(e.key==="PageUp"?-n:n);o<this.min.getFullYear()&&(o=this.min.getFullYear()),o>this.max.getFullYear()&&(o=this.max.getFullYear()),this.focusedYear=o,r=!0}else(e.key==="Enter"||e.key===" ")&&((t=this._elFocusedCell)!=null&&t.hasAttribute("disabled")||w(this,m,_).call(this,this.focusedYear),r=!0);r&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then(()=>{var n;(n=this._elFocusedCell)==null||n.focus()}))};a.styles=[Be,Ie];a.shadowRootOptions={mode:"open",delegatesFocus:!0};s([l()],a.prototype,"value",2);s([l({converter:C})],a.prototype,"min",2);s([l({converter:C})],a.prototype,"max",2);s([l({type:Boolean,attribute:"hide-extraneous-years"})],a.prototype,"hideExtraneousYears",2);s([l({type:Number})],a.prototype,"columns",2);s([l({type:Number})],a.prototype,"rows",2);s([l({type:Boolean,attribute:"no-current-year"})],a.prototype,"noCurrentYear",2);s([l({converter:C,attribute:"focused-date"})],a.prototype,"focusedDate",2);s([l({type:Number,attribute:"focused-year"})],a.prototype,"focusedYear",1);s([l({reflect:!0})],a.prototype,"size",2);s([l()],a.prototype,"label",2);s([_e()],a.prototype,"_currentLocale",2);s([Fe('td[tabindex="0"]')],a.prototype,"_elFocusedCell",2);s([$e("value")],a.prototype,"_valueChanged",1);a=s([Ee("gds-year-picker"),Ce()],a);a.define();var D=Object.freeze,Ae=Object.defineProperty,be=(e,r)=>D(Ae(e,"raw",{value:D(e.slice())})),E,F;const br={title:"Components/Year picker",component:"gds-year-picker",parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/year-picker)

The year picker component is a visual representation of a many years that allows users
to select a year. Keys to use: arrow-keys, home, and end to focus a year
and enter or space to select it.`}}},tags:["autodocs"],argTypes:{...we("gds-year-picker")}},c={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{}},k={...c,args:{label:"YearPicker"}},g={...c,name:"No current month",render:e=>i` <gds-year-picker no-current-year></gds-year-picker> `},y={...c,render:e=>i` <gds-year-picker size="small"></gds-year-picker> `},h={...c,name:"Min and max",render:e=>i`
    <gds-year-picker min="2023-01-01" max="2032-01-01"></gds-year-picker>
  `},f={...c,render:e=>i`
    <gds-year-picker
      min="2023-01-01"
      max="2032-01-01"
      hide-extraneous-years
    ></gds-year-picker>
  `},v={...c,render:e=>i`
    <gds-year-picker columns="4" rows="3"></gds-year-picker>
  `},Y={...c,render:e=>i`
    <gds-year-picker
      min="1900-01-01"
      max="${new Date().toISOString().split("T")[0]}"
    ></gds-year-picker>
  `},x={...c,render:e=>i(E||(E=be([`
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
  `])))},b={...c,render:e=>i(F||(F=be([`
    <div style="">
      <gds-flex
        justify-content="space-around"
        align-items="center"
        style="box-shadow: 0 var(--gds-sys-space-4xs) 0 0 var(--gds-sys-color-l2-border-primary);
        padding-bottom: 0.25rem; margin: 0 1rem -0.5rem 1rem"
      >
        <gds-button id="prev" rank="tertiary" label="Previous years">
          <gds-icon-chevron-left></gds-icon-chevron-left>
        </gds-button>
        <span id="range">Choose a year</span>
        <gds-button id="next" rank="tertiary" label="Next years">
          <gds-icon-chevron-right></gds-icon-chevron-right>
        </gds-button>
      </gds-flex>
      <gds-year-picker id="yearp2" min="1950-01-01" max="2100-01-01">
      </gds-year-picker>
    </div>
    <script>
      var prev = document.getElementById('prev')
      var next = document.getElementById('next')
      var yearp = document.getElementById('yearp2')
      var totalCells = yearp.columns * yearp.rows

      function onPrevClick() {
        const minYear = yearp.min.getFullYear()
        const startYear = yearp.getStartYear()
        if (minYear < startYear) yearp.focusedYear -= totalCells
        updateRange()
      }
      function onNextClick() {
        const maxYear = yearp.max.getFullYear()
        const startYear = yearp.getStartYear()
        if (maxYear > startYear + totalCells) yearp.focusedYear += totalCells
        updateRange()
      }
      function updateRange() {
        const startYear = yearp.getStartYear()
        const endYear = startYear + totalCells - 1
        document.getElementById('range').innerText = startYear + ' - ' + endYear
      }
      prev.addEventListener('click', onPrevClick)
      next.addEventListener('click', onNextClick)
      updateRange()
    <\/script>
  `])))};var P,S,B;k.parameters={...k.parameters,docs:{...(P=k.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...DefaultParams,
  args: {
    label: 'YearPicker'
  }
}`,...(B=(S=k.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var L,$,I,z,N;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'No current month',
  render: args => html\` <gds-year-picker no-current-year></gds-year-picker> \`
}`,...(I=($=g.parameters)==null?void 0:$.docs)==null?void 0:I.source},description:{story:"Use the `no-current-year` attribute so the month right\nnow does not have a outer ring around it.",...(N=(z=g.parameters)==null?void 0:z.docs)==null?void 0:N.description}}};var T,R,A,M,O;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\` <gds-year-picker size="small"></gds-year-picker> \`
}`,...(A=(R=y.parameters)==null?void 0:R.docs)==null?void 0:A.source},description:{story:"Use the `small` attribute to use a smaller and condenced styling.",...(O=(M=y.parameters)==null?void 0:M.docs)==null?void 0:O.description}}};var U,j,G,H,K;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'Min and max',
  render: args => html\`
    <gds-year-picker min="2023-01-01" max="2032-01-01"></gds-year-picker>
  \`
}`,...(G=(j=h.parameters)==null?void 0:j.docs)==null?void 0:G.source},description:{story:"Use `min` and `max` attributes to limit the months you can choose from.\nThe rest is greyed out. Remember that by default it uses the current year.",...(K=(H=h.parameters)==null?void 0:H.docs)==null?void 0:K.description}}};var W,q,J,Q,V;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-year-picker
      min="2023-01-01"
      max="2032-01-01"
      hide-extraneous-years
    ></gds-year-picker>
  \`
}`,...(J=(q=f.parameters)==null?void 0:q.docs)==null?void 0:J.source},description:{story:"Use `hide-extraneous-years` in combination with `min` and `max` attributes\nto to fully hide the non-selectable years.",...(V=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:V.description}}};var X,Z,ee,re,te;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-year-picker columns="4" rows="3"></gds-year-picker>
  \`
}`,...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"Use `columns` and `rows` to override the default 5x5 cell table.",...(te=(re=v.parameters)==null?void 0:re.docs)==null?void 0:te.description}}};var ae,se,oe,ne,ie;Y.parameters={...Y.parameters,docs:{...(ae=Y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-year-picker
      min="1900-01-01"
      max="\${new Date().toISOString().split('T')[0]}"
    ></gds-year-picker>
  \`
}`,...(oe=(se=Y.parameters)==null?void 0:se.docs)==null?void 0:oe.source},description:{story:"Example of choosing a birth year.",...(ie=(ne=Y.parameters)==null?void 0:ne.docs)==null?void 0:ie.description}}};var de,le,ce,pe,ue;x.parameters={...x.parameters,docs:{...(de=x.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ce=(le=x.parameters)==null?void 0:le.docs)==null?void 0:ce.source},description:{story:"Example of a button that opens up the year-picker.",...(ue=(pe=x.parameters)==null?void 0:pe.docs)==null?void 0:ue.description}}};var me,ge,ye,he,fe;b.parameters={...b.parameters,docs:{...(me=b.parameters)==null?void 0:me.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <div style="">
      <gds-flex
        justify-content="space-around"
        align-items="center"
        style="box-shadow: 0 var(--gds-sys-space-4xs) 0 0 var(--gds-sys-color-l2-border-primary);
        padding-bottom: 0.25rem; margin: 0 1rem -0.5rem 1rem"
      >
        <gds-button id="prev" rank="tertiary" label="Previous years">
          <gds-icon-chevron-left></gds-icon-chevron-left>
        </gds-button>
        <span id="range">Choose a year</span>
        <gds-button id="next" rank="tertiary" label="Next years">
          <gds-icon-chevron-right></gds-icon-chevron-right>
        </gds-button>
      </gds-flex>
      <gds-year-picker id="yearp2" min="1950-01-01" max="2100-01-01">
      </gds-year-picker>
    </div>
    <script>
      var prev = document.getElementById('prev')
      var next = document.getElementById('next')
      var yearp = document.getElementById('yearp2')
      var totalCells = yearp.columns * yearp.rows

      function onPrevClick() {
        const minYear = yearp.min.getFullYear()
        const startYear = yearp.getStartYear()
        if (minYear < startYear) yearp.focusedYear -= totalCells
        updateRange()
      }
      function onNextClick() {
        const maxYear = yearp.max.getFullYear()
        const startYear = yearp.getStartYear()
        if (maxYear > startYear + totalCells) yearp.focusedYear += totalCells
        updateRange()
      }
      function updateRange() {
        const startYear = yearp.getStartYear()
        const endYear = startYear + totalCells - 1
        document.getElementById('range').innerText = startYear + ' - ' + endYear
      }
      prev.addEventListener('click', onPrevClick)
      next.addEventListener('click', onNextClick)
      updateRange()
    <\/script>
  \`
}`,...(ye=(ge=b.parameters)==null?void 0:ge.docs)==null?void 0:ye.source},description:{story:"Example of mouse controls for selecting previous and next years.",...(fe=(he=b.parameters)==null?void 0:he.docs)==null?void 0:fe.description}}};const kr=["Default","NoCurrentMonth","Small","MinAndMax","Hide","LessCells","BirthYear","Popover","ChangeYear"];export{Y as BirthYear,b as ChangeYear,k as Default,f as Hide,v as LessCells,h as MinAndMax,g as NoCurrentMonth,x as Popover,y as Small,kr as __namedExportsOrder,br as default};
