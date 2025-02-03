/* eslint-disable no-console */
import { Observable, throwError, timer } from 'rxjs'
import { finalize, mergeMap } from 'rxjs/operators'

import { APIFile, LocalFile } from './drag-drop.models'

/**
 * Helper to extend the base file with {@link APIFile} defaults
 * @param file file base that will be extended with {@link APIFile} defaults
 * @param data extra data to override defaults
 */
export const extendFile = (
  file: File | undefined,
  ...data: Array<Partial<Omit<LocalFile, 'raw'> & APIFile>>
): LocalFile & APIFile => {
  return Object.assign(
    {
      id: file ? btoa(file.name) : '',
      fileName: file ? file.name : 'na',
      status: '',
      statusReasonInformation: null,
      principal: '',
      uploadDate: (file
        ? new Date(file.lastModified)
        : new Date()
      ).toISOString(),
      registrarId: '',
      registrarName: '',
      progress: 0,
      uploadState: 'local',
      uploadRequests: undefined,
      raw: file,
    } as LocalFile & APIFile,
    ...data,
  )
}

/**
 * Checks if file matches allowed mime types
 * @param type file mime type
 * @param accept allowed mime types
 */
export const verifyAccept = (type: string, accept?: string) => {
  if (!accept) return true
  const regex = new RegExp(accept.replace(/\*/g, '.*').replace(/\s*,\s*/g, '|'))
  return regex.test(type)
}

/**
 * Determines if browser supports drag and drop
 */
export const isDragDropAvailable = () => {
  const div = document.createElement('div')
  return (
    ('draggable' in div || ('ondragstart' in div && 'ondrop' in div)) &&
    'FormData' in window &&
    'FileReader' in window
  )
}

/**
 * Pick only specified keys from a given object
 * @param keys keys to pick from a given object
 * @param object to extract keys from
 */
export const pick = <T, K extends keyof T>(
  object: T,
  ...keys: K[]
): Pick<T, K> => {
  const copy: any = {}
  keys.forEach((key) => {
    copy[key] = object[key]
  })
  return copy
}

/**
 * Will retry running the observable when an error occurs to a maximum limit, increasing delay between executions.
 * @param options specifies number of retries, scaling duration and statuses to exclude
 */
export const retryStrategy =
  ({
    maxRetryAttempts = 3,
    scalingDuration = 1000,
    excludedStatusCodes = [],
  }: {
    maxRetryAttempts?: number
    scalingDuration?: number
    excludedStatusCodes?: number[]
  } = {}) =>
  (attempts: Observable<any>) => {
    return attempts.pipe(
      mergeMap((error, i) => {
        const retryAttempt = i + 1
        // if maximum number of retries have been met
        // or response is a status code we don't wish to retry, throw error
        if (
          retryAttempt > maxRetryAttempts ||
          excludedStatusCodes.find((e) => e === error.status)
        ) {
          return throwError(() => error)
        }
        console.warn(
          `Attempt ${retryAttempt}: retrying in ${retryAttempt * scalingDuration}ms`,
        )
        return timer(retryAttempt * scalingDuration)
      }),
      finalize(() =>
        console.warn(
          `Failed after ${maxRetryAttempts} retry attempts, standing down.`,
        ),
      ),
    )
  }
