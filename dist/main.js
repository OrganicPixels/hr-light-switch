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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main [class.lights-on]=\"lightsActive\">\n  <header>\n    <h1>JASON GRIFFITH</h1>\n    <p>SENIOR UI DEVELOPER</p>\n  </header>\n  <app-switch\n    (light)=\"lightsActive = true\"\n    (noLight)=\"lightsActive = false\"\n  ></app-switch>\n</main>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\n  background: #474747;\n  color: #474747;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  transition: all .4s;\n  font-family: \"Helvetica Neue\",arial, San-Serif; }\n  main.lights-on {\n    background: #ffffff;\n    color: #474747; }\n  main header {\n    -webkit-transform: translateY(-6rem);\n            transform: translateY(-6rem);\n    text-align: center; }\n  main header h1, main header p {\n      margin: 0;\n      font-weight: 200; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmlmZml0aGovc2l0ZXMvaGFja2VyUmFuay9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFtQjtFQUNuQixlQUFjO0VBQ2QsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixRQUFPO0VBQ1Asd0JBQXVCO0VBQ3ZCLG9CQUFtQjtFQUNuQixhQUFZO0VBQ1osb0JBQW1CO0VBQ25CLCtDQUE4QyxFQWMvQztFQXhCRDtJQVlJLG9CQUFtQjtJQUNuQixlQUFjLEVBQ2Y7RUFkSDtJQWlCSSxxQ0FBNEI7WUFBNUIsNkJBQTRCO0lBQzVCLG1CQUFrQixFQUtuQjtFQXZCSDtNQW9CTSxVQUFTO01BQ1QsaUJBQWdCLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbiB7XG4gIGJhY2tncm91bmQ6ICM0NzQ3NDc7XG4gIGNvbG9yOiAjNDc0NzQ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLGFyaWFsLCBTYW4tU2VyaWY7XG4gICYubGlnaHRzLW9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGNvbG9yOiAjNDc0NzQ3O1xuICB9XG5cbiAgaGVhZGVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZyZW0pO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoMSwgcCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXdlaWdodDogMjAwO1xuICAgIH1cbiAgfVxufVxuIl19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.lightsActive = false;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AppComponent.prototype, "lights", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _switch_switch_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./switch/switch.component */ "./src/app/switch/switch.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _switch_switch_component__WEBPACK_IMPORTED_MODULE_4__["SwitchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/switch/switch.component.html":
/*!**********************************************!*\
  !*** ./src/app/switch/switch.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)=\"toggleLight($event)\" >\n  <span class=\"switch\"[class.active]=\"lightsOn\">\n\n  </span>\n</div>\n"

/***/ }),

/***/ "./src/app/switch/switch.component.scss":
/*!**********************************************!*\
  !*** ./src/app/switch/switch.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .switch {\n  border: 1px solid white;\n  padding: 1rem;\n  padding-top: 6rem;\n  padding-bottom: 6rem;\n  border-radius: .3em;\n  box-sizing: content-box;\n  transition: all .4s;\n  cursor: pointer; }\n  :host .switch::after {\n    content: 'Off';\n    transition: color .3s, -webkit-transform .4s ease-in-out;\n    transition: transform .4s ease-in-out, color .3s;\n    transition: transform .4s ease-in-out, color .3s, -webkit-transform .4s ease-in-out;\n    -webkit-transform: translateY(2.5rem);\n            transform: translateY(2.5rem);\n    padding: 2.5rem;\n    display: inline-block;\n    background: white;\n    border-radius: .2em; }\n  :host .switch.active {\n    border-color: #474747; }\n  :host .switch.active::after {\n      background: #474747;\n      color: white;\n      -webkit-transform: translateY(-2.5rem);\n              transform: translateY(-2.5rem);\n      content: 'On'; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmlmZml0aGovc2l0ZXMvaGFja2VyUmFuay9zcmMvYXBwL3N3aXRjaC9zd2l0Y2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRyx3QkFBdUI7RUFDdkIsY0FBYTtFQUNiLGtCQUFpQjtFQUNqQixxQkFBb0I7RUFDcEIsb0JBQW1CO0VBQ25CLHdCQUF1QjtFQUN2QixvQkFBbUI7RUFDbkIsZ0JBQWUsRUFtQmhCO0VBNUJGO0lBV0ssZUFBYztJQUNkLHlEQUFnRDtJQUFoRCxpREFBZ0Q7SUFBaEQsb0ZBQWdEO0lBQ2hELHNDQUE2QjtZQUE3Qiw4QkFBNkI7SUFDN0IsZ0JBQWU7SUFDZixzQkFBcUI7SUFDckIsa0JBQWlCO0lBQ2pCLG9CQUFtQixFQUNwQjtFQWxCSjtJQW9CSyxzQkFBcUIsRUFPdEI7RUEzQko7TUFzQk8sb0JBQW1CO01BQ25CLGFBQVk7TUFDWix1Q0FBOEI7Y0FBOUIsK0JBQThCO01BQzlCLGNBQWEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL3N3aXRjaC9zd2l0Y2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gLnN3aXRjaHtcbiAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgcGFkZGluZzogMXJlbTtcbiAgIHBhZGRpbmctdG9wOiA2cmVtO1xuICAgcGFkZGluZy1ib3R0b206IDZyZW07XG4gICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xuICAgY3Vyc29yOiBwb2ludGVyO1xuICAgJjo6YWZ0ZXIge1xuICAgICBjb250ZW50OiAnT2ZmJztcbiAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC40cyBlYXNlLWluLW91dCwgY29sb3IgLjNzO1xuICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMi41cmVtKTtcbiAgICAgcGFkZGluZzogMi41cmVtO1xuICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICBib3JkZXItcmFkaXVzOiAuMmVtO1xuICAgfVxuICAgJi5hY3RpdmV7XG4gICAgIGJvcmRlci1jb2xvcjogIzQ3NDc0NztcbiAgICAgJjo6YWZ0ZXIge1xuICAgICAgIGJhY2tncm91bmQ6ICM0NzQ3NDc7XG4gICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMi41cmVtKTtcbiAgICAgICBjb250ZW50OiAnT24nO1xuICAgICB9XG4gICB9XG4gfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/switch/switch.component.ts":
/*!********************************************!*\
  !*** ./src/app/switch/switch.component.ts ***!
  \********************************************/
/*! exports provided: SwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchComponent", function() { return SwitchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SwitchComponent = /** @class */ (function () {
    function SwitchComponent() {
        this.light = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.noLight = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.lightsOn = false;
    }
    SwitchComponent.prototype.ngOnInit = function () {
    };
    SwitchComponent.prototype.toggleLight = function () {
        this.lightsOn ? this.noLight.emit('No Light') : this.light.emit('Light');
        this.lightsOn = !this.lightsOn;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SwitchComponent.prototype, "light", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SwitchComponent.prototype, "noLight", void 0);
    SwitchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-switch',
            template: __webpack_require__(/*! ./switch.component.html */ "./src/app/switch/switch.component.html"),
            styles: [__webpack_require__(/*! ./switch.component.scss */ "./src/app/switch/switch.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SwitchComponent);
    return SwitchComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/griffithj/sites/hackerRank/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map