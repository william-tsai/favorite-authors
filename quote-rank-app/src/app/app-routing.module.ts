import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAuthorComponent } from './add-author/add-author.component';
import { AllAuthorsComponent } from './all-authors/all-authors.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AllAuthorsComponent },
  { path: 'new', component: AddAuthorComponent},
  { path: 'edit/:id', component: AddAuthorComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
