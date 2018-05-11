import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-crear-cliente',
  templateUrl: 'crear-cliente.html',
})
export class CrearClientePage {

  provincias:string[] = [
    'Álava','Albacete','Alicante','Almería','Asturias','Ávila','Badajoz','Barcelona','Burgos','Cáceres',
    'Cádiz','Cantabria','Castellón','Ceuta','Ciudad Real','Córdoba','La Coruña','Cuenca','Gerona','Gibraltar','Granada','Guadalajara',
    'Guipúzcoa','Huelva','Huesca','Islas Baleares','Jaén','León','Lérida','Lugo','Madrid','Málaga','Melilla','Murcia','Navarra',
    'Orense','Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona',
    'Santa Cruz de Tenerife','Teruel','Toledo','Valencia','Valladolid','Vizcaya','Zamora','Zaragoza'
  ]

  cliente = {
    nombre: null,
    cif: null,
    domicilio: null,
    cp: null,
    localidad: null,
    provincia: null,
    telefono: null,
    email: null,
    contacto: null
  } 

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: HttpClient,
              public viewController: ViewController) {
  }

  ionViewDidLoad() {
    
  }

  crCliente(){
    let cliente = {
      nombre: this.cliente.nombre,
      cif: this.cliente.cif,
      domicilio: this.cliente.domicilio,
      cp: this.cliente.cp,
      localidad: this.cliente.localidad,
      provincia: this.cliente.provincia,
      telefono: this.cliente.telefono,
      email: this.cliente.email,
      contacto: this.cliente.contacto,
    }

    this.http.post('http://localhost:3000/cliente', cliente)
                .subscribe(()=>{
                  this.viewController.dismiss(cliente)
                },(error)=>{
                  console.log(error)
                })

  }

}
