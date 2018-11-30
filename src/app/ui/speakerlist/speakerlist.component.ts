import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy, AfterViewInit, OnChanges } from '@angular/core';

@Component({
  selector: 'speaker-list',
  templateUrl: './speakerlist.component.html',
  styleUrls: ['./speakerlist.component.scss']
})

export class SpeakerListComponent implements OnInit, OnChanges {
  @Input('speakers') speakers;
  @Output('rate') rate = new EventEmitter();
  constructor(){
    
  }

  ngOnInit(){
    
  }

  ngOnChanges(){
    console.log('init list', this.speakers)
  }

  rateSpeaker(data){
    this.rate.emit(data)
  }
}

