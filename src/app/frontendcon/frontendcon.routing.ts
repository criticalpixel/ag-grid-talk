import { ModuleWithProviders } from  '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontEndConComponent } from './frontendcon.component';

const frontendconRoutes: Routes = [
	{ path: '', component: FrontEndConComponent}
];

export const frontendconRouting: ModuleWithProviders =  RouterModule.forChild(frontendconRoutes);
