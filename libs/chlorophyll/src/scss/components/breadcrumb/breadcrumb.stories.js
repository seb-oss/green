export default {
  title: 'Components/Breadcrumb',
  tags: ['autodocs'],
  parameters: {
    componentIds: ['component-Breadcrumb'],
  },
}

/**
 * [Source code](https://github.com/seb-oss/green/tree/main/libs/chlorophyll/scss/components/breadcrumb)
 * &nbsp;|&nbsp;
 * [Usage guidelines](https://designlibrary.sebgroup.com/components/component-breadcrumbs)
 *
 * Displays the path to the current resource using a hierarchy of links.
 */
export const Breadcrumb = {
  render: () => `
    <ul class="gds-breadcrumb">
      <li><a href="">Cart</a></li>
      <li class="icon">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.22817 5.19072L8.60942 5.80947C8.46255 5.95635 8.46255 6.19385 8.60942 6.34072L14.2563 12.0001L8.60942 17.6595C8.46255 17.8063 8.46255 18.0438 8.60942 18.1907L9.22817 18.8095C9.37505 18.9563 9.61255 18.9563 9.75942 18.8095L16.3032 12.2657C16.45 12.1188 16.45 11.8813 16.3032 11.7345L9.75942 5.19072C9.61255 5.04385 9.37505 5.04385 9.22817 5.19072Z"
            fill="#333333"
          />
        </svg>
      </li>
      <li><a href="">Billing</a></li>
      <li class="icon">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.22817 5.19072L8.60942 5.80947C8.46255 5.95635 8.46255 6.19385 8.60942 6.34072L14.2563 12.0001L8.60942 17.6595C8.46255 17.8063 8.46255 18.0438 8.60942 18.1907L9.22817 18.8095C9.37505 18.9563 9.61255 18.9563 9.75942 18.8095L16.3032 12.2657C16.45 12.1188 16.45 11.8813 16.3032 11.7345L9.75942 5.19072C9.61255 5.04385 9.37505 5.04385 9.22817 5.19072Z"
            fill="#333333"
          />
        </svg>
      </li>
      <li><a href="">Shopping</a></li>
      <li class="icon">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.22817 5.19072L8.60942 5.80947C8.46255 5.95635 8.46255 6.19385 8.60942 6.34072L14.2563 12.0001L8.60942 17.6595C8.46255 17.8063 8.46255 18.0438 8.60942 18.1907L9.22817 18.8095C9.37505 18.9563 9.61255 18.9563 9.75942 18.8095L16.3032 12.2657C16.45 12.1188 16.45 11.8813 16.3032 11.7345L9.75942 5.19072C9.61255 5.04385 9.37505 5.04385 9.22817 5.19072Z"
            fill="#333333"
          />
        </svg>
      </li>
      <li>Payment</li>
   </ul>   
    `,
}
