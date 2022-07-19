import { Component, Input, Output,EventEmitter } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',

})
export class AgregarComponent{
  @Input('nuevo') nuevo:Personaje={
    nombre: '',
    poder: 0
  };

  //@Output() onNuevoPersonaje:EventEmitter<Personaje> = new EventEmitter();
  constructor(private dbzServie:DbzService){

  }

  agregar=( )=>{
    if(this.nuevo.nombre.trim().length ===0){
      return;
    }
    //this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzServie.agergarPersonaje(this.nuevo);
    this.nuevo={
      nombre:'',
      poder:0
    }

  }
}
