import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AppComponent, RatingCountPipe, AvgCountPipe } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule } from '@angular/material/button';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule } from '@angular/material/icon';
import {MatCardModule } from '@angular/material/card';
//GRID
import {LicenseManager} from 'ag-grid-enterprise/main';
import "ag-grid-enterprise";
import { RatingComponent } from './ui/rating/rating.component';
import { SpeakerCardComponent } from './ui/speakercard/speakercard.component';
import { SpeakerListComponent } from './ui/speakerlist/speakerlist.component';
LicenseManager.setLicenseKey("Thomas_Horvath_EvaluationLicense_NotForProduction_999Devs14_February_2019__MTU1MDEwMjQwMDAwMA==d258abeb3508844e8f42bcddf2919d1f");

@NgModule({
  declarations: [
    AppComponent,
    RatingCountPipe,
    AvgCountPipe,
    RatingComponent,
    SpeakerListComponent,
    SpeakerCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    // Material
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
