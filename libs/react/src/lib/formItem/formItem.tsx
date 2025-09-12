import React, {
  AriaAttributes,
  PropsWithChildren,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { createComponent } from '@lit/react'
import classNames from 'classnames'

import {
  debounce,
  delay,
  IExpandableInformation,
  ILabelAndLabelInformation,
  IValidator,
  randomId,
  validateClassName,
} from '@sebgroup/extract'
import { IconTriangleExclamation } from '@sebgroup/green-core/components/icon/icons/triangle-exclamation'
import { getScopedTagName } from '@sebgroup/green-core/scoping'
import { IconButton } from '../form'
import { InfoCircle, Times } from '../icons'

interface FormItemProps
  extends IExpandableInformation,
    ILabelAndLabelInformation,
    PropsWithChildren {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onChangeInput?: (value: string) => string
  validator?: IValidator
  inputId?: string
  role?: string
  'aria-live'?: AriaAttributes['aria-live']
  /** Intended to use together with TextArea to show character counter. */
  rightAlignedFooterInfo?: string
}

const TriangleExclamationIcon = createComponent({
  tagName: getScopedTagName('gds-icon-triangle-exclamation'),
  elementClass: IconTriangleExclamation,
  react: React,
})

export const FormItem = ({
  expandableInfo,
  label,
  labelInformation,
  validator,
  inputId,
  children,
  expandableInfoButtonLabel,
  role,
  rightAlignedFooterInfo,
  'aria-live': ariaLive = 'assertive',
}: FormItemProps) => {
  const expandableInnerRef = useRef<HTMLDivElement>(null)
  const expandableRef = useRef<HTMLDivElement>(null)
  const [expandableHeight, setExpandableHeight] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  useLayoutEffect(() => {
    expandableInnerRef.current &&
      setExpandableHeight(expandableInnerRef.current['clientHeight'])
    setIsHidden(true)
  }, [])

  useEffect(() => {
    const handleResize = debounce(function setExpandableHeightAfterResize() {
      isExpanded &&
        expandableInnerRef.current &&
        setExpandableHeight(expandableInnerRef.current['clientHeight'])
    }, 300)

    if (expandableRef.current) {
      window.addEventListener('resize', handleResize)
    }

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isExpanded, expandableInnerRef])

  if (!inputId) inputId = randomId()

  const formItemClassNames = classNames(
    'gds-form-item',
    validator && validateClassName(validator?.indicator),
  )

  return (
    <div
      className={formItemClassNames}
      role={role ? role : undefined}
      aria-labelledby={role ? `${inputId}-label` : undefined}
    >
      {expandableInfo && <div className="gds-form-item__backdrop"></div>}
      <div className="gds-form-item__header">
        <div className="gds-form-item__labels">
          {label && (
            <label
              id={role ? `${inputId}-label` : undefined}
              htmlFor={role ? undefined : inputId}
            >
              {label}
            </label>
          )}
          {labelInformation && (
            <div className="gds-form-info" id={`${inputId}_info`}>
              {labelInformation}
            </div>
          )}
        </div>
        {expandableInfo && (
          <IconButton
            size="small"
            aria-expanded={isExpanded}
            aria-controls={`${inputId}-expandable-info`}
            aria-label={expandableInfoButtonLabel}
            onClick={async (event) => {
              if (!isExpanded) {
                setIsHidden(false)
                await delay(10)
                expandableInnerRef.current &&
                  setExpandableHeight(
                    expandableInnerRef.current['clientHeight'],
                  )
                setIsExpanded(true)
              } else {
                setIsExpanded(false)
                await delay(300)
                setIsHidden(true)
              }
            }}
          >
            {isExpanded ? (
              <Times title={expandableInfoButtonLabel} />
            ) : (
              <InfoCircle title={expandableInfoButtonLabel} />
            )}
          </IconButton>
        )}
      </div>
      {expandableInfo && (
        <div
          ref={expandableRef}
          id={`gds-expandable-info-${inputId}`}
          className="gds-form-item__expandable-info"
          hidden={isHidden}
          style={{ height: isExpanded ? expandableHeight : 0 }}
          // TODO: Remove when inert is supported in React types
          {...{ inert: isHidden ? true : undefined }}
        >
          <div ref={expandableInnerRef}> {!isHidden && expandableInfo} </div>
        </div>
      )}
      {children}
      <div className="gds-form-item__footer" aria-live={ariaLive}>
        {validator && (
          <>
            <TriangleExclamationIcon
              solid
              size={'1rem'}
              style={{ color: 'var(--gds-sys-color-text-error)' }}
              aria-hidden="true"
            />
            <span className="form-info" id={`${inputId}_message`}>
              {validator.message}
            </span>
          </>
        )}
        {rightAlignedFooterInfo && (
          <span
            className="form-info"
            style={{
              textAlign: 'right',
              width: validator ? 'auto' : '100%',
            }}
            aria-hidden="true"
          >
            {rightAlignedFooterInfo}
          </span>
        )}
      </div>
    </div>
  )
}
