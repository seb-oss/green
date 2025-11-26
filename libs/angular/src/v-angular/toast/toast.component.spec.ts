import { Component, TemplateRef, ViewChild } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { TranslocoModule } from '@jsverse/transloco'

import { NggvI18nTestModule } from '@sebgroup/green-angular/src/v-angular/i18n'
import { ToastComponent } from './toast.component'
import { MessageType, ToastMessage } from './toast.models'

@Component({
    template: `
    <ng-template #div1>Something here</ng-template>
    <nggv-toast />
  `,
    standalone: false
})
class WrapperComponent {
  @ViewChild('div1', { static: true }) template!: TemplateRef<any>
  @ViewChild(ToastComponent, { static: true }) toastComponent!: ToastComponent
}

describe('ToastComponent', () => {
  let component: ToastComponent
  let wrapperComponent: WrapperComponent
  let fixture: ComponentFixture<WrapperComponent>

  const defaultMsg: ToastMessage = {
    type: MessageType.Information,
    titleText: 'Message',
  }
  const infoMsg: ToastMessage = { ...defaultMsg, bodyText: 'Body of text' }
  const successMsg: ToastMessage = { ...defaultMsg, type: MessageType.Success }
  const warningMsg: ToastMessage = { ...defaultMsg, type: MessageType.Warning }
  const errorMsg: ToastMessage = {
    ...defaultMsg,
    type: MessageType.Error,
    template: {} as TemplateRef<any>,
  }

  const errorIcon =
    'M18.2857 4H5.71429C4.7675 4 4 4.7675 4 5.71429V18.2857C4 19.2325 4.7675 20 5.71429 20H18.2857C19.2325 20 20 19.2325 20 18.2857V5.71429C20 4.7675 19.2325 4 18.2857 4ZM10.8682 7.42857H13.1318C13.3777 7.42857 13.5731 7.635 13.5597 7.8805L13.2948 12.7376C13.2824 12.9649 13.0945 13.1429 12.8669 13.1429H11.1331C10.9055 13.1429 10.7176 12.9649 10.7052 12.7376L10.4402 7.8805C10.4269 7.635 10.6223 7.42857 10.8682 7.42857ZM12 17.0714C11.0927 17.0714 10.3571 16.3359 10.3571 15.4286C10.3571 14.5213 11.0927 13.7857 12 13.7857C12.9073 13.7857 13.6429 14.5213 13.6429 15.4286C13.6429 16.3359 12.9073 17.0714 12 17.0714Z'
  const successIcon =
    'M17.6203 6.60836L9.40014 14.8285L6.37976 11.8081C6.23332 11.6617 5.99588 11.6617 5.84942 11.8081L4.96554 12.692C4.8191 12.8384 4.8191 13.0759 4.96554 13.2223L9.13495 17.3917C9.28138 17.5382 9.51882 17.5382 9.66529 17.3917L19.0344 8.02258C19.1809 7.87614 19.1809 7.63871 19.0344 7.49224L18.1506 6.60836C18.0041 6.46193 17.7667 6.46193 17.6203 6.60836Z'
  const infoIcon =
    'M18.2857 4H5.71429C4.7675 4 4 4.7675 4 5.71429V18.2857C4 19.2325 4.7675 20 5.71429 20H18.2857C19.2325 20 20 19.2325 20 18.2857V5.71429C20 4.7675 19.2325 4 18.2857 4ZM12 7.07143C12.8284 7.07143 13.5 7.743 13.5 8.57143C13.5 9.39986 12.8284 10.0714 12 10.0714C11.1716 10.0714 10.5 9.39986 10.5 8.57143C10.5 7.743 11.1716 7.07143 12 7.07143ZM14 16.1429C14 16.3795 13.8081 16.5714 13.5714 16.5714H10.4286C10.1919 16.5714 10 16.3795 10 16.1429V15.2857C10 15.049 10.1919 14.8571 10.4286 14.8571H10.8571V12.5714H10.4286C10.1919 12.5714 10 12.3795 10 12.1429V11.2857C10 11.049 10.1919 10.8571 10.4286 10.8571H12.7143C12.951 10.8571 13.1429 11.049 13.1429 11.2857V14.8571H13.5714C13.8081 14.8571 14 15.049 14 15.2857V16.1429Z'

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, TranslocoModule, NggvI18nTestModule],
      declarations: [ToastComponent, WrapperComponent],
    })
    fixture = TestBed.createComponent(WrapperComponent)
    wrapperComponent = fixture.componentInstance
    errorMsg.template = wrapperComponent.template
    component = fixture.componentInstance.toastComponent
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('renders error icon if warning message', () => {
    component.messages = [warningMsg]
    fixture.detectChanges()
    const icon = fixture.debugElement.query(By.css(`path[d="${errorIcon}"]`))
    expect(icon).toBeTruthy()
  })

  it('renders error icon if error message', () => {
    component.messages = [errorMsg]
    fixture.detectChanges()
    const icon = fixture.debugElement.query(By.css(`path[d="${errorIcon}"]`))
    expect(icon).toBeTruthy()
  })

  it('renders success icon if success message', () => {
    component.messages = [successMsg]
    fixture.detectChanges()
    const icon = fixture.debugElement.query(By.css(`path[d="${successIcon}"]`))
    expect(icon).toBeTruthy()
  })

  it('renders info icon if info message', () => {
    component.messages = [infoMsg]
    fixture.detectChanges()
    const icon = fixture.debugElement.query(By.css(`path[d="${infoIcon}"]`))
    expect(icon).toBeTruthy()
  })

  it('renders template if message contains a template', () => {
    component.messages = [errorMsg]
    fixture.detectChanges()
    const content = fixture.debugElement.query(By.css(`.text-content`))
    expect(content).toBeTruthy()
    expect(content.children.length).toBe(0)
  })

  it('renders titleText if message contains a titleText', () => {
    component.messages = [infoMsg]
    fixture.detectChanges()
    const titleText = fixture.debugElement.query(By.css(`.text-content > div`))
    expect(titleText).toBeTruthy()
    expect(titleText.nativeElement.innerHTML).toContain<string>(
      `${infoMsg.titleText}`,
    )
  })

  it('renders bodyText if message contains a bodyText', () => {
    component.messages = [infoMsg]
    fixture.detectChanges()
    const bodyText = fixture.debugElement.query(By.css(`.text-body-content`))
    expect(bodyText).toBeTruthy()
    expect(bodyText.nativeElement.innerHTML).toContain<string>(
      `${infoMsg.bodyText}`,
    )
  })
})
