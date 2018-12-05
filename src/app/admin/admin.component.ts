import { Component, OnInit} from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { AdminService } from './admin.service';
import { ImageCell } from '../ui/datagrid/imagecell.component';

@Component({
  selector: 'admin-panel',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {
  public rowData:any[];
  public columnDefs;
  public gridOptions:GridOptions;
  constructor(private adminService :AdminService){
    
  }

  ngOnInit(){
    this.setColumnDefs();
    this.setGridOptions();
    this.realTimeUpdates();
  }

  
  //Set Column Definitions
  setColumnDefs(){
    this.columnDefs = [
      { 
        field: "name"
      },
      { 
        field: "title" 
      },
      { 
        field: "image",
        cellRenderer:'imageCellRenderer',
        width:100
      },
      { 
        field: "ratingAverage", 
        headerName:"Average Rating",
        cellClass: "number",
        cellRenderer: "agAnimateShowChangeCellRenderer" 
      },
      { 
        field: "ratingCount", 
        headerName:"Total Ratins",
        cellClass: "number",
        cellRenderer: "agAnimateShowChangeCellRenderer" 
      }
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
      enableColResize:true,
      rowMultiSelectWithClick:true,
      showToolPanel:false,
      animateRows:true,
      enableRangeSelection:true,
      //COOL NEW THINGS BELOW
      frameworkComponents:{
        imageCellRenderer: ImageCell,
      },
      getRowNodeId: (data) =>{
        return data.id;
      },
      onGridReady:()=>{
        this.setGridData()
      }
    }
  }

  setGridData(){
    this.adminService.getSpeakers(this.gridOptions)
  }

  realTimeUpdates(){
    this.adminService.onDataChanges(this.gridOptions);
  }



}

