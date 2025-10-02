import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as s}from"./index-DoDsito1.js";import"./index-LQ0ODMJ2.js";import"./_commonjsHelpers-Cpj98o6Y.js";function t(n){const o={code:"code",pre:"pre",...s(),...n.components};return e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { css } from 'lit'

const style = css\`
  @layer base, types, layout, motion;
  @layer base {
    :host {
      display: inline-block;
    }

    @layer motion {
      @media (prefers-reduced-motion: reduce) {
        a {
          transition: none;
        }
      }
    }

    a {
      text-decoration: none;
      outline-color: transparent;
      outline-style: solid;
      outline-width: var(--gds-sys-space-4xs);
      outline-offset: var(--gds-sys-space-4xs);
      border-radius: var(--gds-sys-radius-s);
      transion: all var(--gds-sys-motion-easing-ease-in) var(--gds-sys-motion-duration-fastest)
      overflow: hidden;
      height: max-content;
      color: inherit;
      font: inherit;

      &:visited {
        color: inherit;
      }

      &:focus {
        outline-color: var(--gds-sys-color-content-neutral-01);

        &:not(:focus-visible) {
          outline-color: transparent;
        }
      }

      &:hover {
        background-color: red;
      }

      @media (pointer: fine) {
        &:hover {
          background-color: black;
        }
      }
    }

    .card {
      transition: all 264ms;
    }
  }
\`
export default style
`})})}function c(n={}){const{wrapper:o}={...s(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t(n)}export{c as default};
