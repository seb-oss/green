import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Renderer2,
  Self,
} from '@angular/core'
import { NgControl } from '@angular/forms'
import { TRANSLOCO_SCOPE, TranslocoScope } from '@jsverse/transloco'
import { takeUntil } from 'rxjs'

import { OptionBase } from '@sebgroup/green-angular/src/v-angular/core'
import { NggvInputComponent } from '@sebgroup/green-angular/src/v-angular/input'
import { NggvDropdownComponent } from '../../dropdown.component'

@Component({
    selector: 'nggv-typeahead-input',
    templateUrl: './typeahead-input.component.html',
    styleUrls: ['./typeahead-input.component.scss'],
    standalone: false
})
export class NggvTypeaheadInputComponent
  extends NggvInputComponent
  implements OnInit, OnDestroy
{
  /** Reference to the host dropdown */
  @Input() hostComponent!: NggvDropdownComponent

  /** Formats each item that is displayed as an option. Only applies format if the option if it implement Option interface. */
  @Input() resultFormatter?: (option: OptionBase<any>) => string

  /** Formats the selected item in the input when dropdown is opened. If no function is provided, it will display the value of the selected objects label property */
  @Input() selectedFormatter?: (selected: OptionBase<any>) => string

  get dropdownButton(): HTMLElement {
    return this.hostComponent.inputRef?.nativeElement
  }

  /** Boolean to indicate wether the dropdown is expanded or not, to apply appropriate styling */
  expanded = false

  /** Used to determine the height of the inputin html */
  buttonHeight?: number

  /** @internal Used to determine wether the input has been moved or not */
  inputMoved = false

  constructor(
    public element: ElementRef,
    private renderer2: Renderer2,
    @Self() @Optional() public ngControl: NgControl,
    @Optional()
    @Inject(TRANSLOCO_SCOPE)
    protected translocoScope: TranslocoScope,
    protected cdr: ChangeDetectorRef,
  ) {
    super(ngControl, translocoScope, cdr, element)
    super.ngOnInit()
  }

  ngOnInit() {
    this.autocomplete = 'off'
    this.debounceTime = 0
    this.hostComponent.selectOnSingleOption = false

    this.handleExpandedChange()
  }

  /**
   * @internal
   * Allow space to be inputted as text
   * @param event fired containing which key was released.
   */
  @HostListener('keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    if (event.code === 'Space' && this.expanded) {
      event.preventDefault()
    }
  }

  /**
   * @internal
   * First time the dropdown is expanded, move the input sp it becomes a child of the dropdown button
   * to better reflect semantics and styling.
   */
  private moveInput() {
    // Workaround to execute code in setTimeout due to hooks management etc.
    setTimeout(() => {
      // Only move if parent dropdown is found
      if (this.dropdownButton) {
        this.renderer2.appendChild(
          this.dropdownButton.querySelector('button'),
          this.element.nativeElement,
        )
        this.inputMoved = true
      }
    }, 0)
  }

  /**
   * @internal
   * When dropdown is expanded, focus on the input. If a value is selected, set it in the input.
   * When the dropdown is collapsed, empty the input from text.
   */
  private handleExpandedChange() {
    this.hostComponent.expandedChange
      .pipe(takeUntil(this._destroy$))
      .subscribe((state) => {
        this.expanded = state

        // Calling this function from onInit caused issues when DOM has not fully been initialized because of
        // different CSS used to hide (but not remove) from DOM
        if (!this.inputMoved) this.moveInput()

        // Get the height of the parent button so the input can be explicitly set to the same height since it's absolutely positioned
        this.buttonHeight =
          this.dropdownButton?.getBoundingClientRect().height || 32 // Default to 2em;

        if (this.expanded) {
          // Weird workaround for setting focus. Didn't set focus, but wrapping in setTimeout solved it.
          // See suggestion here: https://github.com/ionic-team/stencil/issues/3772#issuecomment-1292599609
          setTimeout(() => this.setFocus())
          // Format and interpolate result since return type can be other than string from the formatter
          const formattedValue = `${this.formatSelected(this.hostComponent.state)}`
          this.setInput(formattedValue, false)
        } else this.setInput('', true)
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
    // If no formatter exists, return the label or empty string
    if (!this.selectedFormatter) return value.label ?? ''
    // If a formatter exists, use it
    return this.selectedFormatter(value) ?? ''
  }

  /**
   * Sets the input programmatically instead of native HTML input event.
   * @param input
   */
  private setInput(input: string, triggerFilter: boolean) {
    this.state = input
    if (triggerFilter) {
      this.onChange(this.state)
      this.inputChange$.next(this.state)
    }
  }
}
