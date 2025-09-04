import { fakeAsync, flush, TestBed, tick } from '@angular/core/testing'

import { ToastMessageService } from './toast-message.service'
import { MessageType, ToastMessage } from './toast.models'

describe('ToastMessageService', () => {
  let service: ToastMessageService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ToastMessageService)
  })

  it('should create the service', () => {
    expect(service).toBeTruthy()
  })

  describe('add', () => {
    const defaultMsg: ToastMessage = {
      type: MessageType.Success,
      translocoScope: 'reg',
      titleText: 'Great job!',
    }
    it('should add new message to the messages list', () => {
      service.add({ ...defaultMsg })

      expect(service['messages'].length).toBe(1)
      expect(service['messages'][0]).toEqual({
        type: MessageType.Success,
        translocoScope: 'reg',
        titleText: 'Great job!',
        timeout: undefined,
      })
    })

    it('should not have two duplicated messages in the messages list', () => {
      service.add({ ...defaultMsg, bodyText: '', timeout: 3 })
      service.add({ ...defaultMsg })

      expect(service['messages'].length).toBe(1)
    })
  })

  describe('addMessage', () => {
    it('should add new message to the messages list', () => {
      service.addMessage(MessageType.Success, 'reg', 'Great job!')

      expect(service['messages'].length).toBe(1)
      expect(service['messages'][0]).toEqual({
        type: MessageType.Success,
        translocoScope: 'reg',
        titleText: 'Great job!',
        timeout: undefined,
      })
    })

    it('should not have two duplicated messages in the messages list', () => {
      service.addMessage(MessageType.Success, 'test', 'Great job!', '', 3)
      service.addMessage(MessageType.Success, 'test', 'Great job!')

      expect(service['messages'].length).toBe(1)
    })
  })

  describe('removeMessage', () => {
    it('should remove a message with the given id from the messages list', () => {
      service.addMessage(MessageType.Success, 'test1', 'Great job!')
      service.addMessage(MessageType.Error, 'test2', 'Something went wrong.')

      expect(service['messages'].length).toBe(2)

      service.removeMessage({
        type: MessageType.Success,
        translocoScope: 'test1',
        titleText: 'Great job!',
        timeout: undefined,
      })

      expect(service['messages'].length).toBe(1)
      expect(service['messages'][0]).toEqual({
        type: MessageType.Error,
        translocoScope: 'test2',
        titleText: 'Something went wrong.',
        timeout: undefined,
      })
    })

    it('should not update messages list if not existing message was passed ', () => {
      service.addMessage(MessageType.Success, 'scope1', 'Great job!')
      service.addMessage(MessageType.Error, 'scope2', 'Something went wrong.')

      expect(service['messages'].length).toBe(2)

      service.removeMessage({
        type: MessageType.Success,
        translocoScope: 'scope1',
        titleText: 'Perfect job!',
        timeout: undefined,
      })

      expect(service['messages'].length).toBe(2)
    })
  })

  describe('getMessages', () => {
    it('should return messages', () => {
      const messages = service.getMessages()
      expect(messages).toBeDefined()
    })

    it('should update messages list when addMessages was called', () => {
      let messages: ToastMessage[] = []

      service.getMessages().subscribe((messageList) => {
        messages = messageList
      })
      service.addMessage(MessageType.Success, 'scope3', 'Great job!')

      expect(messages).toEqual([
        {
          type: MessageType.Success,
          translocoScope: 'scope3',
          titleText: 'Great job!',
          timeout: undefined,
        },
      ])
    })

    it('should update messages list when removeMessage was called', () => {
      let messages: ToastMessage[] = []
      service.getMessages().subscribe((messageList) => {
        messages = messageList
      })

      service.addMessage(
        MessageType.Success,
        'scope3',
        'Great job!',
        undefined,
        3,
      )
      expect(messages.length).toBe(1)

      service.removeMessage({
        type: MessageType.Success,
        translocoScope: 'scope3',
        titleText: 'Great job!',
        timeout: 3,
      })
      expect(messages.length).toBe(0)
    })

    it('should remove message after 3 second when timeout is set', fakeAsync(() => {
      let messages: ToastMessage[] = []
      const messagesObservable = service.getMessages()

      messagesObservable.subscribe((messageList) => {
        messages = messageList
      })
      service.addMessage(
        MessageType.Success,
        'scope3',
        'Great job!',
        undefined,
        3,
      )
      expect(messages.length).toBe(1)

      tick(4000)
      expect(messages.length).toBe(0)
    }))
  })

  describe('resumeMessageTimeout', () => {
    it('should update message timeout id and start time', fakeAsync(() => {
      service.addMessage(
        MessageType.Success,
        'scope1',
        'Great job!',
        undefined,
        3,
      )
      const timeoutIdBeforePause = service['messages'][0].timeoutId
      const timeoutStartTimeBeforePause =
        service['messages'][0].timeoutStartTime

      tick(1000)
      service.resumeMessageTimeout(service['messages'][0])

      expect(service['messages'][0].timeoutId).not.toEqual(timeoutIdBeforePause)
      expect(service['messages'][0].timeoutStartTime).not.toEqual(
        timeoutStartTimeBeforePause,
      )
      flush()
    }))
  })

  describe('pauseMessageTimeout', () => {
    it('should check if message timeout was paused when message has timeout', fakeAsync(() => {
      service.addMessage(
        MessageType.Success,
        'scope1',
        'Great job!',
        undefined,
        3,
      )
      tick(1000)

      service.pauseMessageTimeout(service['messages'][0])
      tick(1000)

      expect(service['messages'][0].timeout).toEqual(2)
      flush()
    }))

    it('should check if message timeout was not updated if from the beginning message did not have a timeout', fakeAsync(() => {
      service.addMessage(MessageType.Success, 'scope4', 'Great job!')
      tick(1000)

      service.pauseMessageTimeout(service['messages'][0])
      tick(1000)

      expect(service['messages'][0].timeout).toBeUndefined()
      flush()
    }))
  })
})
