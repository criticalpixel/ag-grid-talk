import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient){
  }

  ngOnInit(){
    this.getData();
    this.setColumnDefs();
    this.setGridOptions();
  }

  //Fetch Data via | HTTP
  getData(){
    this.rowData = this.http.get('../assets/olympicWinners.json');
  }

  //Set Column Definitions
  setColumnDefs(){
    this.columnDefs = [
      { field: "athlete", enableRowGroup:true, editable:true},
      { field: "age", enableRowGroup:true},
      { field: "country", enableRowGroup:true },
      { field: "year", enableRowGroup:true },
      { field: "sport", enableRowGroup:true },
      { field: "date" },
      { field: "gold" },
      { field: "silver" },
      { field: "bronze" },
      { field: "total" }
    ];

  }
  

  //Set Grid Options
  setGridOptions(){
    this.gridOptions = {
      columnDefs:this.columnDefs,
      enableSorting:true,
      enableFilter:true,
      floatingFilter:true,
      rowSelection:'multiple',
      rowMultiSelectWithClick:true,
      showToolPanel:true,
      rowGroupPanelShow:'always',
      animateRows:true,
      enableRangeSelection:true
    }
  }


}
