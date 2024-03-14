import { HttpEvent } from '@angular/common/http';
import { APP_INITIALIZER, Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { of } from 'rxjs';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/pro-light-svg-icons';
import { faCheck, faCloudUpload } from '@fortawesome/pro-regular-svg-icons';

import { NgvI18nTestModule } from '@sebgroup/ngv-i18n';

import { DragDropComponent } from './drag-drop.component';
import { APIFile, FileService } from './drag-drop.models';
import { ValuePipe } from './drag-drop.pipes';

const FileServiceStub: FileService = {
  uploadFile: (_file: File) => of({} as HttpEvent<APIFile>),
  fetchFiles: () => of([]),
  fetchStatus: (_id: string) => of(undefined),
  removeFile: (_id: string) => of(undefined),
} as FileService;

export const NgvDialogMock = Component({
  selector: 'ngv-dialog',
  template: '',
  inputs: ['title', 'content', 'payload', 'buttons'],
})(class _ {}) as any;

describe('[NgvDragDrop]', () => {
  // ----------------------------------------------------------------------------
  // DragDropComponent - constructor()
  // ----------------------------------------------------------------------------
  describe('DragDropComponent - constructor()', () => {
    let component: DragDropComponent;
    let fixture: ComponentFixture<DragDropComponent>;

    beforeEach(
      waitForAsync(() => {
        TestBed.configureTestingModule({
          declarations: [DragDropComponent, ValuePipe, NgvDialogMock],
          imports: [FontAwesomeModule, NgvI18nTestModule],
          providers: [
            {
              provide: APP_INITIALIZER,
              useFactory: (iconLibrary: FaIconLibrary) => {
                return () => iconLibrary.addIcons(faTimes, faCheck, faCloudUpload);
              },
              deps: [FaIconLibrary],
              multi: true,
            },
          ],
        }).compileComponents();
      }),
    );

    beforeEach(() => {
      fixture = TestBed.createComponent(DragDropComponent);
      component = fixture.componentInstance;
      component.service = FileServiceStub;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
