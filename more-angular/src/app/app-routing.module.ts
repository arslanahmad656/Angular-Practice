import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'persons', component: PersonListComponent
  },
  {
    path: 'persons/:id', component: PersonComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
