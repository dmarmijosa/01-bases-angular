import {Component} from '@angular/core';

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})

export class HeroeComponent{
    nombre:String = 'Iron man';
    edad:number =40;

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }
    obtenerNombre=()=>{
        return `${this.nombre} - ${this.edad}`
    }

    cambiarDeNombre=()=>{
        this.nombre = 'Capitan America';
    }
    cambiarDeEdad=()=>{
        this.edad  =60;
    }
}