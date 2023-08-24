import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:() => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path:'main',
    loadChildren:() => import('./_pages/pages.module').then(m =>m.PagesModule)
  },
  {
    path:'**',
    redirectTo:''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
