import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-component',
  imports: [],
  templateUrl: './ng-class-component.html',
  styleUrl: './ng-class-component.css',
})
export class NgClassComponent {

    stock: number = 0;

    aClases: Array<string> = ["fondo-azul", "fondo-rojo", "fondo-verde", "letra-blanca"];



}
