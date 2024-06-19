import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, importProvidersFrom } from '@angular/core';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/pro-regular-svg-icons';
import { NgvI18nModule } from '@sebgroup/ngv-i18n';
import { applicationConfig, Meta, moduleMetadata, StoryFn } from '@storybook/angular';

import { SlideOutComponent } from './slide-out.component';

interface WithExtras {
  action: (val: any) => void;
  outsideContent: boolean;
}

export default {
  title: 'Modal/Slide Out',
  component: SlideOutComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(NgvI18nModule),
        {
          provide: APP_INITIALIZER,
          useFactory: (iconLibrary: FaIconLibrary) => async () => iconLibrary.addIcons(faTimes),
          deps: [FaIconLibrary],
          multi: true,
        },
      ],
    }),
    moduleMetadata({
      imports: [CommonModule, FontAwesomeModule, NgvI18nModule],
    }),
  ],
  argTypes: {
    side: {
      control: {
        type: 'inline-radio',
        options: ['left', 'right'],
      },
    },
    action: {
      table: {
        disable: true,
      },
    },
    outsideContent: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: StoryFn<SlideOutComponent & WithExtras> = (args: SlideOutComponent & WithExtras) => ({
  template: /* html */ `
  <ngv-slideout-modal #slideOut [initiallyShown]="initiallyShown" [closable]="closable" [content]="content" [title]="title" [buttons]="buttons" [side]="side" [autoWidth]="autoWidth" (ngvCloseEvent)="action($event)">
      <p *ngIf="!outsideContent && !autoWidth">Some content in the content div</p>
      <div *ngIf="outsideContent" slot="outside-content" [ngStyle]="{ 'background': 'black', 'color': 'white', 'padding': '1rem' }">
        This is the slotted content. This can be used in the (rare) case of content that needs
        to take up space outside the well-padded modal content div.
      </div>
      <div *ngIf="autoWidth" slot="outside-content" [ngStyle]="{ 'background': 'green', 'color': 'white', 'padding': '1rem', 'width': '50vw' }">
        This is a modal with extra wide content.
      </div>
    </ngv-slideout-modal>
    <button class="sdv-button" (click)="slideOut.open()">Open slide-out</button>
    `,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  initiallyShown: true,
  closable: true,
  buttons: {
    negative: 'button_cancel',
    neutral: 'button_apply',
    positive: 'button_save',
  },
  side: 'right',
  title: 'Modal title',
  content: 'Some content in the content div.\n\nSupports line breaks',
  action: ((closed: boolean) => console.log('is closed?', closed)) as any,
};

export const WithSlottedContent = Template.bind({});
WithSlottedContent.args = {
  ...Primary.args,
  title: 'Modal title for with slotted content',
  outsideContent: true,
};

export const WithAutoWidthEnabled = Template.bind({});
WithAutoWidthEnabled.args = {
  ...Primary.args,
  title: 'Modal title for wider modal',
  autoWidth: true,
};
