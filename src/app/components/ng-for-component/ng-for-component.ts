import { Component } from '@angular/core';
import { Articulo } from '../../models/Articulo';
import { BotonSimple } from '../boton-simple/boton-simple';

@Component({
  selector: 'app-ng-for-component',
  imports: [BotonSimple],
  templateUrl: './ng-for-component.html',
  styleUrl: './ng-for-component.css',
})
export class NgForComponent {

    list: Array<Articulo> = [
        {
            id: 1,
            titulo: "Guitarra",
            enlaceImagen: "img/guitarra.webp"
        },
        {
            id: 2,
            titulo: "Mesa mezclas",
            enlaceImagen: "img/mesamezclas.webp"
        },
        {
            id:3,
            titulo: "Luces",
            enlaceImagen: "img/luces.webp"
        },
        {
            id:4,
            titulo: "Micrófono",
            enlaceImagen: "img/microfono.webp"
        },
        
    ]

}
