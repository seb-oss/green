
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { A11yModule } from '@angular/cdk/a11y';
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
    imports: [ A11yModule, CommonModule ],
    exports: EXPORTS,
    declarations: DECLARATIONS,
})
export class NggModalModule { }