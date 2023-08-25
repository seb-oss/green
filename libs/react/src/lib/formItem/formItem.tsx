import IconButton from '../form/iconButton/iconButton'
import {
  debounce,
  delay,
  IExpandableInformation,
  IValidator,
  randomId,
  validateClassName,
} from '@sebgroup/extract'
import React, {
  ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { InfoCircle, Times } from '../icons'
import classNames from 'classnames'

interface FormItemProps extends IExpandableInformation {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onChangeInput?: (value: string) => string
  label?: string
  labelInformation?: string
  validator?: IValidator
  inputId?: string
  children: ReactNode
  role?: string
}

export const FormItem = ({
  expandableInfo,
  label,
  labelInformation,
  validator,
  inputId,
  children,
  expandableInfoButtonLabel,
  role,
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
    validator && validateClassName(validator?.indicator)
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
            <div className="form-info" id={`${inputId}_info`}>
              {labelInformation}
            </div>
          )}
        </div>
        {expandableInfo && (
          <IconButton
            size="small"
            aria-expanded={isExpanded}
            aria-controls={`${inputId}-expandable-info`}
            onClick={async (event) => {
              if (!isExpanded) {
                setIsHidden(false)
                await delay(10)
                expandableInnerRef.current &&
                  setExpandableHeight(
                    expandableInnerRef.current['clientHeight']
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
        >
          <div ref={expandableInnerRef}> {expandableInfo} </div>
        </div>
      )}
      {children}
      <div className="gds-form-item__footer">
        {validator && <span className="form-info">{validator.message}</span>}
      </div>
    </div>
  )
}
