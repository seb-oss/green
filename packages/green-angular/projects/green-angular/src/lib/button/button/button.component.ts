import { Component, Input } from '@angular/core'

@Component({
  selector: 'sg-ng-button',
  template: `
    <button
      type='button'
      [ngClass]=classNames>
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent {

  /**
   * Button variant
   */
  @Input() variant: 'primary' | 'secondary' | undefined;

  /**
   * Custom classes
   */
  @Input() classes: string | undefined;

  /**
   * Button size
   */
  @Input()
  size: 'size-sm' | 'size-lg' | undefined;

  public get classNames() {
    let classes: Array<string> = [];
    if(this.variant) {
      classes = [...classes, this.variant];
    }
    if(this.size) {
      classes = [...classes, this.size];
    }

    if(this.classes) {
      classes = [...classes, this.classes];
    }
    return classes;
  }


}
