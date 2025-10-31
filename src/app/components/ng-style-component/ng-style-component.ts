import { NgStyle, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-ng-style-component',
  imports: [NgStyle, FormsModule],
  templateUrl: './ng-style-component.html',
  styleUrl: './ng-style-component.css',
})
export class NgStyleComponent {

    colorFondo:string = "#000000";
    colorTexto:string = "yellow";
    stock:boolean = false;
    miPadding:boolean = true;
    bgColor:string = "grey";
    tamanoTexto:number = 24;

    aumentarTexto(){
        this.tamanoTexto++;
    }

    disminuirTexto(){
        this.tamanoTexto--;
    }

    cambiarColor = (color: string) => {
        this.colorTexto = color;
    }

}
