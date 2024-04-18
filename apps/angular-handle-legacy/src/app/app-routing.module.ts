import { NgModule } from '@angular/core'
import { ExtraOptions, RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: '', redirectTo: 'segmented-control', pathMatch: 'full' },
  {
    path: 'charts',
    data: { name: 'Charts' },
    loadChildren: () =>
      import('./green-charts/green-charts.module').then(
        (m) => m.GreenChartsModule,
      ),
  },
  {
    path: 'bootstrap',
    data: { name: 'Bootstrap' },
    loadChildren: () =>
      import('./bootstrap/bootstrap.module').then((m) => m.BootstrapModule),
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
