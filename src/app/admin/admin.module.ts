// Main Module Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//AG-GRID
import { AgGridModule } from 'ag-grid-angular';
import {LicenseManager} from 'ag-grid-enterprise/main';
import "ag-grid-enterprise";
//licence key goes here
//Others
import { AdminComponent } from './admin.component';
import { AdminService } from './admin.service';
import { adminRouting } from './admin.routing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ImageCell } from '../ui/datagrid/imagecell.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
        ReactiveFormsModule,
		adminRouting,
		MatToolbarModule,
		MatIconModule,
		AgGridModule.withComponents([ImageCell])
	],
	declarations: [ 
		AdminComponent,
		ImageCell
	],
	providers: [
        AdminService
    ]
})

export class AdminModule {}
