import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListGatunekComponent} from './gatunekComponents/list-gatunek.component';
import {CreateGatunekComponent} from './gatunekComponents/create-gatunek.component';


const ROUTES: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'listagatunkow', component: ListGatunekComponent},
  {path: 'dodajgatunek', component: CreateGatunekComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
