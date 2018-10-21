import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostCodeEntryComponent } from './postcode-entry/postcode-entry.component';
import {CurrentPostCodeService} from "./services/current-postcode.service";
import {OldPostCodeService} from "./services/old-postcode.service";
import { OldPostCodesComponent } from './old-postcodes/old-postcodes.component';
import { CurrentPostCodesComponent} from './current-postcodes/current-postcodes.component';
import { MainPageComponent } from './main-page/main-page.component';
import {RouterModule} from "@angular/router";
import {routing} from "./app.routing";
import {HttpClientModule} from "@angular/common/http";
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { CurrentConditionsEffects } from './effects/current-postcodes.effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
//import {ForecastEffects} from './effects/forecast.effects';

@NgModule({
  declarations: [
    AppComponent,
    PostCodeEntryComponent,
    CurrentPostCodesComponent,
    OldPostCodesComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    routing,
    EffectsModule.forRoot([CurrentPostCodesEffects, OldPostCodesEffects]),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({stateKey: 'router'})
  ],
  providers: [CurrentPostCodeService, OldPostCodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
