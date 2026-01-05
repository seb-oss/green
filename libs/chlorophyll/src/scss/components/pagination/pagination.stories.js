export default {
  title: 'Components/Pagination',
  tags: ['autodocs'],
  parameters: {
    componentIds: ['component-pagination'],
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['', 'small'],
    },
  },
}

export const Pagination = {
  render: (args) => `
    <nav class="gds-pagination ${args.size}" role="navigation" aria-label="Pagination">
    <ul class="gds-reset">
      <li>
        <a href="page/4" aria-label="Previous Page" class="gds-reset">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M206.7 464.6l-183.1-191.1C18.22 267.1 16 261.1 16 256s2.219-11.97 6.688-16.59l183.1-191.1c9.152-9.594 24.34-9.906 33.9-.7187c9.625 9.125 9.938 24.37 .7187 33.91L73.24 256l168 175.4c9.219 9.5 8.906 24.78-.7187 33.91C231 474.5 215.8 474.2 206.7 464.6z" />
          </svg>
        </a>
      </li>
      <li>
        <a href="page/1" aria-label="First Page" class="gds-reset">
          1
        </a>
      </li>
      <li aria-hidden="true">...</li>
      <li>
        <a href="page/3" aria-label="Page 3" class="gds-reset">
          3
        </a>
      </li>
      <li>
        <a href="page/4" aria-label="Page 4" class="gds-reset">
          4
        </a>
      </li>
      <li>
        <a href="page/5" aria-label="Page 5" class="gds-reset">
          5
        </a>
      </li>
      <li>
        <a href="page/6" aria-label="Page 6" class="gds-reset">
          6
        </a>
      </li>
      <li>
        <a href="page/7" aria-label="Page 7" class="gds-reset">
          7
        </a>
      </li>
      <li aria-hidden="true">...</li>
      <li>
        <a href="page/10" aria-label="Last Page" class="gds-reset">
          10
        </a>
      </li>
      <li>
        <a href="page/6" aria-label="Next Page" class="gds-reset">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M113.3 47.41l183.1 191.1c4.469 4.625 6.688 10.62 6.688 16.59s-2.219 11.97-6.688 16.59l-183.1 191.1c-9.152 9.594-24.34 9.906-33.9 .7187c-9.625-9.125-9.938-24.38-.7187-33.91l168-175.4L78.71 80.6c-9.219-9.5-8.906-24.78 .7187-33.91C88.99 37.5 104.2 37.82 113.3 47.41z" />
          </svg>
        </a>
      </li>
    </ul>
  </nav>`,
}
