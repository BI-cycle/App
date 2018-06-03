import { Component, ViewChild } from '@angular/core';
import { App, NavController,ActionSheetController,ModalController,ViewController,AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  List: any;

  constructor(
    private app : App ,
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController
  ) {
    this.List  =
    {
      ranking : {
        state: 678,
        country: 987,
        neighborhood: 3,
        city: 103,
      },
     trophies:  [
      {
        icon : 'ios-hand',
        color : 'skin',
        title : 'Salvador',
        text : 'Ajudou 1 pessoa',
      },
      {
        icon : 'ios-leaf',
        color : 'leaf',
        title : 'Ecologico',
        text : 'Pessoa ecologica',
      },
      {
        icon : 'ios-rainy',
        color : 'rain',
        title : 'Chuvoso',
        text : 'Pedalou na chuva',
      },
      {
        icon : 'ios-sunny',
        color : 'sun',
        title : 'Ensolarado',
        text : 'Pedalou em um dia ensolarado',
      },
      {
        icon : 'ios-bicycle',
        color : 'red',
        title : 'Ciclista',
        text : 'Fez mais de uma viagm',
      },
      {
        icon : 'ios-water',
        color : 'water',
        title : 'Aquático',
        text : 'Ajudou 1 pessoa',
      },
      {
        icon : 'ios-hammer',
        color : 'danger',
        title : 'Consertador',
        text : 'Mantém a manutenção da bicicleta em dia',
      },
      {
        icon : 'ios-people',
        color : 'gold',
        title : 'Comunitário',
        text : 'Convidou amigos para seu círculo de ciclismo',
      },
    ]
    }
  }

  goToPage(Page,obj={}) 
  {
    let myModal = this.modalCtrl.create(Page,obj);
    myModal.present();
  }

  more()
  {
    console.log("Console Log");
  }  

  show(item)
  {
    let alert = this.alertCtrl.create({
      title : item.title,
      message : '<ion-icon name="lock"></ion-icon>'+item.text,
      buttons: ['OK']
    });
    alert.present();
  }
}