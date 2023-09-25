1. Tokens:
   - Accessability
     - Dark mode
     - contrast
     - motion
   - Transitions
   - Border radius
   - fontsizes
   - spaces
2. Add tooltip to the component library
3. Directions and animations
4. Anchor points https://developer.chrome.com/blog/tether-elements-to-each-other-with-css-anchor-positioning/

```html
<button popovertarget="popover" popovertargetaction="show">Trigger</button>
<details part="body" id="popover" popover>
  <summary>${this.content}</summary>
  <slot name="content">${this.content}</slot>
</details>
```

```css
::backdrop {
  background-color: rgba(0, 0, 0, 0.1) !important;
}

[popover] {
  position: absolute;
  color: CanvasText;
  inset: unset;
  bottom: 5px;
  right: 5px;
  margin: 0;
}

:popover-open {
  display: flex;
}
```
