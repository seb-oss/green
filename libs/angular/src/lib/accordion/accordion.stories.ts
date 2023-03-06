import Documentation from './documentation.mdx'
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { NggAccordionComponent } from './accordion.component';
import { NggAccordionModule } from './accordion.module';

export default {
    title: 'Components/Accordion',
    component: NggAccordionComponent,
    decorators: [
      moduleMetadata({
        imports: [NggAccordionModule],
      }),
    ],
    parameters: {
      docs: {
        page: Documentation,
      },
      componentIds: ['component-accordion' ],
    },
} as Meta<NggAccordionComponent>

const Template: Story<NggAccordionComponent> = () => {
    
    return {
        template:`
        <ngg-accordion [closeOthers]=false>
            <div ngg-accordion-list-item listItemHeader="First section" listItemSubHeader="The first section">
                <p>This is the content of the first section</p>
            </div>
            <div ngg-accordion-list-item listItemHeader="Second section" listItemSubHeader="The second section">
                <p>This is the content of the second section</p>
            </div>
            <div ngg-accordion-list-item listItemHeader="Third section" listItemSubHeader="The third section">
              <p>This is the content of the second section</p>
            </div>
        </ngg-accordion>
        `,
    }
}

const NoSubHeadersTemplate: Story<NggAccordionComponent> = () => {
  return {
    template:`
    <ngg-accordion [closeOthers]=false>
        <div ngg-accordion-list-item listItemHeader="First section">
            <p>This is the content of the first section</p>
        </div>
        <div ngg-accordion-list-item listItemHeader="Second section">
            <p>This is the content of the second section</p>
        </div>
        <div ngg-accordion-list-item listItemHeader="Third section">
          <p>This is the content of the second section</p>
        </div>
    </ngg-accordion>
    `,
  }
}


const CheckBoxTemplate: Story<NggAccordionComponent> = () => {
    
  return {
      template:`
      <ngg-accordion [closeOthers]=true>
          <div ngg-accordion-list-item listItemHeader="First section" listItemSubHeader="First section with just one option">
            <div>
              <label class="form-control">
                <input type="checkbox" />
                <span>Option one.</span>
                <i></i>
              </label>
            </div>
          </div>
          <div ngg-accordion-list-item listItemHeader="Second section" listItemSubHeader="Second section with three options">
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
          <div ngg-accordion-list-item listItemHeader="Third section" listItemSubHeader="Third section with two options">
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
