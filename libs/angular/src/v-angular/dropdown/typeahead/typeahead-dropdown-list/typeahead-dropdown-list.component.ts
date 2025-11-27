import {
  Component,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Renderer2,
  SkipSelf,
} from '@angular/core'
import { TRANSLOCO_SCOPE, TranslocoScope } from '@jsverse/transloco'
import { fromEvent, Subject, takeUntil } from 'rxjs'

import { OptionBase } from '@sebgroup/green-angular/src/v-angular/core'
import { NggvInputComponent } from '@sebgroup/green-angular/src/v-angular/input'
import { NggvDropdownListComponent } from '../../dropdown-list/dropdown-list.component'

// Use dropdownList template and combine stylesheets
@Component({
    selector: 'nggv-typeahead-dropdown-list',
    templateUrl: '../../dropdown-list/dropdown-list.component.html',
    styleUrls: [
        '../typeahead-dropdown-list/typeahead-dropdown-list.component.scss',
        '../../dropdown-list/dropdown-list.component.scss',
    ],
    standalone: false
})
export class NggvTypeaheadDropdownListComponent
  extends NggvDropdownListComponent
  implements OnInit, OnDestroy
{
  @Input() hostComponent!: NggvInputComponent

  /** Formats each item that is displayed as an option. Only applies format if the option if it implement Option interface. */
  @Input() resultFormatter?: (option: OptionBase<any>) => string

  /** Formats the selected item in the input when dropdown is opened. If no function is provided, it will display the value of the selected objects label property */
  @Input() selectedFormatter?: (selected: OptionBase<any>) => string

  private _destroy$ = new Subject<boolean>()

  constructor(
    @SkipSelf()
    @Optional()
    @Inject(TRANSLOCO_SCOPE)
    protected translocoScope: TranslocoScope,
    private renderer2: Renderer2,
    private element: ElementRef,
  ) {
    super(translocoScope, renderer2, element)
  }

  ngOnInit(): void {
    this.handleSelectedValueChanges()
    this.handleFocusChanges()
  }

  ngOnDestroy(): void {
    this._destroy$.next(true)
    this._destroy$.complete()
  }

  /** @Internal Subscribe to click outside dropdownList and input to close dropdownList */
  private subscribeToOutsideClickEvent() {
    this.onClickSubscription = fromEvent(document, 'click')
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (event: Event) => {
          if (
            this.expanded &&
            !this.element.nativeElement.contains(event.target) &&
            !this.hostComponent.inputRef?.nativeElement.contains(event.target)
          ) {
            this.setExpanded(false)
            this.onClickSubscription?.unsubscribe()
          }
        },
      })
  }

  /** @Internal Update state of the host-input to reflect the selected value */
  private handleSelectedValueChanges() {
    this.selectedValueChanged
      .pipe(takeUntil(this._destroy$))
      .subscribe((selected) => {
        if (this.hostComponent.inputRef) {
          this.hostComponent.state = `${this.formatSelected(selected)}`
        }
      })
  }

  /** @Internal Expand the dropdown when input receives focus. If no state, set empty string in input */
  private handleFocusChanges() {
    this.hostComponent.nggvFocus
      .asObservable()
      .pipe(takeUntil(this._destroy$))
      .subscribe(() => {
        if (!this.state) this.hostComponent.nggvInput.emit('')
        this.setExpanded(true)
        this.subscribeToOutsideClickEvent()
      })
  }

  /**
   * @internal Formats the selected option to display in the input. Interpolate the returned value
   * since we don't know the return type or label type.
   * @param value The selected value
   * @returns The formatted value
   */
  private formatSelected(value: OptionBase<any>) {
    if (value?.key == null) return ''
    //If no formatter exists, return the label or empty string
    if (!this.selectedFormatter) return value.label ?? ''
    // If a formatter exists, use it
    return this.selectedFormatter(value) ?? ''
  }

  /**
   *
   * @param expanded boolean to set if dropdown is expanded
   */
  override setExpanded(expanded = true) {
    super.setExpanded(expanded)

    /**
     * Makes the typeahead dropdown as wide as the host component
     */
    this.renderer2.setStyle(
      this.element.nativeElement,
      'width',
      `${this.hostComponent.element.nativeElement.offsetWidth}px`,
    )
  }
}
