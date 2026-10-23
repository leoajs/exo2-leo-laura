import { Component, inject } from '@angular/core';
import { Contact } from '../services/contact';

@Component({
  imports: [],
  selector: 'app-gestion',
  styleUrl: './gestion.scss',
  templateUrl: './gestion.html',
})
export class Gestion {
  dernierFormulaire = inject(Contact).dernierFormulaire;
}
