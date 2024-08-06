import { CommonModule } from '@angular/common'
// import { APP_INITIALIZER } from '@angular/core'

// import {
//   FaIconLibrary,
//   FontAwesomeModule,
// } from '@fortawesome/angular-fontawesome'
// import { faInfoCircle } from '@fortawesome/pro-regular-svg-icons'
// import { NgvTooltipModule } from '@sebgroup/ngv-tooltip'
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular'

import { InfoCircleComponent } from './info-circle.component'

interface WithExtras {}

export default {
  title: 'V-Angular/Info Circle',
  component: InfoCircleComponent,
  decorators: [
    moduleMetadata({
      declarations: [InfoCircleComponent],
      imports: [CommonModule /* FontAwesomeModule, NgvTooltipModule */],
      // providers: [
      //   {
      //     provide: APP_INITIALIZER,
      //     useFactory: (iconLibrary: FaIconLibrary) => async () => iconLibrary.addIcons(faInfoCircle),
      //     deps: [FaIconLibrary],
      //     multi: true,
      //   },
      // ],
    }),
  ],
} as Meta

type StoryArgs = InfoCircleComponent & WithExtras

const Template: StoryFn<StoryArgs> = (args: StoryArgs) => ({
  template: /*html*/ `
    <ngv-info-circle [attr.data-thook]="thook"
    [info]="info">
    </ngv-info-circle>`,
  props: { ...args },
})

export const Primary = Template.bind({})
Primary.args = {
  info: 'Very informative and supporting text',
  thook: 'help-text',
}
