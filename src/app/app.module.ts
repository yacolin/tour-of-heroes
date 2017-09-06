import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';  //<-- 引入该模块解决线上刷新404问题

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { DashboardComponent } from './dashboard.component';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { HeroSearchComponent } from './hero-search.component'

import { AppRoutingModule } from './app-routing.modules';


@NgModule({
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent
  ],
  providers: [
    HeroService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}  //<-- 引入模块同时加上这句，解决浏览器刷新问题
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
