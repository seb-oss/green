export const setFocus = (htmlElRef: HTMLElement, selector: string) => {
  let targetNode = htmlElRef.querySelector<HTMLTableCellElement>(selector)
  if (targetNode) {
    setTimeout(() => {
      targetNode = htmlElRef.querySelector<HTMLTableCellElement>(selector)
      targetNode!.focus()
    }, 0)
  }
}
