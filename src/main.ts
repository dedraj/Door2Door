import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { db } from "./calculations"
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

console.log(db);
const getInfo =(user)=> {
  let city1 = user.cdetail.city;
  let city2 = user.rdetail.city;
  // let distance = getDistance(city1,city2)
} 
getInfo(db[0]);