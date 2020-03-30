import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../pages/home/home.component';
import { NewOrderComponent } from '../pages/new-order/new-order.component';
import { TrackOrderComponent } from '../pages/track-order/track-order.component';
import { ContactUsComponent } from '../pages/contact-us/contact-us.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'TrackOrder',
    component: TrackOrderComponent
  }, 
  {
    path: 'NewOrder',
    component: NewOrderComponent
  },
  {
    path: 'ContactUs',
    component: ContactUsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
