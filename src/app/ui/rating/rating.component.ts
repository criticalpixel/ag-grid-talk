import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})

export class RatingComponent implements OnInit, OnChanges {
  @Input('speakerid') speakerid;
  @Output('rate') rate = new EventEmitter();
  public ratings:any;
  public currentRate=0;
  constructor(){
    this.ratings = [1,2,3,4,5,6,7,8,9,10];
  }

  ngOnInit(){
    console.log('init', this.speakerid)
  }

  ngOnChanges(changes){
    console.log(changes)
  }

  rateSpeaker(rating){
    this.currentRate = rating;
    this.rate.emit({id:this.speakerid, rating:rating})
  }

}

