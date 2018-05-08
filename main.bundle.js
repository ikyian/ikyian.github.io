webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lists_lists_component__ = __webpack_require__("./src/app/lists/lists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list_component__ = __webpack_require__("./src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { CommonModule } from '@angular/common';



var ROUTES = [
    {
        path: '',
        redirectTo: '/lists',
        pathMatch: 'full'
    },
    {
        path: 'lists',
        component: __WEBPACK_IMPORTED_MODULE_1__lists_lists_component__["a" /* ListsComponent */],
        data: {
            listType: 'list'
        }
    },
    {
        path: 'templates',
        component: __WEBPACK_IMPORTED_MODULE_1__lists_lists_component__["a" /* ListsComponent */],
        data: {
            listType: 'template'
        }
    },
    {
        path: 'lists/:listType/:listIndex',
        component: __WEBPACK_IMPORTED_MODULE_2__list_list_component__["a" /* ListComponent */]
    },
    {
        path: 'templates/:listType/:listIndex',
        component: __WEBPACK_IMPORTED_MODULE_2__list_list_component__["a" /* ListComponent */]
    }
];
var routesConfig = {
    enableTracing: true
};
var AppRoutesModule = /** @class */ (function () {
    function AppRoutesModule() {
    }
    AppRoutesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                // CommonModule,
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(ROUTES, routesConfig)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */]
            ],
            declarations: []
        })
    ], AppRoutesModule);
    return AppRoutesModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".active {\n    border-top: solid 1px #aaa;\n    border-right: solid 1px #aaa;\n    border-left: solid 1px #aaa;\n    font-weight: bold;\n} "

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<sh-header></sh-header>\n<nav mat-tab-nav-bar>\n    <a mat-tab-link\n        routerLink=\"/lists\"\n        routerLinkActive=\"active\"\n    >\n        lists\n    </a>\n    <a mat-tab-link\n        routerLink=\"/templates\"\n        routerLinkActive=\"active\"\n    >\n        templates\n    </a>\n</nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sh-app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_tabs__ = __webpack_require__("./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_divider__ = __webpack_require__("./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_expansion__ = __webpack_require__("./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_list__ = __webpack_require__("./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_input__ = __webpack_require__("./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_icon__ = __webpack_require__("./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_menu__ = __webpack_require__("./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routes_module__ = __webpack_require__("./src/app/app-routes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_shop_item_list_storage_shop_item_list_storage_service__ = __webpack_require__("./src/app/services/shop-item-list-storage/shop-item-list-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__lists_lists_component__ = __webpack_require__("./src/app/lists/lists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__create_template_dialog_create_template_dialog_component__ = __webpack_require__("./src/app/create-template-dialog/create-template-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__list_list_component__ = __webpack_require__("./src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__create_template_item_dialog_create_template_item_dialog_component__ = __webpack_require__("./src/app/create-template-item-dialog/create-template-item-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_state_state_service__ = __webpack_require__("./src/app/services/state/state.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// material design



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_15__lists_lists_component__["a" /* ListsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__create_template_dialog_create_template_dialog_component__["a" /* CreateTemplateDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_17__list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_18__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_19__create_template_item_dialog_create_template_item_dialog_component__["a" /* CreateTemplateItemDialogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_divider__["a" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_expansion__["a" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_12__app_routes_module__["a" /* AppRoutesModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_16__create_template_dialog_create_template_dialog_component__["a" /* CreateTemplateDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_19__create_template_item_dialog_create_template_item_dialog_component__["a" /* CreateTemplateItemDialogComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__services_shop_item_list_storage_shop_item_list_storage_service__["a" /* ShopItemListStorageService */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatDialog */],
                __WEBPACK_IMPORTED_MODULE_20__services_state_state_service__["a" /* StateService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/create-template-dialog/create-template-dialog.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/create-template-dialog/create-template-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Create new</h2>\n<mat-dialog-content>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Item Name\" [value]=\"name\" (input)=\"name = $event.target.value\">\n  </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>Cancel</button>\n  <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->\n  <button mat-button (click)=\"onCreate();\" [disabled]=\"name.length == 0 ? true : null\">Create</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/create-template-dialog/create-template-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTemplateDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var CreateTemplateDialogComponent = /** @class */ (function () {
    function CreateTemplateDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.name = ''; // data.name;
    }
    CreateTemplateDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CreateTemplateDialogComponent.prototype.onCreate = function () {
        this.dialogRef.close(this.name);
    };
    CreateTemplateDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sh-create-template-dialog',
            template: __webpack_require__("./src/app/create-template-dialog/create-template-dialog.component.html"),
            styles: [__webpack_require__("./src/app/create-template-dialog/create-template-dialog.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */], Object])
    ], CreateTemplateDialogComponent);
    return CreateTemplateDialogComponent;
}());



/***/ }),

/***/ "./src/app/create-template-item-dialog/create-template-item-dialog.component.css":
/***/ (function(module, exports) {

module.exports = ".btn-count-type {\n    position: absolute;\n    right: 0;\n    top: -6px;\n}"

/***/ }),

/***/ "./src/app/create-template-item-dialog/create-template-item-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Add Item</h2>\n<mat-dialog-content>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Item Name\" [value]=\"name\" (input)=\"name = $event.target.value\">\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Count\" [value]=\"count\" (input)=\"count = $event.target.value\">\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Count type\" readonly [value]=\"countType\">\n    <button mat-icon-button [matMenuTriggerFor]=\"itemCountTypeMenu\" class=\"btn-count-type\">\n      <mat-icon>mode_edit</mat-icon>\n    </button>\n  </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>Cancel</button>\n  <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->\n  <button mat-button (click)=\"onCreate();\" [disabled]=\"name.length == 0 ? true : null\">Create</button>\n</mat-dialog-actions>\n<mat-menu #itemCountTypeMenu=\"matMenu\" yPosition=\"below\">\n  <ng-template matMenuContent>\n    <button *ngFor=\"let item of countTypeMenuItems\" mat-menu-item (click)=\"onCountTypeChange($event, item)\">{{item}}</button>\n  </ng-template>\n</mat-menu>  "

/***/ }),

/***/ "./src/app/create-template-item-dialog/create-template-item-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTemplateItemDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shop_item_list_storage_shop_item_list_storage_service__ = __webpack_require__("./src/app/services/shop-item-list-storage/shop-item-list-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var CreateTemplateItemDialogComponent = /** @class */ (function () {
    function CreateTemplateItemDialogComponent(dialogRef, storageService, data) {
        this.dialogRef = dialogRef;
        this.storageService = storageService;
        this.data = data;
        this.name = ''; // data.name;
        this.count = 1; //data.count = 1;
        this.countType = 'items'; //data.countType || "items";
    }
    CreateTemplateItemDialogComponent.prototype.ngOnInit = function () {
        this.countTypeMenuItems = this.storageService.getCountTypes();
    };
    CreateTemplateItemDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CreateTemplateItemDialogComponent.prototype.onCreate = function () {
        this.dialogRef.close({
            name: this.name,
            count: this.count,
            countType: this.countType
        });
    };
    CreateTemplateItemDialogComponent.prototype.onCountTypeChange = function (evt, item) {
        this.countType = item;
    };
    CreateTemplateItemDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sh-create-template-item-dialog',
            template: __webpack_require__("./src/app/create-template-item-dialog/create-template-item-dialog.component.html"),
            styles: [__webpack_require__("./src/app/create-template-item-dialog/create-template-item-dialog.component.css")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_2__services_shop_item_list_storage_shop_item_list_storage_service__["a" /* ShopItemListStorageService */], Object])
    ], CreateTemplateItemDialogComponent);
    return CreateTemplateItemDialogComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".header .title {\n    text-align: center;\n    font-size: 20px;\n    font-weight: bold;\n    line-height: 40px;\n}\n\n.btn-edit,\n.btn-menu {\n    float: right;\n    height: 40px;\n    border: none;\n    background-color: transparent;\n}\n\n.done{\n    color: green;\n}\n\n.clear {\n    clear: both;\n}\n\n.right-placeholder {\n    float: right;\n    width: 40px;\n    height: 40px;\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <button *ngIf=\"menuName\" [matMenuTriggerFor]=\"headerMenu\" class=\"btn-menu\">\n    <mat-icon>menu</mat-icon>\n  </button>\n  <button class=\"btn-edit\" (click)=\"_onEditToggle($event)\">\n    <mat-icon *ngIf=\"!editMode; else doneIcon\">edit</mat-icon>\n    <ng-template #doneIcon>\n      <mat-icon class=\"done\">check</mat-icon>\n  </ng-template>\n  </button>\n  <div  *ngIf=\"(showBack && !showMenu) || (showMenu && !showBack)\" class=\"right-placeholder\"></div>\n  <div class=\"title\">sh</div>\n  <div class=\"clear\"></div>\n</div>\n<mat-divider></mat-divider>\n<mat-menu #headerMenu=\"matMenu\" yPosition=\"below\">\n  <button mat-menu-item (click)=\"_onMenu($event, 'selectAll')\">\n    <mat-icon>check_box</mat-icon>\n    <span>select all</span>\n  </button>\n  <button  mat-menu-item (click)=\"_onMenu($event, 'selectInvert')\">\n    <mat-icon>exposure</mat-icon>\n    <span>invert selection</span>\n  </button>\n  <mat-divider *ngIf=\"menuName === 'templateMenu'\"></mat-divider>\n  <button  *ngIf=\"menuName === 'templateMenu'\" mat-menu-item (click)=\"_onMenu($event, 'createList')\">\n    <mat-icon>playlist_add_check</mat-icon>\n    <span>create list</span>\n  </button>\n</mat-menu>\n  "

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_state_state_service__ = __webpack_require__("./src/app/services/state/state.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(stateService) {
        this.stateService = stateService;
        this.editMode = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._modeChangedSubscription = this.stateService.editModeChanged.subscribe(function (editModeState) {
            _this.editMode = editModeState;
        });
        this._menuChangedSubscription = this.stateService.menuChanged.subscribe(function (menuName) {
            _this.menuName = menuName;
        });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this._modeChangedSubscription.unsubscribe();
        this._menuChangedSubscription.unsubscribe();
    };
    HeaderComponent.prototype._onMenu = function (evt, command) {
        this.stateService.menu.next(command);
    };
    HeaderComponent.prototype._onEditToggle = function (evt) {
        this.stateService.toggleEditMode();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sh-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_state_state_service__["a" /* StateService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/***/ (function(module, exports) {

module.exports = ".mat-selection-list{\n    padding-top: 0;\n}\n\n.header {\n    font-size: 16px;\n    text-align: center;\n    font-style: italic;\n    line-height: 40px;\n}\n\n.header .value {\n    font-weight: bold;\n}\n\n.mat-list-option {\n    border-bottom: 1px solid #aaa;\n}\n\n.mat-selection-list .mat-list-item .name {\n    font-style: italic;\n    font-weight: bold;\n}\n\n.selection {\n    float: right;\n}\n\n.count {\n    padding: 10px 0px;\n    margin-left: 16px;\n}\n\n.template .count-type {\n    margin-left: 16px;\n}\n\n.add-item {\n    float: right;\n    margin: 8px 16px;\n}\n\nmat-selection-list button {\n    display: none;\n}\n\n.mat-selection-list .btn-delete {\n    display: none;\n}\n\n.mat-selection-list.edit-mode .btn-delete{\n    display: block;\n    float: right;\n}\n\n.template button {\n    display: inline-block;\n}\n\n.template .count {\n    border: 1px solid #bbb;\n    border-radius: 10px;\n}\n\n.add-item {\n    display: block;\n    position: absolute;\n    right: 16px;\n    bottom: 16px;\n}\n\nbutton.mat-menu-item {\n    display: block;\n}\n\nmat-form-field {\n    height: 50px;\n    width: 100%;\n}\n\n.mat-line {\n    margin: 0;\n}\n\n.header .btn-edit,\n.header .btn-edit-done {\n    float: right;\n    height: 40px;\n}\n\n.edit-mode.header .btn-edit {\n    display : none;\n}\n\n.header .btn-edit-done {\n    display: none;\n}\n\n.edit-mode.header .btn-edit-done {\n    display: inline-block;\n}\n\n.list-item h2 {\n    margin: 0;\n    height: 40px;\n    line-height: 40px;\n}\n\n.count, .countType {\n    height: 40px;\n    line-height: 40px;\n}\n\n.controls {\n    height: 40px;\n}\n\n.btn-back {\n    float: left;\n}"

/***/ }),

/***/ "./src/app/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\" [class.edit-mode]=\"editMode\" >\n  <button mat-icon-button (click)=\"_onBack()\" class=\"btn-back\">\n    <mat-icon>arrow_back</mat-icon>\n  </button>\n  <span class=\"label\">{{listType}}: </span>\n  <span class=\"value\">{{listName}}</span>\n  <div class=\"clear\"></div>\n</div>\n<mat-divider></mat-divider>\n<mat-selection-list  [class.edit-mode]=\"editMode\" #itemsList>\n  <mat-list-option *ngFor=\"let item of items; let i = index\" [selected]=\"item.selected\" (selectionChange)=\"onSelectionChanged($event, i)\">\n    <div class=\"list-item\">\n      <p matLine>\n        <mat-form-field *ngIf=\"listType === 'template'; else readOnlyName\">\n          <input matInput [value]=\"item.name\" class=\"name\" (input)=\"onNameChanged($event, i, $event.target.value)\" (click)=\"onNameClick($event)\">\n        </mat-form-field>\n        <ng-template #readOnlyName>\n          <h2>{{item.name}}</h2>\n        </ng-template>\n      </p>\n      <p matLine class=\"controls\" [class.template]=\"listType === 'template'\">\n        <span class=\"count\">\n          <button mat-icon-button (click)=\"onCountChange($event, i, -1)\">\n            <mat-icon>remove_circle_ouline</mat-icon>\n          </button>\n          <span>{{item.count}}</span>\n          <button mat-icon-button (click)=\"onCountChange($event, i, +1)\">\n            <mat-icon>add_circle_ouline</mat-icon>\n          </button>\n        </span>\n        <span class=\"count-type\" [class.template]=\"listType === 'template'\">\n          <span>{{item.countType}}</span>\n          <button mat-icon-button [matMenuTriggerFor]=\"countTypeMenu\" [matMenuTriggerData]=\"{itemIndex: i}\">\n            <mat-icon>mode_edit</mat-icon>\n          </button>\n        </span>\n        <button class=\"btn-delete color-danger\" mat-icon-button (click)=\"onRemove($event, i)\">\n          <mat-icon>cancel</mat-icon>\n        </button>\n      </p>\n      <p matLine>&nbsp;</p><!-- placeholder -->\n    </div>\n  </mat-list-option>\n</mat-selection-list>\n<button *ngIf=\"listType === 'template'\" mat-fab class=\"add-item\" (click)=\"createItemDialog()\">+</button>\n<mat-menu #countTypeMenu=\"matMenu\" yPosition=\"below\">\n  <ng-template matMenuContent let-idx=\"itemIndex\">\n    <button *ngFor=\"let item of countTypeMenuItems\" mat-menu-item (click)=\"onCountTypeChange($event, idx, item)\">{{item}}</button>\n  </ng-template>\n</mat-menu>  "

/***/ }),

/***/ "./src/app/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shop_item_list_storage_shop_item_list_storage_service__ = __webpack_require__("./src/app/services/shop-item-list-storage/shop-item-list-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_template_item_dialog_create_template_item_dialog_component__ = __webpack_require__("./src/app/create-template-item-dialog/create-template-item-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_state_state_service__ = __webpack_require__("./src/app/services/state/state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__create_template_dialog_create_template_dialog_component__ = __webpack_require__("./src/app/create-template-dialog/create-template-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_shop_item_list_storage_shop_item_list__ = __webpack_require__("./src/app/services/shop-item-list-storage/shop-item-list.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ListComponent = /** @class */ (function () {
    function ListComponent(storageService, _location, route, dialog, stateService) {
        this.storageService = storageService;
        this._location = _location;
        this.route = route;
        this.dialog = dialog;
        this.stateService = stateService;
        this.listType = __WEBPACK_IMPORTED_MODULE_8__services_shop_item_list_storage_shop_item_list__["a" /* LIST_TYPE */].LIST;
        this.editMode = false;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listType = __WEBPACK_IMPORTED_MODULE_8__services_shop_item_list_storage_shop_item_list__["a" /* LIST_TYPE */][this.route.snapshot.paramMap.get('listType').toUpperCase()];
        this.listIndex = parseInt(this.route.snapshot.paramMap.get('listIndex'));
        var list$ = this.storageService.getList(this.listType, this.listIndex);
        this._listSubscription = list$.subscribe(function (list) {
            _this.items = list.items;
            _this.listName = list.name;
        });
        this.editMode = this.stateService.editMode;
        this._editModeSubscription = this.stateService.editModeChanged.subscribe(function (newEditMode) {
            _this.editMode = newEditMode;
        });
        if (this.listType === __WEBPACK_IMPORTED_MODULE_8__services_shop_item_list_storage_shop_item_list__["a" /* LIST_TYPE */].TEMPLATE) {
            this.stateService.showMenu('templateMenu');
        }
        else {
            this.stateService.showMenu('listMenu');
        }
        ;
        this.countTypeMenuItems = this.storageService.getCountTypes();
        this._menuSubscription = this.stateService.menu.subscribe(function (command) {
            switch (command) {
                case 'createList':
                    _this.onCreateList();
                    break;
                case 'selectAll':
                    _this.onSelectAll();
                    break;
                case 'selectInvert':
                    _this.onSelectInvert();
                    break;
            }
        });
    };
    ListComponent.prototype.ngOnDestroy = function () {
        if (this._editModeSubscription) {
            this._editModeSubscription.unsubscribe();
        }
        if (this._menuSubscription) {
            this._menuSubscription.unsubscribe();
        }
        if (this._listSubscription) {
            this._listSubscription.unsubscribe();
        }
    };
    ListComponent.prototype._onBack = function () {
        this._location.back();
    };
    ListComponent.prototype.onNameClick = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
    };
    ListComponent.prototype.onCountChange = function (evt, itemIndex, sign) {
        evt.preventDefault();
        evt.stopPropagation();
        var count = this.items[itemIndex].count;
        this.items[itemIndex].count += sign;
    };
    ListComponent.prototype.createItemDialog = function (evt) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__create_template_item_dialog_create_template_item_dialog_component__["a" /* CreateTemplateItemDialogComponent */], {
            width: '250px',
            data: {
                name: '',
                count: 1,
                countType: 'items'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.items.push(result);
            }
        });
    };
    ListComponent.prototype.onCountTypeChange = function (evt, itemIndex, newValue) {
        this.items[itemIndex].countType = newValue;
    };
    ListComponent.prototype.onNameChanged = function (evt, itemIndex, newValue) {
        this.items[itemIndex].name = newValue;
    };
    ListComponent.prototype.onEdit = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.editMode = true;
    };
    ListComponent.prototype.onEditFinish = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.editMode = false;
    };
    ListComponent.prototype.onRemove = function (evt, itemIndex) {
        evt.preventDefault();
        evt.stopPropagation();
        this.items.splice(itemIndex, 1);
    };
    ListComponent.prototype.onCreateList = function () {
        // console.log('NYI: on create list');
        this.createListFromTemplaDialog();
    };
    ListComponent.prototype.onSelectAll = function () {
        console.log(this.list);
        var selectedIndexes = [];
        this.list.options.forEach(function (opt, idx) {
            if (!opt.selected) {
                selectedIndexes.push(idx);
            }
        });
        this.storageService.setSelectedItems(this.listType, this.listIndex, selectedIndexes, true)
            .subscribe(function () {
            // done
        });
    };
    ListComponent.prototype.onSelectInvert = function () {
        console.log(this.list);
        var selectedIndexes = [];
        var unselectedIndexes = [];
        this.list.options.forEach(function (opt, idx) {
            if (opt.selected) {
                unselectedIndexes.push(idx);
            }
            else {
                selectedIndexes.push(idx);
            }
        });
        this.storageService.setSelectedItems(this.listType, this.listIndex, unselectedIndexes, false)
            .subscribe(function () {
            // done
        });
        this.storageService.setSelectedItems(this.listType, this.listIndex, selectedIndexes, true)
            .subscribe(function () {
            // done
        });
    };
    ListComponent.prototype.onSelectionChanged = function (evt, itemIndex) {
        console.log(arguments);
        this.storageService.setSelectedItem(this.listType, this.listIndex, itemIndex, evt.selected)
            .subscribe(function () {
            // done
        });
    };
    ListComponent.prototype.createListFromTemplaDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__create_template_dialog_create_template_dialog_component__["a" /* CreateTemplateDialogComponent */], {
            width: '250px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.storageService.createListFromTemplate(_this.listIndex, result).subscribe(function () {
                    // done
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('itemsList'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatSelectionList */])
    ], ListComponent.prototype, "list", void 0);
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list-page',
            template: __webpack_require__("./src/app/list/list.component.html"),
            styles: [__webpack_require__("./src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_shop_item_list_storage_shop_item_list_storage_service__["a" /* ShopItemListStorageService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_6__services_state_state_service__["a" /* StateService */]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/lists/lists.component.css":
/***/ (function(module, exports) {

module.exports = "mat-list {\n    position: relative;\n}\nmat-list-item {\n    border-bottom: solid 1px #aaa;\n}\na {\n    display: block;\n    float: right;\n    margin-top: 8px;\n}\n.label {\n    line-height: 40px;\n}\n.add-item {\n    position: absolute;\n    right: 16px;\n    bottom: 16px;\n}\n.remove-item {\n    display: none;\n    position: absolute;\n    right: 16px;\n    top: 2px;\n}\n.edit-mode a{\n    display: none;\n}\n.edit-mode .remove-item {\n    display: block;\n}"

/***/ }),

/***/ "./src/app/lists/lists.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-list [class.edit-mode]=\"editMode\">\n  <mat-list-item *ngFor=\"let item of items$ | async; let i = index\">\n    <p matLine>\n      <span class=\"label\"> \n        {{item}} \n      </span>\n      <a routerLink=\"/{{listType}}s/{{listType}}/{{i}}\" routerLinkActive=\"active\">\n        <mat-icon>chevron_right</mat-icon>\n      </a>\n      <button mat-icon-button class=\"remove-item color-danger\" (click)=\"onDelete($event, i)\">\n        <mat-icon>cancel</mat-icon>\n      </button>\n    </p>\n  </mat-list-item>\n</mat-list>\n<button *ngIf=\"listType === 'template'\" mat-fab class=\"add-item\" (click)=\"createItemDialog()\">+</button>\n"

/***/ }),

/***/ "./src/app/lists/lists.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shop_item_list_storage_shop_item_list_storage_service__ = __webpack_require__("./src/app/services/shop-item-list-storage/shop-item-list-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_template_dialog_create_template_dialog_component__ = __webpack_require__("./src/app/create-template-dialog/create-template-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_state_state_service__ = __webpack_require__("./src/app/services/state/state.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListsComponent = /** @class */ (function () {
    function ListsComponent(route, storageService, dialog, stateService) {
        this.route = route;
        this.storageService = storageService;
        this.dialog = dialog;
        this.stateService = stateService;
        this.editMode = false;
    }
    ListsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listType = this.route.snapshot.data['listType'];
        this.editMode = this.stateService.editMode;
        this._editModeSubscription = this.stateService.editModeChanged.subscribe(function (newEditMode) {
            _this.editMode = newEditMode;
        });
        this.stateService.showMenu();
        this._updateList();
    };
    ListsComponent.prototype.ngOnDestroy = function () {
        this._editModeSubscription.unsubscribe();
    };
    ListsComponent.prototype.onDelete = function (evt, itemIndex) {
        var _this = this;
        console.log('NYI: delete: ' + itemIndex);
        this.storageService.removeList(this.listType, itemIndex).subscribe(function () {
            _this._updateList();
        });
    };
    ListsComponent.prototype.createItemDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__create_template_dialog_create_template_dialog_component__["a" /* CreateTemplateDialogComponent */], {
            width: '250px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
            if (result) {
                console.log(_this.listType);
                _this.storageService.addList(_this.listType, result).subscribe(function () {
                    _this._updateList();
                });
            }
        });
    };
    ListsComponent.prototype._updateList = function () {
        console.log(this.listType);
        this.items$ = this.storageService.getListsIndex(this.listType);
    };
    ListsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sh-lists',
            template: __webpack_require__("./src/app/lists/lists.component.html"),
            styles: [__webpack_require__("./src/app/lists/lists.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__services_shop_item_list_storage_shop_item_list_storage_service__["a" /* ShopItemListStorageService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_5__services_state_state_service__["a" /* StateService */]])
    ], ListsComponent);
    return ListsComponent;
}());



/***/ }),

/***/ "./src/app/services/shop-item-list-storage/shop-item-list-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopItemListStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shop_item_list__ = __webpack_require__("./src/app/services/shop-item-list-storage/shop-item-list.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DATA_STORAGE_KEY = 'sh-data';
var DEFAULT_VALUE = '[]';
var countTypeMenuItems = [
    'items',
    'kg',
    'liter'
];
var ShopItemListStorageService = /** @class */ (function () {
    function ShopItemListStorageService() {
    }
    ShopItemListStorageService.prototype.getCountTypes = function () {
        return countTypeMenuItems;
    };
    ShopItemListStorageService.prototype.getListsIndex = function (listType) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].from([this._getListsIndex(listType)]);
    };
    ShopItemListStorageService.prototype.getList = function (listType, listIndex) {
        // console.log(key);
        return this._getList(listType, listIndex);
    };
    ShopItemListStorageService.prototype.addList = function (listType, listName) {
        var _this = this;
        var o = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
            var data = _this._getData();
            data.push({
                name: listName,
                type: listType,
                items: []
            });
            _this._setData(data);
            observer.next();
            observer.complete();
        });
        return o;
    };
    ShopItemListStorageService.prototype.removeList = function (listType, listIndex) {
        var _this = this;
        var o = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
            var counter = 0;
            var resData = [];
            var data = _this._getData();
            data.forEach(function (item) {
                if (item.type !== listType) {
                    resData.push(item);
                    return;
                }
                if (counter == listIndex) {
                    counter += 1;
                    return; // skip
                }
                resData.push(item);
                counter += 1;
            });
            _this._setData(resData);
            observer.next();
            observer.complete();
        });
        return o;
    };
    ShopItemListStorageService.prototype.setSelectedItem = function (listType, listIndex, selectedIndex, selectedValue) {
        return this.setSelectedItems(listType, listIndex, [selectedIndex], selectedValue);
    };
    ShopItemListStorageService.prototype.setSelectedItems = function (listType, listIndex, selectedIndexes, selectedValue) {
        var _this = this;
        var o = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
            var counter = 0;
            var data = _this._getData();
            data.forEach(function (item) {
                if (item.type !== listType) {
                    return;
                }
                if (counter == listIndex) {
                    selectedIndexes.forEach(function (idx) {
                        item.items[idx].selected = selectedValue;
                    });
                }
                counter += 1;
            });
            _this._setData(data);
            observer.next();
            observer.complete();
        });
        return o;
    };
    ShopItemListStorageService.prototype.createListFromTemplate = function (templateIndex, listName) {
        var _this = this;
        var o = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
            var counter = 0;
            var data = _this._getData();
            data.forEach(function (item) {
                if (item.type !== __WEBPACK_IMPORTED_MODULE_2__shop_item_list__["a" /* LIST_TYPE */].TEMPLATE) {
                    return; // skip
                }
                if (counter == templateIndex) {
                    var list_1 = {
                        name: listName,
                        type: __WEBPACK_IMPORTED_MODULE_2__shop_item_list__["a" /* LIST_TYPE */].LIST,
                        items: []
                    };
                    item.items.forEach(function (listItem) {
                        if (listItem.selected) {
                            list_1.items.push({
                                name: listItem.name,
                                count: listItem.count,
                                countType: listItem.countType,
                                selected: false
                            });
                        }
                    });
                    data.push(list_1);
                }
                counter += 1;
            });
            _this._setData(data);
            observer.next();
            observer.complete();
        });
        return o;
    };
    ShopItemListStorageService.prototype._getListsIndex = function (listType) {
        var res = [];
        var data = this._getData();
        data.forEach(function (item) {
            if (item.type === listType) {
                res.push(item.name);
            }
        });
        return res;
    };
    ShopItemListStorageService.prototype._getList = function (listType, listIndex) {
        var _this = this;
        var o = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
            var counter = 0;
            var res;
            var data = _this._getData();
            data.forEach(function (item) {
                if (item.type !== listType) {
                    return; // skip
                }
                if (counter == listIndex) {
                    res = item;
                }
                counter += 1;
            });
            observer.next(res);
        });
        return o;
    };
    ShopItemListStorageService.prototype._getData = function () {
        if (typeof this._data === 'undefined') {
            var storage = localStorage;
            var str = storage.getItem(DATA_STORAGE_KEY);
            if (!str) {
                str = DEFAULT_VALUE;
            }
            try {
                this._data = JSON.parse(str);
            }
            catch (err) {
                this._data = [];
                storage.setItem(DATA_STORAGE_KEY, JSON.stringify([]));
            }
        }
        return this._data;
    };
    ShopItemListStorageService.prototype._setData = function (newData) {
        var storage = localStorage;
        storage.setItem(DATA_STORAGE_KEY, JSON.stringify(newData));
        this._data = newData;
    };
    ShopItemListStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ShopItemListStorageService);
    return ShopItemListStorageService;
}());



/***/ }),

/***/ "./src/app/services/shop-item-list-storage/shop-item-list.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LIST_TYPE; });
var LIST_TYPE;
(function (LIST_TYPE) {
    LIST_TYPE["LIST"] = "list";
    LIST_TYPE["TEMPLATE"] = "template";
})(LIST_TYPE || (LIST_TYPE = {}));


/***/ }),

/***/ "./src/app/services/state/state.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StateService = /** @class */ (function () {
    function StateService() {
        this.editMode = false;
        this.menuName = undefined;
        this.editModeChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.menuChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.menu = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
    }
    StateService.prototype.toggleEditMode = function () {
        this.editMode = !this.editMode;
        this.editModeChanged.emit(this.editMode);
    };
    StateService.prototype.showMenu = function (menuName) {
        this.menuName = menuName;
        this.menuChanged.emit(menuName);
    };
    StateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], StateService);
    return StateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map