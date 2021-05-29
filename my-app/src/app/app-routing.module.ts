import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
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
    path: 'home', component: HomeComponent
  },
  {
    path: 'observables', component: ObservablesComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'logout', component: LogoutComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
