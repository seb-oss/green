export const setFocus = (htmlElRef: HTMLElement, selector: string) => {
  let targetNode = htmlElRef.querySelector<HTMLTableCellElement>(selector)
  if (targetNode) {
    setTimeout(() => {
      targetNode = htmlElRef.querySelector<HTMLTableCellElement>(selector)
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      targetNode!.focus()
    }, 0)
  }
}
