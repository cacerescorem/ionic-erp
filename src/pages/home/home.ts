import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //mensaje:string = "¡Hola Mundo!";

  constructor(public navCtrl: NavController) {

  }

  goToVentas(){
    this.navCtrl.push('VentasPage');
  }

}
