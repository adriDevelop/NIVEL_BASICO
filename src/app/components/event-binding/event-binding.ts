import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-binding',
  imports: [FormsModule],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css',
})
export class EventBinding {

    color: string = "gris";
    

    gris = (): void => {
        this.color = "gris";
    }

    verde = (): void => {
        this.color = "verde";
    }


    rojo = (): void => {
        this.color = "rojo";
    }


    amarillo = (): void => {
        this.color = "amarillo";
    }


    azul = (): void => {
        this.color = "azul";
    }

}
