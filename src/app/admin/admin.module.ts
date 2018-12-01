// Main Module Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//AG-GRID
import { AgGridModule } from 'ag-grid-angular';
import {LicenseManager} from 'ag-grid-enterprise/main';
import "ag-grid-enterprise";
LicenseManager.setLicenseKey("Thomas_Horvath_EvaluationLicense_NotForProduction_999Devs14_February_2019__MTU1MDEwMjQwMDAwMA==d258abeb3508844e8f42bcddf2919d1f");
//Others
import { AdminComponent } from './admin.component';
import { AdminService } from './admin.service';
import { adminRouting } from './admin.routing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
        ReactiveFormsModule,
		adminRouting,
		MatToolbarModule,
		MatIconModule,
		AgGridModule.withComponents([])
	],
	declarations: [ 
		AdminComponent
	],
	providers: [
        AdminService
    ]
})

export class AdminModule {}
