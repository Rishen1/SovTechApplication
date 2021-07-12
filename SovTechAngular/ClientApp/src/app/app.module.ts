import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { chucknorrisComponent } from './ChuckNorris/chucknorris.component';
import { starwarsComponent } from './starwars/starwars.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    chucknorrisComponent,
    starwarsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: chucknorrisComponent, pathMatch: 'full' },
     
      { path: 'starwars', component: starwarsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
