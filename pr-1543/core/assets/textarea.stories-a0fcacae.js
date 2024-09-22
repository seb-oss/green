import{i as Y,D as u,k as Z}from"./lit-element-1d72f0ce.js";import{n as o,r as ee,g as te,h as d}from"./gds-element-86064462.js";import{a as ae}from"./query-b9d3c2af.js";import{r as D}from"./query-async-1ff18261.js";import{b as se}from"./until-27bb1490.js";import{n as m}from"./when-748fcf30.js";import{r as le}from"./choose-473fcf2d.js";import{m as R}from"./runtime-c06dc943.js";import{c as re}from"./constrain-slots-08d8606c.js";import{w as de}from"./watch-c4961afe.js";import{G as ie,f as oe}from"./button-0a0911ca.js";import"./flex-a14d12bd.js";import{t as ne}from"./tokens.style-01187a75.js";import"./cross-small-7e719cb3.js";import"./triangle-exclamation-da39395f.js";import"./container-82e7a89b.js";import"./card-9d673652.js";import"./text-7318d3bf.js";import"./badge-3e2e430d.js";import"./divider-e3315d41.js";import"./credit-card-aed5fef2.js";import"./magnifying-glass-0fce063b.js";import"./_commonjsHelpers-725317a4.js";import"./directive-helpers-8f06cd33.js";import"./async-directive-1808f33b.js";import"./directive-dd518ee3.js";import"./static-c0094392.js";import"./if-defined-5f576255.js";import"./class-map-f04c1558.js";import"./transitional-styles-8ea9588a.js";import"./style-expression-property-0e3d4d40.js";import"./icon-a640baec.js";const ge=Y`
  @layer tokens, a11y, base, simplified;

  @layer tokens {
    :host {
      --_transition: all 368ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      :host {
        --_transition: none;
      }
    }

    @media (prefers-reduced-transparency: reduce) {
      :host {
        --_transparency: 1;
      }
    }
  }

  @layer base {
    * {
      box-sizing: border-box;
    }

    :host {
      width: 100%;
      contain: layout;
      isolation: isolate;
    }

    :host([size='small']) input {
      font-size: var(--gds-text-size-detail-s);
      line-height: var(--gds-text-line-height-detail-s);
    }

    .field {
      transition: var(--_transition);
      position: relative;
      outline: 2px solid transparent;
      outline-offset: 2px;

      &:has(input:focus-visible) {
        border-color: var(--gds-color-l3-border-primary);
        outline-color: currentColor;
      }

      &.invalid:has(input:focus-visible) {
        border-color: var(--gds-color-l3-border-negative);
      }
    }

    @media (hover: hover) {
      .field {
        &:hover {
          background: color-mix(
            in srgb,
            var(--gds-color-l3-background-secondary),
            var(--gds-color-l3-states-light-hover)
          );
        }

        &.invalid:hover {
          background: color-mix(
            in srgb,
            var(--gds-color-l3-background-negative-secondary),
            var(--gds-color-l3-states-negative-hover)
          );
        }
      }
    }

    input,
    textarea {
      appearance: none;
      background-color: transparent;
      border: 0;
      box-sizing: border-box;
      font-family: inherit;
      margin: unset;
      outline: none;
      overflow: hidden;
      padding: unset;
      transition: var(--_transition);
      width: 100%;
      font-size: var(--gds-text-size-detail-m);
      line-height: var(--gds-text-line-height-detail-m);
    }

    textarea {
      overflow: hidden;
      resize: none;
      transition: unset;
      min-height: calc(1lh * 4);
      height: calc(1lh * var(--_lines));
    }

    :host([size='small']) slot[name='lead']::slotted(*) {
      width: var(--gds-space-m);
    }

    slot[name='lead']::slotted(*) {
      min-width: var(--gds-space-l);
    }
  }

  @layer simplified {
    // ...
  }
`;var pe=Object.defineProperty,xe=Object.getOwnPropertyDescriptor,l=(e,t,r,p)=>{for(var n=p>1?void 0:p?xe(t,r):t,c=e.length-1,b;c>=0;c--)(b=e[c])&&(n=(p?b(t,r,n):b(n))||n);return p&&n&&pe(t,r,n),n},M=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},g=(e,t,r)=>(M(e,t,"read from private field"),r?r.call(e):t.get(e)),a=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},i=(e,t,r)=>(M(e,t,"access private method"),r),h,O,f,F,v,L,y,w,$,_,E,P,S,G,V,k,K,T,H,z,U,C,X,N,j,W,J,A,Q;let s=class extends ie{constructor(){super(),a(this,h),a(this,f),a(this,E),a(this,S),a(this,V),a(this,k),a(this,T),a(this,z),a(this,C),a(this,N),a(this,W),a(this,A),this.value="",this.label="",this.supportingText="",this.showExtendedSupportingText=!1,this.disabled=!1,this.clearable=!1,this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.leadSlotOccupied=!1,a(this,v,e=>["type","placeholder","required"].includes(e.name)),a(this,L,e=>{const t=e.target;this.value=t.value}),a(this,y,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),a(this,w,()=>{this.elInputAsync.then(e=>e.focus())}),a(this,$,()=>{this.value=""}),a(this,_,()=>{this.showExtendedSupportingText=!this.showExtendedSupportingText,this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))}),re(this)}connectedCallback(){super.connectedCallback(),this._setAutoHeight()}disconnectedCallback(){super.disconnectedCallback()}render(){return d`${le(this.variant,[["default",()=>i(this,h,O).call(this)],["floating-label",()=>i(this,f,F).call(this)]])}`}_getValidityAnchor(){return this.elInput}_setAutoHeight(){this.elInputAsync.then(e=>{const t=(e.value.split(`
`).length||1).toString();e==null||e.style.setProperty("--_lines",t.toString())})}};h=new WeakSet;O=function(){return d`
      <gds-flex
        flex-direction="column"
        width="100%"
        gap="xs"
        user-select="${this.disabled?"none":"auto"}"
        pointer-events="${this.disabled?"none":"auto"}"
        color="${this.disabled?"l3-content-disabled":this.invalid?"l3-content-negative":"l3-content-tertiary"}"
      >
        <gds-flex
          class="head"
          align-items="center"
          justify-content="space-between"
          padding="3xs 0 0 0"
        >
          <gds-flex flex-direction="column">
            <gds-text font-weight="book" font-size="detail-m">
              <label for="input"> ${this.label} </label>
            </gds-text>
            ${m(this.supportingText,()=>i(this,T,H).call(this))}
          </gds-flex>
          ${se(i(this,A,Q).call(this),u)}
        </gds-flex>

        ${i(this,z,U).call(this)}

        <gds-flex
          position="relative"
          align-items="flex-start"
          justify-content="center"
          gap="xs"
          padding="s s s m"
          border-radius="xs"
          .background=${this.disabled?"l3-background-disabled":this.invalid?"l3-background-negative-secondary":"l3-background-secondary"}
          .border=${this.disabled?"":this.invalid?"4xs/l3-border-negative":"4xs/l3-border-secondary"}
          class="field ${this.invalid?"invalid":""}"
          @click=${g(this,w)}
          cursor="text"
        >
          ${i(this,E,P).call(this)} ${i(this,k,K).call(this)}

          <gds-flex gap="xs" align-items="center" height="var(--gds-space-l)">
            ${i(this,C,X).call(this)} ${i(this,S,G).call(this)}
          </gds-flex>
        </gds-flex>

        <gds-flex
          class="foot"
          align-items="center"
          justify-content="space-between"
          aria-live="polite"
        >
          ${m(this.invalid,()=>d`
              <gds-flex align-items="flex-start" gap="xs">
                <gds-flex min-width="18px">
                  <gds-icon-triangle-exclamation width="18" height="18" solid>
                  </gds-icon-triangle-exclamation>
                </gds-flex>
                <gds-text
                  tag="span"
                  font-size="detail-s"
                  font-weight="book"
                  class="error-text"
                >
                  ${this.validationMessage}
                </gds-text>
              </gds-flex>
            `)}
          <gds-flex margin="0 0 0 auto">
            ${m(g(this,N,j),()=>i(this,W,J).call(this))}
          </gds-flex>
        </gds-flex>
      </gds-flex>
    `};f=new WeakSet;F=function(){return u};v=new WeakMap;L=new WeakMap;y=new WeakMap;w=new WeakMap;$=new WeakMap;_=new WeakMap;E=new WeakSet;P=function(){return d` <slot name="lead"></slot> `};S=new WeakSet;G=function(){return d` <slot name="trail" gds-allow="gds-badge"></slot> `};V=new WeakSet;k=new WeakSet;K=function(){return d`
      <textarea
        @input=${g(this,L)}
        @change=${g(this,y)}
        .value=${this.value}
        id="input"
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":null}"
        aria-describedby="supporting-text"
        placeholder=" "
        ${oe(g(this,v))}
      ></textarea>
    `};T=new WeakSet;H=function(){return d`
      <gds-text
        font-size="detail-m"
        .color="${this.disabled?"l3-content-disabled":this.invalid?"l3-content-negative":"l3-content-tertiary"}"
        class="supporting-text"
        id="supporting-text"
      >
        ${this.supportingText}
      </gds-text>
    `};z=new WeakSet;U=function(){return d`
      <gds-card
        display="${this.showExtendedSupportingText?"block":"none"}"
        class="extended-supporting-text"
        padding="s m"
        border-radius="xs"
        background="l3-background-secondary"
        color="l3-content-tertiary"
      >
        <gds-text
          font-size="body-s"
          display="${this.showExtendedSupportingText?"block":"none"}"
        >
          <slot
            name="extended-supporting-text"
            @slotchange=${()=>this.requestUpdate()}
          ></slot>
        </gds-text>
      </gds-card>
    `};C=new WeakSet;X=function(){return this.clearable&&this.value.length>0?d`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${R("Clear input")}"
          @click=${g(this,$)}
        >
          <gds-icon-cross-small />
        </gds-button>
      `:u};N=new WeakSet;j=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};W=new WeakSet;J=function(){const e=this.maxlength-this.value.length;let t;return e<0?t="negative":e<20?t="warning":t="positive",d`<gds-badge variant="${t}">${e}</gds-badge>`};A=new WeakSet;Q=async function(){return this.elExtendedSupportingTextSlot.then(e=>e&&e.assignedElements().length>0?d`
          <gds-button
            size="small"
            rank="tertiary"
            label="${R("Show extended supporting text")}"
            @click=${g(this,_)}
          >
            <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
          </gds-button>
        `:u)};s.styles=[ne,ge];l([o()],s.prototype,"value",2);l([o()],s.prototype,"label",2);l([o({attribute:"supporting-text"})],s.prototype,"supportingText",2);l([o({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],s.prototype,"showExtendedSupportingText",2);l([o({attribute:"disabled",type:Boolean,reflect:!0})],s.prototype,"disabled",2);l([o({type:Boolean})],s.prototype,"clearable",2);l([o({type:Number})],s.prototype,"maxlength",2);l([o({type:String})],s.prototype,"variant",2);l([D("textarea")],s.prototype,"elInputAsync",2);l([ae("textarea")],s.prototype,"elInput",2);l([D('slot[name="extended-supporting-text"]')],s.prototype,"elExtendedSupportingTextSlot",2);l([ee()],s.prototype,"leadSlotOccupied",2);l([de("value")],s.prototype,"_setAutoHeight",1);s=l([te("gds-textarea")],s);const He={title:"Docs/Components/Form/Textarea",component:"gds-textarea",parameters:{layout:"centered",docs:{description:{component:`@status beta

Input fields allow users to enter text into a UI. They typically appear in forms and dialogs.`}}},tags:["autodocs"]},ue={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{label:"Label text"}},x={...ue,name:"All",render:()=>Z`
    <gds-flex flex-direction="column" gap="2xl" width="800px">
      <gds-flex gap="xl">
        <gds-textarea
          value="test"
          label="Label"
          supporting-text="Label support text"
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          value=" "
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          show-extended-supporting-text
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-textarea>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          show-extended-supporting-text
          value=" "
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-textarea>
      </gds-flex>
      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Validation</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          show-extended-supporting-text
          value=" "
          .invalid=${!0}
          .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"Error message."];if(e.value.length!==12||isNaN(e.value))return[{...e.validity,valid:!1,customError:!0},"The value must be 12 characters long. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "]}}}
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-textarea>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          value=" "
          .invalid=${!0}
          .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"Error message."];if(e.value.length!==12||isNaN(e.value))return[{...e.validity,valid:!1,customError:!0},"The value must be 12 characters long."]}}}
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
      </gds-flex>

      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Disabled</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-textarea
          label="Label"
          disabled
          supporting-text="Label support text"
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
        <gds-textarea
          label="Label"
          disabled
          supporting-text="Label support text"
          value=" "
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
      </gds-flex>
      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text tag="h2">Small</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-textarea
          label="Label"
          size="small"
          supporting-text="Label support text"
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
        <gds-textarea
          label="Label"
          size="small"
          supporting-text="Label support text"
          value=" "
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
      </gds-flex>
      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Validation</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-textarea
          label="Label"
          size="small"
          supporting-text="Label support text"
          value=" "
          .invalid=${!0}
          .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"Error message."];if(e.value.length!==12||isNaN(e.value))return[{...e.validity,valid:!1,customError:!0},"The value must be 12 characters long."]}}}
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
        <gds-textarea
          label="Label"
          size="small"
          supporting-text="Label support text"
          value=" "
          .invalid=${!0}
          .validator=${{validate:e=>{if(e.value==="")return[{...e.validity,valid:!1,customError:!0},"Error message."];if(e.value.length!==12||isNaN(e.value))return[{...e.validity,valid:!1,customError:!0},"The value must be 12 characters long."]}}}
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
      </gds-flex>

      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Disabled</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-textarea
          label="Label"
          size="small"
          disabled
          supporting-text="Label support text"
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
        <gds-textarea
          label="Label"
          size="small"
          disabled
          supporting-text="Label support text"
          value=" "
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
      </gds-flex>

      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Search & Badge</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>

      <gds-flex gap="xl">
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          clearable
        >
          <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
        </gds-textarea>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          value="Input"
          clearable
        >
          <gds-badge variant="information" slot="trail">KR</gds-badge>
        </gds-textarea>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-textarea
          label="Label"
          .invalid="${!0}"
          supporting-text="Label support text"
        >
          <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
        </gds-textarea>
        <gds-textarea
          label="Label"
          .invalid="${!0}"
          supporting-text="Label support text"
          value="Input"
          clearable
        >
          <gds-badge variant="negative" slot="trail">KR</gds-badge>
        </gds-textarea>
      </gds-flex>
      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text tag="h2">Textarea</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          maxlength="140"
        >
        </gds-textarea>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          maxlength="140"
        >
        </gds-textarea>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          maxlength="140"
          .invalid=${!0}
        >
        </gds-textarea>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          maxlength="140"
          .invalid=${!0}
        >
        </gds-textarea>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          show-extended-supporting-text
          maxlength="140"
        >
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-textarea>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          show-extended-supporting-text
          maxlength="140"
        >
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-textarea>
      </gds-flex>
    </gds-flex>
  `};var q,I,B;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'All',
  render: () => html\`
    <gds-flex flex-direction="column" gap="2xl" width="800px">
      <gds-flex gap="xl">
        <gds-textarea
          value="test"
          label="Label"
          supporting-text="Label support text"
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          value=" "
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          show-extended-supporting-text
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-textarea>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          show-extended-supporting-text
          value=" "
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-textarea>
      </gds-flex>
      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Validation</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          show-extended-supporting-text
          value=" "
          .invalid=\${true}
          .validator=\${{
    validate: (el: any) => {
      if (el.value === '') return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'Error message.'];else if (el.value.length !== 12 || isNaN(el.value)) return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'The value must be 12 characters long. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '];
    }
  }}
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-textarea>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          value=" "
          .invalid=\${true}
          .validator=\${{
    validate: (el: any) => {
      if (el.value === '') return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'Error message.'];else if (el.value.length !== 12 || isNaN(el.value)) return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'The value must be 12 characters long.'];
    }
  }}
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
      </gds-flex>

      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Disabled</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-textarea
          label="Label"
          disabled
          supporting-text="Label support text"
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
        <gds-textarea
          label="Label"
          disabled
          supporting-text="Label support text"
          value=" "
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
      </gds-flex>
      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text tag="h2">Small</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-textarea
          label="Label"
          size="small"
          supporting-text="Label support text"
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
        <gds-textarea
          label="Label"
          size="small"
          supporting-text="Label support text"
          value=" "
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
      </gds-flex>
      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Validation</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-textarea
          label="Label"
          size="small"
          supporting-text="Label support text"
          value=" "
          .invalid=\${true}
          .validator=\${{
    validate: (el: any) => {
      if (el.value === '') return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'Error message.'];else if (el.value.length !== 12 || isNaN(el.value)) return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'The value must be 12 characters long.'];
    }
  }}
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
        <gds-textarea
          label="Label"
          size="small"
          supporting-text="Label support text"
          value=" "
          .invalid=\${true}
          .validator=\${{
    validate: (el: any) => {
      if (el.value === '') return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'Error message.'];else if (el.value.length !== 12 || isNaN(el.value)) return [{
        ...el.validity,
        valid: false,
        customError: true
      }, 'The value must be 12 characters long.'];
    }
  }}
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
      </gds-flex>

      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Disabled</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-textarea
          label="Label"
          size="small"
          disabled
          supporting-text="Label support text"
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
        <gds-textarea
          label="Label"
          size="small"
          disabled
          supporting-text="Label support text"
          value=" "
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
      </gds-flex>

      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Search & Badge</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>

      <gds-flex gap="xl">
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          clearable
        >
          <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
        </gds-textarea>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          value="Input"
          clearable
        >
          <gds-badge variant="information" slot="trail">KR</gds-badge>
        </gds-textarea>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-textarea
          label="Label"
          .invalid="\${true}"
          supporting-text="Label support text"
        >
          <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
        </gds-textarea>
        <gds-textarea
          label="Label"
          .invalid="\${true}"
          supporting-text="Label support text"
          value="Input"
          clearable
        >
          <gds-badge variant="negative" slot="trail">KR</gds-badge>
        </gds-textarea>
      </gds-flex>
      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text tag="h2">Textarea</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          maxlength="140"
        >
        </gds-textarea>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          maxlength="140"
        >
        </gds-textarea>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          maxlength="140"
          .invalid=\${true}
        >
        </gds-textarea>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          maxlength="140"
          .invalid=\${true}
        >
        </gds-textarea>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          show-extended-supporting-text
          maxlength="140"
        >
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-textarea>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          show-extended-supporting-text
          maxlength="140"
        >
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-textarea>
      </gds-flex>
    </gds-flex>
  \`
}`,...(B=(I=x.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};const Ue=["All"];export{x as All,Ue as __namedExportsOrder,He as default};
