import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-listado-clientes',
  templateUrl: 'listado-clientes.html',
})
export class ListadoClientesPage {

  clientes:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: HttpClient,
              public modal: ModalController) {
  }

  ionViewDidLoad() {
    this.cargarClientes();
  }

  cargarClientes(){
    this.http.get('http://localhost:3000/cliente')
          .map((resp:any)=>{
            return resp
          })
          .subscribe((resp:any)=>{
            this.clientes = resp.clientes
          },(error)=>{
            console.log(error);
          })
  }

  crearCliente(){
    let modal = this.modal.create('CrearClientePage');

    // modal.onDidDismiss(cliente=>{
    //   if(cliente){
    //     this.clientes.push(cliente);
    //   }
    // })

    modal.onDidDismiss(()=>{
      this.cargarClientes();
    })

    modal.present();

  }

  verCliente(cliente){
    this.navCtrl.push('VerClientePage',{cliente: cliente})
  }

  editarCliente(cliente){
    this.navCtrl.push('EditarClientePage',{cliente: cliente})
  }

  eliminarCliente(id){
    this.http.delete('http://localhost:3000/cliente/'+ id)
                .subscribe((resp:any)=>{
                  this.cargarClientes();
                },(error)=>{
                  console.log(error)
                })
  }

}
