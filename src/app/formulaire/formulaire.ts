import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';


function contientArobase(control: AbstractControl): ValidationErrors | null {
  const v = control.value as string;
  return v && !v.includes('@') ? { arobase: true } : null;
}

@Component({
  selector: 'app-formulaire',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  templateUrl: './formulaire.html',
  styleUrl: './formulaire.scss',
})

export class Formulaire {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  form = this.fb.group({
    prenom: ['', Validators.required],
    nom: ['', Validators.required],
    age: [null as number | null],
    hide: [false],
    email: ['', [Validators.required, contientArobase]],
    commentaire: ['', Validators.required],
  });

  constructor() {
    this.form.controls.hide.valueChanges.subscribe((hidden) => {
      const email = this.form.controls.email;
      if (hidden) {
        email.clearValidators();
        email.reset('');
      } else {
        email.setValidators([Validators.required, contientArobase]);
      }
      email.updateValueAndValidity();
    });
  }

  onSubmit() {
    if (this.form.valid) {
      alert('Le formulaire est valide');
      this.router.navigate(['/']);
    }
  }
}