import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = HomePage;
  tab3Root = HomePage;

  constructor(public platform : Platform) {}

  backButtonAction(){
    this.platform.exitApp();
  }
}
