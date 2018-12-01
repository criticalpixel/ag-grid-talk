import { Component, OnInit, Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GridOptions } from 'ag-grid-community';
import { AngularFirestore } from '@angular/fire/firestore';
import { filter, flatMap, tap, take, skip } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'front-end-con',
  templateUrl: './frontendcon.component.html',
  styleUrls: ['./frontendcon.component.scss']
})

export class FrontEndConComponent implements OnInit {
  public rowData:any;
  public columnDefs:any;
  public gridOptions:GridOptions;
  public speakers:any;
  public filteredSpeakers:any;
  public ratings:any;
  constructor(private db:AngularFirestore){
    this.ratings = [1,2,3,4,5,6,7,8,9,10];
  }

  ngOnInit(){
    //this.getData();
    //this.setColumnDefs();
    //this.setGridOptions();

    this.getSpeakers();
  }


  getSpeakers(){
    this.db.collection('speakers').valueChanges().pipe(take(1)).subscribe((speakers:any)=>{
      console.log('get', speakers);
      this.speakers =  speakers
      this.filteredSpeakers = this.speakers;
    });

    this.db.collection('speakers').stateChanges(['modified']).subscribe((speakers:any)=>{
      console.log('modified', speakers)
      speakers.map(speaker=>{
        let newSpeakerData = speaker.payload.doc.data()
        let speakerIndex = this.speakers.findIndex(s=>s.id == newSpeakerData.id);
        this.speakers[speakerIndex].ratings = newSpeakerData.ratings;
      })
    });
  }

  filterSpeakers(name:any){
    this.filteredSpeakers = this.speakers.filter((item:any)=> item.name.toLowerCase().indexOf(name.toLowerCase()) > -1)
    
  }

  rateSpeaker(data){
    //add rating (offline)
    // console.log(this.speakers[this.speakers.findIndex(s=>s.id == data.id)].ratings)
    let idRef=this.speakers.findIndex(s=>s.id == data.id);
    this.speakers[idRef].ratings = [...this.speakers[idRef].ratings,data.rating];
    
    //send speaker data up (online)
    let speaker:any = this.db.doc(`speakers/speaker_${data.id}`).ref
     this.db.firestore.runTransaction(t => {
      return t.get(speaker)
        .then(doc => {
          // Add one person to the city population
          console.log(doc.data().ratings)
          let newRatings = doc.data().ratings
          newRatings.push(data.rating)
          t.update(speaker, {ratings: newRatings});
        });
    }).then(result => {
      console.log('Transaction success!');
    }).catch(err => {
      //remove offline rating on fail
      this.speakers[this.speakers.findIndex(s=>s.id == data.id)].ratings.pop()
      console.log('Transaction failure:', err);
    });

  }

}


@Pipe({
  name: 'ratingCount'
})
export class RatingCountPipe {
  transform(val: any[]) {
      return (val.length == 0)? null: val.length;
  }
}

@Pipe({
  name: 'avgCount'
})
export class AvgCountPipe {
  transform(val: any[]) {
      return (val.length == 0)? null: (val.reduce((a,b)=>{return a+b}, 0)/val.length).toFixed(1);
  }
}