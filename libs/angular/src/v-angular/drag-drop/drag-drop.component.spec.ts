import { HttpEvent } from '@angular/common/http'
import { APP_INITIALIZER, Component } from '@angular/core'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { of } from 'rxjs'

import { NggvI18nTestModule } from '../i18n'
import { NggvDragDropComponent } from './drag-drop.component'
import { APIFile, FileService } from './drag-drop.models'
import { ValuePipe } from './drag-drop.pipes'

const FileServiceStub: FileService = {
  uploadFile: (_file: File) => of({} as HttpEvent<APIFile>),
  fetchFiles: () => of([]),
  fetchStatus: (_id: string) => of(undefined),
  removeFile: (_id: string) => of(undefined),
} as FileService

export const NggvDialogMock = Component({
  selector: 'nggv-dialog',
  template: '',
  inputs: ['title', 'content', 'payload', 'buttons'],
  standalone: false,
})(class _ {}) as any

describe('[NggvDragDrop]', () => {
  // ----------------------------------------------------------------------------
  // DragDropComponent - constructor()
  // ----------------------------------------------------------------------------
  describe('DragDropComponent - constructor()', () => {
    let component: NggvDragDropComponent
    let fixture: ComponentFixture<NggvDragDropComponent>

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NggvDragDropComponent, ValuePipe, NggvDialogMock],
        imports: [NggvI18nTestModule],
      }).compileComponents()
    }))

    beforeEach(() => {
      fixture = TestBed.createComponent(NggvDragDropComponent)
      component = fixture.componentInstance
      component.service = FileServiceStub
      fixture.detectChanges()
    })

    it('should create', () => {
      expect(component).toBeTruthy()
    })
  })
})
