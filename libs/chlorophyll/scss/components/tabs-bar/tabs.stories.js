const Template = () => {
  return `
    <div>
      <nav role="tablist">
        <a href="#tab1" aria-controls="tab-content-1" role="tab" aria-selected="true">
          Tab 1
        </a>
        <a href="#tab2" aria-controls="tab-content-2" role="tab">
          Tab 2
        </a>
        <a href="#tab3" aria-controls="tab-content-3" role="tab">
          Tab 3
        </a>
      </nav>
      <section aria-live="polite">
        <article id="tab-content-1" role="tabpanel" aria-hidden="false">
          <p class="pt-5">Content for tab 1, note that padding needs to be added to content, in this case we've used <code>pt-5</code> padding top with spacing unit 5.</p>
        </article>
        <article id="tab-content-2" role="tabpanel" aria-hidden="true">
          Content for tab 2
        </article>
        <article id="tab-content-3" role="tabpanel" aria-hidden="true">
          Content for tab 3
        </article>
      </section>
    </div>`
}

export default {
  title: 'Components/Tabs',

  parameters: {
    componentIds: ['component-tab'],
  },
}

export const Tabs = {
  render: Template.bind({}),
  name: 'Tabs',
}
