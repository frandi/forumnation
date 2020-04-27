import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';


const routes: Routes = [
  { 
    path: '', component: MainLayoutComponent, children: [
      { path: 'item/:id', component: ItemComponent},
      { path: '', component: HomeComponent},
      { path: '**', component: HomeComponent}
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
