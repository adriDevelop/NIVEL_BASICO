import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.html',
  styleUrl: './property-binding.css',
})
export class PropertyBinding {

    saludo: string = "Hola mundo";
    miClase: String = "titular";
    urlImagen: string = "img/manzana.jpg";
    ulrAlt : string = "manzana";
    estadoBoton: boolean = false;

}
