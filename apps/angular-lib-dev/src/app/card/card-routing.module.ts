import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CardComponent } from './card.component'

const routes: Routes = [{ path: '', component: CardComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardRoutingModule {}
