import { render, fireEvent, screen } from '@testing-library/angular'
import { NggPaginationComponent } from './pagination.component'

describe('Pagination', () => {
  const getActions = () => {
    return screen
      .queryAllByRole('listitem', { hidden: true })
      .map((li) => li.textContent?.trim())
      .join()
  }

  it('should create', async () => {
    const component = await render(NggPaginationComponent, {
      componentProperties: { length: 100, pageSize: 10 },
    })
    expect(component).toBeDefined()
  })

  describe('with 10 pages render correct actions', () => {
    it('for pageindex 0', async () => {
      await render(NggPaginationComponent, {
        componentProperties: { length: 100, pageSize: 10 },
      })
      expect(getActions()).toBe('1,2,3,4,5,6,...,10,')
    })

    it('for pageindex 1', async () => {
      await render(NggPaginationComponent, {
        componentProperties: { length: 100, pageSize: 10, pageIndex: 1 },
      })
      expect(getActions()).toBe(',1,2,3,4,5,6,...,10,')
    })

    it('for pageindex 4', async () => {
      await render(NggPaginationComponent, {
        componentProperties: { length: 100, pageSize: 10, pageIndex: 4 },
      })
      expect(getActions()).toBe(',1,...,3,4,5,6,7,...,10,')
    })

    it('for pageindex 6', async () => {
      await render(NggPaginationComponent, {
        componentProperties: { length: 100, pageSize: 10, pageIndex: 6 },
      })
      expect(getActions()).toBe(',1,...,5,6,7,8,9,10,')
    })

    it('for pageindex 9', async () => {
      await render(NggPaginationComponent, {
        componentProperties: { length: 100, pageSize: 10, pageIndex: 9 },
      })
      expect(getActions()).toBe(',1,...,5,6,7,8,9,10')
    })
  })

  describe('with 3 pages render correct actions', () => {
    it('for pageindex 0', async () => {
      await render(NggPaginationComponent, {
        componentProperties: { length: 75, pageSize: 25, pageIndex: 0 },
      })
      expect(getActions()).toBe('1,2,3,')
    })

    it('for pageindex 1', async () => {
      await render(NggPaginationComponent, {
        componentProperties: { length: 75, pageSize: 25, pageIndex: 1 },
      })
      expect(getActions()).toBe(',1,2,3,')
    })

    it('for pageindex 2', async () => {
      await render(NggPaginationComponent, {
        componentProperties: { length: 75, pageSize: 25, pageIndex: 2 },
      })
      expect(getActions()).toBe(',1,2,3')
    })
  })

  describe('does not render', () => {
    it('with only 1 page', async () => {
      await render(NggPaginationComponent, {
        componentProperties: { length: 9, pageSize: 10 },
      })
      expect(getActions()).toBe('')
    })

    it('with 0 items', async () => {
      await render(NggPaginationComponent, {
        componentProperties: { length: 0, pageSize: 10 },
      })
      expect(getActions()).toBe('')
    })
  })

  describe('actions:', () => {
    it('next', async () => {
      await render(NggPaginationComponent, {
        componentProperties: { length: 100, pageSize: 10, pageIndex: 0 },
      })
      fireEvent.click(screen.getByLabelText('Next page'))
      expect(
        screen.getByRole('button', { current: 'page' })?.textContent?.trim(),
      ).toBe('2')
    })

    it('last', async () => {
      await render(NggPaginationComponent, {
        componentProperties: { length: 100, pageSize: 10, pageIndex: 0 },
      })
      fireEvent.click(screen.getByLabelText('Last page'))
      expect(
        screen.getByRole('button', { current: 'page' })?.textContent?.trim(),
      ).toBe('10')
    })

    it('previous', async () => {
      await render(NggPaginationComponent, {
        componentProperties: { length: 100, pageSize: 10, pageIndex: 9 },
      })
      fireEvent.click(screen.getByLabelText('Previous page'))
      expect(
        screen.getByRole('button', { current: 'page' })?.textContent?.trim(),
      ).toBe('9')
    })

    it('first', async () => {
      await render(NggPaginationComponent, {
        componentProperties: { length: 100, pageSize: 10, pageIndex: 9 },
      })
      fireEvent.click(screen.getByLabelText('First page'))
      expect(
        screen.getByRole('button', { current: 'page' })?.textContent?.trim(),
      ).toBe('1')
    })

    it('page 5', async () => {
      await render(NggPaginationComponent, {
        componentProperties: { length: 100, pageSize: 10, pageIndex: 1 },
      })
      fireEvent.click(screen.getByLabelText('Page 5'))
      expect(
        screen.getByRole('button', { current: 'page' })?.textContent?.trim(),
      ).toBe('5')
    })
  })
})
