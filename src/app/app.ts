import { Component } from '@angular/core';
import { EventBinding } from "./components/event-binding/event-binding";

@Component({
  selector: 'app-root',
  imports: [ EventBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

    

}
