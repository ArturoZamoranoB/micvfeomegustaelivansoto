import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UchalamamaComponent } from './componentes/uchalamama/uchalamama.component';
import { Vista2Component } from './Home/vista2/vista2.component';
import { ResumenpersonalComponent } from './Vista3/resumenpersonal/resumenpersonal.component';
import { Vista4Component } from './ApiOne/vista4/vista4.component';
import { ApiComponent } from './api/api/api.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'trabajos', component: UchalamamaComponent },
  { path: 'home', component: Vista2Component },
  {path: 'Proyectos', component: ResumenpersonalComponent},
  {path: 'Apizamo', component: Vista4Component},
  {path: 'Api', component: ApiComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
