
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NggModalBodyComponent, NggModalComponent, NggModalFooterComponent, NggModalHeaderComponent } from './modal.component';

const EXPORTED_DECLARATIONS = [
    NggModalComponent,
    NggModalHeaderComponent,
    NggModalBodyComponent,
    NggModalFooterComponent
];

@NgModule({
    imports: [ CommonModule ],
    exports: EXPORTED_DECLARATIONS,
    declarations: EXPORTED_DECLARATIONS,
})
export class NggModalModule { }