import '../../datepicker.globals'
import '@sebgroup/green-core/components/icon/icons/calendar.js'
import '@sebgroup/green-core/components/icon/icons/triangle-exclamation.js'

import { WeekDay } from '@angular/common'
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Inject,
  Input,
  OnDestroy,
  Optional,
  Self,
  ViewChild,
} from '@angular/core'
import { NgControl } from '@angular/forms'
import {
  TRANSLOCO_SCOPE,
  TranslocoScope,
  TranslocoService,
} from '@jsverse/transloco'
import { fromEvent, Observable, Subject } from 'rxjs'
import { startWith, takeUntil } from 'rxjs/operators'

import { DateControlValueAccessorComponent } from '../../date-control-value-accessor/date-control-value-accessor.component'

import type { CalendarType } from '../../datepicker.models'

/**
 * Date pickers simplify the task of selecting a date in a visual representation of a calendar.
 * https://designlibrary.sebgroup.com/components/component-datepicker
 *
 * Selector: `nggv-dateinput`
 *
 * When focusing an date element, the calendar allows for navigation using both tab and arrow keys.
 * Pressing 'esc' will close the calendar.
 *
 * Requires TranslocoLocale, but in turn allows for setting locale dynamically:
 * https://jsverse.github.io/transloco/docs/plugins/locale/#manually-setting-locale
 *
 * To configure TranslocoLocale, follow this guide:
 * https://jsverse.github.io/transloco/docs/plugins/locale/#setup
 */
@Component({
  selector: 'nggv-dateinput,nggv-input[type=date]',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
  standalone: false,
})
export class DateInputComponent
  extends DateControlValueAccessorComponent
  implements OnDestroy
{
  @ViewChild('toggleCalendarButton')
  toggleButtonRef?: ElementRef<HTMLButtonElement>
  /** Special property used for selecting DOM elements during automated UI testing. */
  @HostBinding('attr.data-thook') @Input() thook: string | null | undefined =
    'date-input'

  @HostBinding('class.small') get isSmall(): boolean {
    return this.size === 'small'
  }

  @HostBinding('class.large') get isLarge(): boolean {
    return this.size === 'large'
  }

  /** Set type of calendar: either 'normal' or 'expanded'. Default is 'normal'. */
  @Input() type: CalendarType = 'normal'
  /** If set to true, the value will not be editable. */
  @Input() readonly = false
  /**
   * An array of Dates or parsable strings that corresponds with dates that should not be selectable in the calendar.
   * I.e. bank holidays.
   */
  @Input() disableDates: (string | Date)[] = []
  /**
   * An array of weekdays that should not be selectable in the calendar.
   * Can be used together with or instead of @Input() disableDates.
   */
  @Input() disableWeekDays: WeekDay[] = []
  /** Mininum number of rows shown in the calendar. */
  @Input() minRows = 5
  /** Sets a from-date of which all dates before will be invalid. */
  @Input() firstValid: Date | undefined
  /** Sets a to-date of which all dates after will be invalid. */
  @Input() lastValid: Date | undefined
  /** Sets a closing time for today to toggle availability for today's date. */
  @Input() closingTime: Date | undefined
  /** Sets first day of week in calendar. Defaults to Monday. */
  @Input() firstDayOfWeek: WeekDay = WeekDay.Monday
  /** If set to true, it will allow to close the calendar on escape button click. */
  @Input() closeCalendarOnEscape = true
  /** If the date-input should close when scrolling the viewport. Default: false*/
  @Input() closeOnScroll = false

  /**
   * Sets the displayed size of the date input field.
   */
  @Input() size: 'small' | 'large' = 'large'

  @Input() dynamicPosition = false

  /** @internal */
  // calendarIcon: IconDefinition = faCalendarDays;

  /** @internal */
  shown = false

  /** @internal */
  showInput$ = this.showInputDateSrc.asObservable().pipe(startWith(true))

  /** Observable for listening to scrolls when the datepicker is open */
  private documentScroll$: Observable<Event> = fromEvent(document, 'scroll')
  /** Observable for listening to clicks outside of the datepicker. */
  private documentClick$: Observable<Event> = fromEvent(document, 'click')
  /** Subject used for unsubscribe pattern on above observable. */
  private datepickerClosed$ = new Subject<boolean>()

  constructor(
    @Self() @Optional() public ngControl: NgControl,
    @Optional()
    @Inject(TRANSLOCO_SCOPE)
    protected translocoScope: TranslocoScope,
    protected transloco: TranslocoService,
    protected elementRef: ElementRef,
    protected cdr: ChangeDetectorRef,
  ) {
    super(ngControl, translocoScope, elementRef, cdr, transloco)
    // this.showInput$ = this.showInputDateSrc.asObservable()
  }

  ngOnDestroy(): void {
    this.datepickerClosed$.next(true)
    this.datepickerClosed$.complete()
  }

  /**
   * @internal
   * Called from the datepicker-component when a date button is clicked in the calendar.
   *
   * @param date date object emitted when selecting a date in the datepicker.
   */
  onDateChange(date: Date): void {
    // control value accessor will ensure correct formatting of state
    this.state = DateControlValueAccessorComponent.parseDateLike(date)
    // emit state
    this.onChange(this.state)
    // close datepicker and move focus to datepicker button
    this.setShown(false)
    setTimeout(() => this.toggleButtonRef?.nativeElement.focus(), 1)
  }

  /**
   * @internal
   * Called when entering date manually in input field.
   */
  onValueChange(eventTarget: any): void {
    // Will be in the format selected in inputMask
    const value = `${eventTarget.inputmask.undoValue}`

    // Use parserfunction from inputMask to parse to a date object since value can be in multiple formats
    // Then ontrol value accessor will ensure correct formatting of state
    const parsedDate = DateControlValueAccessorComponent.parseDateLike(
      this.dateInputMask.parser!(value),
    )

    this.state = parsedDate

    // emit parsed date
    this.onChange(parsedDate)
    this.onTouched()
  }

  /**
   * @internal
   * Listen to 'esc' keypress and closes datepicker if open.
   */
  @HostListener('keydown', ['$event'])
  keyListener(event: KeyboardEvent): void {
    if (this.closeCalendarOnEscape && event.key === 'Escape')
      this.setShown(false)
  }

  /** @internal */
  toggleDatepicker(): void {
    this.setShown(!this.shown)
  }

  /** To externally trigger the datepicker to close. */
  close(): void {
    this.setShown(false)
  }

  /**
   * Set the shown state of the datepicker popup. If true the popup will be visible.
   * If the state is set to false, call onTouched to notify any state listeners
   * @param state the shown state which to set.
   */
  private setShown(state = true): void {
    this.shown = state
    if (!this.shown) {
      // if shown is set to false, stop listening to clicks
      this.datepickerClosed$.next(true)
      return this.onTouched()
    }
    // if shown is set to true, reset unsubscribe variable
    this.datepickerClosed$.next(false)

    // start listen to scroll if closeOnScroll is enabled
    if (this.closeOnScroll) {
      this.documentScroll$.pipe(takeUntil(this.datepickerClosed$)).subscribe({
        next: () => {
          // if document starts scrolling, close datepicker
          return this.setShown(false)
        },
      })
    }

    // start listening for clicks outside the component
    this.documentClick$.pipe(takeUntil(this.datepickerClosed$)).subscribe({
      next: (event: Event) => {
        // clicking on a gray date causes the datepicker to reload the calendar dates,
        // and the button element clicked will no longer be considered as a child of the datepicker.
        // but the event target path will still contain the parent element
        // if target has datepicker parent, keep listening
        const eventPath = event.composedPath()
        const hasDatepickerParent = !!eventPath.find(
          (e) => e === this.elementRef.nativeElement,
        )
        if (hasDatepickerParent) return
        // else the click is considered to be outside, close datepicker
        return this.setShown(false)
      },
    })
  }
}
