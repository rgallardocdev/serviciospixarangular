import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { PixarsComponent } from './components/pixars-component/pixars-component';
import { CreatePixarsComponent } from './components/create-pixars-component/create-pixars-component';

const routes: Routes = [
    {path:"", component: HomeComponent},
    {path:"personajes", component: PixarsComponent},
    {path:"createpixar", component: CreatePixarsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
