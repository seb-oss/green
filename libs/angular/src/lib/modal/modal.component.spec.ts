import {
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from '@testing-library/angular'
import * as bodyScrollLock from 'body-scroll-lock'
import { createMock } from '@testing-library/angular/jest-utils'
import {
  NggModalBodyComponent,
  NggModalComponent,
  NggModalFooterComponent,
  NggModalHeaderComponent,
} from '.'

describe(NggModalComponent.name, () => {
  let component: RenderResult<NggModalComponent>

  beforeEach(async () => {
    component = await render(NggModalComponent, {
      declarations: [
        NggModalHeaderComponent,
        NggModalBodyComponent,
        NggModalFooterComponent,
      ],
      providers: [],
    })
  })

  it('should create', () => {
    const modal = component.fixture.componentInstance
    expect(modal).toBeTruthy()
  })

  it('should destroy', () => {
    // Mock
    ;(bodyScrollLock.enableBodyScroll as unknown) = jest.fn()

    component.change({ modalType: 'default', isOpen: true })
    const modal = component.fixture.componentInstance

    // Destroy modal
    modal.ngOnDestroy()

    expect(bodyScrollLock.enableBodyScroll).toHaveBeenCalled()
  })

  it('should be closed', async () => {
    // Mock
    ;(bodyScrollLock.enableBodyScroll as unknown) = jest.fn()

    component.change({ modalType: 'default', isOpen: false })

    expect(component.queryByTestId('modal')).toBeFalsy()
    expect(component.container.classList.length).toEqual(0)
    expect(bodyScrollLock.enableBodyScroll).toHaveBeenCalled()
  })

  it('should be open', async () => {
    // Mock
    ;(bodyScrollLock.disableBodyScroll as unknown) = jest.fn()

    component.change({ modalType: 'default', isOpen: true })

    const modalElement = await component.findByTestId('modal')

    console.log(component.container)

    expect(modalElement).toBeDefined()
    await waitFor(() =>
      expect(component.container.classList.contains('open')).toEqual(true)
    )
    expect(bodyScrollLock.disableBodyScroll).toHaveBeenCalled()
  })

  it('should show dialog', async () => {
    component.change({ modalType: 'default', isOpen: true })

    const modalElement = await component.findByTestId('modal')

    expect(modalElement.tagName).toEqual('SECTION')
  })

  it('should show slideout', async () => {
    component.change({ modalType: 'slideout', isOpen: true })
    const modalElement = await component.findByTestId('modal')

    expect(modalElement.tagName).toEqual('ASIDE')
  })

  it('should show takeover', async () => {
    component.change({ modalType: 'takeover', isOpen: true })

    const modalElement = await component.findByTestId('modal')

    expect(modalElement.tagName).toEqual('MAIN')
  })

  it('should set header', async () => {
    component.change({ isOpen: true, header: 'FakeHeader' })

    const modalHeaderText = await component.findByTestId('modal-header-text')

    expect(modalHeaderText.textContent).toEqual('FakeHeader')
  })

  it('should set confirm', async () => {
    component.change({ isOpen: true, confirmLabel: 'FakeConfirm' })

    const modalConfirmButton = await component.findByTestId(
      'modal-confirm-button'
    )

    expect(modalConfirmButton.textContent).toEqual('FakeConfirm')
  })

  it('should set dismiss', async () => {
    component.change({ isOpen: true, dismissLabel: 'FakeDismiss' })

    const modalDismissButton = await component.findByTestId(
      'modal-dismiss-button'
    )

    expect(modalDismissButton.textContent).toEqual('FakeDismiss')
  })

  it('should set size', async () => {
    component.change({ isOpen: true, size: 'lg' })

    const modalElement = await component.findByTestId('modal')

    expect(modalElement.classList.contains('large')).toEqual(true)
  })

  it('should close on close button click', async () => {
    component.change({ isOpen: true })

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
    component.change({ isOpen: true })

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
    component.change({ isOpen: true })

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
    component.change({ isOpen: true, confirmLabel: 'FakeConfirm' })

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
    component.change({ isOpen: true, dismissLabel: 'FakeDismiss' })

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
})
