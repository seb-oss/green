import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { BootstrapRoutingModule } from './bootstrap-routing.module'
import { BootstrapComponent } from './bootstrap.component'

@NgModule({
  declarations: [BootstrapComponent],
  imports: [CommonModule, BootstrapRoutingModule],
})
export class BootstrapModule {}
