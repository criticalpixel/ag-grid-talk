import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public rowData:any;
  public columnDefs:any;
  public gridOptions:GridOptions;

  constructor(){
  }

  ngOnInit(){
    // this.getData();
    // this.setColumnDefs();
    // this.setGridOptions();
  }

  //Fetch Data via | HTTP
  // getData(){
  //   this.rowData = this.http.get('../assets/olympicWinners.json');
  // }

  //Set Column Definitions
  // setColumnDefs(){
  //   this.columnDefs = [
  //     { field: "athlete"},
  //     { field: "age"},
  //     { field: "country"},
  //     { field: "year"},
  //     { field: "sport"},
  //     { field: "date" },
  //     { field: "gold" },
  //     { field: "silver" },
  //     { field: "bronze" },
  //     { field: "total" }
  //   ];

  // }
  

  //Set Grid Options
  // setGridOptions(){
  //   this.gridOptions = {
  //     columnDefs:this.columnDefs
  //   }
  // }


}
