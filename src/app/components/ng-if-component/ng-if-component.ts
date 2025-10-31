import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-component',
  imports: [],
  templateUrl: './ng-if-component.html',
  styleUrl: './ng-if-component.css',
})
export class NgIfComponent {

    esVisible: boolean = false;

    mostrar = () => {
        this.esVisible = !this.esVisible;
    }

}
