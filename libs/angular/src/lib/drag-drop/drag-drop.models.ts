import { HttpEvent } from '@angular/common/http';

import { Observable, Subscription } from 'rxjs';

export type UploadState = 'local' | 'uploading' | 'aborted' | 'uploaded' | 'validating' | 'error' | 'deleted' | 'done';

export type StateMap = { [key in UploadState]: string | string[] };

export interface LocalFile {
  raw: File | undefined;
  progress: number;
  uploadState: UploadState;
  uploadRequests: Subscription | undefined;
}

export interface APIStatusReason {
  originatorId: string;
  reason: string;
  additionalInformation?: string;
}

export interface APIStatus {
  id: string;
  status: string;
  internalStatusReasonCode: string | null;
  statusReasonInformation: APIStatusReason[] | null;
}

export interface APIFile extends APIStatus {
  id: string;
  fileName: string;
  principal: string;
  uploadDate: string;
  registrarId: string;
  registrarName: string;
}

export interface EventStateChange extends Partial<APIStatus> {
  uploadState: UploadState;
  fileName: string;
}

export interface FileService {
  uploadFile(file: File): Observable<HttpEvent<APIFile>>;

  fetchFiles(statuses?: string[]): Observable<Array<APIFile>>;

  fetchStatus(id: string): Observable<APIStatus | undefined>;

  removeFile(id: string): Observable<void>;
}
