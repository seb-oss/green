import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { TranslocoModule } from '@jsverse/transloco'

import { TabDirective } from './tab.directive'
import { TabsComponent } from './tabs.component'

@NgModule({
  declarations: [TabDirective, TabsComponent],
  imports: [CommonModule, TranslocoModule, RouterModule],
  exports: [TabDirective, TabsComponent],
})
export class NggvTabsModule {}
