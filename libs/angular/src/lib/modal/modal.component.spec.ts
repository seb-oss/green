import {
    fireEvent,
    render,
    RenderResult,
    waitFor,
} from '@testing-library/angular'
import { createMock, Mock, provideMockWithValues } from '@testing-library/angular/jest-utils';
import { NggModalBodyComponent, NggModalComponent, NggModalFooterComponent, NggModalHeaderComponent } from '.';
import { NggModalService } from './modal.service';

describe(NggModalComponent.name, () => {
    let component: RenderResult<NggModalComponent>
    let fakeModalService: Mock<NggModalService>;

    beforeEach(async () => {

        fakeModalService = createMock<NggModalService>(NggModalService);
        component = await render(NggModalComponent, {
            declarations: [NggModalHeaderComponent, NggModalBodyComponent, NggModalFooterComponent],
            providers: [
                provideMockWithValues(NggModalService, fakeModalService),
            ]
        });
    });

    it('should create', () => {
        const modal = component.fixture.componentInstance;
        expect(modal).toBeTruthy();
    });

    it('should destroy', () => {
        const modal = component.fixture.componentInstance;
        modal.isOpen = true;

        // Destroy modal
        modal.ngOnDestroy();

        expect(fakeModalService.releaseBody).toHaveBeenCalled();
    });

    it('should be closed', async () => {
        const modal = component.fixture.componentInstance;
        modal.isOpen = false;

        expect(component.queryByTestId('modal')).toBeFalsy();
        expect(component.container.classList.length).toEqual(0);
        expect(fakeModalService.releaseBody).toHaveBeenCalled();
    });

    it('should be open', async () => {
        const modal = component.fixture.componentInstance;
        modal.isOpen = true;

        const modalElement = await component.findByTestId('modal');

        expect(modalElement).toBeDefined();
        expect(component.container.classList.contains('open')).toEqual(true);
        expect(fakeModalService.lockBody).toHaveBeenCalled();
    });

    it('should show dialog', async () => {
        const modal = component.fixture.componentInstance;
        modal.modalType = 'default';
        modal.isOpen = true;

        const modalElement = await component.findByTestId('modal');

        expect(modalElement.tagName).toEqual('SECTION')
    });

    it('should show slideout', async () => {
        const modal = component.fixture.componentInstance;
        modal.modalType = 'slideout';
        modal.isOpen = true;

        const modalElement = await component.findByTestId('modal');

        expect(modalElement.tagName).toEqual('ASIDE')
    });

    it('should show takeover', async () => {
        const modal = component.fixture.componentInstance;
        modal.modalType = 'takeover';
        modal.isOpen = true;

        const modalElement = await component.findByTestId('modal');

        expect(modalElement.tagName).toEqual('MAIN')
    });

    it('should set header', async () => {
        const modal = component.fixture.componentInstance;
        modal.isOpen = true;
        modal.header = 'FakeHeader';

        const modalHeaderText = await component.findByTestId('modal-header-text');

        expect(modalHeaderText.textContent).toEqual('FakeHeader')
    });

    it('should set confirm', async () => {
        const modal = component.fixture.componentInstance;
        modal.isOpen = true;
        modal.confirm = 'FakeConfirm'

        const modalConfirmButton = await component.findByTestId('modal-confirm-button');

        expect(modalConfirmButton.textContent).toEqual('FakeConfirm')
    });

    it('should set dismiss', async () => {
        const modal = component.fixture.componentInstance;
        modal.isOpen = true;
        modal.dismiss = 'FakeDismiss'

        const modalDismissButton = await component.findByTestId('modal-dismiss-button');

        expect(modalDismissButton.textContent).toEqual('FakeDismiss')
    });

    it('should set size', async () => {
        const modal = component.fixture.componentInstance;
        modal.isOpen = true;
        modal.size = 'lg'

        const modalElement = await component.findByTestId('modal');

        expect(modalElement.classList.contains('large')).toEqual(true);
    });

    it('should close on close button click', async () => {
        const modal = component.fixture.componentInstance as NggModalComponent;
        modal.isOpen = true;

        // Listen for isOpenChange event
        let isOpen: boolean | undefined = undefined;
        modal.isOpenChange.subscribe((value: boolean) => {
            isOpen = value;
        });
        
        const closeButton = await component.findByTestId('modal-close-button');

        // Trigger event
        fireEvent.click(closeButton);

        await waitFor(() =>
          expect(component.queryByTestId('modal')).toBeFalsy()
        );

        expect(isOpen).toEqual(false)
        expect(component.queryByTestId('modal')).toBeFalsy();
        expect(modal.isOpen).toEqual(false);
    });

    it('should close on backdrop click', async () => {
        const modal = component.fixture.componentInstance;
        modal.isOpen = true;

        // Listen for isOpenChange event
        let isOpen: boolean | undefined = undefined;
        modal.isOpenChange.subscribe((value: boolean) => {
            isOpen = value;
        });

        const backdrop = await component.findByTestId('modal-backdrop');

        // Trigger event
        fireEvent.click(backdrop, { target: backdrop });

        await waitFor(() => {
            expect(component.queryByTestId('modal')).toBeFalsy()
        });
        
        expect(isOpen).toEqual(false)
        expect(component.queryByTestId('modal')).toBeFalsy();
        expect(modal.isOpen).toEqual(false);
    });

    it('should send close event', async () => {
        const modal = component.fixture.componentInstance;
        modal.isOpen = true;

        // Listen for onClose event
        let event: MouseEvent = createMock(MouseEvent);
        modal.onClose.subscribe((value: MouseEvent) => {
            event = value;
        });

        const closeButton = await component.findByTestId('modal-close-button');

        // Trigger event
        fireEvent.click(closeButton, { target: closeButton });

        const modalElement = await component.findByTestId('modal');

        expect(event?.target).toEqual(closeButton)
        expect(modalElement).toBeTruthy();
        expect(modal.isOpen).toEqual(true);
    });

    it('should send confirm event', async () => {
        const modal = component.fixture.componentInstance;
        modal.isOpen = true;
        modal.confirm = 'FakeConfirm'

        // Listen for onConfirm event
        let event: MouseEvent = createMock(MouseEvent);
        modal.onConfirm.subscribe((value: MouseEvent) => {
            event = value;
        });

        const confirmButton  = await component.findByTestId('modal-confirm-button');

        // Trigger event
        fireEvent.click(confirmButton, { target: confirmButton });

        expect(event.target).toEqual(confirmButton);
    });

    it('should send dismiss event', async () => {
        const modal = component.fixture.componentInstance;
        modal.isOpen = true;
        modal.dismiss = 'FakeDismiss'

        // Listen for onDismiss event
        let event: MouseEvent = createMock(MouseEvent);
        modal.onDismiss.subscribe((value: MouseEvent) => {
            event = value;
        });

        const dismissButton  = await component.findByTestId('modal-dismiss-button');

        // Trigger event
        fireEvent.click(dismissButton, { target: dismissButton });

        expect(event.target).toEqual(dismissButton);
    });
});
