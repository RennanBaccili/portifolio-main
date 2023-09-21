import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';

//rotas
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'projects', component:ProjectsComponent, pathMatch:'full'},
  {path:'about', component:AboutComponent ,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
