import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { take } from 'rxjs/internal/operators/take';
import { GridOptions } from 'ag-grid-community';

@Injectable()
export class AdminService {
  public dataCollection;
  constructor(public db:AngularFirestore){

  }

  getSpeakers(gridOPtions:GridOptions){
    this.db.collection('speakers').valueChanges().pipe(take(1)).subscribe((speakers:any)=>{
      console.log('get', speakers);
      this.convertRatings(speakers);
      this.dataCollection =  speakers;
      gridOPtions.api.setRowData(this.dataCollection);
      console.log(this.dataCollection)
    });

  }

  onDataChanges(gridOptions:GridOptions){
    this.db.collection('speakers').stateChanges(['modified']).subscribe((speakers:any)=>{
      console.log('modified', speakers)
      speakers.map(speaker=>{
        let updatedEntry = speaker.payload.doc.data()
        let speakerIndex = this.dataCollection.findIndex(s=>s.id == updatedEntry.id);
        let newItem:any = this.copyObject(this.dataCollection[speakerIndex]);

        newItem.ratings = updatedEntry.ratings;
        newItem.ratingAverage = this.averageRating(newItem.ratings);
        newItem.ratingCount = this.ratingCount(newItem.ratings);
        gridOptions.api.updateRowData({update: [newItem] })
      })
    });
  }

  convertRatings(data){
    return data.map(data=>{
      data.ratingAverage = this.averageRating(data.ratings);
      data.ratingCount = this.ratingCount(data.ratings);
    })
  }

  averageRating(value) {
    return (value.length == 0)? 
      0: parseFloat((value.reduce((a,b)=>{return a+b}, 0)/value.length).toFixed(2))
  }

  ratingCount(value){
    return (value.length == 0)? 0: value.length;
  }

  copyObject(object) {
    var newObject = {};
    Object.keys(object).forEach(function(key) {
      newObject[key] = object[key];
    });
    return newObject;
  }
 
}
