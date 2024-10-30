import { Meta, moduleMetadata, StoryFn } from '@storybook/angular'

import { NggAccordionComponent } from './accordion.component'
import { NggAccordionModule } from './accordion.module'

export default {
  title: 'Components/Accordion',
  component: NggAccordionComponent,
  decorators: [
    moduleMetadata({
      imports: [NggAccordionModule],
    }),
  ],
  parameters: {
    componentIds: ['component-accordion'],
  },
} as Meta<NggAccordionComponent>

const Template: StoryFn<NggAccordionComponent> = () => {
  return {
    template: `
        <ngg-accordion [closeOthers]=false>
            <div ngg-accordion-list-item listItemHeader="First accordion heading" listItemSubHeader="First accordion sublabel">
                <p>This is the content of the first section</p>
            </div>
            <div ngg-accordion-list-item listItemHeader="Second accordion heading" listItemSubHeader="Second accordion sublabel">
                <p>This is the content of the second section</p>
            </div>
            <div ngg-accordion-list-item labelElementLevel="3" listItemHeader="Third accordion heading - aria-level 3" listItemSubHeader="Third accordion sublabel">
              <p>This is the content of the second section</p>
            </div>
        </ngg-accordion>
        `,
  }
}

const NoSubHeadersTemplate: StoryFn<NggAccordionComponent> = () => {
  return {
    template: `
        <ngg-accordion [closeOthers]=false>
            <div ngg-accordion-list-item listItemHeader="First accordion heading">
                <p>This is the content of the first section</p>
            </div>
            <div ngg-accordion-list-item listItemHeader="Second accordion heading">
                <p>This is the content of the second section</p>
            </div>
            <div ngg-accordion-list-item listItemHeader="Third accordion heading">
              <p>This is the content of the second section</p>
            </div>
        </ngg-accordion>
        `,
  }
}

const CheckBoxTemplate: StoryFn<NggAccordionComponent> = () => {
  return {
    template: `
      <ngg-accordion [closeOthers]=true>
          <div ngg-accordion-list-item listItemHeader="First accordion accordion" listItemSubHeader="First accordion with just one option">
            <div>
              <label class="form-control">
                <input type="checkbox" />
                <span>Option one.</span>
                <i></i>
              </label>
            </div>
          </div>
          <div ngg-accordion-list-item listItemHeader="Second accordion accordion" listItemSubHeader="Second accordion with three options">
              <div>
                <label class="form-control">
                  <input type="checkbox" />
                  <span>Option one.</span>
                  <i></i>
                </label>
                <label class="form-control">
                  <input type="checkbox" />
                  <span>Option two.</span>
                  <i></i>
                </label>
                <label class="form-control">
                  <input type="checkbox" />
                  <span>Option three.</span>
                  <i></i>
                  </label>
              </div>
          </div>
          <div ngg-accordion-list-item listItemHeader="Third accordion accordion" listItemSubHeader="Third accordion with two options">
            <div>
              <label class="form-control">
                <input type="checkbox" />
                <span>Option one.</span>
                <i></i>
              </label>
            <label class="form-control">
              <input type="checkbox" />
              <span>Option two.</span>
              <i></i>
            </label>
          </div>
          </div>
      </ngg-accordion>
      `,
  }
}

export const Simple = Template.bind({})
export const Nosubheaders = NoSubHeadersTemplate.bind({})
export const Closeothers = CheckBoxTemplate.bind({})
