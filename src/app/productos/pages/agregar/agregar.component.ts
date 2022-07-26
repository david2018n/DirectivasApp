import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {
  texto1: string = 'Juan David'
  color: string = 'red';
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  }
  )

  constructor(private fb: FormBuilder) { }

  tieneError(campo: string): boolean {
    return this.miFormulario.get(campo)?.invalid || false;
  }
  Cambio() {
    this.texto1 = Math.random().toString()
  }
  cambiarColor() {
    this.color = "#xxxxxx".replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
  }


}
