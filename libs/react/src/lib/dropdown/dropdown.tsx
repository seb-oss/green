export interface DropdownProps {}

export const Dropdown = ({}: DropdownProps) => {
  return (
    <div>
      <button></button>
      <div role="listbox">
        <button className="close">
          <span className="sr-only">Close</span>
        </button>
        <ul role="listbox">
          <li role="option" aria-selected={false}>Option 1</li>
        </ul>
      </div>
    </div>
  )
}

export default Dropdown
