import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer { }
