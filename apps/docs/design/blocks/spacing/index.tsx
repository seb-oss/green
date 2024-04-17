import "./style.css"
export default function Spacing({direction, size}: { direction: 'vertical' | 'horizontal', size: 1|2|3|4|5|6|7|8}) {
  return (
    <div className={`gds-spacing gds-spacing--${direction} gds-spacing--${direction}--${size}`}></div>
  )
}
