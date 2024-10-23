import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  constructor() {}

  ngOnInit() {
    console.log('home - ng - OnInit')
  }

  ionViewWillEnter(){
    console.log('home - ion - onViewWillEnter')
  }

  ionViewDidEnter(){
    console.log('home - ion - viewDidEnter')
  }

  ionViewWillLeave(){
    console.log('home - ion - viewWillLeave')
  }

  ionViewDidLeave(){
    console.log('home - ion - viewDidLeave')
  }

  ngOnDestroy(){
    console.log('home - ng - OnDestroy')
  }
}
