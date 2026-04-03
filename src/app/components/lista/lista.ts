import { Component } from '@angular/core';
import { Factura, tipoFactura } from '../../clases/factura';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-lista',
  imports: [CommonModule],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista {
public mifactura: Factura;

constructor(){

this.mifactura= new Factura(new Date(),1,tipoFactura.C,"Consumidor final")

}

mostrarLetra(valor: tipoFactura): string{
   return valor== tipoFactura.A? "A": valor==tipoFactura.B? "B":"C"
}


}
