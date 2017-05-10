import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component'

import { HeroService } from './hero.service'

/** 
 * NgModules help organize an application into cohesive blocks of functionality.
   An NgModule is a class adorned with the @NgModule decorator function. @NgModule takes a metadata object that tells Angular how to compile
   and run module code. It identifies the module's own components, directives, and pipes, making some of them public so external components
   can use them.
 */
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],

  //Every component must be declared in one—and only one—Angular module (in this case, AppModule).
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent
  ],

  /**
     * The providers array tells Angular to create a fresh instance of the HeroService when it creates an AppComponent.
     * The AppComponent, as well as its child components, can use that service to get hero data.
     */
  providers: [HeroService],

  bootstrap: [ AppComponent ]
})
export class AppModule {
  
}

