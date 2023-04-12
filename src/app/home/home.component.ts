import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Utilice ngxmask para verificar que los inputs sean solo numeros enteros no negativos
  respuesta: string = "...";
  x1!: number;
  x2!: number;
  v1!: number;
  v2!: number;

  constructor() { }

  ngOnInit(): void {
  }

  calcularEncuentro() {
    if (!this.x1 || !this.x2 || !this.v1 || !this.v2)
      return;
    if (this.v1 <= this.v2) {
      this.respuesta = "NO";
      return;
    }
    const diferenciaPosiciones = this.x2 - this.x1;
    const diferenciaVelocidad = this.v1 - this.v2;
    if (diferenciaPosiciones % diferenciaVelocidad === 0)
      this.respuesta = "SI";
    else
      this.respuesta = "NO";
    return;
  }

  validarX1(): boolean {
    if (this.x1 >= 0 && this.x1 <= 10000)
      return true;
    else
      return false;
  }

  validarX2(): boolean {
    if (this.x2 > this.x1 && this.x2 >= 0 && this.x2 <= 10000)
      return true;
    else
      return false;
  }
  validarV1(): boolean {
    if (this.v1 >= 1 && this.v1 <= 10000)
      return true;
    else
      return false;
  }
  validarV2(): boolean {
    if (this.v2 >= 1 && this.v2 <= 10000)
      return true;
    else
      return false;
  }
}
