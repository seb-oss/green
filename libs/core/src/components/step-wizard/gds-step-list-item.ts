import { LitElement, PropertyValues, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import "@sebgroup/green-core/components/icon/icons/checkmark.js";
import { html } from "@sebgroup/green-core/scoping";

enum LineColor {
  Green = "#45B400",
  Orange = "#F8A000",
  Grey = "#ADADAD",
}

@customElement("gds-step-list-item")
export class GdsStepListItem extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: "SEB SansSerif", "SEBSansSerif", "Trebuchet MS", "Trebuchet",
        "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
    .item-container {
      display: flex;
      flex-direction: column;
      padding: 4px 16px 24px;
      position: relative;
    }
    .line {
      position: absolute;
      top: var(--line-top, 16px);
      left: 16px;
      bottom: -18px;
      width: 1px;
      background-color: var(--line-color, #45b400);
      z-index: 0;
      display: var(--line-display, block);
    }
    .icon {
      position: absolute;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: var(--line-color, #45b400);
      color: white;
      z-index: 1;
      left: 0;
      top: 4px;
    }
    .icon-checkmark {
      color: white;
      position: absolute;
      left: 7.5px;
      top: 7.5px;
      width: 16px;
      height: 16px;
    }

    .header,
    .content {
      position: relative;
      box-sizing: border-box;
      font-weight: 400;
      padding: 0px 0px 0px 32px;
    }
    .header {
      font-size: 24px;
      z-index: 2;
      padding-bottom: 12px;
    }
    .content {
      font-size: 16px;
    }
    .header-info {
      font-size: 16px;
      position: relative;
      box-sizing: border-box;
      font-weight: 400;
      padding: 4px 0px 0px 0px;
    }
  `;

  @property({ type: String }) lineColor: keyof typeof LineColor = "Green";
  @property({ type: Boolean }) isContinuation = false; // Default is false
  @property({ type: Boolean }) isLastNode = false; // Default is false
  @property({ type: String }) title = ""; // Default title is empty
  @property({ type: String }) headerInfo = "";

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has("lineColor")) {
      const colorValue = LineColor[this.lineColor as keyof typeof LineColor];
      this.style.setProperty("--line-color", colorValue);
    }
    if (changedProperties.has("isContinuation")) {
      const lineTop = this.isContinuation ? "-18px" : "16px";
      this.style.setProperty("--line-top", lineTop);
    }
    if (changedProperties.has("isLastNode")) {
      const lineDisplay = this.isLastNode ? "none" : "block";
      this.style.setProperty("--line-display", lineDisplay);
    }
  }

  renderIcon() {
    const colorValue = LineColor[this.lineColor as keyof typeof LineColor];
    if (colorValue === LineColor.Green) {
      return html`<div class="icon" role="listIcon">
        <div class="icon-checkmark">
          <gds-icon-checkmark solid width="16" height="16"></gds-icon-checkmark>
        </div>
      </div>`;
    } else {
      return html`<div class="icon"></div>`;
    }
  }

  render() {
    return html`
      <div class="item-container" role="listItem">
        ${this.renderIcon()}
        <div class="line"></div>
        <div class="header" role="header" id="label">
          ${this.title}
          ${this.headerInfo
            ? html` <div class="header-info">
                <slot name="header-info" role="note">${this.headerInfo}</slot>
              </div>`
            : ""}
        </div>
        <div class="content" role="itemContent" aria-labelledby="label">
          <slot name="content"></slot>
        </div>
      </div>
    `;
  }
}
