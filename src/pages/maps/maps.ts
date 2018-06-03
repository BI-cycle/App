import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActionSheetController, ModalController, AlertController, NavController, LoadingController } from 'ionic-angular';
import { ResultPage } from '../result/result';

declare var google;

@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html'
})
export class MapsPage {

  @ViewChild('map') mapElement: ElementRef;
  start = '-23.5083335,-46.6526803';
  end = 'Rua Bento Teobaldo Ferraz, 119 - Barra Funda, São Paulo - SP, 01156-001';
  map: any;
  Loading : any;
  result: any;
  modalPage : any;
  bora: boolean;
  params: any;
  MiddleMap = false;
  HelpMap = false;
  EndMap = false;
  search = true;
  Way : any;
  MapHeight = 100;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public actionSheetCtrl: ActionSheetController,
    private loadingCtrl: LoadingController,
  ) {
    this.result = {
      distance : 0,
      time : 0,
    }
    this.Way = 
    [
      {         'lat' : -23.5083335, 'lng' : -46.6526803},
      {         'lat' : -23.5080535, 'lng' : -46.6527663},
      {         'lat' : -23.5081275, 'lng' : -46.6528733},
      {         'lat' : -23.5082888, 'lng' : -46.6525052},
      {         'lat' : -23.5083158, 'lng' : -46.6525672},
      {         'lat' : -23.5083648, 'lng' : -46.6526072},
      {         'lat' : -23.5085568, 'lng' : -46.6528192},
      {         'lat' : -23.5087048, 'lng' : -46.6529692},
      {         'lat' : -23.5089118, 'lng' : -46.6531572},
      {         'lat' : -23.5091578, 'lng' : -46.6533212},
      {         'lat' : -23.5094208, 'lng' : -46.6534822},
      {         'lat' : -23.5097238, 'lng' : -46.6536132},
      {         'lat' : -23.5099918, 'lng' : -46.6536912},
      {         'lat' : -23.5104198, 'lng' : -46.6537902},
      {         'lat' : -23.5107858, 'lng' : -46.6538442},
      {         'lat' : -23.5112018, 'lng' : -46.6538982},
      {         'lat' : -23.5115488, 'lng' : -46.6539462},
      {         'lat' : -23.5119328, 'lng' : -46.6540022},
      {         'lat' : -23.5124718, 'lng' : -46.6540802},
      {         'lat' : -23.5130398, 'lng' : -46.6541742},
      {         'lat' : -23.5135738, 'lng' : -46.6542412},
      {         'lat' : -23.5147248, 'lng' : -46.6543542},
      {         'lat' : -23.5151868, 'lng' : -46.6543782},
      {         'lat' : -23.5156078, 'lng' : -46.6543942},
      {         'lat' : -23.5160778, 'lng' : -46.6544642},
      {         'lat' : -23.5165578, 'lng' : -46.6545392},
      {         'lat' : -23.5170868, 'lng' : -46.6546172},
      {         'lat' : -23.5174728, 'lng' : -46.6546762},
      {         'lat' : -23.5179528, 'lng' : -46.6548452},
      {         'lat' : -23.5182245, 'lng' : -46.6557493},
      {         'lat' : -23.5183275, 'lng' : -46.6564203},
      {         'lat' : -23.5186275, 'lng' : -46.6569513},
      {         'lat' : -23.5190455, 'lng' : -46.6573863},
      {         'lat' : -23.5195765, 'lng' : -46.6579123},
      {         'lat' : -23.5201865, 'lng' : -46.6585183},
      {         'lat' : -23.5207075, 'lng' : -46.6590283},
      {         'lat' : -23.5211555, 'lng' : -46.6594893},
      {         'lat' : -23.5216815, 'lng' : -46.6600153},
      {         'lat' : -23.5224585, 'lng' : -46.6607283},
      {         'lat' : -23.5224535, 'lng' : -46.6613613},
      {         'lat' : -23.5222865, 'lng' : -46.6623323},
      {         'lat' : -23.5221245, 'lng' : -46.6633083},
      {         'lat' : -23.5219675, 'lng' : -46.6642843},
      {         'lat' : -23.5218155, 'lng' : -46.6653623},
      {         'lat' : -23.5216335, 'lng' : -46.6664943},
      {         'lat' : -23.5214175, 'lng' : -46.6678893},
      {         'lat' : -23.5209945, 'lng' : -46.6685113},
      {         'lat' : -23.5209355, 'lng' : -46.6692083},
      {         'lat' : -23.5212795, 'lng' : -46.6693803},
      {         'lat' : -23.5217915, 'lng' : -46.6694503},
      {         'lat' : -23.5222585, 'lng' : -46.6697723},
      {         'lat' : -23.5227305, 'lng' : -46.6701903},
      {         'lat' : -23.5230055, 'lng' : -46.6705493},
      {         'lat' : -23.5231335, 'lng' : -46.6707643},
      {         'lat' : -23.5236695, 'lng' : -46.6712413},
      {         'lat' : -23.5238651, 'lng' : -46.6708685},
      {         'lat' : -23.524522, 'lng' : -46.6714342 },
      {         'lat' : -23.524598, 'lng' : -46.6717852 },
      {         'lat' : -23.524846, 'lng' : -46.6716942 },
      {         'lat' : -23.524915, 'lng' : -46.6713912 },
      {         'lat' : -23.524942, 'lng' : -46.6711792 },
      {         'lat' : -23.524959, 'lng' : -46.6706672 },
      {         'lat' : -23.524942, 'lng' : -46.6704202 },
      {         'lat' : -23.524888, 'lng' : -46.6700582 },
      {         'lat' : -23.524844, 'lng' : -46.6698432 },
      {         'lat' : -23.524878, 'lng' : -46.6693792 },
      {         'lat' : -23.52492, 'lng' : -46.6687432  },
      {         'lat' : -23.524962, 'lng' : -46.6682072 },
      {         'lat' : -23.524972, 'lng' : -46.6681132 },
      {         'lat' : -23.525152, 'lng' : -46.6681262 }      
    ]
  }

  ionViewDidLoad(){
    this.initMap();
  }

  initMap() {
    this.bora = false;
    this.map = null;
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 15,
      center: {lat: -23.508521, lng: -46.651327}
    });
    this.directionsDisplay.setMap(this.map);    
  }
  promise : any;
  pedaling()
  {
    let self = this;
    var interval = 2000;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var infowindow = new google.maps.InfoWindow;
    infowindow.setContent('pt-BR');
    self.promise = Promise.resolve();
    this.Way.forEach(function (el) {
      self.promise = self.promise.then(function () {
        self.directionsService.route({
          origin: el.lat+','+el.lng,
          destination: '-23.525152,-46.6681262',
          travelMode: 'BICYCLING'
        }, (response, status) => {
          if (status === 'OK') {
            self.define({
              distance : response.routes[0].legs[0].distance.text,
              time : response.routes[0].legs[0].duration.text,
            });
            self.directionsDisplay.setDirections(response);
            self.directionsDisplay.setPanel(document.getElementById('right-panel'));
            self.bora = true;
            self.search = false;
            self.LoadingEnd();
          } else {
            self.LoadingEnd();
          }
        });
        return new Promise(function (resolve) {
          setTimeout(resolve, interval);
        });
      });
    });
    
    self.promise.then(function () {
      console.log('Loop finished.');
    });
  }

  modal(Page,obj={}) 
  {
    let self = this;
    this.modalPage = this.modalCtrl.create(Page,obj);
    this.modalPage.onDidDismiss(data => {
      this.EndMap = false;
      this.HelpMap = false;
      this.search = true;
      this.MapHeight = 100;
      self.directionsDisplay.setDirections({routes: []});
    });
    this.modalPage.present();
  }
  

  presentConfirm(message:any,call=false) {
    let self = this;
    if(call)
    {
        self.LoadingStart('Chamando');
        setTimeout(() => {
          self.LoadingEnd();
    
        let alert = this.alertCtrl.create({
          title: message.title,
          message: message.text,
          buttons: ['OK']
        });
        alert.present();
        }, 3000);
    }

  }

  public LoadingStart(message="Carregando") {
    if (!this.Loading) {
      this.Loading = this.loadingCtrl.create({
        content: message
      });
    }
    this.Loading.present();
  }

  public LoadingEnd(){
    if(this.Loading){
      this.Loading.dismiss();
    }
    this.Loading = null;
  }

  calculateAndDisplayRoute() {
    let self = this;
    this.MapHeight = 60;
    self.LoadingStart('Calculando rota');
    self.directionsService.route({
      origin: self.start,
      destination: self.end,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        self.define({
          distance : response.routes[0].legs[0].distance.text,
          time : response.routes[0].legs[0].duration.text,
        });
        self.directionsDisplay.setDirections(response);
        self.bora = true;
        self.search = false;
        self.LoadingEnd();
      } else {
        self.LoadingEnd();
      }
    });
  }

  run()
  {
    let self = this;
    this.MapHeight = 75;
    self.bora = false;
    self.search = false;
    self.HelpMap = true;
    self.EndMap = true;
    self.pedaling();
  }

  define(data : object)
  {
    this.search = false;
    this.result = data;
  }

  preFinish()
  {
    let self = this;
    self.LoadingStart('Finalizando ...');
    setTimeout(() => {
      self.LoadingEnd();
      self.finish();
    }, 3000);
  }
  
  finish()
  {
    let self = this;
    self.bora = false;
    self.search = true;
    self.HelpMap = true;
    self.EndMap = true;
    this.modal(ResultPage,{data:this.result});
    this.search = true;
  }


  report() {
    const prompt = this.alertCtrl.create({
      title: 'Reporte',
      message: "Reporte o problema que você está vendo",
      inputs: [
        {
          name: 'Mensagem',
          placeholder: 'Mensagem',
          value : 'Ciclovia danificada'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Enviar',
          handler: data => {
            let self = this;
            self.LoadingStart('Enviando ...');
            setTimeout(() => {
              self.LoadingEnd();
            },2000);
          }
        }
      ]
    });
    prompt.present();
  }

  help(data : object) {
    let self = this;
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Escolha a ajuda',
      buttons: [
        {
          text: 'Emergência',
          icon: 'ios-medkit',
          handler: () => {
            self.presentConfirm({'title':'Emergência','text':'Emergência chegará em 5 minutos'},true);
          }
        },
        {
          text: 'Polícia',
          icon: 'ios-bus',
          handler: () => {
            self.presentConfirm({'title':'Polícia','text':'Polícia chegará em 2 minutos'},true);
          }
        },
        {
          text: 'Uber',
          icon: 'ios-car',
          handler: () => {
            self.presentConfirm({'title':'Uber','text':'Uber chegará em 3 minutos'},true);
          }
        },
        {
          text: 'Alertar',
          icon: 'ios-alert',
          handler: () => {
            self.report();
          }
        }
      ]
    });
    actionSheet.present();
  }


}