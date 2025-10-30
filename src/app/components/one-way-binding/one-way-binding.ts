import { Component } from '@angular/core';
import { PropertyBinding } from "../property-binding/property-binding";

@Component({
  selector: 'app-one-way-binding',
  imports: [PropertyBinding],
  templateUrl: './one-way-binding.html',
  styleUrl: './one-way-binding.css',
})
export class OneWayBinding {


    titular: string = "Soy un titular";
    subtitular: string = "Soy un subtitular";
}
