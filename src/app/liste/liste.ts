import { Component } from '@angular/core';

interface Film {
  titre: string;
  affiche: string;
}

@Component({
  imports: [],
  selector: 'app-liste',
  styleUrl: './liste.scss',
  templateUrl: './liste.html',
})
export class Liste {
  films: Film[] = [
    { titre: 'Coup de foudre à Notting Hill', affiche: '/affiches/notting-hill.jpg' },
    { titre: 'Forrest Gump', affiche: '/affiches/forrest-gump.jpg' },
    { titre: 'Top Gun', affiche: '/affiches/top-gun.jpg' },
    { titre: 'La Ligne verte', affiche: '/affiches/la-ligne-verte.jpg' },
    { titre: 'Le Parrain', affiche: '/affiches/le-parrain.jpg' },
  ];

  filmSelectionne: Film | null = null;
}
