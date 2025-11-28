/**
 * Example of a generated component with boolean attribute support
 * 
 * This example shows how the GdsDialog component would be generated
 * with boolean properties (open, scrollable) using booleanAttribute transform.
 */

import { Component, ElementRef, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit, OnChanges, AfterViewInit, SimpleChanges, inject, NgZone, ChangeDetectorRef, booleanAttribute } from '@angular/core';
import { ProxyInputs } from '../../proxy-inputs.decorator';
import type { GdsDialog } from '@sebgroup/green-core/components/dialog/dialog.component.js';

/**
 * Angular wrapper for the gds-dialog web component
 * A dialog component for displaying modal content
 */
@ProxyInputs(['open', 'scrollable', 'heading', 'variant', 'placement', 'width'])
@Component({
  selector: 'gds-dialog',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-content></ng-content>`
})
export class GdsDialogComponent implements OnInit, OnChanges, AfterViewInit {

  private elementRef = inject(ElementRef<GdsDialog>);
  private zone = inject(NgZone);
  private cdr = inject(ChangeDetectorRef);

  get element(): GdsDialog {
    return this.elementRef.nativeElement;
  }

  constructor() {
    this.cdr.detach();
  }

  /** Whether the dialog is open */
  @Input({ transform: booleanAttribute })
  open?: GdsDialog['open'];

  /** Whether the dialog content is scrollable */
  @Input({ transform: booleanAttribute })
  scrollable?: GdsDialog['scrollable'];

  /** The dialog heading */
  @Input()
  heading?: GdsDialog['heading'];

  /** The dialog variant */
  @Input()
  variant?: GdsDialog['variant'];

  /** The dialog placement */
  @Input()
  placement?: GdsDialog['placement'];

  /** The dialog width */
  @Input()
  width?: GdsDialog['width'];

  @Output() gdsClose = new EventEmitter<CustomEvent<void>>();

  ngOnInit(): void {
    // Define the custom element
    try {
      GdsDialog.define();
    } catch (e) {
      // Component may not be available in this version of green-core
      console.warn('Failed to define gds-dialog:', e);
    }

    // Set up event listeners
    this.elementRef.nativeElement.addEventListener('gds-close', (event: Event) => {
      this.gdsClose.emit(event as CustomEvent<void>);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Implementation added by @ProxyInputs decorator
    // Syncs changed properties to the web component element
  }

  ngAfterViewInit(): void {
    // Implementation added by @ProxyInputs decorator  
    // Syncs initial property values to the web component element
  }
}

/**
 * USAGE EXAMPLES:
 * 
 * 1. Attribute syntax (like native HTML):
 *    <gds-dialog open scrollable>
 *      <p>Dialog content</p>
 *    </gds-dialog>
 * 
 * 2. Property binding:
 *    <gds-dialog [open]="isOpen" [scrollable]="isScrollable">
 *      <p>Dialog content</p>
 *    </gds-dialog>
 * 
 * 3. Mixed usage:
 *    <gds-dialog open [heading]="dialogTitle" [variant]="dialogVariant">
 *      <p>Dialog content</p>
 *    </gds-dialog>
 * 
 * The booleanAttribute transform ensures that:
 * - <gds-dialog open> sets open = true
 * - <gds-dialog> (no attribute) sets open = false
 * - [open]="someBoolean" works as expected with type safety
 */
