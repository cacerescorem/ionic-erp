import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';



@IonicPage()
@Component({
  selector: 'page-editar-cliente',
  templateUrl: 'editar-cliente.html',
})
export class EditarClientePage {

  cliente:any;

  provincias:string[] = [
    'Álava','Albacete','Alicante','Almería','Asturias','Ávila','Badajoz','Barcelona','Burgos','Cáceres',
    'Cádiz','Cantabria','Castellón','Ceuta','Ciudad Real','Córdoba','La Coruña','Cuenca','Gerona','Gibraltar','Granada','Guadalajara',
    'Guipúzcoa','Huelva','Huesca','Islas Baleares','Jaén','León','Lérida','Lugo','Madrid','Málaga','Melilla','Murcia','Navarra',
    'Orense','Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona',
    'Santa Cruz de Tenerife','Teruel','Toledo','Valencia','Valladolid','Vizcaya','Zamora','Zaragoza'
  ]

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: HttpClient,
              public viewController: ViewController) {
        this.cliente = navParams.get('cliente');
  }

  modificarCliente(){

    let cliente = {
      id: this.cliente._id,
      nombre: this.cliente.nombre,
      cif: this.cliente.cif,
      domicilio: this.cliente.domicilio,
      cp: this.cliente.cp,
      localidad: this.cliente.localidad,
      provincia: this.cliente.provincia,
      email: this.cliente.email,
      telefono: this.cliente.telefono,
      contacto: this.cliente.contacto
    }

    this.http.put('http://localhost:3000/cliente/'+ cliente.id, cliente)
                 .subscribe((resp:any)=>{
                  this.viewController.dismiss();
                 },(error)=>{
                   console.log(error);
                 })

  }

  cancelar(){
    this.viewController.dismiss();
  }

}
