import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ContextMenuComponent } from './context-menu.component'

const routes: Routes = [{ path: '', component: ContextMenuComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContextMenuRoutingModule {}
