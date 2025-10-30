import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Credenciales } from '../../models/auxiliars';

@Component({
  selector: 'app-two-way-data-binding',
  imports: [FormsModule],
  templateUrl: './two-way-data-binding.html',
  styleUrl: './two-way-data-binding.css',
})
export class TwoWayDataBinding {

    credenciales : Credenciales = {
        nombre: '',
        apellidos: '',
        email: '',
        telefono: ''
    }


    onSubmit = ():void => {
        console.log(this.credenciales);
    }

}
