/* eslint-disable @nx/enforce-module-boundaries */
import { LitElement } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'
import { ref } from 'lit/directives/ref.js'

import { html } from '@sebgroup/green-core/scoping.js'

import '@sebgroup/green-core/components/theme/index.js'
import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/grid/index.js'
import '@sebgroup/green-core/components/text/index.js'
import '@sebgroup/green-core/components/link/index.js'
import '@sebgroup/green-core/components/icon/icons/wallet.js'

import { GdsLink } from '@sebgroup/green-core/components/link/index.js'
import { viewportBreakpoints } from '../../../../libs/core/src/utils/helpers/style-expression-parser'

type Todo = {
  text: string
  url: string
}

const todos: Todo[] = [
  {
    text: 'Todo 1',
    url: '#',
  },
  {
    text: 'Todo 2',
    url: '#',
  },
  {
    text: 'Todo 3',
    url: '#',
  },
  {
    text: 'Todo 1',
    url: '#',
  },
]

@customElement('tp-todos')
export class TpTodos extends LitElement {
  @property({ type: Boolean })
  expanded = !window.matchMedia(`(max-width: ${viewportBreakpoints.s})`).matches

  @query('.todo')
  todo: GdsLink | undefined

  connectedCallback() {
    super.connectedCallback()
  }

  renderTodo(todo: Todo) {
    return html`<gds-card
      variant="secondary; hover:information"
      width="100%"
      padding="m"
      shadow="s"
    >
      <gds-flex gap="m" align-items="center">
        <gds-card
          class="icon"
          level="3"
          variant="tertiary"
          border-radius="max"
          padding="s"
          justify-content="center"
          align-items="center"
        >
          <gds-icon-wallet height="20" width="20"></gds-icon-wallet>
        </gds-card>
        <gds-text font-size="detail-m" margin="0 auto 0 0"
          >${todo.text}</gds-text
        >
        <gds-icon-chevron-right></gds-icon-chevron-right>
      </gds-flex>
    </gds-card>`
  }

  #handleClick() {
    if (!this.expanded) {
      this.expanded = true
    }
  }

  #handleClickButton() {
    this.expanded = !this.expanded
  }

  firstUpdated() {
    setTimeout(() => {
      this.style.setProperty(
        '--todo-height',
        `${this.todo?.getBoundingClientRect().height}px`,
      )
    }, 0)
  }

  onRef(ref?: Element) {
    if (ref) {
      ref.classList.add('loaded')
    }
  }

  render() {
    return html` <style>
        :host {
          --duration: 1s;
          --todo-height: 83px;
        }

        .stack {
          cursor: pointer;
          pointer-events: all;

          transition: max-height var(--duration);
          max-height: 108px;
        }

        .stack[aria-expanded='true'] {
          cursor: default;
          pointer-events: none;
          max-height: calc(
            calc(var(--gds-space-m, 0) * ${todos.length - 1}) +
              calc(var(--todo-height, 0) * ${todos.length})
          );
        }

        .todo.loaded {
          transition: all var(--duration);
        }

        .todo {
          height: 100%;
          width: 100%;
          z-index: calc(${todos.length} - var(--todo-index));
          pointer-events: none;

          transform: translateY(
              calc(
                calc(
                    calc(var(--gds-space-m, 0) / 2) * var(--todo-index, 0) * -1
                  ) + calc(var(--todo-height, 0) * var(--todo-index, 0) * -1)
              )
            )
            scale(calc(1 + calc(var(--todo-index, 0) * -0.01)))
            perspective(1500px);
        }

        [aria-expanded='true'] .todo {
          transform: translateY(0) scale(1) perspective(none);
          pointer-events: all;
        }

        .expand-button {
          border: none;
          background: transparent;
          cursor: pointer;
        }

        .todo:hover .icon {
          background-color: var(--gds-color-l2-background-primary);
        }
      </style>
      <gds-flex flex-direction="column" gap="m">
        <gds-flex justify-content="space-between">
          <gds-text tag="h2" font-size="detail-m">Att göra</gds-text>
          <button class="expand-button" @click="${this.#handleClickButton}">
            <gds-text font-size="detail-m"
              >${this.expanded ? 'Visa färre' : 'Visa allt'}</gds-text
            >
          </button>
        </gds-flex>

        <gds-flex
          @click="${this.#handleClick}"
          class="stack"
          flex-direction="column"
          gap="m"
          aria-expanded="${this.expanded}"
        >
          ${todos.map(
            (todo, index) =>
              html`<gds-link
                class="todo"
                style="--todo-index: ${index};"
                href="${todo.url}"
                variant="hidden"
                ${ref(this.onRef)}
              >
                ${this.renderTodo(todo)}
              </gds-link>`,
          )}</gds-flex
        >
      </gds-flex>`
  }
}
