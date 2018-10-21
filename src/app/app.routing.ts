import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OldPostCodesComponent} from "./old-postcodes/old-postcodes.component";
import {MainPageComponent} from "./main-page/main-page.component";

const appRoutes: Routes = [
  {
    path: '', component: MainPageComponent
  },
  {
    path: 'forecast/:zipcode', component: OldPostCodesComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
