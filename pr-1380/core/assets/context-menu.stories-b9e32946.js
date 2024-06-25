import{i as N,T as U,x as y}from"./lit-element-2a5e401f.js";import{m as K}from"./lit-localize-87611c26.js";import{e as X}from"./class-map-43969d56.js";import{n as p}from"./Reflect-a49e984a.js";import{r as q}from"./query-async-1ff18261.js";import{g as w,h as x,G as H}from"./gds-element-4f5906f2.js";import{c as z}from"./constrain-slots-08d8606c.js";import{T as _,r as J}from"./transitional-styles-b6254951.js";import{s as Q,F as j,L as e1,u as t1,n as n1,e as s1}from"./menu-heading-7f5f1a1d.js";import"./popover-7b731cac.js";import"./directive-12249aa5.js";import"./_commonjsHelpers-725317a4.js";import"./query-b9d3c2af.js";import"./directive-helpers-5872e68c.js";import"./watch-c4961afe.js";import"./cross-small-2efef278.js";import"./icon-20b66881.js";const o1=N`
  @layer base, reset, transitional-styles;
  @layer base {
    button {
      display: flex;
      border-width: 0;
      background-color: #ededed;
      border-radius: calc(1px * infinity);
      padding: 0.4rem 0.8rem;
      font-family: inherit;
      cursor: pointer;
      align-items: center;
      gap: 0.5rem;
    }

    button:hover {
      background-color: #dcdcdc;
    }
  }
`;var r1=Object.defineProperty,i1=Object.getOwnPropertyDescriptor,a1=(e,t,n,o)=>{for(var s=o>1?void 0:o?i1(t,n):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(s=(o?i(t,n,s):i(s))||s);return o&&s&&r1(t,n,s),s},l1=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},c1=(e,t,n)=>(l1(e,t,"read from private field"),n?n.call(e):t.get(e)),d1=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},v;let b=class extends j(H){constructor(){super(...arguments),d1(this,v,()=>{this.dispatchEvent(new CustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0}))})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.click())}),this.addEventListener("click",c1(this,v)),_.instance.apply(this,"gds-option")}render(){return x`<div><slot></slot></div>`}};v=new WeakMap;b.styles=[Q];b=a1([w("gds-menu-item")],b);var m1=Object.defineProperty,u1=Object.getOwnPropertyDescriptor,p1=(e,t,n,o)=>{for(var s=o>1?void 0:o?u1(t,n):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(s=(o?i(t,n,s):i(s))||s);return o&&s&&m1(t,n,s),s},C1=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},h=(e,t,n)=>(C1(e,t,"read from private field"),n?n.call(e):t.get(e)),g1=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},u;let V=class extends H{constructor(){super(),g1(this,u,s1()),new e1(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),_.instance.apply(this,"gds-listbox")}get navigableItems(){return h(this,u).value?t1(h(this,u).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-menu-item")||[]:[]}focus(){var e;(e=this.navigableItems[0])==null||e.focus()}render(){return x`<slot ${n1(h(this,u))}></slot>`}};u=new WeakMap;V=p1([w("gds-menu")],V);var h1=Object.defineProperty,v1=Object.getOwnPropertyDescriptor,l=(e,t,n,o)=>{for(var s=o>1?void 0:o?v1(t,n):t,r=e.length-1,i;r>=0;r--)(i=e[r])&&(s=(o?i(t,n,s):i(s))||s);return o&&s&&h1(t,n,s),s},b1=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},f1=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},y1=(e,t,n)=>(b1(e,t,"access private method"),n),f,F;let a=class extends H{constructor(){super(),f1(this,f),this.open=!1,this.buttonLabel=K("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start",z(this)}connectedCallback(){super.connectedCallback(),_.instance.apply(this,"gds-context-menu"),this.addEventListener("keydown",e=>{this.open&&e.key=="Tab"&&(e.preventDefault(),this.open=!1,this.elTriggerBtn.then(t=>t.focus()))})}render(){return x`<button
        id="trigger"
        class="icon border-0 small ${X({highlighted:this.open})}"
        aria-label=${this.buttonLabel??this.label}
        aria-haspopup="menu"
        aria-controls="menu"
        aria-expanded=${this.open}
      >
        <slot name="trigger">
          ${this.showLabel?this.buttonLabel??this.label:U}
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M14 12C14 13.1042 13.1042 14 12 14C10.8958 14 10 13.1042 10 12C10 10.8958 10.8958 10 12 10C13.1042 10 14 10.8958 14 12ZM19 10C17.8958 10 17 10.8958 17 12C17 13.1042 17.8958 14 19 14C20.1042 14 21 13.1042 21 12C21 10.8958 20.1042 10 19 10ZM5 10C3.89583 10 3 10.8958 3 12C3 13.1042 3.89583 14 5 14C6.10417 14 7 13.1042 7 12C7 10.8958 6.10417 10 5 10Z"
              fill="#353531"
            />
          </svg>
        </slot>
      </button>
      <gds-popover
        id="menu"
        .open=${this.open}
        .triggerRef=${this.elTriggerBtn}
        .anchorRef=${this.elTriggerBtn}
        .label=${this.label}
        .placement=${this.placement}
        @gds-ui-state=${e=>this.open=e.detail.open}
      >
        <gds-menu
          aria-label=${this.label??this.buttonLabel}
          @gds-menu-item-click=${y1(this,f,F)}
        >
          <slot allow="gds-menu-item gds-menu-heading"></slot>
        </gds-menu>
      </gds-popover>`}};f=new WeakSet;F=function(){this.open=!1};a.styles=[o1];a.shadowRootOptions={mode:"open",delegatesFocus:!0};l([p({type:Boolean,reflect:!0})],a.prototype,"open",2);l([p({attribute:"button-label"})],a.prototype,"buttonLabel",2);l([p({attribute:"show-label",type:Boolean})],a.prototype,"showLabel",2);l([p()],a.prototype,"label",2);l([p()],a.prototype,"placement",2);l([q("#trigger")],a.prototype,"elTriggerBtn",2);a=l([w("gds-context-menu")],a);J();const D1={title:"Components/Context Menu",component:"gds-context-menu",subcomponents:{MenuItem:"gds-menu-item"},parameters:{layout:"centered",docs:{description:{component:`[Source code](https://github.com/sebgroup/green/tree/main/libs/core/src/components/context-menu)
&nbsp;|&nbsp;
[Usage guidelines](https://designlibrary.sebgroup.com/components/component-moremenu)

The context menu is presented in-context to the related data, so users don’t lose
their place in the app. It appears upon interaction with the 3 dot button and
displays a list of choices, one choice per line.`}}},tags:["autodocs"]},g={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},argTypes:{items:{control:{type:"array"}}},args:{innerHTML:`<gds-menu-item>Action 1</gds-menu-item>
<gds-menu-item>Action 2</gds-menu-item>
<gds-menu-item>Action 3</gds-menu-item>`}},C={...g},c={...g,render:e=>y`
    Activated action: <span id="display-action"></span>
    <br />
    <gds-context-menu popover-label="Select an action" button-label="Menu">
      <gds-menu-item
        onclick="document.getElementById('display-action').innerText = this.innerText"
      >
        Action 1
      </gds-menu-item>
      <gds-menu-item
        onclick="document.getElementById('display-action').innerText = this.innerText"
      >
        Action 2
      </gds-menu-item>
      <gds-menu-item
        onclick="document.getElementById('display-action').innerText = this.innerText"
      >
        Action 3
      </gds-menu-item>
    </gds-context-menu>
  `},d={...g,render:e=>y`
    <gds-context-menu
      label="Select an action"
      button-label="Menu"
      show-label
      .showLabel=${!0}
    >
      <gds-menu-item>Action 1</gds-menu-item>
      <gds-menu-item>Action 2</gds-menu-item>
      <gds-menu-item>Action 3</gds-menu-item>
    </gds-context-menu>
  `},m={...g,render:e=>y`
    <gds-context-menu>
      <div
        slot="trigger"
        style="display: flex; align-items: center; gap: .5rem;"
      >
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.375 17.5H14.125C14.2245 17.5 14.3198 17.4605 14.3902 17.3902C14.4605 17.3198 14.5 17.2245 14.5 17.125V10.375C14.5 10.2755 14.4605 10.1802 14.3902 10.1098C14.3198 10.0395 14.2245 10 14.125 10H13.375C13.2755 10 13.1802 10.0395 13.1098 10.1098C13.0395 10.1802 13 10.2755 13 10.375V17.125C13 17.2245 13.0395 17.3198 13.1098 17.3902C13.1802 17.4605 13.2755 17.5 13.375 17.5ZM18.5 7H15.9247L14.8622 5.22813C14.7288 5.00594 14.5402 4.82209 14.3147 4.69449C14.0892 4.56688 13.8344 4.49988 13.5753 4.5H10.4247C10.1657 4.49998 9.91106 4.56704 9.68566 4.69464C9.46025 4.82224 9.27172 5.00603 9.13844 5.22813L8.07531 7H5.5C5.36739 7 5.24021 7.05268 5.14645 7.14645C5.05268 7.24022 5 7.36739 5 7.5V8C5 8.13261 5.05268 8.25979 5.14645 8.35355C5.24021 8.44732 5.36739 8.5 5.5 8.5H6V19C6 19.3978 6.15804 19.7794 6.43934 20.0607C6.72064 20.342 7.10218 20.5 7.5 20.5H16.5C16.8978 20.5 17.2794 20.342 17.5607 20.0607C17.842 19.7794 18 19.3978 18 19V8.5H18.5C18.6326 8.5 18.7598 8.44732 18.8536 8.35355C18.9473 8.25979 19 8.13261 19 8V7.5C19 7.36739 18.9473 7.24022 18.8536 7.14645C18.7598 7.05268 18.6326 7 18.5 7ZM10.37 6.09094C10.3867 6.06312 10.4104 6.04012 10.4386 6.02418C10.4669 6.00824 10.4988 5.99991 10.5312 6H13.4688C13.5011 5.99996 13.533 6.00832 13.5612 6.02426C13.5894 6.04019 13.613 6.06317 13.6297 6.09094L14.1753 7H9.82469L10.37 6.09094ZM16.5 19H7.5V8.5H16.5V19ZM9.875 17.5H10.625C10.7245 17.5 10.8198 17.4605 10.8902 17.3902C10.9605 17.3198 11 17.2245 11 17.125V10.375C11 10.2755 10.9605 10.1802 10.8902 10.1098C10.8198 10.0395 10.7245 10 10.625 10H9.875C9.77554 10 9.68016 10.0395 9.60984 10.1098C9.53951 10.1802 9.5 10.2755 9.5 10.375V17.125C9.5 17.2245 9.53951 17.3198 9.60984 17.3902C9.68016 17.4605 9.77554 17.5 9.875 17.5Z"
            fill="currentColor"
          />
        </svg>
        Custom trigger
      </div>
      <gds-menu-item>
        <div>
          <strong>Custom</strong> <em>markup</em> can go here if so is needed!
        </div>
      </gds-menu-item>
      <gds-menu-item>Action 2</gds-menu-item>
      <gds-menu-item>
        <div
          style="
            display: flex;
            justify-content: space-between;
            width: 100%;
            align-items: center;
            color: var(--color);
            --color: var(--intent-danger-background);
          "
        >
          Delete&nbsp;
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.375 17.5H14.125C14.2245 17.5 14.3198 17.4605 14.3902 17.3902C14.4605 17.3198 14.5 17.2245 14.5 17.125V10.375C14.5 10.2755 14.4605 10.1802 14.3902 10.1098C14.3198 10.0395 14.2245 10 14.125 10H13.375C13.2755 10 13.1802 10.0395 13.1098 10.1098C13.0395 10.1802 13 10.2755 13 10.375V17.125C13 17.2245 13.0395 17.3198 13.1098 17.3902C13.1802 17.4605 13.2755 17.5 13.375 17.5ZM18.5 7H15.9247L14.8622 5.22813C14.7288 5.00594 14.5402 4.82209 14.3147 4.69449C14.0892 4.56688 13.8344 4.49988 13.5753 4.5H10.4247C10.1657 4.49998 9.91106 4.56704 9.68566 4.69464C9.46025 4.82224 9.27172 5.00603 9.13844 5.22813L8.07531 7H5.5C5.36739 7 5.24021 7.05268 5.14645 7.14645C5.05268 7.24022 5 7.36739 5 7.5V8C5 8.13261 5.05268 8.25979 5.14645 8.35355C5.24021 8.44732 5.36739 8.5 5.5 8.5H6V19C6 19.3978 6.15804 19.7794 6.43934 20.0607C6.72064 20.342 7.10218 20.5 7.5 20.5H16.5C16.8978 20.5 17.2794 20.342 17.5607 20.0607C17.842 19.7794 18 19.3978 18 19V8.5H18.5C18.6326 8.5 18.7598 8.44732 18.8536 8.35355C18.9473 8.25979 19 8.13261 19 8V7.5C19 7.36739 18.9473 7.24022 18.8536 7.14645C18.7598 7.05268 18.6326 7 18.5 7ZM10.37 6.09094C10.3867 6.06312 10.4104 6.04012 10.4386 6.02418C10.4669 6.00824 10.4988 5.99991 10.5312 6H13.4688C13.5011 5.99996 13.533 6.00832 13.5612 6.02426C13.5894 6.04019 13.613 6.06317 13.6297 6.09094L14.1753 7H9.82469L10.37 6.09094ZM16.5 19H7.5V8.5H16.5V19ZM9.875 17.5H10.625C10.7245 17.5 10.8198 17.4605 10.8902 17.3902C10.9605 17.3198 11 17.2245 11 17.125V10.375C11 10.2755 10.9605 10.1802 10.8902 10.1098C10.8198 10.0395 10.7245 10 10.625 10H9.875C9.77554 10 9.68016 10.0395 9.60984 10.1098C9.53951 10.1802 9.5 10.2755 9.5 10.375V17.125C9.5 17.2245 9.53951 17.3198 9.60984 17.3902C9.68016 17.4605 9.77554 17.5 9.875 17.5Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </gds-menu-item>
    </gds-context-menu>
  `};var M,L,T;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...DefaultParams
}`,...(T=(L=C.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var $,k,A,Z,E;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    Activated action: <span id="display-action"></span>
    <br />
    <gds-context-menu popover-label="Select an action" button-label="Menu">
      <gds-menu-item
        onclick="document.getElementById('display-action').innerText = this.innerText"
      >
        Action 1
      </gds-menu-item>
      <gds-menu-item
        onclick="document.getElementById('display-action').innerText = this.innerText"
      >
        Action 2
      </gds-menu-item>
      <gds-menu-item
        onclick="document.getElementById('display-action').innerText = this.innerText"
      >
        Action 3
      </gds-menu-item>
    </gds-context-menu>
  \`
}`,...(A=(k=c.parameters)==null?void 0:k.docs)==null?void 0:A.source},description:{story:'Menu items are defined by adding `gds-menu-item` elements as children of the `gds-context-menu` element.\nYou should always provide a `button-label` so the button is accessibible. Consider to show the label as\nwell with `show-label` set to `true`;\n\nTo handle the user\'s interaction, you can listen to `click` events on individual menu items, or to the\n`gds-menu-item-click` event on the parent `gds-context-menu` element.\n\nNote that you should always supply a label for the context menu. The label should describe the context\nof the menu, such as "Select an action for XYZ".',...(E=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:E.description}}};var S,B,P,O,D;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-context-menu
      label="Select an action"
      button-label="Menu"
      show-label
      .showLabel=\${true}
    >
      <gds-menu-item>Action 1</gds-menu-item>
      <gds-menu-item>Action 2</gds-menu-item>
      <gds-menu-item>Action 3</gds-menu-item>
    </gds-context-menu>
  \`
}`,...(P=(B=d.parameters)==null?void 0:B.docs)==null?void 0:P.source},description:{story:"You can show the label by setting the `show-label` attribute on the `<gds-context-menu>` element.",...(D=(O=d.parameters)==null?void 0:O.docs)==null?void 0:D.description}}};var I,G,W,R,Y;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`
    <gds-context-menu>
      <div
        slot="trigger"
        style="display: flex; align-items: center; gap: .5rem;"
      >
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.375 17.5H14.125C14.2245 17.5 14.3198 17.4605 14.3902 17.3902C14.4605 17.3198 14.5 17.2245 14.5 17.125V10.375C14.5 10.2755 14.4605 10.1802 14.3902 10.1098C14.3198 10.0395 14.2245 10 14.125 10H13.375C13.2755 10 13.1802 10.0395 13.1098 10.1098C13.0395 10.1802 13 10.2755 13 10.375V17.125C13 17.2245 13.0395 17.3198 13.1098 17.3902C13.1802 17.4605 13.2755 17.5 13.375 17.5ZM18.5 7H15.9247L14.8622 5.22813C14.7288 5.00594 14.5402 4.82209 14.3147 4.69449C14.0892 4.56688 13.8344 4.49988 13.5753 4.5H10.4247C10.1657 4.49998 9.91106 4.56704 9.68566 4.69464C9.46025 4.82224 9.27172 5.00603 9.13844 5.22813L8.07531 7H5.5C5.36739 7 5.24021 7.05268 5.14645 7.14645C5.05268 7.24022 5 7.36739 5 7.5V8C5 8.13261 5.05268 8.25979 5.14645 8.35355C5.24021 8.44732 5.36739 8.5 5.5 8.5H6V19C6 19.3978 6.15804 19.7794 6.43934 20.0607C6.72064 20.342 7.10218 20.5 7.5 20.5H16.5C16.8978 20.5 17.2794 20.342 17.5607 20.0607C17.842 19.7794 18 19.3978 18 19V8.5H18.5C18.6326 8.5 18.7598 8.44732 18.8536 8.35355C18.9473 8.25979 19 8.13261 19 8V7.5C19 7.36739 18.9473 7.24022 18.8536 7.14645C18.7598 7.05268 18.6326 7 18.5 7ZM10.37 6.09094C10.3867 6.06312 10.4104 6.04012 10.4386 6.02418C10.4669 6.00824 10.4988 5.99991 10.5312 6H13.4688C13.5011 5.99996 13.533 6.00832 13.5612 6.02426C13.5894 6.04019 13.613 6.06317 13.6297 6.09094L14.1753 7H9.82469L10.37 6.09094ZM16.5 19H7.5V8.5H16.5V19ZM9.875 17.5H10.625C10.7245 17.5 10.8198 17.4605 10.8902 17.3902C10.9605 17.3198 11 17.2245 11 17.125V10.375C11 10.2755 10.9605 10.1802 10.8902 10.1098C10.8198 10.0395 10.7245 10 10.625 10H9.875C9.77554 10 9.68016 10.0395 9.60984 10.1098C9.53951 10.1802 9.5 10.2755 9.5 10.375V17.125C9.5 17.2245 9.53951 17.3198 9.60984 17.3902C9.68016 17.4605 9.77554 17.5 9.875 17.5Z"
            fill="currentColor"
          />
        </svg>
        Custom trigger
      </div>
      <gds-menu-item>
        <div>
          <strong>Custom</strong> <em>markup</em> can go here if so is needed!
        </div>
      </gds-menu-item>
      <gds-menu-item>Action 2</gds-menu-item>
      <gds-menu-item>
        <div
          style="
            display: flex;
            justify-content: space-between;
            width: 100%;
            align-items: center;
            color: var(--color);
            --color: var(--intent-danger-background);
          "
        >
          Delete&nbsp;
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.375 17.5H14.125C14.2245 17.5 14.3198 17.4605 14.3902 17.3902C14.4605 17.3198 14.5 17.2245 14.5 17.125V10.375C14.5 10.2755 14.4605 10.1802 14.3902 10.1098C14.3198 10.0395 14.2245 10 14.125 10H13.375C13.2755 10 13.1802 10.0395 13.1098 10.1098C13.0395 10.1802 13 10.2755 13 10.375V17.125C13 17.2245 13.0395 17.3198 13.1098 17.3902C13.1802 17.4605 13.2755 17.5 13.375 17.5ZM18.5 7H15.9247L14.8622 5.22813C14.7288 5.00594 14.5402 4.82209 14.3147 4.69449C14.0892 4.56688 13.8344 4.49988 13.5753 4.5H10.4247C10.1657 4.49998 9.91106 4.56704 9.68566 4.69464C9.46025 4.82224 9.27172 5.00603 9.13844 5.22813L8.07531 7H5.5C5.36739 7 5.24021 7.05268 5.14645 7.14645C5.05268 7.24022 5 7.36739 5 7.5V8C5 8.13261 5.05268 8.25979 5.14645 8.35355C5.24021 8.44732 5.36739 8.5 5.5 8.5H6V19C6 19.3978 6.15804 19.7794 6.43934 20.0607C6.72064 20.342 7.10218 20.5 7.5 20.5H16.5C16.8978 20.5 17.2794 20.342 17.5607 20.0607C17.842 19.7794 18 19.3978 18 19V8.5H18.5C18.6326 8.5 18.7598 8.44732 18.8536 8.35355C18.9473 8.25979 19 8.13261 19 8V7.5C19 7.36739 18.9473 7.24022 18.8536 7.14645C18.7598 7.05268 18.6326 7 18.5 7ZM10.37 6.09094C10.3867 6.06312 10.4104 6.04012 10.4386 6.02418C10.4669 6.00824 10.4988 5.99991 10.5312 6H13.4688C13.5011 5.99996 13.533 6.00832 13.5612 6.02426C13.5894 6.04019 13.613 6.06317 13.6297 6.09094L14.1753 7H9.82469L10.37 6.09094ZM16.5 19H7.5V8.5H16.5V19ZM9.875 17.5H10.625C10.7245 17.5 10.8198 17.4605 10.8902 17.3902C10.9605 17.3198 11 17.2245 11 17.125V10.375C11 10.2755 10.9605 10.1802 10.8902 10.1098C10.8198 10.0395 10.7245 10 10.625 10H9.875C9.77554 10 9.68016 10.0395 9.60984 10.1098C9.53951 10.1802 9.5 10.2755 9.5 10.375V17.125C9.5 17.2245 9.53951 17.3198 9.60984 17.3902C9.68016 17.4605 9.77554 17.5 9.875 17.5Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </gds-menu-item>
    </gds-context-menu>
  \`
}`,...(W=(G=m.parameters)==null?void 0:G.docs)==null?void 0:W.source},description:{story:"You can show the label by setting the `show-label` attribute on the `<gds-context-menu>` element.",...(Y=(R=m.parameters)==null?void 0:R.docs)==null?void 0:Y.description}}};const I1=["Basic","Usage","ShowLabel","Slots"];export{C as Basic,d as ShowLabel,m as Slots,c as Usage,I1 as __namedExportsOrder,D1 as default};
