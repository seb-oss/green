import { PropsWithChildren, ReactNode } from 'react'
import classNames from 'classnames'

import { Check, Edit } from '../icons'

export interface InPageWizardStepCardProps extends PropsWithChildren {
  /** Sub title for the title indicating 'Step X of Y'. */
  stepText: string
  /** Title of the step. */
  title: string
  /** Text on edit button. */
  editBtnText?: string
  /** Text on next button. */
  nextBtnText?: string
  /** Icon for next button. */
  nextBtnIcon?: ReactNode
  /** Status for the step.*/
  stepStatus: 'NotStarted' | 'IsActive' | 'IsComplete'
  /** Force hiding of footer, regardless of state. */
  hideFooter?: boolean
  /** Event for click on next button. */
  onNextClick?: () => void
  /** Event for click on edit button. */
  onEditClick?: () => void
  /** Testid for testing. */
  dataTestid?: string
}

export const InPageWizardStepCard = ({
  editBtnText = 'Edit',
  onNextClick,
  stepStatus,
  stepText,
  title,
  children,
  dataTestid,
  hideFooter = false,
  nextBtnIcon,
  nextBtnText = 'Next',
  onEditClick,
}: InPageWizardStepCardProps) => {
  const sectionClassName = classNames(
    'gds-card',
    'gds-in-page-wizard-step-card',
    {
      active: stepStatus === 'IsActive',
      completed: stepStatus === 'IsComplete',
    },
  )

  return (
    <section className={sectionClassName} data-testid={dataTestid}>
      <header className="gds-in-page-wizard-step-card__header">
        <div className="gds-in-page-wizard-step-card__header__icon">
          <Check />
        </div>
        <div className="gds-in-page-wizard-step-card__header__progress">
          {stepText}
        </div>
        <div className="gds-in-page-wizard-step-card__header__title">
          <h2>{title}</h2>
        </div>

        {stepStatus === 'IsComplete' && (
          <div className="gds-in-page-wizard-step-card__header__edit">
            <button
              className="gds-button secondary small"
              onClick={onEditClick}
            >
              <Edit fill={'var(--color)'} height={16} width={16} />
              {editBtnText}
            </button>
          </div>
        )}
      </header>

      {(stepStatus === 'IsActive' || stepStatus === 'IsComplete') && (
        <div className="gds-in-page-wizard-step-card__content">{children}</div>
      )}

      {stepStatus === 'IsActive' && !hideFooter && (
        <footer className="gds-in-page-wizard-step-card__footer">
          <button className="gds-button" onClick={onNextClick}>
            {nextBtnText}
            {nextBtnIcon}
          </button>
        </footer>
      )}

      {stepStatus === 'IsComplete' && !hideFooter && (
        <footer className="gds-in-page-wizard-step-card__footer gds-in-page-wizard-step-card__footer--edit">
          <button className="gds-button secondary" onClick={onEditClick}>
            <Edit fill={'var(--color)'} height={16} width={16} />
            {editBtnText}
          </button>
        </footer>
      )}
    </section>
  )
}
