"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[2565],{"./dist/libs/core/src/components/context-menu/context-menu.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Hx:()=>GdsContextMenu});var _slotRef,chunk_QU3DSPNU=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),lit_localize=__webpack_require__("./node_modules/@lit/localize/lit-localize.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),when=__webpack_require__("./node_modules/lit-html/directives/when.js"),gds_element=__webpack_require__("./dist/libs/core/src/gds-element.js"),menu_item_component=__webpack_require__("./dist/libs/core/src/primitives/menu/menu-item.component.js"),ref=__webpack_require__("./node_modules/lit/directives/ref.js"),custom_element_scoping=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),transitional_styles=__webpack_require__("./dist/libs/core/src/utils/transitional-styles/transitional-styles.js"),listbox_kb_nav_controller=__webpack_require__("./dist/libs/core/src/utils/controllers/listbox-kb-nav-controller.js"),unwrap_slots=__webpack_require__("./dist/libs/core/src/utils/helpers/unwrap-slots.js");let GdsMenu=class extends gds_element.j{constructor(){super(),(0,chunk_QU3DSPNU.VK)(this,_slotRef,(0,ref._)()),new listbox_kb_nav_controller.y(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),transitional_styles.n.instance.apply(this,"gds-listbox")}get navigableItems(){return(0,chunk_QU3DSPNU.S7)(this,_slotRef).value&&(0,unwrap_slots.o)((0,chunk_QU3DSPNU.S7)(this,_slotRef).value).assignedElements().filter((o=>!o.hasAttribute("isplaceholder")&&"gds-menu-item"===o.gdsElementName))||[]}focus(){this.navigableItems[0]?.focus()}render(){return custom_element_scoping.qy`<slot ${(0,ref.K)((0,chunk_QU3DSPNU.S7)(this,_slotRef))}></slot>`}};_slotRef=new WeakMap,GdsMenu=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-menu",{dependsOn:[menu_item_component.T]})],GdsMenu);var tokens_style=__webpack_require__("./dist/libs/core/src/tokens.style.js"),declarative_layout_mixins=__webpack_require__("./dist/libs/core/src/utils/mixins/declarative-layout-mixins.js"),button_component=__webpack_require__("./dist/libs/core/src/components/button/button.component.js"),dot_grid_one_horizontal=__webpack_require__("./dist/libs/core/src/components/icon/icons/dot-grid-one-horizontal.js"),popover_component=__webpack_require__("./dist/libs/core/src/components/popover/popover.component.js");var _GdsContextMenu_instances,handleSlotChange_fn,_renderPopover,handleItemClick_fn,context_menu_styles_default=__webpack_require__("./node_modules/lit/index.js").AH`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: inline-block;
    }

    button {
      display: flex;
      border-width: 0;
      background-color: var(--gds-sys-color-l3-neutral-02);
      border-radius: calc(1px * infinity);
      padding: 0.4rem 0.8rem;
      font-family: inherit;
      cursor: pointer;
      align-items: center;
      gap: 0.5rem;

      &:focus-visible {
        outline-offset: var(--gds-sys-space-3xs);
        outline-style: solid;
        outline-width: var(--gds-sys-space-3xs);
        outline-color: var(--gds-sys-color-content-neutral-01);
      }
    }

    button:hover {
      background-color: color-mix(
        in srgb,
        var(--gds-sys-color-l3-neutral-02),
        var(--gds-sys-color-state-neutral-03)
      );
    }
  }
`;let GdsContextMenu=class extends((0,declarative_layout_mixins.TM)((0,declarative_layout_mixins.lt)(gds_element.j))){constructor(){super(...arguments),(0,chunk_QU3DSPNU.VK)(this,_GdsContextMenu_instances),this.open=!1,this.buttonLabel=(0,lit_localize.ab)("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start",(0,chunk_QU3DSPNU.VK)(this,_renderPopover,(()=>custom_element_scoping.qy`<gds-popover
      id="menu"
      autofocus
      .open=${this.open}
      .triggerRef=${this.elTriggerBtn}
      .anchorRef=${this.elTriggerBtn}
      .label=${this.label}
      .placement=${this.placement}
      @gds-ui-state=${e=>this.open=e.detail.open}
    >
      <gds-menu
        aria-label=${this.label??this.buttonLabel}
        @gds-menu-item-click=${(0,chunk_QU3DSPNU.jq)(this,_GdsContextMenu_instances,handleItemClick_fn)}
      >
        <slot></slot>
      </gds-menu>
    </gds-popover>`))}connectedCallback(){super.connectedCallback(),transitional_styles.n.instance.apply(this,"gds-context-menu"),(0,chunk_QU3DSPNU.jq)(this,_GdsContextMenu_instances,handleSlotChange_fn).call(this),this.addEventListener("keydown",(e=>{this.open&&"Tab"==e.key&&(e.preventDefault(),this.open=!1,this.elTriggerBtn.then((el=>el.focus())))}))}render(){return custom_element_scoping.qy`<gds-button
        .rank=${"secondary"}
        id="trigger"
        aria-haspopup="menu"
        aria-controls="menu"
        aria-expanded=${this.open}
        label=${this.buttonLabel}
        @click=${()=>this.open=!0}
      >
        ${this.showLabel?custom_element_scoping.qy`<slot
                name="icon"
                slot="lead"
                @slotchange=${(0,chunk_QU3DSPNU.jq)(this,_GdsContextMenu_instances,handleSlotChange_fn)}
              ></slot
              >${this.buttonLabel}`:custom_element_scoping.qy`<slot
              name="icon"
              @slotchange=${(0,chunk_QU3DSPNU.jq)(this,_GdsContextMenu_instances,handleSlotChange_fn)}
            ></slot>`}
      </gds-button>
      ${(0,when.z)(this.open,(0,chunk_QU3DSPNU.S7)(this,_renderPopover))}`}};_GdsContextMenu_instances=new WeakSet,handleSlotChange_fn=function(){this.elIconSlot.then((el=>{if(!el.assignedNodes({flatten:!0}).some((node=>node instanceof Element&&node.tagName.toLowerCase().startsWith("gds-icon")))){const defaultIcon=document.createElement((0,custom_element_scoping.Eq)("gds-icon-dot-grid-one-horizontal"));el.appendChild(defaultIcon),this.requestUpdate()}}))},_renderPopover=new WeakMap,handleItemClick_fn=function(){this.open=!1},GdsContextMenu.styles=[tokens_style.LU,context_menu_styles_default],GdsContextMenu.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],GdsContextMenu.prototype,"open",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:"button-label"})],GdsContextMenu.prototype,"buttonLabel",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:"show-label",type:Boolean})],GdsContextMenu.prototype,"showLabel",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],GdsContextMenu.prototype,"label",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],GdsContextMenu.prototype,"placement",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.nJ)("#trigger")],GdsContextMenu.prototype,"elTriggerBtn",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.nJ)('slot[name="icon"]')],GdsContextMenu.prototype,"elIconSlot",2),GdsContextMenu=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-context-menu",{dependsOn:[menu_item_component.T,GdsMenu,popover_component.E,button_component.t,dot_grid_one_horizontal.z]}),(0,lit_localize.cc)()],GdsContextMenu)},"./dist/libs/core/src/components/icon/icons/dot-grid-one-horizontal.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>IconDotGridOneHorizontal});var _chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),_scoping_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),_icon_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/components/icon/icon.js");let IconDotGridOneHorizontal=class extends _icon_js__WEBPACK_IMPORTED_MODULE_1__.M{};IconDotGridOneHorizontal._regularSVG='<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor"/><path d="M20.25 13C20.8023 13 21.25 12.5523 21.25 12C21.25 11.4477 20.8023 11 20.25 11C19.6977 11 19.25 11.4477 19.25 12C19.25 12.5523 19.6977 13 20.25 13Z" fill="currentColor"/><path d="M3.75 13C4.30228 13 4.75 12.5523 4.75 12C4.75 11.4477 4.30228 11 3.75 11C3.19772 11 2.75 11.4477 2.75 12C2.75 12.5523 3.19772 13 3.75 13Z" fill="currentColor"/><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.25 13C20.8023 13 21.25 12.5523 21.25 12C21.25 11.4477 20.8023 11 20.25 11C19.6977 11 19.25 11.4477 19.25 12C19.25 12.5523 19.6977 13 20.25 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.75 13C4.30228 13 4.75 12.5523 4.75 12C4.75 11.4477 4.30228 11 3.75 11C3.19772 11 2.75 11.4477 2.75 12C2.75 12.5523 3.19772 13 3.75 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',IconDotGridOneHorizontal._solidSVG='<path d="M3.75 10.25C2.7835 10.25 2 11.0335 2 12C2 12.9665 2.7835 13.75 3.75 13.75C4.7165 13.75 5.5 12.9665 5.5 12C5.5 11.0335 4.7165 10.25 3.75 10.25Z" fill="currentColor"/><path d="M12 10.25C11.0335 10.25 10.25 11.0335 10.25 12C10.25 12.9665 11.0335 13.75 12 13.75C12.9665 13.75 13.75 12.9665 13.75 12C13.75 11.0335 12.9665 10.25 12 10.25Z" fill="currentColor"/><path d="M20.25 10.25C19.2835 10.25 18.5 11.0335 18.5 12C18.5 12.9665 19.2835 13.75 20.25 13.75C21.2165 13.75 22 12.9665 22 12C22 11.0335 21.2165 10.25 20.25 10.25Z" fill="currentColor"/>',IconDotGridOneHorizontal._name="dot-grid-one-horizontal",IconDotGridOneHorizontal._width=24,IconDotGridOneHorizontal._height=24,IconDotGridOneHorizontal._viewBox="0 0 24 24",IconDotGridOneHorizontal=(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__.Cc)([(0,_scoping_js__WEBPACK_IMPORTED_MODULE_2__.Y$)("gds-icon-dot-grid-one-horizontal")],IconDotGridOneHorizontal)},"./dist/libs/core/src/components/icon/icons/dot-grid-one-horizontal.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>_dot_grid_one_horizontal_component_js__WEBPACK_IMPORTED_MODULE_1__.z});__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js");var _dot_grid_one_horizontal_component_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/components/icon/icons/dot-grid-one-horizontal.component.js");_dot_grid_one_horizontal_component_js__WEBPACK_IMPORTED_MODULE_1__.z.define()},"./dist/libs/core/src/primitives/menu/menu-item.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>GdsMenuItem});var _handleOnClick,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),_gds_element_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/gds-element.js"),_scoping_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),_transitional_styles_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/utils/transitional-styles/transitional-styles.js"),_utils_mixins_focusable_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/utils/mixins/focusable.js"),_listbox_option_styles_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./dist/libs/core/src/primitives/listbox/option.styles.js");let GdsMenuItem=class extends((0,_utils_mixins_focusable_js__WEBPACK_IMPORTED_MODULE_1__.z)(_gds_element_js__WEBPACK_IMPORTED_MODULE_2__.j)){constructor(){super(...arguments),(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__.VK)(this,_handleOnClick,(()=>{this.dispatchCustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0})}))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",(e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.click())})),this.addEventListener("click",(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__.S7)(this,_handleOnClick)),_transitional_styles_js__WEBPACK_IMPORTED_MODULE_3__.n.instance.apply(this,"gds-option")}render(){return _scoping_js__WEBPACK_IMPORTED_MODULE_4__.qy`<div class="item"><slot></slot></div>`}};_handleOnClick=new WeakMap,GdsMenuItem.styles=[_listbox_option_styles_js__WEBPACK_IMPORTED_MODULE_5__.A],GdsMenuItem=(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__.Cc)([(0,_scoping_js__WEBPACK_IMPORTED_MODULE_4__.Y$)("gds-menu-item")],GdsMenuItem)}}]);
//# sourceMappingURL=src-lib-context-menu-context-menu-stories.542f5293.iframe.bundle.js.map