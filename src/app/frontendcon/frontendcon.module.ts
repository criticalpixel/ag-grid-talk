import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RatingComponent } from '../ui/rating/rating.component';
import { SpeakerCardComponent } from '../ui/speakercard/speakercard.component';
import { SpeakerListComponent } from '../ui/speakerlist/speakerlist.component';
import { FrontEndConComponent, RatingCountPipe, AvgCountPipe } from './frontendcon.component';
import { frontendconRouting } from './frontendcon.routing';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  imports: [
    CommonModule,
    frontendconRouting,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  declarations: [
    FrontEndConComponent,
    RatingCountPipe,
    AvgCountPipe,
    RatingComponent,
    SpeakerListComponent,
    SpeakerCardComponent
  ],
  providers: []
})
export class FrontEndConModule { }
