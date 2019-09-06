import { Component } from '@angular/core';
import { NavController, reorderArray } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'reorder.html'
})
export class ReorderPage {

  items = [];
  constructor(public navCtrl: NavController) {
    for (let x = 10; x > 0; x--) {
      this.items.push("a" + x);
    }
  }

  reorderItems(index) {
    this.items = reorderArray(this.items, index);
  }

}
