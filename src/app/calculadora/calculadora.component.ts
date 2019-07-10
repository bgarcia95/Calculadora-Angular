import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
  
})
export class CalculadoraComponent  {

  titulo = 'Aplicación de Calculadora';
  n1:number;
  n2:number;
  resultado:number;

  onSuma():void {
    this.resultado = this.n1 + this.n2;
  }

}
