import { ModuleWithProviders } from  '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {path: '', redirectTo: 'frontendcon', pathMatch: 'full' },
	{path: 'frontendcon', loadChildren: './frontendcon/frontendcon.module#FrontEndConModule'},
    {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
];

export const routing: ModuleWithProviders<any> =  RouterModule.forRoot(routes);
