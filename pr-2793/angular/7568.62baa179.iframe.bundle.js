"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[7568],{85495(e,t,s){s.d(t,{x:()=>Y});var a,i,o,r,n=s(30745),l=s(16743),d=s(39443),h=s(14367),c=s(3578),u=s(14652),p=s(90505),g=s(91112),y=s(50617),b=s(62807),m=s(32155),f=s(86072),v=s(85991),w=s(91250),x=s(57135),C=s(93539),k=s(77526),$=s(15073),M=s(64457),S=s(91374),_=d.AH`
  @layer base, reset;

  @layer base {
    .controls {
      padding-bottom: 0.25rem;
      margin: 0.5rem 1rem -0.5rem 1rem;
    }

    :host {
      display: flex;
      justify-content: center;
      --columns: 7;
    }

    table {
      display: grid;
      justify-items: center;
      grid-template-columns: repeat(var(--columns), 1fr);
      gap: var(--gds-sys-space-xs);
      border-spacing: var(--gds-sys-space-xs);
      flex-grow: 1;
      width: 100%;
      padding: 1ch;

      &.small {
        border-spacing: var(--gds-sys-space-3xs);

        thead th {
          width: var(--gds-sys-space-xl);
          height: var(--gds-sys-space-xl);
        }

        tbody tr .week-number {
          width: var(--gds-sys-space-xl);
          height: var(--gds-sys-space-xl);
          font: var(--gds-sys-text-body-s-book);
          line-height: var(--gds-sys-text-line-height-detail-s);
        }

        &.indicators {
          border-spacing: var(--gds-sys-space-xs) var(--gds-sys-space-l);
        }
      }

      &.show-week-numbers {
        --columns: 8;
      }
    }

    tr,
    thead,
    tbody {
      display: contents;
    }

    th,
    td {
      display: flex;
      align-items: center;
      justify-content: center;
      height: var(--gds-sys-space-2xl);
      width: var(--gds-sys-space-2xl);
      box-sizing: border-box;
      user-select: none;
    }

    th {
      font-weight: normal;
    }

    td {
      position: relative;
      border-width: var(--gds-sys-space-4xs);
      border-style: solid;
      border-color: transparent;
      border-radius: var(--gds-sys-radius-max);
      transition: background 0.2s;
      outline-style: solid;
      outline-color: transparent;
      outline-width: 0px;
      outline-offset: var(--gds-sys-space-4xs);

      &.short {
        width: var(--gds-sys-space-4xl);
      }

      &.wide {
        width: var(--gds-sys-space-5xl);
      }

      &.long {
        width: var(--gds-sys-space-7xl);
      }

      &:not(.disabled):hover,
      &[aria-selected='true'] {
        cursor: pointer;
      }

      &[aria-selected='true'] {
        color: var(--gds-sys-color-content-neutral-03);
        background: var(--gds-sys-color-l3-neutral-03);
      }

      &:not(.disabled):hover {
        background: color-mix(
          in srgb,
          transparent,
          var(--gds-sys-color-state-neutral-05)
        );
      }

      &[aria-selected='true']:not(.disabled):hover {
        background: color-mix(
          in srgb,
          var(--gds-sys-color-l3-neutral-03),
          var(--gds-sys-color-state-neutral-01)
        );
      }

      &.today {
        border-color: var(--gds-sys-color-border-neutral-04);
      }

      &.disabled:not(.week-number) {
        background: var(--gds-sys-color-l3-disabled-01);
        color: var(--gds-sys-color-content-disabled-01);
        cursor: not-allowed;
      }

      &.disabled.week-number {
        color: var(--gds-sys-color-content-neutral-02);
        cursor: default;
      }

      &.outside-month:not(.disabled) {
        color: var(--gds-sys-color-content-neutral-02);
      }

      &[aria-selected='false']:active:not(.disabled) {
        background: color-mix(
          in srgb,
          transparent,
          var(--gds-sys-color-state-neutral-06)
        );
      }

      &[aria-selected='true']:active:not(.disabled) {
        background: color-mix(
          in srgb,
          var(--gds-sys-color-l3-neutral-03),
          var(--gds-sys-color-state-neutral-02)
        );
      }

      &:focus-visible {
        outline-color: var(--gds-sys-color-content-neutral-01);
        outline-width: var(--gds-sys-space-4xs);
      }

      &.small {
        width: var(--gds-sys-space-xl);
        height: var(--gds-sys-space-xl);
        font: var(--gds-sys-text-body-s-book);
        line-height: var(--gds-sys-text-line-height-detail-s);

        &.short {
          width: var(--gds-sys-space-2xl);
        }

        &.wide {
          width: var(--gds-sys-space-3xl);
        }

        &.long {
          width: var(--gds-sys-space-6xl);
        }
      }

      .indicator-dot {
        display: flex;
        position: absolute;
        width: var(--gds-sys-space-xs);
        height: var(--gds-sys-space-xs);
        border-radius: var(--gds-sys-radius-max);
        background: var(--gds-sys-color-l3-neutral-03);
        inset: calc(100% + var(--gds-sys-space-xs))
          calc(50% - var(--gds-sys-space-xs) / 2) auto auto;
      }
    }
  }
`,D=s(84282),V=s(85373),q=s(53108),W=s(55410);let Y=class extends C.j{constructor(){super(...arguments),(0,n.VK)(this,a),(0,n.VK)(this,o),this.min=new Date((new Date).getFullYear()-10,0,1),this.max=new Date((new Date).getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.size="large",this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=e=>e.toLocaleDateString(this._currentLocale,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),this._currentLocale=navigator.language}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(e){const t=(0,g.W)(new Date(this.focusedYear,e,1)),s=new Date(this.focusedDate);s.setDate(Math.min(this.focusedDate.getDate(),t.getDate())),s.setMonth(e),s.setHours(12,0,0,0),this.focusedDate=s}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(e){this.focusedDate=new Date(this.focusedDate.setFullYear(e))}getDateCell(e){return this.shadowRoot?.querySelector(`#dateCell-${e}`)}connectedCallback(){super.connectedCallback(),M.n.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",(0,n.jq)(this,o,r)),window.addEventListener("lit-localize-status",(e=>{"ready"===e.detail.status&&(this._currentLocale=e.detail.readyLocale)}))}focus(){super.focus(),this._elFocusedCell?.focus()}render(){const e=new Date;return d.qy`<table
      role="grid"
      aria-label="${(0,u.J)(this.label)}"
      class="${(0,c.H)({small:Boolean("small"===this.size),indicators:Boolean(this.customizedDates),"show-week-numbers":Boolean(this.showWeekNumbers)})}"
    >
      ${(0,p.z)(!this.hideDayNames,(()=>d.qy`<thead role="rowgroup">
            <tr role="row">
              ${(0,p.z)(this.showWeekNumbers,(()=>d.qy`<th></th>`))}
              <th>${(0,l.ab)("Mon").substring(0,1)}</th>
              <th>${(0,l.ab)("Tue").substring(0,1)}</th>
              <th>${(0,l.ab)("Wed").substring(0,1)}</th>
              <th>${(0,l.ab)("Thu").substring(0,1)}</th>
              <th>${(0,l.ab)("Fri").substring(0,1)}</th>
              <th>${(0,l.ab)("Sat").substring(0,1)}</th>
              <th>${(0,l.ab)("Sun").substring(0,1)}</th>
            </tr>
          </thead>`))}
      <tbody role="rowgroup">
        ${function(e,t){const s=(0,D.w)(e),a=(0,V.p)(e),i=(0,q.Y)({start:s,end:a},{weekStartsOn:1});for(;i.length<6;)i.push((0,v.f)(i[i.length-1],7));return d.qy`${t(i.map((e=>({days:(0,W.k)({start:e,end:(0,v.f)(e,6)})}))))}`}(this.focusedDate,(t=>d.qy`
            ${t.map((t=>d.qy`
                <tr role="row">
                  ${(0,p.z)(this.showWeekNumbers,(()=>d.qy`<td
                        class="week-number disabled"
                        disabled
                        scope="row"
                      >
                        ${(0,y.N)(t.days[0])}
                      </td>`))}
                  ${t.days.map((t=>{const s=this.customizedDates&&this.customizedDates.find((e=>(0,b.r)(e.date,t))),o={color:"currentColor",disabled:Boolean(this.disabledDates&&this.disabledDates.some((e=>(0,b.r)(e,t)))),...s},r=!(0,m.t)(this.focusedDate,t),l=(t<this.min||t>this.max)&&!(0,b.r)(t,this.min)&&!(0,b.r)(t,this.max),h=0===t.getDay()||6===t.getDay(),g=o.disabled||l||this.disabledWeekends&&h;return this.hideExtraneousDays&&r?d.qy`<td inert></td>`:d.qy`
                          <td
                            role="${(0,u.J)(g?void 0:"gridcell")}"
                            class="${(0,c.H)({small:Boolean("small"===this.size),"custom-date":Boolean(s),disabled:Boolean(g),today:(0,b.r)(e,t),"outside-month":r})}"
                            ?disabled=${g}
                            tabindex="${(0,b.r)(this.focusedDate,t)?0:-1}"
                            aria-selected="${this.value&&(0,b.r)(this.value,t)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(t)}"
                            @click=${()=>g?null:(0,n.jq)(this,a,i).call(this,t)}
                            id="dateCell-${t.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${o?o?.color:""}"
                              >${t.getDate()}</span
                            >

                            ${(0,p.z)(o.indicator,(()=>d.qy`<span
                                  class="indicator-${o?.indicator}"
                                  style="--_color: ${o?.color}"
                                ></span>`))}
                          </td>
                        `}))}
                </tr>
              `))}
          `))}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=new Date(this.value))}};a=new WeakSet,i=function(e){const t=(0,f.a)(e,12);this.value=t,this.dispatchCustomEvent("change",{detail:t,bubbles:!1,composed:!1})},o=new WeakSet,r=function(e){let t=!1,s=new Date(this.focusedDate);"ArrowLeft"===e.key?(s=(0,v.f)(this.focusedDate,-1),t=!0):"ArrowRight"===e.key?(s=(0,v.f)(this.focusedDate,1),t=!0):"ArrowUp"===e.key?(s=(0,v.f)(this.focusedDate,-7),t=!0):"ArrowDown"===e.key?(s=(0,v.f)(this.focusedDate,7),t=!0):"Enter"===e.key||" "===e.key?(this._elFocusedCell?.hasAttribute("disabled")||(0,n.jq)(this,a,i).call(this,this.focusedDate),t=!0):"Home"===e.key?(s=new Date(this.focusedYear,this.focusedMonth,1),t=!0):"End"===e.key?(s=new Date(this.focusedYear,this.focusedMonth+1,0),t=!0):"PageUp"===e.key?(s=(0,w.a)(this.focusedDate,1),t=!0):"PageDown"===e.key&&(s=(0,x.P)(this.focusedDate,1),t=!0),s.getFullYear()>=this.min.getFullYear()&&s.getFullYear()<=this.max.getFullYear()&&this.dispatchCustomEvent("gds-date-focused",{detail:s,bubbles:!1,composed:!1})&&(this.focusedDate=s),t&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then((()=>{this._elFocusedCell?.focus()})))},Y.styles=[$.LU,_],Y.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,n.Cc)([(0,h.MZ)()],Y.prototype,"value",2),(0,n.Cc)([(0,h.MZ)({type:Date})],Y.prototype,"min",2),(0,n.Cc)([(0,h.MZ)({type:Date})],Y.prototype,"max",2),(0,n.Cc)([(0,h.MZ)()],Y.prototype,"focusedDate",2),(0,n.Cc)([(0,h.MZ)({type:Boolean,attribute:"disabled-weekends"})],Y.prototype,"disabledWeekends",2),(0,n.Cc)([(0,h.MZ)({type:Array,attribute:"disabled-dates"})],Y.prototype,"disabledDates",2),(0,n.Cc)([(0,h.MZ)({type:Number})],Y.prototype,"focusedMonth",1),(0,n.Cc)([(0,h.MZ)({type:Number})],Y.prototype,"focusedYear",1),(0,n.Cc)([(0,h.MZ)({reflect:!0})],Y.prototype,"size",2),(0,n.Cc)([(0,h.MZ)({type:Boolean})],Y.prototype,"showWeekNumbers",2),(0,n.Cc)([(0,h.MZ)({type:Boolean})],Y.prototype,"hideExtraneousDays",2),(0,n.Cc)([(0,h.MZ)({type:Boolean})],Y.prototype,"hideDayNames",2),(0,n.Cc)([(0,h.MZ)({attribute:!1})],Y.prototype,"customizedDates",2),(0,n.Cc)([(0,h.MZ)()],Y.prototype,"label",2),(0,n.Cc)([(0,h.MZ)({attribute:!1})],Y.prototype,"dateLabelTemplate",2),(0,n.Cc)([(0,h.wk)()],Y.prototype,"_currentLocale",2),(0,n.Cc)([(0,h.P)('td[tabindex="0"]')],Y.prototype,"_elFocusedCell",2),(0,n.Cc)([(0,S.w)("value")],Y.prototype,"_valueChanged",1),Y=(0,n.Cc)([(0,k.Y$)("gds-calendar"),(0,l.cc)()],Y)},57568(e,t,s){s.d(t,{L:()=>He});var a,i,o,r,n,l,d,h,c,u,p,g,y,b,m,f,v,w,x=s(32816),C=s(30745),k=s(16743),$=s(39443),M=s(14367),S=s(20789),_=s(34159),D=s(64382),V=s(82783),q=s(90505),W=s(62807),Y=s(91112),j=s(27595),F=s(32704),z=s(46312),L=s(77526),A=s(90225),H=s(15073),K=s(64457),Z=s(91374),N=s(96472),T=s(64987),E=s(85495),B=s(68558),I=s(1183),P=s(77045),O=s(90638),J=s(74671),R=s(52144),U=s(93539);let G=class extends U.j{constructor(){super(...arguments),(0,C.VK)(this,c),(0,C.VK)(this,p),(0,C.VK)(this,y),(0,C.VK)(this,m),(0,C.VK)(this,v),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=(0,C.jq)(this,y,b).call(this,this.value,this.length),(0,C.VK)(this,a,""),(0,C.VK)(this,i,(()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=2===this.length?this.min:(new Date).getFullYear()-1),this.value=(0,C.jq)(this,m,f).call(this,e+1),(0,C.jq)(this,p,g).call(this)})),(0,C.VK)(this,o,(()=>{let e=parseInt(this.value.toString());Number.isNaN(e)&&(e=2===this.length?this.max:(new Date).getFullYear()+1),this.value=(0,C.jq)(this,m,f).call(this,e-1),(0,C.jq)(this,p,g).call(this)})),(0,C.VK)(this,r,(e=>{e.stopPropagation(),e.preventDefault(),this.focus()})),(0,C.VK)(this,n,(()=>{(0,C.jq)(this,v,w).call(this)})),(0,C.VK)(this,l,(()=>{""!==(0,C.S7)(this,a)&&((0,C.jq)(this,v,w).call(this),this.value=(0,C.jq)(this,m,f).call(this,parseInt(this.value.toString())),(0,C.jq)(this,p,g).call(this))})),(0,C.VK)(this,d,(e=>{e.stopPropagation(),e.preventDefault(),e.deltaY>0?(0,C.S7)(this,o).call(this):(0,C.S7)(this,i).call(this)})),(0,C.VK)(this,h,(e=>{let t=!1;if("ArrowUp"===e.key)(0,C.S7)(this,i).call(this),t=!0;else if("ArrowDown"===e.key)(0,C.S7)(this,o).call(this),t=!0;else{const s=parseInt(e.key);isNaN(s)||((0,C.S7)(this,a).length<this.length&&((0,C.OV)(this,a,(0,C.S7)(this,a)+s.toString()),this.value=parseInt((0,C.S7)(this,a))),(0,C.S7)(this,a).length===this.length&&(this.value=(0,C.jq)(this,m,f).call(this,this.value),(0,C.jq)(this,v,w).call(this),(0,C.jq)(this,c,u).call(this),(0,C.jq)(this,p,g).call(this)),t=!0)}t&&(e.preventDefault(),e.stopPropagation())}))}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",(0,C.S7)(this,d)),this.addEventListener("keydown",(0,C.S7)(this,h)),this.addEventListener("blur",(0,C.S7)(this,l)),this.addEventListener("focus",(0,C.S7)(this,n)),this.addEventListener("click",(0,C.S7)(this,r)),this.addEventListener("mousedown",(0,C.S7)(this,r))}focus(e){super.focus(e),(0,C.S7)(this,n).call(this)}render(){return L.qy`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=(0,C.jq)(this,y,b).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};a=new WeakMap,i=new WeakMap,o=new WeakMap,r=new WeakMap,n=new WeakMap,l=new WeakMap,d=new WeakMap,h=new WeakMap,c=new WeakSet,u=function(){let e=this.nextElementSibling;for(;e;){if(e instanceof G){e.focus();break}e=e.nextElementSibling}},p=new WeakSet,g=function(){this.dispatchCustomEvent("change",{detail:{value:this.value.toString()}})},y=new WeakSet,b=function(e,t){return String(e).padStart(t,"0")},m=new WeakSet,f=function(e){return Math.max(this.min,Math.min(this.max,e))},v=new WeakSet,w=function(){(0,C.OV)(this,a,"")},G.formAssociated=!0,(0,C.Cc)([(0,M.MZ)({type:Number})],G.prototype,"value",2),(0,C.Cc)([(0,M.MZ)({type:Number})],G.prototype,"length",2),(0,C.Cc)([(0,M.MZ)({type:Number,attribute:"aria-valuemin"})],G.prototype,"min",2),(0,C.Cc)([(0,M.MZ)({type:Number,attribute:"aria-valuemax"})],G.prototype,"max",2),(0,C.Cc)([(0,M.wk)()],G.prototype,"displayValue",2),(0,C.Cc)([(0,Z.w)("value")],G.prototype,"_refreshDisplayValue",1),G=(0,C.Cc)([(0,L.Y$)("gds-date-part-spinner")],G);var Q,X,ee,te,se,ae,ie,oe,re,ne,le,de,he,ce,ue,pe,ge,ye,be,me,fe,ve,we,xe,Ce,ke,$e,Me,Se,_e,De,Ve,qe,We,Ye,je,Fe,ze,Le=$.AH`
  @layer base, reset;

  @layer base {
    #calendar-button::part(_button) {
      outline-offset: -1px;
    }

    .spinners {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      inline-size: 12ch;
      gap: var(--gds-sys-space-5xs);
      font: var(--gds-sys-text-detail-m-regular);
    }

    :host([size='small']) .spinners {
      font: var(--gds-sys-text-detail-s-regular);
    }

    .spinner {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 100%;
      box-sizing: border-box;
      outline: none;
      padding-block: var(--gds-sys-space-4xs);
      text-transform: uppercase;
      line-height: 1;
      text-align: center;
      padding: var(--gds-sys-space-4xs);
      margin: calc(-1 * var(--gds-sys-space-4xs));
      border-radius: var(--gds-sys-radius-3xs);

      &:focus {
        background-color: var(--gds-sys-color-l3-neutral-03);
        color: var(--gds-sys-color-content-neutral-05);
      }
    }
  }
`;let Ae=class extends B.S{constructor(){var e;super(),e=this,(0,C.VK)(this,ee),(0,C.VK)(this,se),(0,C.VK)(this,ie),(0,C.VK)(this,re),(0,C.VK)(this,le),(0,C.VK)(this,he),(0,C.VK)(this,ue),(0,C.VK)(this,ge),(0,C.VK)(this,De),(0,C.VK)(this,Ye),(0,C.VK)(this,Fe),this.min=new Date((new Date).getFullYear()-10,0,1),this.max=new Date((new Date).getFullYear()+10,0,1),this.open=!1,this.supportingText="",this.size="large",this.plain=!1,this.showWeekNumbers=!1,this.hideLabel=!1,this.clearable=!1,this.hideTodayButton=!1,(0,C.VK)(this,Q,12),this.disabledWeekends=!1,this.showExtendedSupportingText=!1,this._focusedMonth=(new Date).getMonth(),this._focusedYear=(new Date).getFullYear(),this._dateFormatLayout=(0,C.jq)(this,De,Ve).call(this,"y-m-d"),(0,C.VK)(this,X,void 0),(0,C.VK)(this,be,(e=>{this._elTrigger.then((e=>{document.getSelection()?.removeAllRanges();const t=new Range;t.setStart(e.firstChild,0),t.setEnd(e.lastChild,4),document.getSelection()?.addRange(t)}))})),(0,C.VK)(this,me,(e=>{this._elFieldAsync.then((t=>{e.currentTarget===t&&(e.preventDefault(),e.clipboardData?.setData("text/plain",this.displayValue))}))})),(0,C.VK)(this,fe,(e=>{this._elFieldAsync.then((t=>{if(e.currentTarget!==t)return;e.preventDefault();const s=e.clipboardData?.getData("text/plain");if(!s)return;let a=new Date("-");const i="Invalid Date",o=s.split(this._dateFormatLayout.delimiter);if(3===o.length){const e=this._dateFormatLayout.layout,t=parseInt(o[e.findIndex((e=>"y"===e.token))]),s=parseInt(o[e.findIndex((e=>"m"===e.token))])-1,i=parseInt(o[e.findIndex((e=>"d"===e.token))]);isNaN(t)||isNaN(s)||isNaN(i)||(a=new Date(`${t}-${s+1}-${i}`))}a.toString()===i&&(a=new Date(s),a.toString()===i)||(this.value=a,(0,C.jq)(this,ue,pe).call(this))}))})),(0,C.VK)(this,ve,(e=>{this._elSpinners[0]?.focus()})),(0,C.VK)(this,we,(e=>{e.stopPropagation();const t=new Date(e.detail);t.setUTCHours(this.utcHours,0,0,0),this.value=t,this.open=!1,(0,C.jq)(this,ue,pe).call(this),(0,C.jq)(this,ge,ye).call(this)})),(0,C.VK)(this,xe,(e=>{e.stopPropagation(),this._focusedMonth=e.target?.value})),(0,C.VK)(this,Ce,(e=>{e.stopPropagation(),this._focusedYear=e.target?.value})),(0,C.VK)(this,ke,(e=>{this._focusedMonth<11?this._focusedMonth++:11==this._focusedMonth&&this._focusedYear!=this.max.getFullYear()&&(this._focusedMonth=0,this._focusedYear++)})),(0,C.VK)(this,$e,(e=>{this._focusedMonth>0?this._focusedMonth--:0==this._focusedMonth&&this._focusedYear!=this.min.getFullYear()&&(this._focusedMonth=11,this._focusedYear--)})),(0,C.VK)(this,Me,(0,x.A)((function*(){e._focusedMonth=(yield e._elCalendar).focusedMonth,e._focusedYear=(yield e._elCalendar).focusedYear,e.value=new Date((yield e._elCalendar).focusedDate),e.requestUpdate(),(0,C.jq)(e,ge,ye).call(e)}))),(0,C.VK)(this,Se,function(){var t=(0,x.A)((function*(t){if(t.target===t.currentTarget){if(e.open=t.detail.open,"close"===t.detail.reason){const t=(yield e._elCalendar).value;if(!t)return e.value=void 0,void(0,C.jq)(e,ue,pe).call(e);!(0,W.r)(t||new Date(0),(0,C.S7)(e,X)||new Date(0))&&(e.value=new Date(t),(0,C.jq)(e,ue,pe).call(e)),e.value&&(e._focusedMonth=e.value.getMonth(),e._focusedYear=e.value.getFullYear())}"cancel"===t.detail.reason&&(e.value=(0,C.S7)(e,X),(0,C.jq)(e,ge,ye).call(e))}}));return function(e){return t.apply(this,arguments)}}()),(0,C.VK)(this,_e,(e=>{const t=Array.from(this._elSpinners).findIndex((t=>t===e.target));if("ArrowRight"===e.key){const e=this._elSpinners[t+1];e&&e.focus()}if("ArrowLeft"===e.key){const e=this._elSpinners[t-1];e&&e.focus()}})),(0,C.VK)(this,qe,((e,t)=>{(0,C.S7)(this,We)[t]=e;const s=new Date("0000-01-01");s.setUTCHours(this.utcHours,0,0,0),s.setUTCFullYear(parseInt((0,C.S7)(this,We).year)),s.setUTCMonth(parseInt((0,C.S7)(this,We).month)-1);const a=(0,Y.W)(s).getDate(),i=a<parseInt((0,C.S7)(this,We).day)?a:parseInt((0,C.S7)(this,We).day);s.setUTCDate(isNaN(i)?1:i),"Invalid Date"!==s.toString()&&(this.value=s,(0,C.jq)(this,ue,pe).call(this),(0,C.jq)(this,ge,ye).call(this))})),(0,C.VK)(this,We,{year:"yyyy",month:"mm",day:"dd"}),G.define()}get type(){return"gds-datepicker"}get value(){return super.value}set value(e){super.value=e}get utcHours(){return(0,C.S7)(this,Q)}set utcHours(e){(0,C.OV)(this,Q,e),this._internalValue?.setUTCHours(e,0,0,0)}get dateformat(){return this._dateFormatLayout.layout.map((e=>e.token)).join(this._dateFormatLayout.delimiter)}set dateformat(e){this._dateFormatLayout=(0,C.jq)(this,De,Ve).call(this,e)}getFocusedDate(){var e=this;return(0,x.A)((function*(){return e.open?e._elCalendar.then((e=>e.focusedDate)):void 0}))()}get displayValue(){return this._elField.innerText.replace(/\s+/g,"")}test_getDateCell(e){var t=this;return(0,x.A)((function*(){return t._elCalendar.then((t=>t.getDateCell(e)))}))()}connectedCallback(){super.connectedCallback(),K.n.instance.apply(this,"gds-datepicker")}focus(e){this._getValidityAnchor()?.focus(e)}render(){var e=this;return L.qy`
      ${(0,q.z)(!this.plain,(()=>L.qy`<gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="spinner-0" slot="label">${this.label}</label>
            ${(0,q.z)(this.supportingText.length>0,(()=>L.qy`<span slot="supporting-text" id="supporting-text">
                  ${this.supportingText}
                </span>`))}
            <slot
              id="supporting-text-slot"
              name="extended-supporting-text"
              slot="extended-supporting-text"
            ></slot>
            <!-- @deprecated: use 'supporting-text' slot instead. Remove in 2.0 release. -->
            <slot
              id="sub-label-slot"
              name="sub-label"
              slot="supporting-text"
            ></slot>
          </gds-form-control-header>`))}
      <gds-field-base
        .size=${this.size}
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        @click=${(0,C.S7)(this,ve)}
        @copy=${(0,C.S7)(this,me)}
        @paste=${(0,C.S7)(this,fe)}
        id="field"
      >
        <div class="spinners">
          ${(0,S.f)((0,_.T)(this._dateFormatLayout.layout,((e,t)=>L.qy`<gds-date-part-spinner
                  id="spinner-${t}"
                  aria-invalid="${this.invalid}"
                  class="spinner"
                  .length=${"y"===e.token?4:2}
                  .value=${(0,C.S7)(this,We)[e.name]}
                  aria-valuemin=${(0,C.jq)(this,le,de).call(this,e.name)}
                  aria-valuemax=${(0,C.jq)(this,he,ce).call(this,e.name)}
                  aria-label=${(0,C.jq)(this,re,ne).call(this,e.name)}
                  aria-describedby="supporting-text supporting-text-slot sub-label-slot message"
                  data-max-width=${(0,C.jq)(this,he,ce).call(this,e.name).toString().length}
                  @keydown=${(0,C.S7)(this,_e)}
                  @change=${t=>(0,C.S7)(this,qe).call(this,t.detail.value,e.name)}
                  @focus=${(0,C.S7)(this,be)}
                  @touchend=${e=>{this.open=!0,e.preventDefault()}}
                ></gds-date-part-spinner>`)),L.qy`<span class="separator"
              >${this._dateFormatLayout.delimiter}</span
            >`)}
        </div>
        <gds-button
          id="calendar-button"
          slot="action"
          size="${"small"===this.size?"xs":"small"}"
          rank="tertiary"
          variant=${this.invalid?"negative":""}
          aria-label="${(0,k.ab)("Open calendar modal")}"
          aria-haspopup="menu"
          aria-expanded=${this.open}
          aria-controls="calendar-popover"
          aria-describedby="label"
          .disabled=${this.disabled}
        >
          ${(0,q.z)("small"===this.size,(()=>L.qy`<gds-icon-calender-add
                stroke="1.6"
                style="line-height: 16px"
              ></gds-icon-calender-add>`),(()=>L.qy`<gds-icon-calender-add></gds-icon-calender-add>`))}
        </gds-button>
      </gds-field-base>

      ${(0,q.z)((0,C.jq)(this,ee,te).call(this),(()=>L.qy`<gds-form-control-footer
            class="size-${this.size}"
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          >
            ${""}
            <slot id="message" name="message" slot="message">
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage}
            </slot>
          </gds-form-control-footer>`))}

      <gds-popover
        autofocus
        .triggerRef=${this._elTrigger}
        .anchorRef=${this._elFieldAsync}
        .open=${this.open}
        @gds-ui-state=${(0,C.S7)(this,Se)}
        label=${this.label}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${()=>this.showWeekNumbers?"350px":"305px"}
        .useModalInMobileView=${!0}
        @focusin=${function(){var t=(0,x.A)((function*(t){"calendar-popover"===t.target?.id&&e._elCalendar.then((e=>e.focus()))}));return function(e){return t.apply(this,arguments)}}()}
      >
        <gds-div overflow="auto">
          <gds-flex
            align-items="center"
            justify-content="space-between"
            gap="xs; xs { s }"
            padding="m xs 0 xs; xs { m m 0 m }"
          >
            <gds-button
              @click=${(0,C.S7)(this,$e)}
              aria-label=${(0,k.ab)("Switch to previous month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-left></gds-icon-chevron-left>
            </gds-button>
            <gds-dropdown
              .value=${this._focusedMonth.toString()}
              @change=${(0,C.S7)(this,xe)}
              .maxHeight=${300}
              label="${(0,k.ab)("Month")}"
              size="small"
              class="month"
              hide-label
            >
              <gds-option value="0">${(0,k.ab)("January")}</gds-option>
              <gds-option value="1">${(0,k.ab)("February")}</gds-option>
              <gds-option value="2">${(0,k.ab)("March")}</gds-option>
              <gds-option value="3">${(0,k.ab)("April")}</gds-option>
              <gds-option value="4">${(0,k.ab)("May")}</gds-option>
              <gds-option value="5">${(0,k.ab)("June")}</gds-option>
              <gds-option value="6">${(0,k.ab)("July")}</gds-option>
              <gds-option value="7">${(0,k.ab)("August")}</gds-option>
              <gds-option value="8">${(0,k.ab)("September")}</gds-option>
              <gds-option value="9">${(0,k.ab)("October")}</gds-option>
              <gds-option value="10">${(0,k.ab)("November")}</gds-option>
              <gds-option value="11">${(0,k.ab)("December")}</gds-option>
            </gds-dropdown>
            <gds-dropdown
              .value=${this._focusedYear.toString()}
              @change=${(0,C.S7)(this,Ce)}
              .maxHeight=${300}
              label="${(0,k.ab)("Year")}"
              size="small"
              class="year"
              hide-label
            >
              ${(0,D.u)((0,C.S7)(this,Ye,je),(e=>e),(e=>L.qy`<gds-option value=${e}>${e}</gds-option>`))}
            </gds-dropdown>
            <gds-button
              @click=${(0,C.S7)(this,ke)}
              aria-label=${(0,k.ab)("Switch to next month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
          </gds-flex>

          <gds-calendar
            id="calendar"
            @change=${(0,C.S7)(this,we)}
            @gds-date-focused=${(0,C.S7)(this,Me)}
            .focusedMonth=${this._focusedMonth}
            .focusedYear=${this._focusedYear}
            .value=${this.value}
            .min=${this.min}
            .max=${this.max}
            .showWeekNumbers=${this.showWeekNumbers}
            .disabledWeekends=${this.disabledWeekends}
            .disabledDates=${this.disabledDates}
          ></gds-calendar>

          ${(0,q.z)(this.clearable||!this.hideTodayButton,(()=>L.qy`
              <gds-flex
                align-items="center"
                justify-content="space-between"
                padding="m m m m"
              >
                ${(0,q.z)(this.clearable,(()=>L.qy` <gds-button
                      id="clear-button"
                      rank="tertiary"
                      size="small"
                      @click=${e=>{e.stopPropagation(),this.value=void 0,this.open=!1,(0,C.jq)(this,ge,ye).call(this),(0,C.jq)(this,ue,pe).call(this)}}
                      aria-label=${(0,k.ab)("Clear selected date")}
                    >
                      ${(0,k.ab)("Clear")}
                    </gds-button>`))}
                ${(0,V.T)((0,C.jq)(this,se,ae).call(this),$.s6)}
                ${(0,q.z)(!this.hideTodayButton,(()=>L.qy` <gds-button
                      id="today-button"
                      rank="tertiary"
                      size="small"
                      @click=${e=>{e.stopPropagation(),(0,C.jq)(this,ie,oe).call(this,new Date)}}
                      aria-label=${(0,k.ab)("Select today's date")}
                    >
                      ${(0,k.ab)("Today")}
                    </gds-button>`))}
              </gds-flex>
            `))}
        </gds-div>
      </gds-popover>
    `}_getValidityAnchor(){return this._elSpinners[0]}_handleValueChange(){if(""===this.value&&(this.value=void 0),!this.value)return void(0,C.OV)(this,We,{year:"yyyy",month:"mm",day:"dd"});const e=this.value;this._focusedMonth=e.getMonth(),this._focusedYear=e.getFullYear();const t=e.getFullYear().toString(),s=(e.getMonth()+1).toString().padStart(2,"0"),a=e.getDate().toString().padStart(2,"0");(0,C.OV)(this,We,{year:t,month:s,day:a})}_handleOpenChange(){this.open&&((0,C.OV)(this,X,this.value),this._elCalendar.then((e=>e.focus())))}};Q=new WeakMap,X=new WeakMap,ee=new WeakSet,te=function(){return!this.plain},se=new WeakSet,ae=function(){var e=(0,x.A)((function*(){const e=yield this.getFocusedDate();let t,s="";return e&&e>this.max?(s=(0,k.ab)("Last available date"),t=e=>{e.stopPropagation(),(0,C.jq)(this,ie,oe).call(this,this.max)}):e&&e<this.min&&(s=(0,k.ab)("First available date"),t=e=>{e.stopPropagation(),(0,C.jq)(this,ie,oe).call(this,this.min)}),L.qy`${(0,q.z)(s.length>0,(()=>L.qy`<gds-button rank="tertiary" size="small" @click=${t}>
          ${s}
        </gds-button>`),(()=>$.s6))}`}));return function(){return e.apply(this,arguments)}}(),ie=new WeakSet,oe=function(e){const t=new Date(e);this._elCalendar.then((e=>e.focusedDate=t)).then((0,C.S7)(this,Me))},re=new WeakSet,ne=function(e){return`${{year:(0,k.ab)("Year"),month:(0,k.ab)("Month"),day:(0,k.ab)("Day")}[e]} ${this.label}`},le=new WeakSet,de=function(e){return{year:1900,month:1,day:1}[e]},he=new WeakSet,ce=function(e){return{year:9999,month:12,day:31}[e]},ue=new WeakSet,pe=function(){this.updateComplete.then((()=>this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})))},ge=new WeakSet,ye=function(){this.updateComplete.then((()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})))},be=new WeakMap,me=new WeakMap,fe=new WeakMap,ve=new WeakMap,we=new WeakMap,xe=new WeakMap,Ce=new WeakMap,ke=new WeakMap,$e=new WeakMap,Me=new WeakMap,Se=new WeakMap,_e=new WeakMap,De=new WeakSet,Ve=function(e){const t=e.replace(/[a-z0-9]/gi,"")[0],s=e.split(t),a=s.findIndex((e=>"y"===e)),i=s.findIndex((e=>"m"===e)),o=s.findIndex((e=>"d"===e));if(-1===a||-1===i||-1===o)throw new Error("Invalid date format for <gds-datepicker>");return{delimiter:t,layout:[a,i,o].sort(((e,t)=>e-t)).map((e=>s[e])).map((e=>({token:e,name:"y"===e?"year":"m"===e?"month":"day"})))}},qe=new WeakMap,We=new WeakMap,Ye=new WeakSet,je=function(){const e=this.min.getFullYear(),t=this.max.getFullYear(),s=(0,C.S7)(this,Fe,ze),a=this.value?.getFullYear();return{*[Symbol.iterator](){s&&(yield a);for(let s=e;s<=t;s++)yield s}}},Fe=new WeakSet,ze=function(){return!!this.value&&(this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear())},Ae.styles=[H.LU,A.A,Le],(0,C.Cc)([(0,M.MZ)({converter:N.JD})],Ae.prototype,"value",1),(0,C.Cc)([(0,M.MZ)({converter:N.JD})],Ae.prototype,"min",2),(0,C.Cc)([(0,M.MZ)({converter:N.JD})],Ae.prototype,"max",2),(0,C.Cc)([(0,M.MZ)({type:Boolean})],Ae.prototype,"open",2),(0,C.Cc)([(0,M.MZ)({attribute:"supporting-text"})],Ae.prototype,"supportingText",2),(0,C.Cc)([(0,M.MZ)({type:String})],Ae.prototype,"size",2),(0,C.Cc)([(0,M.MZ)({type:Boolean})],Ae.prototype,"plain",2),(0,C.Cc)([(0,M.MZ)({type:Boolean,attribute:"show-week-numbers"})],Ae.prototype,"showWeekNumbers",2),(0,C.Cc)([(0,M.MZ)({type:Boolean,attribute:"hide-label"})],Ae.prototype,"hideLabel",2),(0,C.Cc)([(0,M.MZ)({type:Boolean,attribute:"clearable"})],Ae.prototype,"clearable",2),(0,C.Cc)([(0,M.MZ)({type:Boolean,attribute:"hide-today-button"})],Ae.prototype,"hideTodayButton",2),(0,C.Cc)([(0,M.MZ)({type:Number,attribute:"utc-hours"})],Ae.prototype,"utcHours",1),(0,C.Cc)([(0,M.MZ)()],Ae.prototype,"dateformat",1),(0,C.Cc)([(0,M.MZ)({type:Boolean,attribute:"disabled-weekends"})],Ae.prototype,"disabledWeekends",2),(0,C.Cc)([(0,M.MZ)({converter:N._h,attribute:"disabled-dates"})],Ae.prototype,"disabledDates",2),(0,C.Cc)([(0,M.MZ)({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],Ae.prototype,"showExtendedSupportingText",2),(0,C.Cc)([(0,M.nJ)("#calendar-button")],Ae.prototype,"test_calendarButton",2),(0,C.Cc)([(0,M.P)("#clear-button")],Ae.prototype,"test_clearButton",2),(0,C.Cc)([(0,M.P)("#today-button")],Ae.prototype,"test_todayButton",2),(0,C.Cc)([(0,M.wk)()],Ae.prototype,"_focusedMonth",2),(0,C.Cc)([(0,M.wk)()],Ae.prototype,"_focusedYear",2),(0,C.Cc)([(0,M.wk)()],Ae.prototype,"_dateFormatLayout",2),(0,C.Cc)([(0,M.nJ)("#calendar")],Ae.prototype,"_elCalendar",2),(0,C.Cc)([(0,M.nJ)("#calendar-button")],Ae.prototype,"_elTrigger",2),(0,C.Cc)([(0,M.nJ)("#field")],Ae.prototype,"_elFieldAsync",2),(0,C.Cc)([(0,M.YG)("[role=spinbutton]")],Ae.prototype,"_elSpinners",2),(0,C.Cc)([(0,M.P)("#field")],Ae.prototype,"_elField",2),(0,C.Cc)([(0,Z.w)("value")],Ae.prototype,"_handleValueChange",1),(0,C.Cc)([(0,Z.w)("open")],Ae.prototype,"_handleOpenChange",1),Ae=(0,C.Cc)([(0,k.cc)()],Ae);let He=class extends((0,T.Q8)((0,T.TM)((0,T.lt)(Ae)))){};He=(0,C.Cc)([(0,L.Y$)("gds-datepicker",{dependsOn:[z.o,j.t,F.E,E.x,R.E,I._,P.z,O.g,J.V]})],He)},1183(e,t,s){s.d(t,{_:()=>r});var a=s(30745),i=s(77526),o=s(13832);let r=class extends o.M{};r._regularSVG='<path d="M3.75 9.75H20.25M7.75 4.75V2.75M16.25 4.75V2.75M3.75 4.75H20.25V20.25H3.75V4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',r._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 2C8.16421 2 8.5 2.33579 8.5 2.75V4H15.5V2.75C15.5 2.33579 15.8358 2 16.25 2C16.6642 2 17 2.33579 17 2.75V4H20.25C20.6642 4 21 4.33579 21 4.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V4.75C3 4.33579 3.33579 4 3.75 4H7V2.75C7 2.33579 7.33579 2 7.75 2ZM4.5 10.5V19.5H19.5V10.5H4.5Z" fill="currentColor"/>',r._name="calendar",r._width=24,r._height=24,r._viewBox="0 0 24 24",r=(0,a.Cc)([(0,i.Y$)("gds-icon-calendar")],r)},77045(e,t,s){s.d(t,{z:()=>r});var a=s(30745),i=s(77526),o=s(13832);let r=class extends o.M{};r._regularSVG='<path d="M7.75 4.75H3.75V9.25M7.75 4.75H16.25M7.75 4.75V2.75M16.25 4.75H20.25V9.25M16.25 4.75V2.75M11.25 20.25H3.75V9.25M3.75 9.25H20.25M20.25 9.25V11.25M17.75 14.75V18M17.75 18V21.25M17.75 18H14.5M17.75 18H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',r._solidSVG='<path d="M8.5 2.75C8.5 2.33579 8.16421 2 7.75 2C7.33579 2 7 2.33579 7 2.75V4H3.75C3.33579 4 3 4.33579 3 4.75V20.25C3 20.6642 3.33579 21 3.75 21H11.25C11.6642 21 12 20.6642 12 20.25C12 19.8358 11.6642 19.5 11.25 19.5H4.5V10H19.5V11.25C19.5 11.6642 19.8358 12 20.25 12C20.6642 12 21 11.6642 21 11.25V4.75C21 4.33579 20.6642 4 20.25 4H17V2.75C17 2.33579 16.6642 2 16.25 2C15.8358 2 15.5 2.33579 15.5 2.75V4H8.5V2.75Z" fill="currentColor"/><path d="M18.5 14.75C18.5 14.3358 18.1642 14 17.75 14C17.3358 14 17 14.3358 17 14.75V17.25H14.5C14.0858 17.25 13.75 17.5858 13.75 18C13.75 18.4142 14.0858 18.75 14.5 18.75H17V21.25C17 21.6642 17.3358 22 17.75 22C18.1642 22 18.5 21.6642 18.5 21.25V18.75H21C21.4142 18.75 21.75 18.4142 21.75 18C21.75 17.5858 21.4142 17.25 21 17.25H18.5V14.75Z" fill="currentColor"/>',r._name="calender-add",r._width=24,r._height=24,r._viewBox="0 0 24 24",r=(0,a.Cc)([(0,i.Y$)("gds-icon-calender-add")],r)},90638(e,t,s){s.d(t,{g:()=>r});var a=s(30745),i=s(77526),o=s(13832);let r=class extends o.M{};r._regularSVG='<path d="M15 20L7 12L15 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',r._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5303 3.46967C15.8232 3.76256 15.8232 4.23744 15.5303 4.53033L8.06066 12L15.5303 19.4697C15.8232 19.7626 15.8232 20.2374 15.5303 20.5303C15.2374 20.8232 14.7626 20.8232 14.4697 20.5303L6.46967 12.5303C6.32902 12.3897 6.25 12.1989 6.25 12C6.25 11.8011 6.32902 11.6103 6.46967 11.4697L14.4697 3.46967C14.7626 3.17678 15.2374 3.17678 15.5303 3.46967Z" fill="currentColor"/>',r._name="chevron-left",r._width=24,r._height=24,r._viewBox="0 0 24 24",r=(0,a.Cc)([(0,i.Y$)("gds-icon-chevron-left")],r)},74671(e,t,s){s.d(t,{V:()=>r});var a=s(30745),i=s(77526),o=s(13832);let r=class extends o.M{};r._regularSVG='<path d="M9 4L17 12L9 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',r._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M8.46967 3.46967C8.76256 3.17678 9.23744 3.17678 9.53033 3.46967L17.5303 11.4697C17.671 11.6103 17.75 11.8011 17.75 12C17.75 12.1989 17.671 12.3897 17.5303 12.5303L9.53033 20.5303C9.23744 20.8232 8.76256 20.8232 8.46967 20.5303C8.17678 20.2374 8.17678 19.7626 8.46967 19.4697L15.9393 12L8.46967 4.53033C8.17678 4.23744 8.17678 3.76256 8.46967 3.46967Z" fill="currentColor"/>',r._name="chevron-right",r._width=24,r._height=24,r._viewBox="0 0 24 24",r=(0,a.Cc)([(0,i.Y$)("gds-icon-chevron-right")],r)},96472(e,t,s){s.d(t,{JD:()=>a,_h:()=>i,xj:()=>o}),s(30745);const a={fromAttribute:e=>new Date(e),toAttribute:e=>e.toISOString()},i={fromAttribute:e=>e.split(",").map((e=>new Date(e.trim()))),toAttribute:e=>JSON.stringify(e.map((e=>e.toISOString())))},o={fromAttribute:e=>e.split(","),toAttribute:e=>Array.isArray(e)?e.join(","):e}}}]);
//# sourceMappingURL=7568.62baa179.iframe.bundle.js.map