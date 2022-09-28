import { createMockWithValues } from '@testing-library/angular/jest-utils';
import { NggModalService } from './modal.service';

describe(NggModalService.name, () => {
    let fakeDocument: Document;
    let modalService: NggModalService;
    beforeEach(() => {

        fakeDocument = createMockWithValues<Document, any>(Document, {
            body: {
                classList: {
                    add: jest.fn(),
                    remove: jest.fn()
                }
            }
        });

        modalService = new NggModalService(fakeDocument);
    });

    it('should create', () => {
        expect(modalService).toBeDefined();
    });

    it('should lock body', () => {
        const element = document.createElement('div');
        modalService.lockBody(element);

        expect(fakeDocument.body.classList.add).toHaveBeenCalledTimes(1);
    });

    it('should only lock body once', () => {
        const element1 = document.createElement('div');
        const element2 = document.createElement('div');
        modalService.lockBody(element1);
        modalService.lockBody(element2);

        expect(fakeDocument.body.classList.add).toHaveBeenCalledTimes(1);
    });

    it('should release body', () => {
        const element = document.createElement('div');
        modalService.lockBody(element);
        modalService.releaseBody(element);

        expect(fakeDocument.body.classList.remove).toHaveBeenCalledTimes(1);
    });

    it('should not release body', () => {
        const element1 = document.createElement('div');
        const element2 = document.createElement('div');
        modalService.lockBody(element1);
        modalService.lockBody(element2);
        modalService.releaseBody(element1);

        expect(fakeDocument.body.classList.remove).toHaveBeenCalledTimes(0);
    });

    it('should release body once all locks are removed', () => {
        const element1 = document.createElement('div');
        const element2 = document.createElement('div');
        modalService.lockBody(element1);
        modalService.lockBody(element2);
        modalService.releaseBody(element1);
        modalService.releaseBody(element2);

        expect(fakeDocument.body.classList.remove).toHaveBeenCalledTimes(1);
    });

    it('should release body on destroy', () => {
        const element1 = document.createElement('div');
        const element2 = document.createElement('div');
        modalService.lockBody(element1);
        modalService.lockBody(element2);
        modalService.ngOnDestroy();

        expect(fakeDocument.body.classList.remove).toHaveBeenCalledTimes(1);
    });
})