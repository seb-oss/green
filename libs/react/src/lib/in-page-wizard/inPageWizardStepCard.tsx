import { ReactNode } from 'react'
import { Edit, Check } from '../icons'

export interface InPageWizardStepCardProps {
  stepText: string
  title: string
  editBtnText?: string
  nextBtnText: string
  nextBtnIcon?: ReactNode
  stepStatus: WizardStepStatus
  hideFooter?: boolean
  children: React.ReactNode
  onNextClick: () => void
  onEditClick?: () => void
  dataTestid?: string
}

export type WizardStepStatus = 'NotStarted' | 'IsActive' | 'IsComplete'

export const InPageWizardStepCard = (props: InPageWizardStepCardProps) => {
  return (
    <section
      className={`gds-in-page-wizard-step-card card ${
        props.stepStatus === 'IsActive' ? 'active' : ''
      } ${props.stepStatus === 'IsComplete' ? 'completed' : ''}`}
      data-testid={props.dataTestid}
    >
      <header className="gds-in-page-wizard-step-card__header">
        <div className="gds-in-page-wizard-step-card__header__icon">
          <Check />
        </div>
        <div className="gds-in-page-wizard-step-card__header__progress">
          {props.stepText}
        </div>
        <div className="gds-in-page-wizard-step-card__header__title">
          <h2 className="h4">{props.title}</h2>
        </div>

        {props.stepStatus === 'IsComplete' && (
          <div className="gds-in-page-wizard-step-card__header__edit">
            <button className="secondary small" onClick={props.onEditClick}>
              <Edit fill={'var(--color)'} height={16} width={16} />
              {props.editBtnText}
            </button>
          </div>
        )}
      </header>

      {(props.stepStatus === 'IsActive' ||
        props.stepStatus === 'IsComplete') && (
        <div className="gds-in-page-wizard-step-card__content">
          {props.children}
        </div>
      )}

      {props.stepStatus === 'IsActive' && !props.hideFooter && (
        <footer className="gds-in-page-wizard-step-card__footer">
          <button className="primary" onClick={props.onNextClick}>
            {props.nextBtnText}

            {props.nextBtnIcon}
          </button>
        </footer>
      )}

      {props.stepStatus === 'IsComplete' && !props.hideFooter && (
        <footer className="gds-in-page-wizard-step-card__footer__edit">
          <button className="secondary" onClick={props.onEditClick}>
            <Edit fill={'var(--color)'} height={16} width={16} />
            {props.editBtnText}
          </button>
        </footer>
      )}
    </section>
  )
}
