import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { InputComponent } from './nggv-date-input.component'

const routes: Routes = [{ path: '', component: InputComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputRoutingModule {}
