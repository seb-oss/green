import{r as h,E as n}from"./lit-element-Bx14lxc-.js";import{n as a,r as p,G as w,h as d,g as v}from"./custom-element-scoping-b4c89-hi.js";import"./input-C-H0gf07.js";import"./dropdown-BM1mmgdL.js";import"./option-DEr9q-k7.js";import"./menu-heading-DcpsJjyR.js";import"./card-G_rzxrp_.js";import"./div-62vir6xI.js";import"./button-DLS0bV1b.js";import"./dot-grid-two-CXO_K-1g.js";import"./chevron-right-CABFgpIH.js";const u=":host{display:block}.gds-table-row{display:grid;grid-template-columns:auto auto 1fr auto auto;align-items:center;gap:var(--gds-spacing-xs);padding:var(--gds-spacing-xs);position:relative;transition:background-color .2s ease}.gds-table-row.clickable{cursor:pointer}.gds-table-row.clickable:hover{background-color:var(--gds-surface-hover-color)}.gds-table-row.selected{background-color:var(--gds-surface-selected-color)}.gds-table-row.dragging{opacity:.5;border:1px dashed var(--gds-border-color)}.gds-row-drag{cursor:grab;color:var(--gds-text-color-secondary);padding:var(--gds-spacing-xs)}.gds-row-drag:hover{color:var(--gds-text-color-primary)}.gds-row-select{display:flex;align-items:center;padding:var(--gds-spacing-xs)}.gds-row-content{display:flex;gap:var(--gds-spacing-s);min-width:0}.gds-row-options{position:relative;padding:var(--gds-spacing-xs)}.options-menu{position:absolute;right:0;top:100%;z-index:1000;background:var(--gds-surface-color);border:1px solid var(--gds-border-color);border-radius:var(--gds-border-radius-m);box-shadow:var(--gds-shadow-m);min-width:150px}.link-icon{color:var(--gds-text-color-secondary);transition:transform .2s ease}.gds-table-row.clickable:hover .link-icon{transform:translate(4px)}.gds-table-row[role=link]:focus-visible{outline:2px solid var(--gds-color-primary);outline-offset:-2px}";var b=Object.defineProperty,f=Object.getOwnPropertyDescriptor,o=(e,t,r,l)=>{for(var i=l>1?void 0:l?f(t,r):t,g=e.length-1,c;g>=0;g--)(c=e[g])&&(i=(l?c(t,r,i):c(i))||i);return l&&i&&b(t,r,i),i};let s=class extends w{constructor(){super(...arguments),this.sortable=!1,this.selectable=!1,this.selected=!1,this.hasOptions=!1,this.href="",this.isDragging=!1,this.showOptions=!1}handleDragStart(e){var t,r;this.sortable&&(this.isDragging=!0,(r=e.dataTransfer)==null||r.setData("text/plain",((t=this.rowId)==null?void 0:t.toString())||""),this.dispatchEvent(new CustomEvent("row-drag-start",{detail:{rowId:this.rowId}})))}handleDragEnd(){this.isDragging=!1,this.dispatchEvent(new CustomEvent("row-drag-end"))}handleDragOver(e){this.sortable&&(e.preventDefault(),this.dispatchEvent(new CustomEvent("row-drag-over",{detail:{rowId:this.rowId}})))}handleDrop(e){var r;if(!this.sortable)return;e.preventDefault();const t=(r=e.dataTransfer)==null?void 0:r.getData("text/plain");this.dispatchEvent(new CustomEvent("row-drop",{detail:{sourceId:parseInt(t||"0"),targetId:this.rowId}}))}handleSelect(e){const t=e.target.checked;this.selected=t,this.dispatchEvent(new CustomEvent("row-select",{detail:{rowId:this.rowId,selected:t}}))}handleRowClick(e){e.target.closest("input, button, .gds-row-options")||(this.href&&(this.target==="_blank"?window.open(this.href,"_blank"):window.location.href=this.href),this.dispatchEvent(new CustomEvent("row-click",{detail:{rowId:this.rowId}})))}toggleOptions(){this.showOptions=!this.showOptions}render(){const e={"gds-table-row":!0,dragging:this.isDragging,selected:this.selected,clickable:!!this.href,"has-options":this.hasOptions};return d`
      <div
        class=${Object.entries(e).filter(([,t])=>t).map(([t])=>t).join(" ")}
        draggable=${this.sortable}
        @dragstart=${this.handleDragStart}
        @dragend=${this.handleDragEnd}
        @dragover=${this.handleDragOver}
        @drop=${this.handleDrop}
        @click=${this.handleRowClick}
        role=${this.href?"link":"row"}
        tabindex=${this.href?"0":"-1"}
      >
        ${this.sortable?d`
              <div class="gds-row-drag">
                <gds-icon-dot-grid-two></gds-icon-dot-grid-two>
              </div>
            `:n}
        ${this.selectable?d`
              <div class="gds-row-select">
                <input
                  type="checkbox"
                  .checked=${this.selected}
                  @change=${this.handleSelect}
                />
              </div>
            `:n}

        <div class="gds-row-content">
          <slot></slot>
        </div>

        ${this.hasOptions?d`
              <div class="gds-row-options">
                <gds-button
                  size="small"
                  rank="tertiary"
                  @click=${this.toggleOptions}
                >
                  <gds-icon-dot-grid-one-vertical></gds-icon-dot-grid-one-vertical>
                </gds-button>
                ${this.showOptions?d`
                      <div class="options-menu">
                        <slot name="options">
                          <gds-dropdown>
                            <gds-option
                              @click=${()=>this.dispatchEvent(new CustomEvent("row-edit"))}
                            >
                              Edit
                            </gds-option>
                            <gds-option
                              @click=${()=>this.dispatchEvent(new CustomEvent("row-delete"))}
                            >
                              Delete
                            </gds-option>
                          </gds-dropdown>
                        </slot>
                      </div>
                    `:n}
              </div>
            `:n}
        ${this.href?d`
              <gds-icon-chevron-right
                class="link-icon"
              ></gds-icon-chevron-right>
            `:n}
      </div>
    `}};s.styles=[h(u)];o([a({type:Boolean})],s.prototype,"sortable",2);o([a({type:Boolean})],s.prototype,"selectable",2);o([a({type:Boolean})],s.prototype,"selected",2);o([a({type:Boolean})],s.prototype,"hasOptions",2);o([a({type:String})],s.prototype,"href",2);o([a({type:String})],s.prototype,"target",2);o([a({type:Number})],s.prototype,"rowId",2);o([p()],s.prototype,"isDragging",2);o([p()],s.prototype,"showOptions",2);s=o([v("gds-table-row")],s);s.define();
