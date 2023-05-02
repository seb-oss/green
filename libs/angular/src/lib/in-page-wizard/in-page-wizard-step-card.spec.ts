import { Component } from '@angular/core'
import {
  render,
  fireEvent,
  RenderResult,
  waitFor,
} from '@testing-library/angular'
import { NggInPageWizardStepCardComponent } from './in-page-wizard-step-card.component'

describe('InPageWizardStepCardComponent', () => {
  let component: NggInPageWizardStepCardComponent
  let fakeComponent: RenderResult<NggFakeInPageWizardStepCardComponent>

  beforeEach(async () => {
    fakeComponent = await render(NggFakeInPageWizardStepCardComponent, {
      declarations: [
        NggFakeInPageWizardStepCardComponent,
        NggInPageWizardStepCardComponent,
      ],
      providers: [],
    })
    fakeComponent.detectChanges()
    component = fakeComponent.fixture.debugElement.children[0].componentInstance
  })

  it('should create', () => {
    const rootElement = component
    expect(rootElement).toBeDefined()
  })
  describe('Text input', () => {
    it('should shown text inputs', async () => {
      component.title = 'Test Title'
      component.stepText = 'Test Step Text'

      const title = await fakeComponent.findByTestId(
        'in-page-wizard-step-card-title'
      )
      expect(title).toBeDefined()
      expect(title.textContent).toEqual('Test Title')

      const stepText = await fakeComponent.findByTestId(
        'in-page-wizard-step-card-step-text'
      )
      expect(stepText).toBeDefined()
      expect(stepText.textContent?.trim()).toEqual('Test Step Text')
    })
  })
  describe('Active', () => {
    beforeEach(() => {
      component.nextBtnText = 'Test Next'
      component.isActive = true
    })

    it('should set class active', async () => {
      await waitFor(() => {
        const root = fakeComponent.queryByTestId(
          'in-page-wizard-step-card-root'
        )
        expect(root).toBeDefined()
        expect(root?.classList).toContain('active')
      })
    })

    it('should show next button', async () => {
      const nextBtn = await fakeComponent.findByTestId(
        'in-page-wizard-step-card-next-btn'
      )
      expect(nextBtn).toBeDefined()
      expect(nextBtn.textContent?.trim()).toEqual('Test Next')
    })

    it('should not show edit btn', async () => {
      expect(
        fakeComponent.queryByTestId('in-page-wizard-step-card-edit-btn')
      ).toBeNull()
    })

    it('should show content', async () => {
      const content = await fakeComponent.findByTestId(
        'in-page-wizard-step-card-content'
      )
      expect(content).toBeDefined()
      expect(content.childNodes.length).toEqual(1)

      expect(
        (content.childNodes[0] as HTMLElement).getAttribute('data-testid')
      ).toEqual('fake-step-card-content')
    })

    it('should on next btn click change state to completed', async () => {
      // Arrange
      const nextBtn = await fakeComponent.findByTestId(
        'in-page-wizard-step-card-next-btn'
      )
      expect(nextBtn).toBeDefined()
      expect(component.isActive).toBeTruthy()
      expect(component.isCompleted).toBeFalsy()

      let eventEmitted = false

      component.handleNextClick.subscribe(() => {
        eventEmitted = true
      })

      // Act
      fireEvent.click(nextBtn)

      // Assert
      await waitFor(() => {
        expect(component.isCompleted).toBeTruthy()
        expect(component.isActive).toBeFalsy()
        expect(eventEmitted).toEqual(true)
      })
    })
  })

  describe('Completed', () => {
    beforeEach(() => {
      component.editBtnText = 'Test Edit'
      component.isCompleted = true
    })

    it('should set class completed', async () => {
      await waitFor(() => {
        const root = fakeComponent.queryByTestId(
          'in-page-wizard-step-card-root'
        )
        expect(root).toBeDefined()
        expect(root?.classList).toContain('completed')
      })
    })

    it('should show edit button', async () => {
      const editBtn = await fakeComponent.findByTestId(
        'in-page-wizard-step-card-edit-btn'
      )
      expect(editBtn).toBeDefined()
      expect(editBtn.textContent?.trim()).toEqual('Test Edit')
    })

    it('should not show next btn', async () => {
      await waitFor(() => {
        expect(
          fakeComponent.queryByTestId('in-page-wizard-step-card-next-btn')
        ).toBeNull()
      })
    })

    it('should show content', async () => {
      const content = await fakeComponent.findByTestId(
        'in-page-wizard-step-card-content'
      )
      expect(content).toBeDefined()
      expect(content.childNodes.length).toEqual(1)

      expect(
        (content.childNodes[0] as HTMLElement).getAttribute('data-testid')
      ).toEqual('fake-step-card-content')
    })

    it('should on edit btn click change state to active', async () => {
      // Arrange
      const editBtn = await fakeComponent.findByTestId(
        'in-page-wizard-step-card-edit-btn'
      )
      expect(editBtn).toBeDefined()
      expect(component.isCompleted).toBeTruthy()
      expect(component.isActive).toBeFalsy()

      let eventEmitted = false

      component.handleEditClick.subscribe(() => {
        eventEmitted = true
      })

      // Act
      fireEvent.click(editBtn)

      // Assert
      await waitFor(() => {
        expect(component.isActive).toBeTruthy()
        expect(
          fakeComponent.queryByTestId('in-page-wizard-step-card-edit-btn')
        ).toBeNull()
        expect(eventEmitted).toEqual(true)
      })
    })
  })

  describe('Upcoming', () => {
    beforeEach(() => {
      component.isActive = false
      component.isCompleted = false
    })

    it('should not show next btn', async () => {
      await waitFor(() => {
        expect(
          fakeComponent.queryByTestId('in-page-wizard-step-card-next-btn')
        ).toBeNull()
      })
    })
    it('should not show edit btn', async () => {
      await waitFor(() => {
        expect(
          fakeComponent.queryByTestId('in-page-wizard-step-card-edit-btn')
        ).toBeNull()
      })
    })

    it('should not show content', async () => {
      await waitFor(() => {
        expect(
          fakeComponent.queryByTestId('in-page-wizard-step-card-content')
        ).toBeNull()
      })
    })
  })
})

@Component({
  selector: 'ngg-fake-step-card',
  template: `
    <ngg-in-page-wizard-step-card>
      <h2 data-testid="fake-step-card-content">Content</h2>
    </ngg-in-page-wizard-step-card>
  `,
})
class NggFakeInPageWizardStepCardComponent {}
