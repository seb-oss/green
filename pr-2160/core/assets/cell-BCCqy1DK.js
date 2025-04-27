import{r as u,E as h}from"./lit-element-Bx14lxc-.js";import{n as a,r as p,G as g,h as d,g as v}from"./custom-element-scoping-b4c89-hi.js";import{a as f}from"./query-p8xgzTDt.js";import"./input-C-H0gf07.js";import"./dropdown-BM1mmgdL.js";import"./option-DEr9q-k7.js";import"./menu-heading-DcpsJjyR.js";import"./card-G_rzxrp_.js";import"./div-62vir6xI.js";import"./button-DLS0bV1b.js";import"./floppy-disk-BLHiJrOX.js";import"./cross-small-Ba6K-R9r.js";const m=":host{display:block}.gds-cell{display:flex;align-items:center;justify-content:space-between;padding:var(--gds-spacing-xs);min-height:40px;position:relative}.gds-cell.editable{cursor:pointer}.gds-cell.clickable{cursor:pointer;color:var(--gds-text-color-link);transition:background-color .2s ease}.gds-cell.clickable:hover,.gds-cell.editable:hover{background-color:var(--gds-surface-hover-color)}.cell-content{display:flex;align-items:center;gap:var(--gds-spacing-s);flex:1}.cell-lead{display:flex;align-items:center}.cell-value{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.edit-button{opacity:0;transition:opacity .2s ease}.gds-cell:hover .edit-button{opacity:1}.gds-cell.editing{background-color:var(--gds-surface-selected-color)}.cell-edit-input{flex:1}.cell-actions{display:flex;gap:var(--gds-spacing-xs)}.link-icon{color:var(--gds-text-color-secondary);transition:transform .2s ease}.gds-cell.clickable:hover .link-icon{transform:translate(4px)}.gds-cell.editing{animation:edit-mode-enter .2s ease}@keyframes edit-mode-enter{0%{opacity:0;transform:translateY(-2px)}to{opacity:1;transform:translateY(0)}}.gds-cell[role=link]:focus-visible{outline:2px solid var(--gds-color-primary);outline-offset:-2px;border-radius:var(--gds-border-radius-s)}";var y=Object.defineProperty,b=Object.getOwnPropertyDescriptor,l=(e,i,o,n)=>{for(var s=n>1?void 0:n?b(i,o):i,r=e.length-1,c;r>=0;r--)(c=e[r])&&(s=(n?c(i,o,s):c(s))||s);return n&&s&&y(i,o,s),s};let t=class extends g{constructor(){super(...arguments),this.value="",this.editable=!1,this.href="",this.type="text",this.isEditing=!1,this.editValue=null,this.hasSlottedContent=!1}handleEditStart(){!this.editable||this.href||(this.isEditing=!0,this.editValue={value:this.value,originalValue:this.value},this.requestUpdate())}handleEditCancel(){this.isEditing=!1,this.editValue=null,this.requestUpdate()}handleEditSave(){this.editValue&&(this.editValue.value!==this.editValue.originalValue&&(this.value=this.editValue.value,this.dispatchEvent(new CustomEvent("cell-change",{detail:{oldValue:this.editValue.originalValue,newValue:this.editValue.value}}))),this.isEditing=!1,this.editValue=null,this.requestUpdate())}handleKeyDown(e){e.key==="Enter"?this.handleEditSave():e.key==="Escape"&&this.handleEditCancel()}handleCellClick(e){this.href&&(e.target.closest("button")||(this.target==="_blank"?window.open(this.href,"_blank"):window.location.href=this.href))}renderEditMode(){var e;return d`
      <div class="gds-cell editing">
        <div class="cell-content">
          <div class="cell-lead">
            <slot name="lead"></slot>
          </div>
          <div class="cell-edit-input">
            <gds-input
              size="small"
              .value=${((e=this.editValue)==null?void 0:e.value)||""}
              @input=${i=>{this.editValue={...this.editValue,value:i.target.value}}}
              @keydown=${this.handleKeyDown}
            ></gds-input>
          </div>
        </div>
        <div class="cell-actions">
          <gds-button
            size="xs"
            rank="tertiary"
            variant="positive"
            @click=${this.handleEditSave}
          >
            <gds-icon-floppy-disk></gds-icon-floppy-disk>
          </gds-button>
          <gds-button
            size="xs"
            rank="tertiary"
            variant="negative"
            @click=${this.handleEditCancel}
          >
            <gds-icon-cross-small></gds-icon-cross-small>
          </gds-button>
        </div>
      </div>
    `}render(){if(this.isEditing)return this.renderEditMode();const e={"gds-cell":!0,editable:this.editable&&!this.href,clickable:!!this.href};return d`
      <div
        class=${Object.entries(e).filter(([,i])=>i).map(([i])=>i).join(" ")}
        @dblclick=${this.handleEditStart}
        @click=${this.handleCellClick}
        role=${this.href?"link":"cell"}
        tabindex=${this.href?"0":"-1"}
      >
        <div class="cell-content">
          <div class="cell-lead">
            <slot name="lead"></slot>
          </div>
          <div class="cell-value">
            <slot @slotchange=${this.handleSlotChange}></slot>
            ${this.hasSlottedContent?"":this.value}
          </div>
        </div>
        ${this.editable&&!this.href?d`
              <gds-button
                size="xs"
                rank="tertiary"
                class="edit-button"
                @click=${this.handleEditStart}
              >
                <gds-icon-text-edit></gds-icon-text-edit>
              </gds-button>
            `:h}
        ${this.href?d`
              <gds-icon-chevron-right
                class="link-icon"
              ></gds-icon-chevron-right>
            `:h}
      </div>
    `}handleSlotChange(){var e;this.hasSlottedContent=((e=this.defaultSlot)==null?void 0:e.assignedNodes().length)>0,this.requestUpdate()}};t.styles=[u(m)];l([a({type:String})],t.prototype,"value",2);l([a({type:Boolean})],t.prototype,"editable",2);l([a({type:String})],t.prototype,"href",2);l([a({type:String})],t.prototype,"target",2);l([a({type:String})],t.prototype,"type",2);l([p()],t.prototype,"isEditing",2);l([p()],t.prototype,"editValue",2);l([f("slot:not([name])")],t.prototype,"defaultSlot",2);t=l([v("gds-table-cell")],t);t.define();
