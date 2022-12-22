import { ReactNode } from 'react'

interface IconButtonInterface {
  children: ReactNode
}

const IconButton = ({ children }: IconButtonInterface) => {

  return(
    <button className="icon">
      { children }
    </button>
  )
}

export default IconButton
