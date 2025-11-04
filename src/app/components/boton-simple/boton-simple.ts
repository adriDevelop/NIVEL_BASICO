import { Component, Input } from '@angular/core';
import { Articulo } from '../../models/Articulo';

@Component({
  selector: 'app-boton-simple',
  imports: [],
  templateUrl: './boton-simple.html',
  styleUrl: './boton-simple.css',
})
export class BotonSimple {

    @Input() item: Articulo;

}
