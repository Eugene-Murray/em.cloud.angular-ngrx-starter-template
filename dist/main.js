(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/actions/current-conditions.actions.ts":
/*!*******************************************************!*\
  !*** ./src/app/actions/current-conditions.actions.ts ***!
  \*******************************************************/
/*! exports provided: CurrentConditionsActionTypes, CurrentConditionsLoaded, CurrentConditionsLoadFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentConditionsActionTypes", function() { return CurrentConditionsActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentConditionsLoaded", function() { return CurrentConditionsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentConditionsLoadFailed", function() { return CurrentConditionsLoadFailed; });
var CurrentConditionsActionTypes;
(function (CurrentConditionsActionTypes) {
    CurrentConditionsActionTypes["CurrentConditionsLoaded"] = "[CurrentConditions] CurrentConditions Loaded";
    CurrentConditionsActionTypes["CurrentConditionsLoadFailed"] = "[CurrentConditions] CurrentConditions Load Failded";
})(CurrentConditionsActionTypes || (CurrentConditionsActionTypes = {}));
var CurrentConditionsLoaded = /** @class */ (function () {
    function CurrentConditionsLoaded(zipcode, conditions) {
        this.zipcode = zipcode;
        this.conditions = conditions;
        this.type = CurrentConditionsActionTypes.CurrentConditionsLoaded;
    }
    return CurrentConditionsLoaded;
}());

var CurrentConditionsLoadFailed = /** @class */ (function () {
    function CurrentConditionsLoadFailed(zipcode, error) {
        this.zipcode = zipcode;
        this.error = error;
        this.type = CurrentConditionsActionTypes.CurrentConditionsLoadFailed;
    }
    return CurrentConditionsLoadFailed;
}());



/***/ }),

/***/ "./src/app/actions/forecast.actions.ts":
/*!*********************************************!*\
  !*** ./src/app/actions/forecast.actions.ts ***!
  \*********************************************/
/*! exports provided: ForecastActionTypes, ForecastLoaded, ForecastLoadFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastActionTypes", function() { return ForecastActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastLoaded", function() { return ForecastLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastLoadFailed", function() { return ForecastLoadFailed; });
var ForecastActionTypes;
(function (ForecastActionTypes) {
    ForecastActionTypes["ForecastLoaded"] = "[Forecast] Forecast Loaded";
    ForecastActionTypes["ForecastLoadFailed"] = "[Forecast] Forecast Load Failded";
})(ForecastActionTypes || (ForecastActionTypes = {}));
var ForecastLoaded = /** @class */ (function () {
    function ForecastLoaded(forecast) {
        this.forecast = forecast;
        this.type = ForecastActionTypes.ForecastLoaded;
    }
    return ForecastLoaded;
}());

var ForecastLoadFailed = /** @class */ (function () {
    function ForecastLoadFailed(zipcode, error) {
        this.zipcode = zipcode;
        this.error = error;
        this.type = ForecastActionTypes.ForecastLoadFailed;
    }
    return ForecastLoadFailed;
}());



/***/ }),

/***/ "./src/app/actions/zipcode.actions.ts":
/*!********************************************!*\
  !*** ./src/app/actions/zipcode.actions.ts ***!
  \********************************************/
/*! exports provided: ZipcodeActionTypes, AddZipcode, RemoveZipcode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZipcodeActionTypes", function() { return ZipcodeActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddZipcode", function() { return AddZipcode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveZipcode", function() { return RemoveZipcode; });
var ZipcodeActionTypes;
(function (ZipcodeActionTypes) {
    ZipcodeActionTypes["AddZipcode"] = "[Zipcode] Add Zipcode";
    ZipcodeActionTypes["RemoveZipcode"] = "[Zipcode] Remove Zipcode";
})(ZipcodeActionTypes || (ZipcodeActionTypes = {}));
var AddZipcode = /** @class */ (function () {
    function AddZipcode(zipcode) {
        this.zipcode = zipcode;
        this.type = ZipcodeActionTypes.AddZipcode;
    }
    return AddZipcode;
}());

var RemoveZipcode = /** @class */ (function () {
    function RemoveZipcode(zipcode) {
        this.zipcode = zipcode;
        this.type = ZipcodeActionTypes.RemoveZipcode;
    }
    return RemoveZipcode;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zipcode-entry/zipcode-entry.component */ "./src/app/zipcode-entry/zipcode-entry.component.ts");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forecasts-list/forecasts-list.component */ "./src/app/forecasts-list/forecasts-list.component.ts");
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/weather.service */ "./src/app/services/weather.service.ts");
/* harmony import */ var _current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./current-conditions/current-conditions.component */ "./src/app/current-conditions/current-conditions.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _effects_current_conditions_effects__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./effects/current-conditions.effects */ "./src/app/effects/current-conditions.effects.ts");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _effects_forecast_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./effects/forecast.effects */ "./src/app/effects/forecast.effects.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_4__["ZipcodeEntryComponent"],
                _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_6__["ForecastsListComponent"],
                _current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_8__["CurrentConditionsComponent"],
                _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_9__["MainPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_11__["routing"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["EffectsModule"].forRoot([_effects_current_conditions_effects__WEBPACK_IMPORTED_MODULE_18__["CurrentConditionsEffects"], _effects_forecast_effects__WEBPACK_IMPORTED_MODULE_20__["ForecastEffects"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_13__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_14__["reducers"], { metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_14__["metaReducers"] }),
                !_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_15__["StoreDevtoolsModule"].instrument() : [],
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_19__["StoreRouterConnectingModule"].forRoot({ stateKey: 'router' })
            ],
            providers: [_services_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"], _services_weather_service__WEBPACK_IMPORTED_MODULE_7__["WeatherService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecasts-list/forecasts-list.component */ "./src/app/forecasts-list/forecasts-list.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");



var appRoutes = [
    {
        path: '', component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"]
    },
    {
        path: 'forecast/:zipcode', component: _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_1__["ForecastsListComponent"]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/current-conditions/current-conditions.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".close {\n  cursor: pointer;\n}\n.flex {\n  display: flex;\n  justify-content: space-between;\n}\n"

/***/ }),

/***/ "./src/app/current-conditions/current-conditions.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div *ngFor=\"let zip  of zipcodes\" class=\"well flex\" (click)=\"showForecast(zip)\">\n    <div>\n      <h3>{{getConditions(zip)?.name}} ({{zip}})</h3>\n      <h4>Current conditions: {{getConditions(zip)?.weather[0].main}}</h4>\n      <h4>Temperatures today:</h4>\n      <p>\n        Current {{getConditions(zip)?.main.temp | number:'.0-0'}}\n        - Max {{getConditions(zip)?.main.temp_max | number:'.0-0'}}\n        - Min {{getConditions(zip)?.main.temp_min | number:'.0-0'}}\n      </p>\n      <p>\n        <a [routerLink]=\"['/forecast', zip]\" >Show 5-day forecast for {{getConditions(zip)?.name}}</a>\n      </p>\n    </div>\n    <div>\n      <span class=\"close\" (click)=\"zipRemoved.emit(zip)\">&times;</span>\n      <img [src]=\"weatherService.getWeatherIcon(getConditions(zip)?.weather[0].id)\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/current-conditions/current-conditions.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.ts ***!
  \********************************************************************/
/*! exports provided: CurrentConditionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentConditionsComponent", function() { return CurrentConditionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/weather.service */ "./src/app/services/weather.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CurrentConditionsComponent = /** @class */ (function () {
    function CurrentConditionsComponent(weatherService) {
        this.weatherService = weatherService;
        this.zipRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CurrentConditionsComponent.prototype.getConditions = function (zip) {
        return this.currentConditions.get(zip);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CurrentConditionsComponent.prototype, "zipcodes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Map)
    ], CurrentConditionsComponent.prototype, "currentConditions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CurrentConditionsComponent.prototype, "zipRemoved", void 0);
    CurrentConditionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-current-conditions',
            template: __webpack_require__(/*! ./current-conditions.component.html */ "./src/app/current-conditions/current-conditions.component.html"),
            styles: [__webpack_require__(/*! ./current-conditions.component.css */ "./src/app/current-conditions/current-conditions.component.css")]
        }),
        __metadata("design:paramtypes", [_services_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"]])
    ], CurrentConditionsComponent);
    return CurrentConditionsComponent;
}());



/***/ }),

/***/ "./src/app/effects/current-conditions.effects.ts":
/*!*******************************************************!*\
  !*** ./src/app/effects/current-conditions.effects.ts ***!
  \*******************************************************/
/*! exports provided: CurrentConditionsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentConditionsEffects", function() { return CurrentConditionsEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_zipcode_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/zipcode.actions */ "./src/app/actions/zipcode.actions.ts");
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/weather.service */ "./src/app/services/weather.service.ts");
/* harmony import */ var _actions_current_conditions_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/current-conditions.actions */ "./src/app/actions/current-conditions.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CurrentConditionsEffects = /** @class */ (function () {
    function CurrentConditionsEffects(actions$, weatherService) {
        var _this = this;
        this.actions$ = actions$;
        this.weatherService = weatherService;
        this.loadCurrentConditions$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_zipcode_actions__WEBPACK_IMPORTED_MODULE_4__["ZipcodeActionTypes"].AddZipcode), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (action) {
            return _this.weatherService.loadCurrentConditions(action['zipcode']).pipe(
            // If successful, dispatch success action with result
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return new _actions_current_conditions_actions__WEBPACK_IMPORTED_MODULE_6__["CurrentConditionsLoaded"](action['zipcode'], data); }), 
            // If request fails, dispatch failed action
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_current_conditions_actions__WEBPACK_IMPORTED_MODULE_6__["CurrentConditionsLoadFailed"](action['zipcode'], err)); }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], CurrentConditionsEffects.prototype, "loadCurrentConditions$", void 0);
    CurrentConditionsEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"], _services_weather_service__WEBPACK_IMPORTED_MODULE_5__["WeatherService"]])
    ], CurrentConditionsEffects);
    return CurrentConditionsEffects;
}());



/***/ }),

/***/ "./src/app/effects/forecast.effects.ts":
/*!*********************************************!*\
  !*** ./src/app/effects/forecast.effects.ts ***!
  \*********************************************/
/*! exports provided: ForecastEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastEffects", function() { return ForecastEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/weather.service */ "./src/app/services/weather.service.ts");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _actions_forecast_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/forecast.actions */ "./src/app/actions/forecast.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ForecastEffects = /** @class */ (function () {
    function ForecastEffects(actions$, weatherService) {
        var _this = this;
        this.actions$ = actions$;
        this.weatherService = weatherService;
        this.loadCurrentConditions$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_ngrx_router_store__WEBPACK_IMPORTED_MODULE_5__["ROUTER_NAVIGATION"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (action) { return action.payload.event.url.startsWith('/forecast'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (action) {
            var zipcode = action.payload.event.url.split('/').pop();
            return _this.weatherService.getForecast(zipcode).pipe(
            // If successful, dispatch success action with result
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return new _actions_forecast_actions__WEBPACK_IMPORTED_MODULE_6__["ForecastLoaded"](data); }), 
            // If request fails, dispatch failed action
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_forecast_actions__WEBPACK_IMPORTED_MODULE_6__["ForecastLoadFailed"](zipcode, err)); }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs_index__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], ForecastEffects.prototype, "loadCurrentConditions$", void 0);
    ForecastEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"], _services_weather_service__WEBPACK_IMPORTED_MODULE_4__["WeatherService"]])
    ], ForecastEffects);
    return ForecastEffects;
}());



/***/ }),

/***/ "./src/app/forecasts-list/forecasts-list.component.css":
/*!*************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\n  width: 45px;\n  height: 45px;\n  position: absolute;\n  right: 20px;\n  top: -2px;\n}\n"

/***/ }),

/***/ "./src/app/forecasts-list/forecasts-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">5-day forecast for {{forecast?.city.name}}</h3>\n\n    </div>\n    <ul class=\"list-group\">\n      <li *ngFor=\"let dailyForecast of forecast?.list\" class=\"list-group-item\">\n        {{ (dailyForecast.dt * 1000) | date:'EEEE, MMM d'}}:\n        {{dailyForecast.weather[0].main}}\n        - Min: {{dailyForecast.temp.min | number:'.0-0'}}\n        - Max: {{dailyForecast.temp.max | number:'.0-0'}}\n\n        <img [src]=\"weatherService.getWeatherIcon(dailyForecast.weather[0].id)\" class=\"icon\">\n      </li>\n    </ul>\n  </div>\n</div>\n<button class=\"btn btn-success\" [routerLink]=\"'/'\" >< Back to main page</button>\n"

/***/ }),

/***/ "./src/app/forecasts-list/forecasts-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.ts ***!
  \************************************************************/
/*! exports provided: ForecastsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastsListComponent", function() { return ForecastsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/weather.service */ "./src/app/services/weather.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ "./src/app/reducers/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForecastsListComponent = /** @class */ (function () {
    function ForecastsListComponent(store, weatherService) {
        var _this = this;
        this.store = store;
        this.weatherService = weatherService;
        store.select(_reducers__WEBPACK_IMPORTED_MODULE_3__["selectForecast"]).subscribe(function (fcast) { return _this.forecast = fcast; });
    }
    ForecastsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forecasts-list',
            template: __webpack_require__(/*! ./forecasts-list.component.html */ "./src/app/forecasts-list/forecasts-list.component.html"),
            styles: [__webpack_require__(/*! ./forecasts-list.component.css */ "./src/app/forecasts-list/forecasts-list.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _services_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"]])
    ], ForecastsListComponent);
    return ForecastsListComponent;
}());



/***/ }),

/***/ "./src/app/main-page/main-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-page/main-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nAngular NGRX Starter Template\n\n<div class=\"container-fluid\">\n\n  <app-zipcode-entry (zipAdded)=\"addLocation($event)\"> </app-zipcode-entry>\n  <app-current-conditions [zipcodes]=\"zipcodes\" [currentConditions]=\"currentConditions\" (zipRemoved)=\"removeZip($event)\">\n\n  </app-current-conditions>\n</div>\n"

/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_zipcode_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/zipcode.actions */ "./src/app/actions/zipcode.actions.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/weather.service */ "./src/app/services/weather.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainPageComponent = /** @class */ (function () {
    function MainPageComponent(store, weatherService) {
        var _this = this;
        this.store = store;
        this.weatherService = weatherService;
        store.select(_reducers__WEBPACK_IMPORTED_MODULE_3__["selectZipcodeList"])
            .subscribe(function (zips) { return _this.zipcodes = zips; });
        store.select(_reducers__WEBPACK_IMPORTED_MODULE_3__["selectCurrentConditionsList"])
            .subscribe(function (conditions) { return _this.currentConditions = conditions; });
    }
    MainPageComponent.prototype.addLocation = function (zipcode) {
        this.store.dispatch(new _actions_zipcode_actions__WEBPACK_IMPORTED_MODULE_2__["AddZipcode"](zipcode));
    };
    MainPageComponent.prototype.removeZip = function (zip) {
        this.store.dispatch(new _actions_zipcode_actions__WEBPACK_IMPORTED_MODULE_2__["RemoveZipcode"](zip));
    };
    MainPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/main-page/main-page.component.html")
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"], _services_weather_service__WEBPACK_IMPORTED_MODULE_4__["WeatherService"]])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/reducers/current-conditions.reducer.ts":
/*!********************************************************!*\
  !*** ./src/app/reducers/current-conditions.reducer.ts ***!
  \********************************************************/
/*! exports provided: initialState, currentConditionsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentConditionsReducer", function() { return currentConditionsReducer; });
/* harmony import */ var _actions_current_conditions_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/current-conditions.actions */ "./src/app/actions/current-conditions.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    currentConditions: new Map()
};
function currentConditionsReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_current_conditions_actions__WEBPACK_IMPORTED_MODULE_0__["CurrentConditionsActionTypes"].CurrentConditionsLoaded:
            var cc = new Map(state.currentConditions);
            cc.set(action.zipcode, action.conditions);
            return __assign({}, state, { currentConditions: cc });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/reducers/forecast.reducer.ts":
/*!**********************************************!*\
  !*** ./src/app/reducers/forecast.reducer.ts ***!
  \**********************************************/
/*! exports provided: initialState, forecastReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forecastReducer", function() { return forecastReducer; });
/* harmony import */ var _actions_forecast_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/forecast.actions */ "./src/app/actions/forecast.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    forecast: {}
};
function forecastReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_forecast_actions__WEBPACK_IMPORTED_MODULE_0__["ForecastActionTypes"].ForecastLoaded:
            return __assign({}, state, { forecast: action.forecast });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers, metaReducers, selectZipcodeState, selectZipcodeList, selectCurrentConditionsState, selectCurrentConditionsList, selectForecastState, selectForecast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectZipcodeState", function() { return selectZipcodeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectZipcodeList", function() { return selectZipcodeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentConditionsState", function() { return selectCurrentConditionsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentConditionsList", function() { return selectCurrentConditionsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectForecastState", function() { return selectForecastState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectForecast", function() { return selectForecast; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _zip_codes_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zip-codes.reducer */ "./src/app/reducers/zip-codes.reducer.ts");
/* harmony import */ var _current_conditions_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./current-conditions.reducer */ "./src/app/reducers/current-conditions.reducer.ts");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _forecast_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forecast.reducer */ "./src/app/reducers/forecast.reducer.ts");






var reducers = {
    zipcodes: _zip_codes_reducer__WEBPACK_IMPORTED_MODULE_2__["zipcodeReducer"],
    currentConditions: _current_conditions_reducer__WEBPACK_IMPORTED_MODULE_3__["currentConditionsReducer"],
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__["routerReducer"],
    forecast: _forecast_reducer__WEBPACK_IMPORTED_MODULE_5__["forecastReducer"]
};
var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production ? [] : [];
var selectZipcodeState = function (state) { return state.zipcodes; };
var selectZipcodeList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectZipcodeState, function (state) { return state.zipcodes; });
var selectCurrentConditionsState = function (state) { return state.currentConditions; };
var selectCurrentConditionsList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectCurrentConditionsState, function (state) { return state.currentConditions; });
var selectForecastState = function (state) { return state.forecast; };
var selectForecast = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectForecastState, function (state) { return state.forecast; });


/***/ }),

/***/ "./src/app/reducers/zip-codes.reducer.ts":
/*!***********************************************!*\
  !*** ./src/app/reducers/zip-codes.reducer.ts ***!
  \***********************************************/
/*! exports provided: initialState, zipcodeReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zipcodeReducer", function() { return zipcodeReducer; });
/* harmony import */ var _actions_zipcode_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/zipcode.actions */ "./src/app/actions/zipcode.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    zipcodes: []
};
function zipcodeReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_zipcode_actions__WEBPACK_IMPORTED_MODULE_0__["ZipcodeActionTypes"].AddZipcode:
            return __assign({}, state, { zipcodes: state.zipcodes.concat([action.zipcode]) });
        case _actions_zipcode_actions__WEBPACK_IMPORTED_MODULE_0__["ZipcodeActionTypes"].RemoveZipcode:
            return __assign({}, state, { zipcodes: state.zipcodes.filter(function (item) { return item !== action.zipcode; }) });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/services/location.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/location.service.ts ***!
  \**********************************************/
/*! exports provided: LOCATIONS, LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCATIONS", function() { return LOCATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LOCATIONS = "locations";
var LocationService = /** @class */ (function () {
    function LocationService() {
        this.locations = [];
    }
    LocationService.prototype.addLocation = function (zipcode) {
        this.locations.push(zipcode);
    };
    LocationService.prototype.removeLocation = function (zipcode) {
        var index = this.locations.indexOf(zipcode);
        if (index !== -1) {
            this.locations.splice(index, 1);
        }
    };
    LocationService.prototype.getLocations = function () {
        return this.locations;
    };
    LocationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LocationService);
    return LocationService;
}());



/***/ }),

/***/ "./src/app/services/weather.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/weather.service.ts ***!
  \*********************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeatherService = /** @class */ (function () {
    function WeatherService(http) {
        this.http = http;
        this.currentConditions = [];
    }
    WeatherService_1 = WeatherService;
    WeatherService.prototype.loadCurrentConditions = function (zipcode) {
        // Here we make a request to get the curretn conditions data from the API. Note the use of backticks and an expression to insert the zipcode
        return this.http.get(WeatherService_1.URL + "/weather?zip=" + zipcode + ",us&units=imperial&APPID=" + WeatherService_1.APPID);
    };
    WeatherService.prototype.removeCurrentConditions = function (zipcode) {
        for (var i in this.currentConditions) {
            if (this.currentConditions[i].zip == zipcode)
                this.currentConditions.splice(+i, 1);
        }
    };
    WeatherService.prototype.getCurrentConditions = function () {
        return this.currentConditions;
    };
    WeatherService.prototype.getForecast = function (zipcode) {
        // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
        return this.http.get(WeatherService_1.URL + "/forecast/daily?zip=" + zipcode + ",us&units=imperial&cnt=5&APPID=" + WeatherService_1.APPID);
    };
    WeatherService.prototype.getWeatherIcon = function (id) {
        if (id >= 200 && id <= 232)
            return WeatherService_1.ICON_URL + "art_storm.png";
        else if (id >= 501 && id <= 511)
            return WeatherService_1.ICON_URL + "art_rain.png";
        else if (id === 500 || (id >= 520 && id <= 531))
            return WeatherService_1.ICON_URL + "art_light_rain.png";
        else if (id >= 600 && id <= 622)
            return WeatherService_1.ICON_URL + "art_snow.png";
        else if (id >= 801 && id <= 804)
            return WeatherService_1.ICON_URL + "art_clouds.png";
        else if (id === 741 || id === 761)
            return WeatherService_1.ICON_URL + "art_fog.png";
        else
            return WeatherService_1.ICON_URL + "art_clear.png";
    };
    WeatherService.URL = 'http://api.openweathermap.org/data/2.5';
    WeatherService.APPID = '5a4b2d457ecbef9eb2a71e480b947604';
    WeatherService.ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';
    WeatherService = WeatherService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WeatherService);
    return WeatherService;
    var WeatherService_1;
}());



/***/ }),

/***/ "./src/app/zipcode-entry/zipcode-entry.component.html":
/*!************************************************************!*\
  !*** ./src/app/zipcode-entry/zipcode-entry.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"well\">\n  <h2>Enter a zipcode:</h2>\n  <input type=\"text\" #zipcode placeholder=\"Zipcode\" class=\"form-control\">\n  <br>\n  <button class=\"btn btn-primary\" (click)=\"zipAdded.emit(zipcode.value)\" >\n    Add location\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/zipcode-entry/zipcode-entry.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/zipcode-entry/zipcode-entry.component.ts ***!
  \**********************************************************/
/*! exports provided: ZipcodeEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZipcodeEntryComponent", function() { return ZipcodeEntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ZipcodeEntryComponent = /** @class */ (function () {
    function ZipcodeEntryComponent() {
        this.zipAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ZipcodeEntryComponent.prototype, "zipAdded", void 0);
    ZipcodeEntryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-zipcode-entry',
            template: __webpack_require__(/*! ./zipcode-entry.component.html */ "./src/app/zipcode-entry/zipcode-entry.component.html")
        })
    ], ZipcodeEntryComponent);
    return ZipcodeEntryComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\eugen\Documents\Dev\2019\em.cloud.angular-ngrx-starter-template\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map