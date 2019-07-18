import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() resultadoSuma = new EventEmitter<number>();
  n1:number;
  n2:number;
 

  constructor() { }

  onSumar():void {
    let resultado = this.n1 + this.n2;
    this.resultadoSuma.emit(resultado);
  }

  

}
