import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  heores :string[]=['Spiderman','ironMan','Hulk','Thor'];
  heroeBorrado:string='';


  
  
  
  
  borrarHeroe(){
    this.heroeBorrado = this.heores.shift()|| '';
    
  }

  
}
