/* eslint-disable no-console */
import {
  HttpErrorResponse,
  HttpEvent,
  HttpEventType,
  HttpResponse,
} from '@angular/common/http'
import { Observable, Observer, of, throwError } from 'rxjs'
import { delay } from 'rxjs/operators'

import { APIFile, APIStatus, FileService } from './drag-drop.models'

export const mockStateMap = {
  local: 'local',
  uploading: 'uploading',
  aborted: 'aborted',
  uploaded: 'received',
  validating: ['requested', 'validating', 'registered'],
  error: 'rejected',
  deleted: 'deleted',
  done: 'offered',
}

export const mockErrors = [
  'PCAPFHM0001',
  'PCAPFHM0002',
  'PCAPFHM0003',
  'FHM001',
  'BISFHM0001',
]

export class MockFileService implements FileService {
  private files: Array<APIFile> = [
    {
      id: '1ec7eaaa-6cfa-4d19-91e1-64251d64ad1e',
      fileName: 'Uploaded File 1',
      status: mockStateMap.done,
      internalStatusReasonCode: null,
      statusReasonInformation: null,
      principal: '55687051480004',
      uploadDate: new Date().toISOString(),
      registrarId: '193701144556',
      registrarName: 'ALEXANDER LUKAS',
    },
    {
      id: '13aebe1d-1b49-4372-ba97-9823a3fda273',
      fileName: 'Uploaded File 2',
      status: mockStateMap.done,
      internalStatusReasonCode: null,
      statusReasonInformation: null,
      principal: '55687051480004',
      uploadDate: new Date().toISOString(),
      registrarId: '193701144556',
      registrarName: 'ALEXANDER LUKAS',
    },
  ]

  static progressStep(
    fileSize: number,
    observer: Observer<HttpEvent<APIFile>>,
  ) {
    return new Promise((resolve) => {
      let progress = 0
      const interval = setInterval(() => {
        progress += fileSize * 0.1
        if (progress < fileSize) {
          observer.next({
            type: HttpEventType.UploadProgress,
            loaded: progress,
            total: fileSize,
          })
        } else {
          clearInterval(interval)
          resolve(observer)
        }
      }, 250)
    })
  }

  static validationStep(file: APIFile, status: string, delay: number) {
    return new Promise<void>((resolve, _reject) => {
      setTimeout(() => {
        file.status = status
        resolve()
      }, delay)
    })
  }

  static randomFailure(file: APIFile) {
    const error = mockErrors[Math.floor(Math.random() * mockErrors.length)]
    file.status = 'rejected'
    file.internalStatusReasonCode = error
    file.statusReasonInformation = [
      {
        originatorId: 'FHM',
        reason: error,
        additionalInformation: 'Textual description',
      },
    ]
  }

  constructor(
    private validation = true,
    private resume = false,
    private fail = false,
  ) {}

  async resumeValidating(apiFile: APIFile) {
    this.files[0].status = mockStateMap.validating[0]
    await MockFileService.validationStep(
      apiFile,
      mockStateMap.validating[1],
      4000,
    ) // Requested -> Validated
    await MockFileService.validationStep(
      apiFile,
      mockStateMap.validating[2],
      8000,
    ) // Validated -> Registered
    await MockFileService.validationStep(apiFile, mockStateMap.done, 2000) // Registered -> Offered
  }

  uploadFile(file: File): Observable<HttpEvent<APIFile>> {
    console.log(`Mock: Upload File ${file.name}`)
    const request = new Observable((observer: Observer<HttpEvent<APIFile>>) => {
      MockFileService.progressStep(file.size, observer).then(async () => {
        const apiFile: APIFile = {
          id: Date.now().toString(),
          fileName: file.name,
          status: mockStateMap.uploaded,
          internalStatusReasonCode: null,
          statusReasonInformation: null,
          principal: '55687051480004',
          uploadDate: new Date(file.lastModified).toISOString(),
          registrarId: '193701144556',
          registrarName: 'ALEXANDER LUKAS',
        }
        this.files.push(apiFile)

        observer.next(new HttpResponse<APIFile>({ body: apiFile }))
        observer.complete()
        if (this.validation) {
          await MockFileService.validationStep(
            apiFile,
            mockStateMap.validating[0],
            2000,
          ) // Received -> Requested
          if (!this.fail) {
            await MockFileService.validationStep(
              apiFile,
              mockStateMap.validating[1],
              4000,
            ) // Requested -> Validated
            await MockFileService.validationStep(
              apiFile,
              mockStateMap.validating[2],
              8000,
            ) // Validated -> Registered
            await MockFileService.validationStep(
              apiFile,
              mockStateMap.done,
              2000,
            ) // Registered -> Offered
          } else {
            MockFileService.randomFailure(apiFile)
          }
        } else {
          apiFile.status = mockStateMap.done // Received -> Offered
        }
      })
    })
    return request.pipe(delay(100))
  }

  fetchFiles(): Observable<Array<APIFile>> {
    console.log(`Mock: Fetch Files`)
    if (this.resume) {
      this.resumeValidating(this.files[0])
    }
    return of(this.files).pipe(delay(200))
  }

  fetchStatus(id: string): Observable<APIStatus | undefined> {
    console.log(`Mock: Fetch Status ${id}`)
    const apiFile = this.files.find((apiFile) => apiFile.id === id)
    if (apiFile) {
      return of({
        id: apiFile.id,
        status: apiFile.status,
        internalStatusReasonCode: apiFile.internalStatusReasonCode,
        statusReasonInformation: apiFile.statusReasonInformation,
      }).pipe(delay(50))
    }
    return throwError(
      () =>
        new HttpErrorResponse({
          status: 404,
          statusText: 'File ID is not found, could not fetch status',
        }),
    )
  }

  fetchStatusFor(file: APIFile): Observable<APIStatus | undefined> {
    console.log(`Mock (file param): Fetch Status ${file.id}`)
    const apiFile = this.files.find((apiFile) => apiFile.id === file.id)
    if (apiFile) {
      return of({
        id: apiFile.id,
        status: apiFile.status,
        internalStatusReasonCode: apiFile.internalStatusReasonCode,
        statusReasonInformation: apiFile.statusReasonInformation,
      }).pipe(delay(50))
    }
    return throwError(
      () =>
        new HttpErrorResponse({
          status: 404,
          statusText: 'File ID is not found, could not fetch status',
        }),
    )
  }

  removeFile(id: string): Observable<void> {
    console.log(`Mock: Remove File ${id}`)
    const index = this.files.findIndex((file) => file.id === id)
    if (index < 0) {
      return throwError(
        () =>
          new HttpErrorResponse({
            status: 404,
            statusText: 'File ID is not found, could not delete',
          }),
      )
    }
    this.files.splice(index, 1)
    return of(undefined).pipe(delay(100))
  }

  removeFileFor(file: APIFile): Observable<void> {
    console.log(`Mock (file param): Remove File ${file.id}`)
    const index = this.files.findIndex((file) => file.id === file.id)
    if (index < 0) {
      return throwError(
        () =>
          new HttpErrorResponse({
            status: 404,
            statusText: 'File ID is not found, could not delete',
          }),
      )
    }
    this.files.splice(index, 1)
    return of(undefined).pipe(delay(100))
  }
}
