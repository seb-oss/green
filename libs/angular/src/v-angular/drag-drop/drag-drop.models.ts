import { HttpEvent } from '@angular/common/http'
import { Observable, Subscription } from 'rxjs'

export type UploadState =
  | 'local'
  | 'uploading'
  | 'aborted'
  | 'uploaded'
  | 'validating'
  | 'error'
  | 'deleted'
  | 'done'

export type StateMap = { [key in UploadState]: string | string[] }

export interface LocalFile {
  raw: File | undefined
  progress: number
  uploadState: UploadState
  uploadRequests: Subscription | undefined
}

export interface APIStatusReason {
  originatorId: string
  reason: string
  additionalInformation?: string
}

export interface APIStatusBaseProperties {
  internalStatusReasonCode: string | null
  statusReasonInformation: APIStatusReason[] | null
}

export type APIStatus<T = APIStatusBaseProperties> = T & {
  id: string
  status: string
}

export interface APIFileBaseProperties {
  principal: string
  uploadDate: string
  registrarId: string
  registrarName: string
}

export type APIFile<
  T = APIFileBaseProperties,
  U = APIStatusBaseProperties,
> = APIStatus<U> &
  T & {
    id: string
    fileName: string
  }

export interface EventStateChange extends Partial<APIStatus> {
  uploadState: UploadState
  fileName: string
}

export interface FileService<
  T = APIFileBaseProperties,
  U = APIStatusBaseProperties,
> {
  uploadFile(file: File): Observable<HttpEvent<APIFile<T, U>>>

  fetchFiles(statuses?: string[]): Observable<Array<APIFile<T, U>>>

  fetchStatus(id: string): Observable<APIStatus<U> | undefined>
  /** Uses file as param to fetch file status. */
  fetchStatusFor?(file: APIFile<T, U>): Observable<APIStatus<U> | undefined>

  removeFile(id: string): Observable<void>
  /** Uses file as param to remove file. */
  removeFileFor?(file: APIFile<T, U>): Observable<void>
}
