import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BasicPage } from '../../components/lists/basic/pages'
import { SlidingPage } from '../../components/lists/sliding/pages'
import { DividersPage } from '../../components/lists/dividers/pages'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}
  BasicPage(){
    this.navCtrl.push(BasicPage);
  }
  SlidingPage(){
    this.navCtrl.push(SlidingPage);
  }
  DividersPage(){
    this.navCtrl.push(DividersPage);
  }
}
