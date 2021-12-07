import { createPopper, Instance } from '@popperjs/core'
import { AbstractDropdown, DropdownHandler, DropdownListener, DropdownOption } from "./types"
import { createDropdown } from './dropdown'

jest.mock('@popperjs/core', () => ({
  createPopper: jest.fn().mockName('createPopper')
}))

const tick = (t = 0) => new Promise((r) => setTimeout(r, t))

describe('dropdown', () => {
  let handler: DropdownHandler
  let listener: jest.Mock<DropdownListener>

  let toggler: HTMLElement
  let listbox: HTMLElement

  let popper: Partial<Instance>

  beforeEach(async () => {
    toggler = document.createElement('button')
    listbox = document.createElement('div')
    listener = jest.fn<never, [AbstractDropdown]>().mockName('listener')
    const options: DropdownOption[] = [
      { key: 'A', value: 1 },
      { key: 'B', value: 2 },
      { key: 'C', value: 3 },
    ]
    popper = {
      update: jest.fn()
        .mockName('update')
        .mockResolvedValue({ styles: { popper: {} } }),
      destroy: jest.fn().mockName('destroy')
    }
    ;(createPopper as jest.Mock<Instance>)
      .mockReturnValue(popper as Instance)
    
    handler = createDropdown({ id: 'foo', options }, toggler, listbox, listener)
    await tick()
  })

  afterEach(() => {
    toggler.remove()
    listbox.remove()
    handler.destroy()
    ;(createPopper as jest.Mock<Instance>).mockReset()
  })

  describe('methods', () => {
    it('calls back with a new instance', () => {
      const initial = handler.dropdown
      handler.open()
      expect(handler.dropdown).not.toBe(initial)
    })
    it('calls back on activate', async () => {
      await handler.active(true)
      expect(listener).toHaveBeenCalledWith(handler.dropdown)
    })
    it('calls back on deactivate', async () => {
      await handler.active(false)
      expect(listener).toHaveBeenCalledWith(handler.dropdown)
    })
    it('calls back on open', async () => {
      await handler.open()
      expect(listener).toHaveBeenCalledWith(handler.dropdown)
    })
    it('calls back on close', async () => {
      await handler.close()
      expect(listener).toHaveBeenCalledWith(handler.dropdown)
    })
    it('calls back on toggle', async () => {
      await handler.toggle()
      expect(listener).toHaveBeenCalledWith(handler.dropdown)
    })
    it('calls back on select', async () => {
      await handler.select(1)
      expect(listener).toHaveBeenCalledWith(handler.dropdown)
    })
  })

  describe('keyboard', () => {
    describe('when inactive', () => {
      it('does not trigger key events', async () => {
        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }))
        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }))
        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Home' }))
        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'End' }))
        document.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }))
        await tick()

        expect(listener).toHaveBeenCalledTimes(1)
      })
    })
    describe('when active', () => {
      beforeEach(async () => {
        await handler.active(true)
      })
      afterEach(() => handler.active(false))
      describe('Space', () => {
        it('opens closed dropdown', async () => {
          document.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }))
          await tick(10)

          expect(listener).toHaveBeenCalledTimes(3)
          const [dd] = listener.mock.calls[2]
          expect(dd.isOpen).toBe(true)
        })
        it('closes open dropdown', async () => {
          document.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }))
          document.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }))
          await tick()

          expect(listener).toHaveBeenCalledTimes(4)
          const [dd] = listener.mock.calls[3]
          expect(dd.isOpen).toBe(false)
        })
      })
      describe('Escape', () => {
        it('closes open dropdown', async () => {
          document.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }))
          document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
          await tick()

          expect(listener).toHaveBeenCalledTimes(4)
          const [dd] = listener.mock.calls[3]
          expect(dd.isOpen).toBe(false)
        })
        it('does nothing to closed dropdown', async () => {
          expect(listener).toHaveBeenCalledTimes(2)
          document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
          await tick()

          expect(listener).toHaveBeenCalledTimes(2)
        })
      })
      describe('Arrow down', () => {
        it('opens closed dropdown', async () => {
          document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }))
          await tick()

          expect(listener).toHaveBeenCalledTimes(3)
          const [dd] = listener.mock.calls[2]
          expect(dd.isOpen).toBe(true)
        })
        it('selects first option', async () => {
          document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }))
          await tick()

          expect(listener).toHaveBeenCalledTimes(3)
          const [dd] = listener.mock.calls[2]
          expect(dd.options[0].selected).toBe(true)
        })
      })
      describe('Arrow up', () => {
        it('opens closed dropdown', async () => {
          document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }))
          await tick()

          expect(listener).toHaveBeenCalledTimes(3)
          const [dd] = listener.mock.calls[2]
          expect(dd.isOpen).toBe(true)
        })
        it('selects first option', async () => {
          document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }))
          await tick()

          expect(listener).toHaveBeenCalledTimes(3)
          const [dd] = listener.mock.calls[2]
          expect(dd.options[0].selected).toBe(true)
        })
        it('selects last option if looped', async () => {
          handler.loop(true)
          document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }))
          await tick()

          expect(listener).toHaveBeenCalledTimes(4)
          const [dd] = listener.mock.calls[3]
          expect(dd.options[2].selected).toBe(true)
        })
      })
      describe('Home', () => {
        it('opens closed dropdown', async () => {
          document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Home' }))
          await tick()

          expect(listener).toHaveBeenCalledTimes(3)
          const [dd] = listener.mock.calls[2]
          expect(dd.isOpen).toBe(true)
        })
        it('selects first option', async () => {
          document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Home' }))
          await tick()

          expect(listener).toHaveBeenCalledTimes(3)
          const [dd] = listener.mock.calls[2]
          expect(dd.options[0].selected).toBe(true)
        })
      })
      describe('End', () => {
        it('opens closed dropdown', async () => {
          document.dispatchEvent(new KeyboardEvent('keydown', { key: 'End' }))
          await tick()

          expect(listener).toHaveBeenCalledTimes(3)
          const [dd] = listener.mock.calls[2]
          expect(dd.isOpen).toBe(true)
        })
        it('selects last option', async () => {
          document.dispatchEvent(new KeyboardEvent('keydown', { key: 'End' }))
          await tick()

          expect(listener).toHaveBeenCalledTimes(3)
          const [dd] = listener.mock.calls[2]
          expect(dd.options[2].selected).toBe(true)
        })
      })
    })
  })
  describe('popper', () => {
    beforeEach(() => {
      global.innerWidth = 1024
    })
    afterEach(() => {
      global.innerWidth = 1024
    })
    it('calls createPopper (since standard width is 1024)', () => {
      expect(createPopper).toHaveBeenCalledTimes(1)
    })
    it('removes popper if innerWidth < 576', async () => {
      global.innerWidth = 500
      global.dispatchEvent(new UIEvent('resize'))
      await tick()

      expect(listener).toHaveBeenCalledTimes(2)
      expect(popper.destroy).toHaveBeenCalledTimes(1)
      expect(handler.popper).toBe(undefined)
    })
    it('reattaches popper if innerWidth >= 576', async () => {
      global.innerWidth = 500
      global.dispatchEvent(new UIEvent('resize'))
      await tick()
      expect(listener).toHaveBeenCalledTimes(2)
      expect(popper.destroy).toHaveBeenCalledTimes(1)
      expect(handler.popper).toBe(undefined)

      global.innerWidth = 576
      global.dispatchEvent(new UIEvent('resize'))
      await tick(100)

      expect(listener).toHaveBeenCalledTimes(3)
      expect(createPopper).toHaveBeenCalledTimes(2)
      expect(handler.popper).toBe(popper)
    })
  })
})