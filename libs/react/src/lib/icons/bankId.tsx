import { randomId } from '@sebgroup/extract'
import { IconProps } from '../../types/props'

/**
 * @deprecated
 * This component is deprecated. Use the `gds-icon-bankid` component instead from `@sebgroup/green-react`.
 */
export const BankId = ({ fill, focusable, title, ...props }: IconProps) => {
  let id
  if (title) id = randomId()
  return (
    <svg
      width="24"
      height="24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="140 265 321 304"
      enable-background="new 140 265 321 304"
      aria-hidden={props['aria-hidden']}
      focusable={focusable}
      aria-labelledby={id}
    >
      {title && <title id={id}>{title}</title>}
      <g>
        <path
          fill={fill ? fill : '#479CBE'}
          d="M241.9,423.6l13.2-83.2c-5.2,0-14.1,0-14.1,0c-6.6,0-15.1-3.7-17.6-10.5c-0.8-2.3-2.7-10.2,8.2-17.9
		c3.9-2.7,6.4-5.7,6.9-8c0.5-2.4-0.1-4.5-1.8-6.1c-2.4-2.3-7.1-3.6-13.1-3.6c-10.1,0-17.2,5.8-17.9,10c-0.5,3.1,1.9,5.6,4,7.2
		c6.3,4.7,7.8,11.5,3.9,17.9c-4,6.6-12.7,10.9-22,11c0,0-9.2,0-14.4,0c-1.2,8.1-20.8,132.3-22.3,142.1h78.1
		c0.7-4.4,4.3-27.9,9.2-58.9H241.9z"
        />
        <path
          fill={fill ? fill : '#00A5C3'}
          d="M346.5,267.6H267l-10.6,67.3l13.5,0c7.4,0,14.4-3.4,17.4-8.3c1-1.6,1.4-3,1.4-4.3c0-2.8-1.9-4.9-3.8-6.3
		c-5.2-3.9-6.3-8-6.3-10.9c0-0.6,0-1.1,0.1-1.6c1.1-7.1,10.7-14.8,23.4-14.8c7.6,0,13.4,1.8,16.9,5.1c3.1,2.9,4.3,7,3.4,11.3
		c-1.1,5.1-6.2,9.3-9.1,11.4c-7.7,5.4-6.7,10.1-6.2,11.5c1.6,4.2,7.7,6.9,12.4,6.9H340c0,0,0,0,0,0.1c28,0.2,43,13.1,38.3,43.1
		c-4.4,27.9-25.8,39.9-51.3,40.1l-10.1,64.4h14.9c62.9,0,114.3-40.4,124.4-104.2C468.7,299.2,418.5,267.6,346.5,267.6z"
        />
        <path
          fill={fill ? fill : '#235971'}
          d="M346.5,267.6H267l-10.6,67.3l13.5,0c7.4,0,14.4-3.4,17.4-8.3c1-1.6,1.4-3,1.4-4.3c0-2.8-1.9-4.9-3.8-6.3
		c-5.2-3.9-6.3-8-6.3-10.9c0-0.6,0-1.1,0.1-1.6c1.1-7.1,10.7-14.8,23.4-14.8c7.6,0,13.4,1.8,16.9,5.1c3.1,2.9,4.3,7,3.4,11.3
		c-1.1,5.1-6.2,9.3-9.1,11.4c-7.7,5.4-6.7,10.1-6.2,11.5c1.6,4.2,7.7,6.9,12.4,6.9H340c0,0,0,0,0,0.1c28,0.2,43,13.1,38.3,43.1
		c-4.4,27.9-25.8,39.9-51.3,40.1l-10.1,64.4h14.9c62.9,0,114.3-40.4,124.4-104.2C468.7,299.2,418.5,267.6,346.5,267.6z"
        />
        <g>
          <path
            fill={fill ? fill : '#235971'}
            d="M150.7,511.2h31.9c13.6,0,16.9,6.9,15.9,13.2c-0.8,5.1-4.3,8.9-10.3,11.4c7.6,2.9,10.6,7.4,9.5,14.5
			c-1.4,8.9-9.1,15.5-19.2,15.5h-36.3L150.7,511.2z M171.8,533.8c6.2,0,9.1-3.3,9.7-7.2c0.6-4.2-1.3-7.1-7.5-7.1h-5.5l-2.2,14.3
			H171.8z M168.4,557.4c6.4,0,10.1-2.6,11-7.9c0.7-4.6-1.9-7.3-8.1-7.3H165l-2.4,15.3H168.4z"
          />
          <path
            fill={fill ? fill : '#235971'}
            d="M242.4,566.2c-8.3,0.6-12.3-0.3-14.3-3.9c-4.4,2.7-9.3,4.1-14.5,4.1c-9.4,0-12.7-4.9-11.8-10.3
			c0.4-2.6,1.9-5.1,4.3-7.2c5.2-4.5,18-5.1,23-8.5c0.4-3.8-1.1-5.2-5.8-5.2c-5.5,0-10.1,1.8-18,7.2l1.9-12.4
			c6.8-4.9,13.4-7.2,21-7.2c9.7,0,18.3,4,16.7,14.6l-1.9,12c-0.7,4.2-0.5,5.5,4.2,5.6L242.4,566.2z M228,547.4
			c-4.4,2.8-12.6,2.3-13.5,8.1c-0.4,2.7,1.3,4.7,4,4.7c2.6,0,5.8-1.1,8.4-2.9c-0.2-1-0.1-2,0.2-3.9L228,547.4z"
          />
          <path
            fill={fill ? fill : '#235971'}
            d="M257.9,523.5h16.6l-0.9,5.5c5.3-4.5,9.3-6.2,14.5-6.2c9.3,0,13.6,5.7,12.1,15l-4.3,27.9h-16.6l3.6-23.1
			c0.7-4.2-0.6-6.2-3.8-6.2c-2.6,0-5,1.4-7.3,4.5l-3.8,24.7h-16.6L257.9,523.5z"
          />
          <path
            fill={fill ? fill : '#235971'}
            d="M313.1,511.2h16.6l-4.2,26.8l15.9-14.5h20.5l-20.4,18l16.4,24.2h-20.9l-12.6-19.5h-0.2l-3,19.5h-16.6
			L313.1,511.2z"
          />
        </g>
        <g>
          <path
            fill={fill ? fill : '#479CBE'}
            d="M371.9,511.2H391l-8.4,54.5h-19.1L371.9,511.2z"
          />
          <path
            fill={fill ? fill : '#479CBE'}
            d="M400.3,511.2h27.3c21.1,0,27.2,15.3,25.2,28c-1.9,12.4-11.7,26.5-30.2,26.5h-30.8L400.3,511.2z M418,552.7
			c9.3,0,14.4-4.6,15.9-14.3c1.1-7.2-1.1-14.3-11.4-14.3h-5.1l-4.4,28.6H418z"
          />
        </g>
      </g>
    </svg>
  )
}
