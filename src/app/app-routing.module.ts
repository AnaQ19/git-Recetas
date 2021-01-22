import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './contenidos/inicio/inicio.component';
import {RecetasComponent} from './contenidos/recetas/recetas.component';
const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'recetas', component: RecetasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }