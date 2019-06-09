import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'doctors',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule {}
