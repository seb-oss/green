
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NggModalBodyComponent, NggModalComponent, NggModalFooterComponent, NggModalHeaderComponent } from './modal.component';

const DECLARATIONS = [
    NggModalComponent,
    NggModalHeaderComponent,
    NggModalBodyComponent,
    NggModalFooterComponent
];

const EXPORTS = [
    NggModalComponent,
];

@NgModule({
    imports: [ CommonModule ],
    exports: EXPORTS,
    declarations: DECLARATIONS,
})
export class NggModalModule { }