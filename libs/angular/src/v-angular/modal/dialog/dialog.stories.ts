import { CommonModule } from '@angular/common';
import { importProvidersFrom } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgvI18nModule } from '@sebgroup/ngv-i18n';
import { applicationConfig, Meta, moduleMetadata, StoryFn } from '@storybook/angular';

import { DialogComponent } from './dialog.component';

export default {
  title: 'Modal/Dialog',
  component: DialogComponent,
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(NgvI18nModule)],
    }),
    moduleMetadata({
      imports: [CommonModule, NgvI18nModule, FontAwesomeModule],
    }),
  ],
} as Meta;

const Template: StoryFn<DialogComponent> = (args: DialogComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  initiallyShown: true,
  buttons: {
    negative: 'button_cancel',
    neutral: 'button_apply',
    positive: 'button_save',
  },
  content:
    'You can supply the content seen here either through the <code>[content]="string"</code> property or</br>by passing children between the opening and closing tags <code>&lt;c-dialog&gt; ...children &lt;/c-dialog&gt;</code>',
};
