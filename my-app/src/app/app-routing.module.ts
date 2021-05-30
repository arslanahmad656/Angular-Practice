import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomDirectivePipeComponent } from './custom-directive-pipe/custom-directive-pipe.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MyLibTestComponent } from './my-lib-test/my-lib-test.component';
import { ObservablesComponent } from './observables/observables.component';
import { SampledataComponent } from './sampledata/sampledata.component';
import { AuthGuardService } from './services/auth-guard.service';
import { SubcomponentComponent } from './subcomponent/subcomponent.component';
import { Subcomponent1Component } from './subcomponent1/subcomponent1.component';
import { Subcomponent2Component } from './subcomponent2/subcomponent2.component';

const guardedRoutes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'customdirectives', component: CustomDirectivePipeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'sampledata', component: SampledataComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'libtest', component: MyLibTestComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(guardedRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
