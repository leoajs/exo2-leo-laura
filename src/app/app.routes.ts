import { Routes } from '@angular/router';
import { Accueil } from './accueil/accueil';
import { Liste } from './liste/liste';

export const routes: Routes = [
  { path: '', component: Accueil, pathMatch: 'full' },
  { path: 'liste', component: Liste },
  { path: '**', redirectTo: '' },
];
