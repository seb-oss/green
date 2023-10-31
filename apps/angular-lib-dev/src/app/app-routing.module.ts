import { NgModule } from '@angular/core'
import { ExtraOptions, RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: '', redirectTo: 'segmented-control', pathMatch: 'full' },
  {
    path: 'segmented-control',
    data: { name: 'Segmented control' },
    loadChildren: () =>
      import('./segmented-control/segmented-control.module').then(
        (m) => m.SegmentedControlModule
      ),
  },
  {
    path: 'dropdown',
    data: { name: 'Dropdown' },
    loadChildren: () =>
      import('./dropdown/dropdown.module').then((m) => m.DropdownModule),
  },
  {
    path: 'charts',
    data: { name: 'Charts' },
    loadChildren: () =>
      import('./green-charts/green-charts.module').then(
        (m) => m.GreenChartsModule
      ),
  },
  {
    path: 'datepicker',
    data: { name: 'Datepicker' },
    loadChildren: () =>
      import('./datepicker/datepicker.module').then((m) => m.DatepickerModule),
  },
  {
    path: 'badge',
    data: { name: 'Badge' },
    loadChildren: () =>
      import('./badge/badge.module').then((m) => m.BadgeModule),
  },
  {
    path: 'context-menu',
    data: { name: 'Context Menu' },
    loadChildren: () =>
      import('./context-menu/context-menu.module').then(
        (m) => m.ContextMenuModule
      ),
  },
  {
    path: 'modals',
    data: { name: 'Modals' },
    loadChildren: () =>
      import('./modals/modals.module').then((m) => m.ModalsModule),
  },
  { path: '**', redirectTo: 'buttons' },
]

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
}

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
