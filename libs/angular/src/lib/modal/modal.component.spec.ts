import { fireEvent, render, waitFor } from '@testing-library/angular'
import { createMock } from '@testing-library/angular/jest-utils'
import * as bodyScrollLock from 'body-scroll-lock'

import {
  NggModalBodyComponent,
  NggModalComponent,
  NggModalFooterComponent,
  NggModalHeaderComponent,
} from '.'

describe(NggModalComponent.name, () => {
  it('should create', async () => {
    const { fixture } = await render(NggModalComponent, {
      declarations: [
        NggModalHeaderComponent,
        NggModalBodyComponent,
        NggModalFooterComponent,
      ],
      providers: [],
      componentInputs: { isOpen: true, dismissLabel: 'FakeDismiss' },
    })
    const modal = fixture.componentInstance
    expect(modal).toBeTruthy()
  })

  it('should destroy', async () => {
    ;(bodyScrollLock.enableBodyScroll as unknown) = jest.fn()

    const { fixture } = await render(NggModalComponent, {
      declarations: [
        NggModalHeaderComponent,
        NggModalBodyComponent,
        NggModalFooterComponent,
      ],
      providers: [],
      componentInputs: { modalType: 'default', isOpen: true },
    })

    const modal = fixture.componentInstance

    // Destroy modal
    modal.ngOnDestroy()

    expect(bodyScrollLock.enableBodyScroll).toHaveBeenCalled()
  })

  it('should be closed', async () => {
    // Mock
    ;(bodyScrollLock.enableBodyScroll as unknown) = jest.fn()

    const { queryByTestId, container } = await render(NggModalComponent, {
      declarations: [
        NggModalHeaderComponent,
        NggModalBodyComponent,
        NggModalFooterComponent,
      ],
      providers: [],
      componentInputs: { modalType: 'default', isOpen: false },
    })

    expect(queryByTestId('modal')).toBeFalsy()
    expect(container.classList.contains('open')).toEqual(false)
    expect(bodyScrollLock.enableBodyScroll).toHaveBeenCalled()
  })

  it('should be open', async () => {
    // Mock
    ;(bodyScrollLock.disableBodyScroll as unknown) = jest.fn()

    const component = await render(NggModalComponent, {
      declarations: [
        NggModalHeaderComponent,
        NggModalBodyComponent,
        NggModalFooterComponent,
      ],
      providers: [],
      componentInputs: { modalType: 'default', isOpen: true },
    })

    const modalElement = await component.findByTestId('modal')

    expect(modalElement).toBeDefined()
    await waitFor(() =>
      expect(component.container.classList.contains('open')).toEqual(true),
    )
    expect(bodyScrollLock.disableBodyScroll).toHaveBeenCalled()
  })

  it('should show dialog', async () => {
    const component = await render(NggModalComponent, {
      declarations: [
        NggModalHeaderComponent,
        NggModalBodyComponent,
        NggModalFooterComponent,
      ],
      providers: [],
      componentInputs: { modalType: 'default', isOpen: true },
    })

    const modalElement = await component.findByTestId('modal')

    expect(modalElement.tagName).toEqual('SECTION')
  })

  it('should show slideout', async () => {
    const component = await render(NggModalComponent, {
      declarations: [
        NggModalHeaderComponent,
        NggModalBodyComponent,
        NggModalFooterComponent,
      ],
      providers: [],
      componentInputs: { modalType: 'slideout', isOpen: true },
    })
    const modalElement = await component.findByTestId('modal')

    expect(modalElement.tagName).toEqual('ASIDE')
  })

  it('should show takeover', async () => {
    const component = await render(NggModalComponent, {
      declarations: [
        NggModalHeaderComponent,
        NggModalBodyComponent,
        NggModalFooterComponent,
      ],
      providers: [],
      componentInputs: { modalType: 'takeover', isOpen: true },
    })

    const modalElement = await component.findByTestId('modal')

    expect(modalElement.tagName).toEqual('MAIN')
  })

  it('should show header', async () => {
    const component = await render(NggModalComponent, {
      declarations: [
        NggModalHeaderComponent,
        NggModalBodyComponent,
        NggModalFooterComponent,
      ],
      providers: [],
      componentInputs: { isOpen: true },
    })

    const modalHeader = await component.findByTestId('modal-header')

    expect(modalHeader).toBeDefined()
  })

  it('should not show header', async () => {
    const component = await render(NggModalComponent, {
      declarations: [
        NggModalHeaderComponent,
        NggModalBodyComponent,
        NggModalFooterComponent,
      ],
      providers: [],
      componentInputs: { hideHeader: true, isOpen: true },
    })

    await waitFor(() =>
      expect(component.queryByTestId('modal-header')).toBeFalsy(),
    )
  })

  it('should show footer', async () => {
    const component = await render(NggModalComponent, {
      declarations: [
        NggModalHeaderComponent,
        NggModalBodyComponent,
        NggModalFooterComponent,
      ],
      providers: [],
      componentInputs: { confirmLabel: 'fakeConfirm', isOpen: true },
    })

    const modalFooter = await component.findByTestId('modal-footer')

    expect(modalFooter).toBeDefined()
  })

  it('should not show footer', async () => {
    const component = await render(NggModalComponent, {
      declarations: [
        NggModalHeaderComponent,
        NggModalBodyComponent,
        NggModalFooterComponent,
      ],
      providers: [],
      componentInputs: {
        isOpen: true,
        confirmLabel: 'FakeConfirm',
        hideFooter: true,
      },
    })

    await waitFor(() =>
      expect(component.queryByTestId('modal-footer')).toBeFalsy(),
    )
  })

  it('should set header', async () => {
    const component = await render(NggModalComponent, {
      declarations: [
        NggModalHeaderComponent,
        NggModalBodyComponent,
        NggModalFooterComponent,
      ],
      providers: [],
      componentInputs: { isOpen: true, header: 'FakeHeader' },
    })

    const modalHeaderText = await component.findByTestId('modal-header-text')

    expect(modalHeaderText.textContent).toEqual('FakeHeader')
  })

  it('should set confirm', async () => {
    const component = await render(NggModalComponent, {
      declarations: [
        NggModalHeaderComponent,
        NggModalBodyComponent,
        NggModalFooterComponent,
      ],
      providers: [],
      componentInputs: { isOpen: true, confirmLabel: 'FakeConfirm' },
    })

    const modalConfirmButton = await component.findByTestId(
      'modal-confirm-button',
    )

    expect(modalConfirmButton.textContent?.trim()).toEqual('FakeConfirm')
  })

  it('should set dismiss', async () => {
    const component = await render(NggModalComponent, {
      declarations: [
        NggModalHeaderComponent,
        NggModalBodyComponent,
        NggModalFooterComponent,
      ],
      providers: [],
      componentInputs: { isOpen: true, dismissLabel: 'FakeDismiss' },
    })

    const modalDismissButton = await component.findByTestId(
      'modal-dismiss-button',
    )

    expect(modalDismissButton.textContent?.trim()).toEqual('FakeDismiss')
  })

  it('should set size', async () => {
    const component = await render(NggModalComponent, {
      declarations: [
        NggModalHeaderComponent,
        NggModalBodyComponent,
        NggModalFooterComponent,
      ],
      providers: [],
      componentInputs: { isOpen: true, size: 'lg' },
    })

    const modalElement = await component.findByTestId('modal')

    expect(modalElement.classList.contains('large')).toEqual(true)
  })

  it('should close on close button click', async () => {
    const component = await render(NggModalComponent, {
      declarations: [
        NggModalHeaderComponent,
        NggModalBodyComponent,
        NggModalFooterComponent,
      ],
      providers: [],
      componentInputs: { isOpen: true },
    })

    const modal = component.fixture.componentInstance as NggModalComponent

    // Listen for isOpenChange event
    let isOpen: boolean | undefined = undefined
    modal.isOpenChange.subscribe((value: boolean) => {
      isOpen = value
    })

    const closeButton = await component.findByTestId('modal-close-button')

    // Trigger event
    fireEvent.click(closeButton)

    await waitFor(() => expect(component.queryByTestId('modal')).toBeFalsy())

    expect(isOpen).toEqual(false)
    expect(component.queryByTestId('modal')).toBeFalsy()
    expect(modal.isOpen).toEqual(false)
  })

  it('should close on backdrop click', async () => {
    const component = await render(NggModalComponent, {
      declarations: [
        NggModalHeaderComponent,
        NggModalBodyComponent,
        NggModalFooterComponent,
      ],
      providers: [],
      componentInputs: { isOpen: true },
    })

    const modal = component.fixture.componentInstance

    // Listen for isOpenChange event
    let isOpen: boolean | undefined = undefined
    modal.isOpenChange.subscribe((value: boolean) => {
      isOpen = value
    })

    const backdrop = await component.findByTestId('modal-backdrop')

    // Trigger event
    fireEvent.click(backdrop, { target: backdrop })

    await waitFor(() => {
      expect(component.queryByTestId('modal')).toBeFalsy()
    })

    expect(isOpen).toEqual(false)
    expect(component.queryByTestId('modal')).toBeFalsy()
    expect(modal.isOpen).toEqual(false)
  })

  it('should send close event', async () => {
    const component = await render(NggModalComponent, {
      declarations: [
        NggModalHeaderComponent,
        NggModalBodyComponent,
        NggModalFooterComponent,
      ],
      providers: [],
      componentInputs: { isOpen: true },
    })

    const modal = component.fixture.componentInstance

    // Listen for onClose event
    let event: MouseEvent = createMock(MouseEvent)
    modal.closed.subscribe((value: MouseEvent) => {
      event = value
    })

    const closeButton = await component.findByTestId('modal-close-button')

    // Trigger event
    fireEvent.click(closeButton, { target: closeButton })

    const modalElement = await component.findByTestId('modal')

    expect(event?.target).toEqual(closeButton)
    expect(modalElement).toBeTruthy()
    expect(modal.isOpen).toEqual(true)
  })

  it('should send confirm event', async () => {
    const component = await render(NggModalComponent, {
      declarations: [
        NggModalHeaderComponent,
        NggModalBodyComponent,
        NggModalFooterComponent,
      ],
      providers: [],
      componentInputs: { isOpen: true, confirmLabel: 'FakeConfirm' },
    })

    const modal = component.fixture.componentInstance

    // Listen for onConfirm event
    let event: MouseEvent = createMock(MouseEvent)
    modal.confirm.subscribe((value: MouseEvent) => {
      event = value
    })

    const confirmButton = await component.findByTestId('modal-confirm-button')

    // Trigger event
    fireEvent.click(confirmButton, { target: confirmButton })

    expect(event.target).toEqual(confirmButton)
  })

  it('should send dismiss event', async () => {
    const component = await render(NggModalComponent, {
      declarations: [
        NggModalHeaderComponent,
        NggModalBodyComponent,
        NggModalFooterComponent,
      ],
      providers: [],
      componentInputs: { isOpen: true, dismissLabel: 'FakeDismiss' },
    })

    const modal = component.fixture.componentInstance

    // Listen for onDismiss event
    let event: MouseEvent = createMock(MouseEvent)
    modal.dismiss.subscribe((value: MouseEvent) => {
      event = value
    })

    const dismissButton = await component.findByTestId('modal-dismiss-button')

    // Trigger event
    fireEvent.click(dismissButton, { target: dismissButton })

    expect(event.target).toEqual(dismissButton)
  })

  it('should render the medium size', async () => {
    const component = await render(NggModalComponent, {
      declarations: [
        NggModalHeaderComponent,
        NggModalBodyComponent,
        NggModalFooterComponent,
      ],
      providers: [],
      componentInputs: { isOpen: true, size: 'md' },
    })

    const modal = component.queryByRole('dialog')

    expect(modal?.classList.contains('medium')).toBeTruthy()
  })

  it('should render the large size', async () => {
    const component = await render(NggModalComponent, {
      declarations: [
        NggModalHeaderComponent,
        NggModalBodyComponent,
        NggModalFooterComponent,
      ],
      providers: [],
      componentInputs: { isOpen: true, size: 'lg' },
    })

    const modal = component.queryByRole('dialog')

    expect(modal?.classList.contains('large')).toBeTruthy()
  })
})
