import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {mergeMap, catchError, map} from 'rxjs/operators';
import {AddPostCode, PostCodeActionTypes} from '../actions/postcode.actions';


@Injectable()
export class CurrentPostCodesEffects {

    @Effect()
    loadCurrentConditions$: Observable<any> = this.actions$.pipe(
        ofType(PostCodeActionTypes.AddPostCode),
        mergeMap(action =>
            this.weatherService.loadCurrentConditions(action['zipcode']).pipe(
                // If successful, dispatch success action with result
                map(data => new CurrentConditionsLoaded(action['zipcode'], data)),
                // If request fails, dispatch failed action
                catchError((err) => of(new CurrentConditionsLoadFailed(action['zipcode'], err)))
            )
        )
    );

    constructor(private actions$: Actions<AddPostCode>, private weatherService: WeatherService) {}
}