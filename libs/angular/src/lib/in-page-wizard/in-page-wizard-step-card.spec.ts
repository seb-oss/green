import { Component, Input } from '@angular/core'
import { fireEvent, render, waitFor } from '@testing-library/angular'

import { NggInPageWizardStepCardComponent } from './in-page-wizard-step-card.component'

describe('InPageWizardStepCardComponent', () => {
  it('should create', async () => {
    const { findByTestId } = await render(
      NggFakeInPageWizardStepCardComponent,
      {
        declarations: [
          NggFakeInPageWizardStepCardComponent,
          NggInPageWizardStepCardComponent,
        ],
        providers: [],
        componentInputs: {
          title: 'Test Title',
          stepText: 'Test Step Text',
        },
      },
    )
    const rootElement = findByTestId('in-page-wizard-step-card-root')
    expect(rootElement).toBeDefined()
  })

  describe('Text input', () => {
    it('should shown text inputs', async () => {
      const { findByTestId } = await render(
        NggFakeInPageWizardStepCardComponent,
        {
          declarations: [
            NggFakeInPageWizardStepCardComponent,
            NggInPageWizardStepCardComponent,
          ],
          providers: [],
          componentInputs: {
            title: 'Test Title',
            stepText: 'Test Step Text',
          },
        },
      )

      const title = await findByTestId('in-page-wizard-step-card-title')

      expect(title).toBeDefined()
      expect(title.textContent).toEqual('Test Title')

      const stepText = await findByTestId('in-page-wizard-step-card-step-text')
      expect(stepText).toBeDefined()
      expect(stepText.textContent?.trim()).toEqual('Test Step Text')
    })
  })
  describe('Active', () => {
    it('should set class active', async () => {
      const { queryByTestId } = await render(
        NggFakeInPageWizardStepCardComponent,
        {
          declarations: [
            NggFakeInPageWizardStepCardComponent,
            NggInPageWizardStepCardComponent,
          ],
          providers: [],
          componentInputs: {
            nextBtnText: 'Test Next',
            isActive: true,
          },
        },
      )

      await waitFor(() => {
        const root = queryByTestId('in-page-wizard-step-card-root')
        expect(root).toBeDefined()
        expect(root?.classList).toContain('active')
      })
    })

    it('should show next button with icon', async () => {
      const { findByTestId } = await render(
        NggFakeInPageWizardStepCardComponent,
        {
          declarations: [
            NggFakeInPageWizardStepCardComponent,
            NggInPageWizardStepCardComponent,
          ],
          providers: [],
          componentInputs: {
            nextBtnText: 'Test Next',
            isActive: true,
          },
        },
      )

      const nextBtn = await findByTestId('in-page-wizard-step-card-next-btn')
      expect(nextBtn).toBeDefined()
      expect(nextBtn.textContent?.trim()).toEqual('Test Next')
      const nextIcon = await findByTestId('in-page-wizard-step-card-next-icon')
      expect(nextIcon).toBeDefined()
    })

    it('should not show any edit btns', async () => {
      const { queryByTestId } = await render(
        NggFakeInPageWizardStepCardComponent,
        {
          declarations: [
            NggFakeInPageWizardStepCardComponent,
            NggInPageWizardStepCardComponent,
          ],
          providers: [],
          componentInputs: {
            nextBtnText: 'Test Next',
            isActive: true,
          },
        },
      )

      const el = queryByTestId('in-page-wizard-step-card-edit-btn')
      expect(el).toBeNull()
      const elFooter = queryByTestId('in-page-wizard-step-card-footer-edit-btn')
      expect(elFooter).toBeNull()
    })

    it('should show content', async () => {
      const { findByTestId } = await render(
        NggFakeInPageWizardStepCardComponent,
        {
          declarations: [
            NggFakeInPageWizardStepCardComponent,
            NggInPageWizardStepCardComponent,
          ],
          providers: [],
          componentInputs: {
            nextBtnText: 'Test Next',
            isActive: true,
          },
        },
      )

      const content = await findByTestId('in-page-wizard-step-card-content')
      expect(content).toBeDefined()
      expect(content.childNodes.length).toEqual(1)

      expect(
        (content.childNodes[0] as HTMLElement).getAttribute('data-testid'),
      ).toEqual('fake-step-card-content')
    })

    it('should not change the state to completed if the step is not valid on button click', async () => {
      const nextSpy = jest.fn()
      const { findByTestId, fixture } = await render(
        NggFakeInPageWizardStepCardComponent,
        {
          declarations: [
            NggFakeInPageWizardStepCardComponent,
            NggInPageWizardStepCardComponent,
          ],
          providers: [],
          componentInputs: {
            nextBtnText: 'Test Next',
            isActive: true,
            stepIsValid: () => {
              return false
            },
            handleNextClick: nextSpy,
          },
        },
      )
      // Arrange
      const root = await findByTestId('in-page-wizard-step-card-root')
      const nextBtn = await findByTestId('in-page-wizard-step-card-next-btn')
      expect(nextBtn).toBeDefined()
      expect(root.classList).toContain('active')
      expect(root.classList).not.toContain('completed')

      // Act
      fireEvent.click(nextBtn)

      // Assert
      await waitFor(() => {
        expect(nextSpy).toBeCalledTimes(1)
        expect(root.classList).toContain('active')
        expect(fixture.componentInstance.isCompleted).toBe(false)
        expect(fixture.componentInstance.isActive).toBe(true)
      })
    })
  })

  it('should on next btn click change state to completed', async () => {
    const nextSpy = jest.fn()
    const { findByTestId, fixture } = await render(
      NggFakeInPageWizardStepCardComponent,
      {
        declarations: [
          NggFakeInPageWizardStepCardComponent,
          NggInPageWizardStepCardComponent,
        ],
        providers: [],
        componentInputs: {
          nextBtnText: 'Test Next',
          isActive: true,
          handleNextClick: nextSpy,
        },
      },
    )
    // Arrange
    const root = await findByTestId('in-page-wizard-step-card-root')
    const nextBtn = await findByTestId('in-page-wizard-step-card-next-btn')
    expect(nextBtn).toBeDefined()
    expect(root.classList).toContain('active')
    expect(root.classList).not.toContain('completed')

    // Act
    fireEvent.click(nextBtn)

    // Assert
    await waitFor(() => {
      expect(nextSpy).toBeCalledTimes(1)
      expect(root.classList).not.toContain('active')
      expect(fixture.componentInstance.isCompleted).toBe(true)
      expect(fixture.componentInstance.isActive).toBe(false)
    })
  })
})

describe('Completed', () => {
  it('should set class completed', async () => {
    const { queryByTestId } = await render(
      NggFakeInPageWizardStepCardComponent,
      {
        declarations: [
          NggFakeInPageWizardStepCardComponent,
          NggInPageWizardStepCardComponent,
        ],
        providers: [],
        componentInputs: {
          editBtnText: 'Test Edit',
          isCompleted: true,
        },
      },
    )

    await waitFor(() => {
      const root = queryByTestId('in-page-wizard-step-card-root')
      expect(root).toBeDefined()
      expect(root?.classList).toContain('completed')
    })
  })

  it('should show edit button', async () => {
    const { findByTestId } = await render(
      NggFakeInPageWizardStepCardComponent,
      {
        declarations: [
          NggFakeInPageWizardStepCardComponent,
          NggInPageWizardStepCardComponent,
        ],
        providers: [],
        componentInputs: {
          editBtnText: 'Test Edit',
          isCompleted: true,
          isActive: false,
        },
      },
    )
    const editBtn = await findByTestId('in-page-wizard-step-card-edit-btn')
    expect(editBtn).toBeDefined()
    expect(editBtn.textContent?.trim()).toEqual('Test Edit')
  })

  it('should not show next btn', async () => {
    const { queryByTestId } = await render(
      NggFakeInPageWizardStepCardComponent,
      {
        declarations: [
          NggFakeInPageWizardStepCardComponent,
          NggInPageWizardStepCardComponent,
        ],
        providers: [],
        componentInputs: {
          editBtnText: 'Test Edit',
          isCompleted: true,
        },
      },
    )
    await waitFor(() => {
      expect(queryByTestId('in-page-wizard-step-card-next-btn')).toBeNull()
    })
  })

  it('should show content', async () => {
    const { findByTestId } = await render(
      NggFakeInPageWizardStepCardComponent,
      {
        declarations: [
          NggFakeInPageWizardStepCardComponent,
          NggInPageWizardStepCardComponent,
        ],
        providers: [],
        componentInputs: {
          editBtnText: 'Test Edit',
          isCompleted: true,
        },
      },
    )
    const content = await findByTestId('in-page-wizard-step-card-content')
    expect(content).toBeDefined()
    expect(content.childNodes.length).toEqual(1)

    expect(
      (content.childNodes[0] as HTMLElement).getAttribute('data-testid'),
    ).toEqual('fake-step-card-content')
  })

  it('should on edit btn click change state to active', async () => {
    const editSpy = jest.fn()
    const { findByTestId, queryByTestId } = await render(
      NggFakeInPageWizardStepCardComponent,
      {
        declarations: [
          NggFakeInPageWizardStepCardComponent,
          NggInPageWizardStepCardComponent,
        ],
        providers: [],
        componentInputs: {
          editBtnText: 'Edit',
          isCompleted: true,
          isActive: false,
        },
        componentOutputs: {
          handleEditClick: editSpy,
        },
      },
    )
    // Arrange
    const editBtn = await findByTestId('in-page-wizard-step-card-edit-btn')
    const root = await findByTestId('in-page-wizard-step-card-root')
    expect(editBtn).toBeDefined()
    expect(root?.classList).toContain('completed')
    expect(root?.classList).not.toContain('active')

    // Act
    fireEvent.click(editBtn)

    // Assert
    await waitFor(() => {
      expect(queryByTestId('in-page-wizard-step-card-edit-btn')).toBeNull()
      expect(editSpy).toBeCalledTimes(1)
    })
  })
})

describe('Upcoming', () => {
  it('should not show next btn', async () => {
    const { queryByTestId } = await render(
      NggFakeInPageWizardStepCardComponent,
      {
        declarations: [
          NggFakeInPageWizardStepCardComponent,
          NggInPageWizardStepCardComponent,
        ],
        providers: [],
        componentInputs: {
          isActive: false,
          isCompleted: false,
        },
      },
    )
    await waitFor(() => {
      expect(queryByTestId('in-page-wizard-step-card-next-btn')).toBeNull()
    })
  })
  it('should not show edit btn', async () => {
    const { queryByTestId } = await render(
      NggFakeInPageWizardStepCardComponent,
      {
        declarations: [
          NggFakeInPageWizardStepCardComponent,
          NggInPageWizardStepCardComponent,
        ],
        providers: [],
        componentInputs: {
          isActive: false,
          isCompleted: false,
        },
      },
    )
    await waitFor(() => {
      expect(queryByTestId('in-page-wizard-step-card-edit-btn')).toBeNull()
    })
  })

  it('should not show content', async () => {
    const { queryByTestId } = await render(
      NggFakeInPageWizardStepCardComponent,
      {
        declarations: [
          NggFakeInPageWizardStepCardComponent,
          NggInPageWizardStepCardComponent,
        ],
        providers: [],
        componentInputs: {
          isActive: false,
          isCompleted: false,
        },
      },
    )
    await waitFor(() => {
      expect(queryByTestId('in-page-wizard-step-card-content')).toBeNull()
    })
  })
})

@Component({
    selector: 'ngg-fake-step-card',
    template: `
    <ngg-in-page-wizard-step-card
      [isActive]="isActive"
      [isCompleted]="isCompleted"
      [disableNext]="disableNext"
      [title]="title"
      [stepText]="stepText"
      [editBtnText]="editBtnText"
      [nextBtnText]="nextBtnText"
      [stepIsValid]="stepIsValid"
      (handleNextClick)="_handleNextClick()"
      (handleEditClick)="_handleEditClick()"
    >
      <h2 data-testid="fake-step-card-content">Content</h2>
    </ngg-in-page-wizard-step-card>
  `,
    standalone: false
})
class NggFakeInPageWizardStepCardComponent {
  @Input() public stepText = ''

  @Input() public title = ''

  @Input() public editBtnText = ''

  @Input() public nextBtnText = ''

  @Input() public showNextBtnIcon = true

  @Input() public isCompleted = false

  @Input() public disableNext = false

  @Input() public isActive = false

  @Input() public stepIsValid = () => {
    return true
  }

  @Input() public handleNextClick?: () => void

  @Input() public handleEditClick?: () => void

  _handleNextClick() {
    if (this.handleNextClick) {
      if (this.stepIsValid()) {
        this.isActive = false
        this.isCompleted = true
      }
      this.handleNextClick()
    }
  }

  _handleEditClick() {
    if (this.handleEditClick) {
      this.handleEditClick()
    }
  }
}
