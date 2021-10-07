import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'segmented-control', pathMatch: 'full' },
  { path: 'segmented-control', data: {name: 'Segmented control'}, loadChildren: () => import('./segmented-control/segmented-control.module').then(m => m.SegmentedControlModule) },
  { path: 'dropdown', data: {name: 'Dropdown'}, loadChildren: () => import('./dropdown/dropdown.module').then(m => m.DropdownModule) },
  { path: '**', redirectTo: 'buttons' },
];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  relativeLinkResolution: 'legacy'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
