import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SessionsGalleryComponent } from './sessions-gallery/sessions-gallery.component';
const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'doctors',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'gallery',
    component: SessionsGalleryComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      // useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule {}
