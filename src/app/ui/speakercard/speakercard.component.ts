import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy, OnChanges } from '@angular/core';

@Component({
  selector: 'speaker-card',
  templateUrl: './speakercard.component.html',
  styleUrls: ['./speakercard.component.scss'],
})

export class SpeakerCardComponent implements OnInit, OnChanges {
  @Input('speaker') speaker;
  @Output('rate') rate = new EventEmitter();
  constructor(){
    
  }

  ngOnInit(){
    console.log('init card', this.speaker.id)
  }

  ngOnChanges(changes){
    console.log(changes)
  }

  rateSpeaker(data){
      this.rate.emit(data)
  }
}

