import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core'

@Directive({
    selector: '[nggvCharacterCountdown]',
    standalone: false
})
export class CharacterCountdownDirective {
  @Input('nggvCharacterCountdown')
  set maxlength(value: number | undefined) {
    if (!!value && !Number.isNaN(value)) {
      this._maxlength = value
      this.updateContext()
      if (!this.isViewCreated) {
        this.viewContainerRef.createEmbeddedView(this.templateRef, this.context)
        this.isViewCreated = true
      }
    } else {
      if (this.isViewCreated) {
        this.viewContainerRef.clear()
        this.isViewCreated = false
      }
    }
  }

  @Input('nggvCharacterCountdownCurrentLength')
  set currentLength(value: number) {
    this._currentLength = value ?? 0
    this.updateContext()
  }

  private _maxlength: number = Number.MAX_SAFE_INTEGER
  private _currentLength = 0
  private isViewCreated = false
  private context = { charactersLeft: 0 }

  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private readonly templateRef: TemplateRef<any>,
  ) {}

  updateContext() {
    this.context.charactersLeft = this.calculateCharactersLeft(
      this._maxlength,
      this._currentLength,
    )
  }

  calculateCharactersLeft = (max: number, current: number): number =>
    max - current
}
