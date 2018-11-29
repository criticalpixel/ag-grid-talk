import { Component, OnInit, Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GridOptions } from 'ag-grid-community';
import { AngularFirestore } from '@angular/fire/firestore';
import { filter, flatMap, tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public rowData:any;
  public columnDefs:any;
  public gridOptions:GridOptions;
  public speakers:any;
  public filteredSpeakers:any;
  public ratings:any;
  constructor(private http: HttpClient, private db:AngularFirestore){
    this.ratings = [1,2,3,4,5,6,7,8,9,10];
  }

  ngOnInit(){
    //this.getData();
    //this.setColumnDefs();
    //this.setGridOptions();

    this.getSpeakers();
  }


  getSpeakers(){
    this.speakers = this.http.get('../assets/speakers.json');
    console.log(this.speakers)
    this.filteredSpeakers = this.speakers;
  }

  filterSpeakers(name:any){
    this.filteredSpeakers = this.speakers.pipe(
      map((item:any)=> item.filter((item:any)=> item.name.toLowerCase().indexOf(name.toLowerCase()) > -1))
    )
  }
  // //Fetch Data via | HTTP
  // getData(){
  //   this.rowData = this.http.get('../assets/olympicWinners.json');
  // }

  // //Set Column Definitions
  // setColumnDefs(){
  //   this.columnDefs = [
  //     { field: "athlete", enableRowGroup:true, editable:true},
  //     { field: "age", enableRowGroup:true},
  //     { field: "country", enableRowGroup:true },
  //     { field: "year", enableRowGroup:true },
  //     { field: "sport", enableRowGroup:true },
  //     { field: "date" },
  //     { field: "gold" },
  //     { field: "silver" },
  //     { field: "bronze" },
  //     { field: "total" }
  //   ];

  // }
  

  // //Set Grid Options
  // setGridOptions(){
  //   this.gridOptions = {
  //     columnDefs:this.columnDefs,
  //     enableSorting:true,
  //     enableFilter:true,
  //     floatingFilter:true,
  //     rowSelection:'multiple',
  //     rowMultiSelectWithClick:true,
  //     showToolPanel:true,
  //     rowGroupPanelShow:'always',
  //     animateRows:true,
  //     enableRangeSelection:true
  //   }
  // }

  rateSpeaker(data){
    //send speaker data up.
    console.log(data);
    // this.speakers.pipe(
    //   map((speakers:any)=> speakers.filter((speaker:any)=> speaker.id == data.id)),
    //   map((speaker:any)=>{console.log(speaker);speaker.ratings.push(data.rating)})
    // )
    // this.filterSpeakers = this.speakers;
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