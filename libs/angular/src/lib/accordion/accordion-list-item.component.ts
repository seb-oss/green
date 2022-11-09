import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'ngg-accordion-list-item',
    templateUrl: './accordion-list-item.component.html',
    styleUrls: ['./accordion-list-item.component.scss'],
})
export class NggAccordionListItemComponent {
   
    @Input() public listItemHeader = '';
    @Input() public listItemSubHeader = '';
    @Output() public expandedChange: EventEmitter<NggAccordionListItemComponent> = new EventEmitter<NggAccordionListItemComponent>();

    public contentHeight = "0px";
    public isExpanded = false;        

    public shrink(): void {        
        this.isExpanded = false;
        this.contentHeight = "0px";
    }

    public expand(): void {
        this.isExpanded = true;
        this.contentHeight = "auto";

    }

    public toggleExpanded(): void {        
        this.isExpanded = !this.isExpanded;
        if (this.isExpanded) {
            this.contentHeight = "auto";            
        }
        else {
            this.contentHeight = "0px";
        }

        this.expandedChange.emit(this);
    }
}
