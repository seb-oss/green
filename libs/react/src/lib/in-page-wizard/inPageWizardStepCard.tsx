import { ReactNode } from 'react'

export interface InPageWizardStepCardProps {
  stepText: string
  title: string
  editBtnText: string
  nextBtnText: string
  nextBtnIcon?: ReactNode
  stepStatus: WizardStepStatus
  hideFooter?: boolean
  children: React.ReactNode
  onNextClick: () => void
  onEditClick: () => void
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z" />
          </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 576 512"
              >
                <path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" />
              </svg>{' '}
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
    </section>
  )
}
