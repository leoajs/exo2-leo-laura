import { Routes } from '@angular/router';
import { Accueil } from './accueil/accueil';
import { Liste } from './liste/liste';
import { Formulaire } from './formulaire/formulaire';

export const routes: Routes = [
    { path: '', component: Accueil },
    { path: 'liste', component: Liste },
    { path: 'contact', component: Formulaire },
];
