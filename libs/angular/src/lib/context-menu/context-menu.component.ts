import { Component, ElementRef, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { DropdownOption } from '@sebgroup/extract';

@Component({
  selector: 'ngg-context-menu',
  templateUrl: './context-menu.component.html'
})
export class NggContextMenuComponent {
  @Input() menuItems: DropdownOption[] = [];
  @Input() menuItemTemplate: TemplateRef<any> | null = null;

  @Output() contextMenuItemClicked: EventEmitter<DropdownOption> = new EventEmitter<DropdownOption>();

  isOpen = false;
  top = '0px';
  left = '0px';

  constructor(private elementRef: ElementRef) {}

  open(event: MouseEvent): void {
    event.preventDefault();
    this.top = `${event.clientY}px`;
    this.left = `${event.clientX}px`;
    this.isOpen = true;
  }

  close(): void {
    this.isOpen = false;
  }

  onItemClick(item: DropdownOption): void {
    this.contextMenuItemClicked.emit(item);
    this.close();
  }

  onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    const contextMenuElement = this.elementRef.nativeElement as HTMLElement;
    if (!contextMenuElement.contains(targetElement)) {
      this.close();
    }
  }
}