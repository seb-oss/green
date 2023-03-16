import {
  render,
  fireEvent,
  screen,
  RenderResult,
} from '@testing-library/angular'
import { NggPaginationComponent } from './pagination.component'

describe('Pagination', () => {
  let component: RenderResult<NggPaginationComponent>

  const getActions = () => {
    return screen
      .queryAllByRole('listitem', { hidden: true })
      .map((li) => li.textContent?.trim())
      .join()
  }

  beforeEach(async () => {
    component = await render(NggPaginationComponent, {
      componentProperties: { length: 100, pageSize: 10 },
    })
  })

  it('should create', () => {
    expect(component).toBeDefined()
  })

  describe('with 10 pages render correct actions', () => {
    it('for pageindex 0', () => {
      expect(getActions()).toBe('1,2,3,4,5,6,...,10,')
    })

    it('for pageindex 1', () => {
      component.change({ pageIndex: 1 })
      expect(getActions()).toBe(',1,2,3,4,5,6,...,10,')
    })

    it('for pageindex 4', () => {
      component.change({ pageIndex: 4 })
      expect(getActions()).toBe(',1,...,3,4,5,6,7,...,10,')
    })

    it('for pageindex 6', () => {
      component.change({ pageIndex: 6 })
      expect(getActions()).toBe(',1,...,5,6,7,8,9,10,')
    })

    it('for pageindex 9', () => {
      component.change({ pageIndex: 9 })
      expect(getActions()).toBe(',1,...,5,6,7,8,9,10')
    })
  })

  describe('with 3 pages render correct actions', () => {
    it('for pageindex 0', () => {
      component.change({ length: 25 })
      expect(getActions()).toBe('1,2,3,')
    })

    it('for pageindex 1', () => {
      component.change({ length: 25, pageIndex: 1 })
      expect(getActions()).toBe(',1,2,3,')
    })

    it('for pageindex 2', () => {
      component.change({ length: 25, pageIndex: 2 })
      expect(getActions()).toBe(',1,2,3')
    })
  })

  describe('does not render', () => {
    it('with only 1 page', () => {
      component.change({ length: 9 })
      expect(getActions()).toBe('')
    })

    it('with 0 items', () => {
      component.change({ length: 0 })
      expect(getActions()).toBe('')
    })
  })

  describe('actions:', () => {
    it('next', () => {
      fireEvent.click(screen.getByLabelText('Next page'))
      expect(
        screen.getByRole('button', { current: 'page' })?.textContent?.trim()
      ).toBe('2')
    })

    it('last', () => {
      fireEvent.click(screen.getByLabelText('Last page'))
      expect(
        screen.getByRole('button', { current: 'page' })?.textContent?.trim()
      ).toBe('10')
    })

    it('previous', () => {
      component.change({ pageIndex: 9 })
      fireEvent.click(screen.getByLabelText('Previous page'))
      expect(
        screen.getByRole('button', { current: 'page' })?.textContent?.trim()
      ).toBe('9')
    })

    it('first', () => {
      component.change({ pageIndex: 9 })
      fireEvent.click(screen.getByLabelText('First page'))
      expect(
        screen.getByRole('button', { current: 'page' })?.textContent?.trim()
      ).toBe('1')
    })

    it('page 5', () => {
      fireEvent.click(screen.getByLabelText('Page 5'))
      expect(
        screen.getByRole('button', { current: 'page' })?.textContent?.trim()
      ).toBe('5')
    })
  })
})
