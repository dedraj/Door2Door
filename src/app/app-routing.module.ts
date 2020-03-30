import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { TrackOrderComponent } from './track-order/track-order.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

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
