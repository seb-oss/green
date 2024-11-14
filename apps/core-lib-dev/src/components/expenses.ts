import { LitElement } from 'lit'
import { customElement, state } from 'lit/decorators.js'

import '@sebgroup/green-core/components/icon/icons/arrow-right-down-circle.js'
import '@sebgroup/green-core/components/icon/icons/chevron-bottom.js'
import '@sebgroup/green-core/components/icon/icons/chevron-top.js'
import '@sebgroup/green-core/components/icon/icons/rocket.js'
import '@sebgroup/green-core/components/icon/icons/store.js'
import '@sebgroup/green-core/components/icon/icons/home-open.js'
import '@sebgroup/green-core/components/icon/icons/fashion.js'
import '../common/card'

import { html } from '@sebgroup/green-core/scoping.js'

@customElement('tp-expenses')
export class TpExpenses extends LitElement {
  connectedCallback() {
    super.connectedCallback()
  }
  @state()
  activeCategory = 'Nöje'
  @state()
  isExpanded = false
  @state()
  label = 'Nöje'
  @state()
  amount = '13 523,00'
  @state()
  amountDiff = 'Ökat'
  @state()
  status = '+3 567,00'
  expand() {
    this.isExpanded = !this.isExpanded
  }
  renderIcon() {
    if (this.isExpanded) {
      return html`<gds-icon-chevron-top></gds-icon-chevron-top>`
    }
    return html`<gds-icon-chevron-bottom></gds-icon-chevron-bottom>`
  }
  renderCategory(_label, _amount, _amountDiff, _status) {
    this.activeCategory = _label
    this.label = _label
    this.amount = _amount
    this.amountDiff = _amountDiff
    this.status = _status
  }
  render() {
    return html`<tp-card>
      <gds-text slot="header" font-size="preamble-s" tag="h3"
        >Utgifter</gds-text
      >

      <gds-theme slot="action" color-scheme="light"
            ><gds-button rank="tertiary" label="options">
              <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal></gds-button></gds-theme
        >
      <gds-flex justify-content="space-between" flex-direction="row">
        <gds-flex flex-direction="column">
          <gds-text color="secondary" font-size="detail-s">Oktober</gds-text
          ><gds-text font-size="heading-s">24 567,00</gds-text></gds-flex
        >
        <gds-flex class="right" gap="2xs" flex-direction="row">
          <gds-flex flex-direction="column">
            <gds-text text-align="end" color="secondary" font-size="detail-s"
              >Trend</gds-text
            ><gds-flex gap="xs"  place-items="center"
              ><gds-icon-arrow-right-down-circle
                width="24"
                height="24"
              ></gds-icon-arrow-right-down-circle
              ><gds-text  font-size="heading-s">
                -5%</gds-text
              ></gds-flex
            > </gds-flex
          ><gds-flex></gds-flex>
            <gds-theme color-scheme="light">
              <gds-button  @click="${() => this.expand()}" rank="tertiary"
                >${this.renderIcon()}</gds-button></gds-theme></gds-flex></gds-flex
      ></gds-flex>
      <style>

        .Nöje{
            height: 5.75rem;
            width: 1rem;
            border-radius: 8px;
            background-color: #e2e2e2;

        }
        .Mat {
            height: 5rem;
            width: 1rem;
            background-color: #e2e2e2;
            border-radius: 8px;

        }
        .Boende {
            height: 4.5rem;
            width: 1rem;
            background-color: #e2e2e2;
            border-radius: 8px;

        }
        .Stuga {
            height: 2.5rem;
            width: 1rem;
            background-color: #e2e2e2;
            border-radius: 8px;

        }
        .Livstil {
            height: 4rem;
            width: 1rem;
            background-color: #e2e2e2;
            border-radius: 8px;

        }
        .active{


        }
        .active > .overlay  {
  bottom: 0;
  height: 100%;
}
        .wrapper{   max-height: 0;
            transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
        }
        .open{
            max-height: 500px;
            transition: max-height 0.5s ease-in-out;

        }
        span{
            position:relative;
            z-index:1;
        }
        span::after{
            content: "";
    position: absolute;
    bottom: 0;
    border-radius:8px;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scaleY(0);
    transform-origin: bottom center;
    background: #1b1b1b;
    z-index: -1;
    transition: transform 0.2s;
        }
        span.active::after {
            transform: scaleY(1);
        }
      </style>
      <gds-flex class="${this.isExpanded ? 'open' : ''} wrapper" flex-direction="column"  overflow="hidden">
      <gds-flex margin="0 0 l 0" align-items="baseline" justify-content="space-between">
        <gds-flex place-items="center"gap="s"flex-direction="column"><span class="${this.activeCategory === 'Nöje' ? 'active' : ''} Nöje"></span><gds-text><gds-theme color-scheme="light">
              <gds-button  @click="${() => this.renderCategory('Nöje', '13 523,00', 'Ökat', '+3 567,00')}" rank="${this.activeCategory === 'Nöje' ? 'primary' : 'secondary'}"
                ><gds-icon-rocket class=""></gds-icon-rocket></gds-button></gds-theme></gds-text></gds-flex>
                <gds-flex place-items="center"gap="s"flex-direction="column"><span class="${this.activeCategory === 'Mat' ? 'active' : ''} Mat"></span><gds-text><gds-theme color-scheme="light">
              <gds-button  @click="${() => this.renderCategory('Mat', '11 000,00', 'Ökat', '+500,00')}" rank="${this.activeCategory === 'Mat' ? 'primary' : 'secondary'}"
                ><gds-icon-store class=""></gds-icon-store></gds-button></gds-theme></gds-text></gds-flex>
                <gds-flex place-items="center"gap="s"flex-direction="column"><span class="${this.activeCategory === 'Boende' ? 'active' : ''} Boende"></span><gds-text><gds-theme color-scheme="light">
              <gds-button  @click="${() => this.renderCategory('Boende', '10 000,00', 'Minskat', '-500,00')}" rank="${this.activeCategory === 'Boende' ? 'primary' : 'secondary'}"
                ><gds-icon-home-open class=""></gds-icon-home-open></gds-button></gds-theme></gds-text></gds-flex>
                <gds-flex place-items="center"gap="s"flex-direction="column"><span class="${this.activeCategory === 'Stuga' ? 'active' : ''} Stuga"></span><gds-text><gds-theme color-scheme="light">
              <gds-button  @click="${() => this.renderCategory('Stuga', '8 000,00', 'Minskat', '-250,00')}" rank="${this.activeCategory === 'Stuga' ? 'primary' : 'secondary'}"
                ><gds-icon-home-open class=""></gds-icon-home-open></gds-button></gds-theme></gds-text></gds-flex>
                <gds-flex place-items="center"gap="s"flex-direction="column"><span class="${this.activeCategory === 'Livstil' ? 'active' : ''} Livstil"></span><gds-text><gds-theme color-scheme="light">
              <gds-button  @click="${() => this.renderCategory('Livstil', '4 000,00', 'Ökat', '+5200,00')}" rank="${this.activeCategory === 'Livstil' ? 'primary' : 'secondary'}"
                ><gds-icon-fashion class=""></gds-icon-fashion></gds-button></gds-theme></gds-text></gds-flex>



      </gds-flex>
      <gds-flex justify-content="space-between" flex-direction="row">
        <gds-flex flex-direction="column">
          <gds-text color="secondary" font-size="detail-s">${this.label}</gds-text
          ><gds-text font-size="heading-s">${this.amount}</gds-text></gds-flex
        >
        <gds-flex class="right" gap="2xs" flex-direction="row">
          <gds-flex flex-direction="column">
            <gds-text text-align="end" color="secondary" font-size="detail-s"
              >${this.amountDiff}</gds-text
            ><gds-flex gap="xs" place-items="center"
              ><gds-text  font-size="heading-s">
              ${this.status}</gds-text
              ></gds-flex
            > </gds-flex
          ><gds-flex></gds-flex></gds-flex></gds-flex></gds-flex>
    </tp-card>`
  }
}
