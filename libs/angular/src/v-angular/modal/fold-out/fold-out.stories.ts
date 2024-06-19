import { CommonModule } from '@angular/common'
import { APP_INITIALIZER } from '@angular/core'
// import {
//   FaIconLibrary,
//   FontAwesomeModule,
// } from '@fortawesome/angular-fontawesome'
// import { faEllipsisH } from '@fortawesome/pro-regular-svg-icons'
// import { NgvI18nModule } from '@sebgroup/ngv-i18n'
import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryFn,
} from '@storybook/angular'
import { FoldOutComponent } from './fold-out.component'
import { FoldOutOptionDirective } from './fold-out.directive'
import { exampleAlt, examplePrimary } from './fold-out.examples'

export default {
  title: 'V-Angular/Fold Out',
  component: FoldOutComponent,
  decorators: [
    // applicationConfig({
    //   providers: [
    //     {
    //       provide: APP_INITIALIZER,
    //       useFactory: (iconLibrary: FaIconLibrary) => {
    //         return async () => iconLibrary.addIcons(faEllipsisH);
    //       },
    //       deps: [FaIconLibrary],
    //       multi: true,
    //     },
    //   ],
    // }),
    moduleMetadata({
      declarations: [FoldOutOptionDirective],
      imports: [CommonModule /*FontAwesomeModule, NgvI18nModule*/],
    }),
  ],
  argTypes: {
    alignOptions: {
      control: {
        type: 'inline-radio',
        options: ['left', 'right'],
      },
    },
  },
} as Meta

const Template: StoryFn<FoldOutComponent> = (args: FoldOutComponent) => ({
  template: /* html */ `
  <div class="story-wrapper">
    <ngv-fold-out [alignOptions]="alignOptions">
      <div ngvOption>View details</div>
      <div ngvOption>Sign payment</div>
      <div ngvOption class="my-custom-class">Delete</div>
    </ngv-fold-out>
  </div>`,
  styleUrls: ['./fold-out.stories.scss'],
  props: args,
})

const TemplateAlt: StoryFn<FoldOutComponent> = (args: FoldOutComponent) => ({
  template: /* html */ `
    <div class="story-wrapper--right-align">
      <ngv-fold-out [alignOptions]="alignOptions">
        <div ngvOption>View details</div>
        <div ngvOption>Sign payment</div>
        <div ngvOption class="my-custom-class">Delete</div>
      </ngv-fold-out>
    </div>`,
  styleUrls: ['./fold-out.stories.scss'],
  props: args,
})

export const Primary = Template.bind({})
Primary.args = {
  alignOptions: 'left',
}
Primary.parameters = {
  docs: { source: { code: examplePrimary } },
}

export const Alternative = TemplateAlt.bind({})
Alternative.args = {
  alignOptions: 'right',
}
Alternative.parameters = {
  docs: { source: { code: exampleAlt } },
}
