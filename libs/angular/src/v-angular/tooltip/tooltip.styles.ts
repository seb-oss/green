export const tooltipBoxStyles = new Map<string, any>([
  ['position', 'absolute'],
  ['z-index', '1045'],
  ['border-radius', '.25rem'],
  ['padding', '.5rem 1rem'],
  ['background-color', '#1a1a1a'],
  ['color', '#fff'],
  ['font-size', '0.875rem'],
  ['font-weight', '400'],
  ['line-height', '1.5'],
  ['padding', '0.5rem'],
  ['pointer-events', 'none'],
])

export const tooltipArrowTopStyles = new Map<string, any>([
  ['position', 'absolute'],
  ['width', '0'],
  ['height', '0'],
  ['border', '0.5rem solid transparent'],
  ['bottom', '-1rem'],
  ['left', '50%'],
  ['transform', 'translateX(-50%)'],
  ['border-color', '#1a1a1a transparent transparent'],
])

export const tooltipArrowBottomStyles = new Map<string, any>([
  ['position', 'absolute'],
  ['width', '0'],
  ['height', '0'],
  ['border', '0.5rem solid transparent'],
  ['top', '-1rem'],
  ['left', '50%'],
  ['transform', 'translateX(-50%)'],
  ['border-color', 'transparent transparent #1a1a1a'],
])

export const tooltipArrowLeftStyles = new Map<string, any>([
  ['position', 'absolute'],
  ['width', '0'],
  ['height', '0'],
  ['border', '0.5rem solid transparent'],
  ['right', '-1rem'],
  ['top', '50%'],
  ['transform', 'translateY(-50%)'],
  ['border-color', 'transparent transparent transparent #1a1a1a'],
])

export const tooltipArrowRightStyles = new Map<string, any>([
  ['position', 'absolute'],
  ['width', '0'],
  ['height', '0'],
  ['border', '0.5rem solid transparent'],
  ['left', '-1rem'],
  ['top', '50%'],
  ['transform', 'translateY(-50%)'],
  ['border-color', 'transparent #1a1a1a transparent transparent'],
])

export const tooltipArrowStyles = {
  top: tooltipArrowTopStyles,
  bottom: tooltipArrowBottomStyles,
  left: tooltipArrowLeftStyles,
  right: tooltipArrowRightStyles,
}
