import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {AddPostCode, RemovePostCode} from '../actions/postcode.actions';
import {selectCurrentConditionsList, selectZipcodeList, State} from '../reducers';
import {WeatherService} from '../services/weather.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

    postcodes: Array<string>;

    currentConditions: Map<string, any>;

    constructor(private store: Store<State>, public weatherService: WeatherService) {
        store.select(selectPostCodeList)
            .subscribe(postcodes => this.postcodes = postcodes);

        store.select(selectCurrentConditionsList)
            .subscribe(conditions => this.currentConditions = conditions);
    }

    addLocation(postcode : string){
        this.store.dispatch(new AddPostCode(postcode));
    }

    removeZip(zip: string) {
        this.store.dispatch(new RemoveZipcode(zip));
    }
}
