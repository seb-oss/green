/* eslint-disable no-console */
import { HttpEventType } from '@angular/common/http'
import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core'
import { timer } from 'rxjs'
import { filter, retryWhen, switchMap, take, tap } from 'rxjs/operators'

import {
  DialogEvent,
  NggvDialogComponent,
} from '@sebgroup/green-angular/src/v-angular/modal'
import {
  extendFile,
  isDragDropAvailable,
  pick,
  retryStrategy,
  verifyAccept,
} from './drag-drop.utils'

import type {
  APIFile,
  EventStateChange,
  FileService,
  LocalFile,
  StateMap,
  UploadState,
} from './drag-drop.models'

import '@sebgroup/green-core/components/icon/icons/cloud-upload.js'
import '@sebgroup/green-core/components/icon/icons/cross-small.js'
import '@sebgroup/green-core/components/icon/icons/checkmark.js'

export type DragDropState = 'normal' | 'over' | 'uploading' | 'done'

@Component({
    selector: 'nggv-drag-drop',
    templateUrl: './drag-drop.component.html',
    styleUrls: ['./drag-drop.component.scss'],
    standalone: false
})
export class NggvDragDropComponent implements OnInit, OnDestroy {
  /** @internal */
  @ViewChild('deleteModalRef') deleteModalRef!: NggvDialogComponent

  /** Special property used for selecting DOM elements during automated UI testing. */
  @HostBinding('attr.data-thook') @Input() thook: string | null | undefined =
    'drag-drop'

  /** Allowing selecting or dropping multiple files. */
  @Input() service: FileService | undefined

  /** Mime types allowed. */
  @Input() accept?: string

  /** Disables deletion or cancellation during defined states [local | uploading | aborted | uploaded | validating | error | deleted | done]. */
  @Input() disableRemove: UploadState[] = []

  /** File size limit in mega bytes. */
  @Input() fileLimit: number = 250 * 1024 * 1024

  /** Allowing selecting or dropping multiple files. */
  @Input() multiple = true

  /** Determines if list should be shown under upload, disabling list disables multiple upload. */
  @Input() list = true

  /** Frequency of requests which to send to the API requesting status updates. */
  @Input() throttle = 5000

  /** Maximum number of attempts to request a status update from the API if service is unreachable. */
  @Input() retryAttempts = 5

  /** If selection of multiple file should be possible with a checkbox.
   * @experimental work in progress and should not yet be used.
   * @internal
   */
  @Input() selectable = false

  /** Allows multiple values from `apiFile.status` to be mapped to a single file upload state. */
  @Input() stateMap: StateMap = {
    local: 'local',
    uploading: 'uploading',
    aborted: 'aborted',
    uploaded: 'uploaded',
    validating: 'validating',
    error: 'error',
    deleted: 'deleted',
    done: 'done',
  }

  /** Statuses allowed to be fetch during the initial load. Used to hide "done" states from list. */
  @Input() fetchStatuses: string[] = []

  /** Statuses allowed be shown when status is "rejected". Will fallback to generic message. `null` allows all. */
  @Input() errorCodes: string[] | null = null

  /** Event triggered on initialization and every time the "uploadState" for a file changes. */
  @Output() stateChange = new EventEmitter<EventStateChange>()

  /** Event triggered when view details is clicked. */
  @Output() detailsClick = new EventEmitter<LocalFile & APIFile>()

  /** @internal */
  isDragDropAvailable = isDragDropAvailable()
  /** @internal */
  componentState: DragDropState = 'normal'
  /** @internal */
  files: Map<string, LocalFile & APIFile> = new Map()
  /** @internal */
  lastFile: (LocalFile & APIFile) | undefined
  /** @internal */
  selected: string[] = []
  /** @internal */
  loading = false
  /** @internal */
  markedForDeletion: APIFile | undefined

  /**
   * Initialize the component and warn if service is not defined. Will also fetch files for the list if enabled.
   */
  ngOnInit() {
    if (!this.service) {
      return console.error(
        'Drag and drop component will not work without the [service] property defined!',
      )
    }

    if (this.list) {
      this.service.fetchFiles(this.fetchStatuses).subscribe((apiFiles) => {
        for (const apiFile of apiFiles) {
          const extendedFile = extendFile(undefined, apiFile, {
            progress: 100,
            uploadState: this.determineUploadState(apiFile.status),
            internalStatusReasonCode: this.fallbackError(
              apiFile.internalStatusReasonCode,
            ),
          })
          this.files.set(extendedFile.id, extendedFile)
          this.stateChange.emit(
            pick(
              extendedFile,
              'uploadState',
              'fileName',
              'id',
              'status',
              'internalStatusReasonCode',
              'statusReasonInformation',
            ),
          )

          // Check if validation is required, then start polling
          if (
            extendedFile.uploadState === 'uploaded' ||
            extendedFile.uploadState === 'validating'
          ) {
            this.checkValidity(extendedFile, this.throttle)
          }
        }
      })
    }
  }

  /** Destroy all event listeners and polling running */
  ngOnDestroy() {
    this.files.forEach((file) => {
      file.uploadRequests?.unsubscribe()
      if (file.uploadState === 'uploading') {
        file.uploadState = 'aborted'
        file.internalStatusReasonCode = 'MFEFHM004'
        this.stateChange.emit(
          pick(
            file,
            'uploadState',
            'fileName',
            'status',
            'internalStatusReasonCode',
          ),
        )
      }
    })
  }

  /** @internal Warn user trying to leave page before all uploads are done. Custom message only works in older browsers. */
  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(event: Event) {
    if (!this.allUploadingDone(this.files)) {
      const confirmationMessage = `You still have files uploading, are you sure you want to leave this page?`
      ;((event as any) || (window.event as any)).returnValue =
        confirmationMessage
      return confirmationMessage
    }
    return
  }

  /* Drag & Drop Events */

  /** @internal Event handler for when a file is held over the drop area */
  onDragEnter(event: DragEvent): void {
    if (!this.service) return
    event.preventDefault()
    // Update the visual state
    this.componentState = 'over'
  }

  /** @internal Event handler for when a file leaves the drop area */
  onDragLeave(event: DragEvent): void {
    if (!this.service) return
    event.preventDefault()
    this.componentState = 'normal'
  }

  /** @internal Event handler for when a file is dropped on the drop area or when `input` files are selected */
  onDrop(event: DragEvent | Event): void {
    if (!this.service) return
    event.preventDefault()
    this.componentState = 'normal'

    let files: FileList | undefined

    // Determine if files are from the drop event or input element
    if (event instanceof DragEvent && event.dataTransfer) {
      files = event.dataTransfer.files
    } else if (
      event.target &&
      event.target instanceof HTMLInputElement &&
      event.target.files
    ) {
      files = event.target.files
    }

    if (files) {
      const extendedFiles = Array.from(files, (file) => {
        let abort = false
        let statusCode: string | null = null
        // Check if file size is larger than limit
        if (file.size > this.fileLimit) {
          abort = true
          statusCode = 'MFEFHM003'
        }
        // Check if file type is not acceptable
        if (!verifyAccept(file.type, this.accept)) {
          abort = true
          statusCode = 'MFEFHM002'
        }
        // Add default values expected by the API
        const extendedFile = extendFile(file, {
          internalStatusReasonCode: statusCode,
          uploadState: (abort ? 'aborted' : 'local') as UploadState,
        })

        // Emit initial local upload event
        this.stateChange.emit({
          uploadState: 'local',
          fileName: extendedFile.fileName,
        })

        if (abort) {
          // Emit aborted upload event
          this.stateChange.emit({
            uploadState: 'aborted',
            fileName: extendedFile.fileName,
            status: 'aborted',
            internalStatusReasonCode: statusCode,
          })
        }

        return extendedFile
      })

      // Append to previous files
      let i = 0
      for (const file of extendedFiles) {
        // If multiple or list is false append only file then break loop
        if ((!this.multiple || !this.list) && i >= 1) break
        this.lastFile = file
        this.files.set(file.id, file)
        i++
      }

      // Clear file input so that same file can be uploaded
      if (
        event.target &&
        event.target instanceof HTMLInputElement &&
        event.target.files
      ) {
        event.target.value = ''
      }

      this.onSubmit()
    }
  }

  /** @internal Event trigger for when delete button is pressed */
  onRemove(id: string, state: UploadState): void {
    // Only allow removal in certain states
    if (!this.service || this.disableRemove.includes(state)) return
    const file = this.files.get(id)
    if (!file) return
    // Skip confirmation for aborted and deleted files
    if (
      file.uploadState === 'error' ||
      file.uploadState === 'aborted' ||
      file.uploadState === 'deleted'
    ) {
      this.onConfirmRemove({ original: undefined, payload: file })
    } else {
      this.markedForDeletion = file
      this.deleteModalRef.open()
    }
  }

  /** @internal */
  onConfirmRemove(event: DialogEvent<LocalFile & APIFile>) {
    const { payload: file } = event
    if (!file || !this.service) return

    // Abort upload and set local state to aborted to inform user
    switch (file.uploadState) {
      case 'local':
      case 'uploading':
        file.uploadRequests?.unsubscribe()
        file.uploadState = 'aborted'
        file.internalStatusReasonCode = 'MFEFHM004'
        this.stateChange.emit(
          pick(
            file,
            'uploadState',
            'fileName',
            'status',
            'internalStatusReasonCode',
          ),
        )
        break

      // Remove file from service then set local state to aborted to inform user
      case 'uploaded':
      case 'validating':
        this.service
          .removeFile(file.id)
          .subscribe({
            error: console.warn,
          })
          .add(() => {
            // Abort regardless of response from server
            file.uploadRequests?.unsubscribe()
            file.uploadState = 'aborted'
            file.internalStatusReasonCode = 'MFEFHM005'
            this.stateChange.emit(
              pick(
                file,
                'uploadState',
                'fileName',
                'status',
                'internalStatusReasonCode',
              ),
            )
          })
        break

      // Remove file from service then locally for "completed" states
      case 'error':
      case 'done':
        ;(this.service.removeFileFor
          ? this.service.removeFileFor(file)
          : this.service.removeFile(file.id)
        )
          .subscribe({
            error: console.warn,
          })
          .add(() => {
            // Remove regardless of response from server
            this.files.delete(file.id)
            const event = pick(
              file,
              'uploadState',
              'fileName',
              'id',
              'status',
              'internalStatusReasonCode',
              'statusReasonInformation',
            )
            event.uploadState = 'deleted'
            this.stateChange.emit(event)
          })
        break

      // Just remove the file locally to clean up
      case 'aborted':
      case 'deleted':
      default:
        this.files.delete(file.id)
        this.stateChange.emit({
          ...pick(
            file,
            'uploadState',
            'fileName',
            'id',
            'status',
            'internalStatusReasonCode',
            'statusReasonInformation',
          ),
          uploadState: 'deleted',
        })
        break
    }
  }

  /** @internal Event handler for when the files should be uploaded */
  onSubmit() {
    if (!this.files || !this.service) return
    // If list is not enabled update the component state to show progress
    if (!this.list) this.componentState = 'uploading'
    this.loading = true
    this.files.forEach((file) => {
      // Filter out all files that aren't currently considered local
      if (!file.raw || file.uploadState !== 'local') return
      file.uploadRequests = this.service!.uploadFile(file.raw!).subscribe({
        next: (event) => {
          switch (event.type) {
            case HttpEventType.UploadProgress:
              // Update upload progress
              if (file.uploadState !== 'uploading') {
                file.uploadState = 'uploading'
                this.stateChange.emit(pick(file, 'uploadState', 'fileName'))
              }
              file.progress = Math.round(
                (100 * event.loaded) / (event.total || 100),
              )
              file.uploadState = 'uploading'
              break

            case HttpEventType.Response:
              if (event.body?.id) {
                // Remove old file id
                this.files.delete(file.id)
                // Update file with information from the API
                Object.assign(file, event.body)
                file.progress = 100
                file.uploadState = this.determineUploadState(file.status)
                // Update with new file id
                this.files.set(file.id, file)
              }

              this.stateChange.emit(
                pick(
                  file,
                  'uploadState',
                  'fileName',
                  'id',
                  'status',
                  'statusReasonInformation',
                ),
              )

              // Check if validation is required, then start polling
              if (
                file.uploadState === 'uploaded' ||
                file.uploadState === 'validating'
              ) {
                this.checkValidity(file, this.throttle)
              } else this.setComponentStateDone()
              this.loading = false
              break
          }
        },
        error: (error) => {
          console.warn(error)
          file.uploadState = 'aborted'
          file.status = 'aborted'
          // todo: wrong
          file.statusReasonInformation = [
            { originatorId: 'local', reason: 'dragDrop.error.MFEFHM001' },
          ]
          this.stateChange.emit(
            pick(
              file,
              'uploadState',
              'fileName',
              'id',
              'status',
              'statusReasonInformation',
            ),
          )
          this.loading = false
        },
      })
    })
  }

  /**
   * @internal
   * Using the state map convert `apiFile.state` to one of {@link UploadState}
   * @param apiState the state given by the file to be used for mapping
   */
  determineUploadState(apiState: string): UploadState {
    // Reverse so that later states override earlier
    const stateEntries = Object.entries(this.stateMap).reverse()
    for (const [uploadState, apiStates] of stateEntries) {
      if (this.uploadStateIsArray(apiStates)) {
        if (apiStates.includes(apiState)) return uploadState as any
      } else {
        if (apiStates === apiState) return uploadState as any
      }
    }
    return 'error'
  }

  /** @internal */
  uploadStateIsArray(state: string | string[]): state is string[] {
    return Array.isArray(state)
  }

  /** @internal used for translation templating parameters */
  translateParams(file: LocalFile & APIFile) {
    return { ...file, fileLimit: (this.fileLimit / 1024 / 1024).toFixed(3) }
  }

  /**
   * Poll the status endpoint to determine when file is valid
   * @param file file used to check state and update
   * @param delay how long each interval should wait before sending a request
   */
  private checkValidity(file: LocalFile & APIFile, delay: number) {
    if (!this.service) return
    file.uploadRequests = timer(0, delay)
      .pipe(
        switchMap(() => {
          const asyncFetchStatus =
            this.service && this.service.fetchStatusFor
              ? this.service.fetchStatusFor(file)
              : this.service!.fetchStatus(file.id)
          return asyncFetchStatus
        }),
        retryWhen(
          retryStrategy({
            maxRetryAttempts: this.retryAttempts,
          }),
        ),
        tap((fileStatus) => {
          // Continuously update file state to show step progress
          if (fileStatus) {
            // Emit event when status changes
            if (file.status !== fileStatus.status) {
              file.status = fileStatus.status
              file.internalStatusReasonCode = this.fallbackError(
                fileStatus.internalStatusReasonCode,
              )
              file.statusReasonInformation = fileStatus.statusReasonInformation
              file.uploadState = this.determineUploadState(fileStatus.status)
              this.stateChange.emit(
                pick(
                  file,
                  'uploadState',
                  'fileName',
                  'id',
                  'status',
                  'internalStatusReasonCode',
                  'statusReasonInformation',
                ),
              )
            }
          }
        }),
        // Remove validation state
        filter(
          (apiFile) =>
            !!apiFile &&
            this.determineUploadState(apiFile.status) !== 'uploaded' &&
            this.determineUploadState(apiFile.status) !== 'validating',
        ),
        // Take first state after validation
        take(1),
      )
      .subscribe({
        next: () => {
          if (this.allValidationDone(this.files)) {
            this.setComponentStateDone()
          }
        },
        error: (err) => {
          console.warn(err)
          file.uploadState = 'aborted'
          file.status = 'aborted'
          file.internalStatusReasonCode = 'MFEFHM001'
          this.stateChange.emit(
            pick(
              file,
              'uploadState',
              'fileName',
              'id',
              'status',
              'internalStatusReasonCode',
            ),
          )
          this.setComponentStateDone()
        },
      })
  }

  private fallbackError(code: string | null | undefined): string | null {
    if (this.errorCodes == null || (code && this.errorCodes.includes(code))) {
      return code ?? null
    } else {
      return 'MFEFHM001'
    }
  }

  /**
   * Check so that no files are still validating
   */
  private allValidationDone(files: Map<string, LocalFile>) {
    return Array.from(files.values()).every(
      (file) => file.uploadState !== 'validating',
    )
  }

  /**
   * Check so that no files are still uploading
   */
  private allUploadingDone(files: Map<string, LocalFile>) {
    return Array.from(files.values()).every(
      (file) => file.uploadState !== 'uploading',
    )
  }

  /**
   * Helper to update the component state to done and then back to normal
   */
  private setComponentStateDone() {
    if (!this.list) this.componentState = 'done'
    setTimeout(() => {
      if (this.componentState === 'done') this.componentState = 'normal'
    }, 3000)
  }
}
