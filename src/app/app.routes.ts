import { Routes } from '@angular/router';
import { Accueil } from './accueil/accueil';
import { Liste } from './liste/liste';
import { Formulaire } from './formulaire/formulaire';
import { Gestion } from './gestion/gestion';

export const routes: Routes = [
  { path: '', component: Accueil, pathMatch: 'full' },
  { path: 'liste', component: Liste },
  { path: 'contact', component: Formulaire },
  { path: 'gestion', component: Gestion },
  { path: '**', redirectTo: '' },
];
