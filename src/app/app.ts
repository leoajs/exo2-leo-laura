import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Accueil } from './accueil/accueil';
import { Footer } from './footer/footer';

@Component({
  imports: [Header, RouterOutlet, Footer, Accueil],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App { }
