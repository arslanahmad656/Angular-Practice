import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TemplateBasedFormComponent } from './components/template-based-form/template-based-form.component';

const routes: Routes = [
  {
    path: 'template-form', component: TemplateBasedFormComponent
  },
  {
    path: 'reactive-form', component: ReactiveFormComponent
  },
  {
    path: '', redirectTo: '/template-form', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '/template-form'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
