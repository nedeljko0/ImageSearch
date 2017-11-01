import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageListComponent } from './components/image-list/image-list.component';

import { ImagesService } from './services/images.service';

import { MasonryModule } from 'angular2-masonry';


import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';


import {
  MatCardModule,
  MatChipsModule,
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule
  
} from "@angular/material";

const MAT_MODULES  = [
  MatCardModule,
  MatChipsModule,
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule
];



@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent
  ],
  imports: [
    MAT_MODULES,
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MasonryModule
    
  ],
  exports: [MAT_MODULES],
  providers: [ImagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
