import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../lists/list/list';
import { AvatarPage } from '../lists/avatar/avatar';
import { DividersPage } from '../lists/dividers/dividers';
import { HeadersPage } from '../lists/headers/headers';
import { IconPage } from '../lists/icon/icon';
import { InsetPage } from '../lists/inset/inset';
import { MultilinePage } from '../lists/multiline/multiline';
import { NoLinesPage } from '../lists/no-lines/no-lines';
import { SlidingPage } from '../lists/sliding/sliding';
import { ThumbnailPage } from '../lists/thumbnail/thumbnail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) { }

  list() {
    this.navCtrl.push(ListPage)
  }

  avatar() {
    this.navCtrl.push(AvatarPage)
  }

  dividers() {
    this.navCtrl.push(DividersPage)
  }

  headers() {
    this.navCtrl.push(HeadersPage)
  }

  icon() {
    this.navCtrl.push(IconPage)
  }

  inset() {
    this.navCtrl.push(InsetPage)
  }

  multiline() {
    this.navCtrl.push(MultilinePage)
  }

  nolines() {
    this.navCtrl.push(NoLinesPage)
  }

  sliding() {
    this.navCtrl.push(SlidingPage)
  }

  thumbnail() {
    this.navCtrl.push(ThumbnailPage)
  }
}
