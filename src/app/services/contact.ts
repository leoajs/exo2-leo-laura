import { Service } from '@angular/core';

export interface DonneesContact {
  prenom: string;
  nom: string;
  age: number | null;
  hide: boolean;
  email: string;
  commentaire: string;
}

@Service()
export class Contact {
  dernierFormulaire: DonneesContact | null = null;
}
