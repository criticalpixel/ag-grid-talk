import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';

//GRID
import {LicenseManager} from 'ag-grid-enterprise/main';
import "ag-grid-enterprise";
LicenseManager.setLicenseKey("Thomas_Horvath_EvaluationLicense_NotForProduction_999Devs14_February_2019__MTU1MDEwMjQwMDAwMA==d258abeb3508844e8f42bcddf2919d1f");

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
