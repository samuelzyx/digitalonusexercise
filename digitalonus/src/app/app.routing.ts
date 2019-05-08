import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Import components
import { InfoComponent } from './info/info.component';


const appRoutes: Routes = [
    {path: 'info', component: InfoComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'info' }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
