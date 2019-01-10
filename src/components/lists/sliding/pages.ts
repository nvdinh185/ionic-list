import { Component, ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  templateUrl: 'template.html'
})
export class SlidingPage {
  @ViewChild(Slides) slides: Slides;
  // ngAfterViewInit() {
  //   this.slides.lockSwipes(true);
  //   console.log("hello2");
  // }
  items = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda'
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
  goToSlide() {
    this.slides.slideTo(2, 500);
  }
  log(){
    this.slides.lockSwipes(true);
  }
  unlog(){
    this.slides.lockSwipes(false);
  }
}