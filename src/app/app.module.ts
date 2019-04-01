import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FreeService } from './free.service';
import { ProfileSearchComponent } from './profile-search/profile-search.component';
import {  FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProfileSearchComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FreeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
