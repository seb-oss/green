import { ReactNode, MouseEvent } from 'react'

interface IconButtonInterface {
  children: ReactNode
  onClick: (event: MouseEvent) => void
  "aria-expanded"?: boolean
  "aria-controls"?: string
}

const IconButton = ({ children, onClick, ...props }: IconButtonInterface) => {

  return(
    <button className="icon" onClick={onClick} aria-controls={props["aria-controls"]} aria-expanded={props["aria-expanded"]} >
      { children }
    </button>
  )
}

export default IconButton
