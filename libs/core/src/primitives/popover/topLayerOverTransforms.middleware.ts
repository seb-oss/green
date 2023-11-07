/* eslint-disable */
/**
 * Temporary implemenation of topLayerOverTransforms middleware snagged from here: https://github.com/floating-ui/floating-ui/issues/1842
 *
 * This solved positioning issues when a popover is opened from a parent element that is using transforms.
 *
 * As soon as this is merged in FloatingUI we can remove this and use the official version.
 */

export const topLayerOverTransforms = () => ({
  name: 'topLayer',
  async fn(middlewareArguments: any) {
    const {
      x,
      y,
      elements: { reference, floating },
    } = middlewareArguments
    let onTopLayer = false
    let topLayerIsFloating = false
    const diffCoords = {
      x: 0,
      y: 0,
    }
    try {
      onTopLayer = onTopLayer || floating.matches(':open')
      // eslint-disable-next-line no-empty
    } catch (e) {}
    try {
      onTopLayer = onTopLayer || floating.matches(':modal')
      // eslint-disable-next-line no-empty
    } catch (e) {}
    topLayerIsFloating = onTopLayer
    if (!onTopLayer) {
      const dialogAncestorQueryEvent = new Event('floating-ui-dialog-test', {
        composed: true,
        bubbles: true,
      })
      floating.addEventListener(
        'floating-ui-dialog-test',
        (event: any) => {
          event.composedPath().forEach((el: any) => {
            if (el === floating || el.localName !== 'dialog') return
            try {
              onTopLayer = onTopLayer || el.matches(':modal')
              if (onTopLayer) {
                // console.log(el);
              }
              // eslint-disable-next-line no-empty
            } catch (e) {}
          })
        },
        { once: true }
      )
      floating.dispatchEvent(dialogAncestorQueryEvent)
    }
    let overTransforms = false
    const containingBlock = getContainingBlock(reference)
    if (containingBlock !== null && !isWindow(containingBlock)) {
      overTransforms = true
    }

    if (onTopLayer && overTransforms) {
      const rect = containingBlock.getBoundingClientRect()
      diffCoords.x = rect.x
      diffCoords.y = rect.y
    }

    if (onTopLayer && topLayerIsFloating) {
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: diffCoords,
      }
    }

    if (onTopLayer) {
      return {
        x,
        y,
        data: diffCoords,
      }
    }

    return {
      x: x - diffCoords.x,
      y: y - diffCoords.y,
      data: diffCoords,
    }
  },
})

/* COPY/PASTE from Floating UI */

function getContainingBlock(element: any) {
  let currentNode = getParentNode(element)

  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host
  }

  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode
    } else {
      const parent = currentNode.assignedSlot
        ? currentNode.assignedSlot
        : currentNode.parentNode
      currentNode = isShadowRoot(parent) ? parent.host : parent
    }
  }

  return null
}

export function isLastTraversableNode(node: any) {
  return ['html', 'body', '#document'].includes(getNodeName(node))
}

function isContainingBlock(element: any) {
  // TODO: Try and use feature detection here instead
  const isFirefox = /firefox/i.test(getUAString())
  if (element.tagName === 'dialog') {
    return true
  }
  const css = getComputedStyle(element) // This is non-exhaustive but covers the most common CSS properties that
  // create a containing block.
  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

  return (
    css.transform !== 'none' ||
    css.perspective !== 'none' ||
    css.contain === 'paint' ||
    ['transform', 'perspective'].includes(css.willChange) ||
    (isFirefox && css.willChange === 'filter') ||
    (isFirefox && (css.filter ? css.filter !== 'none' : false))
  )
}

export function getUAString() {
  const uaData = (navigator as any).userAgentData

  if (uaData?.brands) {
    return uaData.brands
      .map((item: any) => `${item.brand}/${item.version}`)
      .join(' ')
  }

  return navigator.userAgent
}

export function getParentNode(node: any) {
  if (getNodeName(node) === 'html') {
    return node
  }

  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    node.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    node.parentNode || // DOM Element detected
    (isShadowRoot(node) ? node.host : null) || // ShadowRoot detected
    getDocumentElement(node) // fallback
  )
}

export function getNodeName(node: any) {
  return isWindow(node) ? '' : node ? (node.nodeName || '').toLowerCase() : ''
}

export function getDocumentElement(node: any) {
  return (
    (isNode(node) ? node.ownerDocument : node.document) || window.document
  ).documentElement
}

export function isNode(value: any) {
  return value instanceof getWindow(value).Node
}

export function isWindow(value: any) {
  return (
    value &&
    value.document &&
    value.location &&
    value.alert &&
    value.setInterval
  )
}

export function getWindow(node: any) {
  if (node == null) {
    return window
  }

  if (!isWindow(node)) {
    const ownerDocument = node.ownerDocument
    return ownerDocument ? ownerDocument.defaultView || window : window
  }

  return node
}

export function isShadowRoot(node: any) {
  // Browsers without `ShadowRoot` support
  if (typeof ShadowRoot === 'undefined') {
    return false
  }

  const OwnElement = getWindow(node).ShadowRoot
  const testNode = node
  return node instanceof OwnElement || testNode instanceof ShadowRoot
}

export function isHTMLElement(value: any) {
  return value instanceof getWindow(value).HTMLElement
}
