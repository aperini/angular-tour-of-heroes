"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms"); // <-- NgModel lives here
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var heroes_component_1 = require("./heroes.component");
var dashboard_component_1 = require("./dashboard.component");
var hero_detail_component_1 = require("./hero-detail.component");
var hero_service_1 = require("./hero.service");
/**
 * NgModules help organize an application into cohesive blocks of functionality.
   An NgModule is a class adorned with the @NgModule decorator function. @NgModule takes a metadata object that tells Angular how to compile
   and run module code. It identifies the module's own components, directives, and pipes, making some of them public so external components
   can use them.
 */
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule
        ],
        //Every component must be declared in one—and only one—Angular module (in this case, AppModule).
        declarations: [
            app_component_1.AppComponent,
            dashboard_component_1.DashboardComponent,
            heroes_component_1.HeroesComponent,
            hero_detail_component_1.HeroDetailComponent
        ],
        /**
           * The providers array tells Angular to create a fresh instance of the HeroService when it creates an AppComponent.
           * The AppComponent, as well as its child components, can use that service to get hero data.
           */
        providers: [hero_service_1.HeroService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map