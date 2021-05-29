import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservablesComponent } from './observables/observables.component';
import { SubcomponentComponent } from './subcomponent/subcomponent.component';
import { Subcomponent1Component } from './subcomponent1/subcomponent1.component';
import { Subcomponent2Component } from './subcomponent2/subcomponent2.component';

const routes: Routes = [
  {
    path: 'subcomp', component: SubcomponentComponent,
    children: [
      {
        path: 'comp1', component: Subcomponent1Component
      },
      {
        path: 'comp2', component: Subcomponent2Component
      }
    ]
  },
  {
    path: 'observables', component: ObservablesComponent
  },
  {
    path: '', redirectTo: '/observables', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
