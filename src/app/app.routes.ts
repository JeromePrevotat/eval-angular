import { Routes } from '@angular/router';

export const routes: Routes = [
    // { path: '', component: HomeComponent },

    // Wildcard to home
    { path:'**', redirectTo: '' }
];
