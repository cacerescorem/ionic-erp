import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ver-cliente',
  templateUrl: 'ver-cliente.html',
})
export class VerClientePage {

  cliente:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
                this.cliente = navParams.get('cliente');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerClientePage');
  }

}
