import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.page.html',
  styleUrls: ['./autor.page.scss'],
})
export class AutorPage implements OnInit, OnDestroy {

  autor: {
      name: string,
      email: string,
      twitter: string,
      phone: string
  };

  constructor() {
    this.autor = { name: "Francesc Obrador", 
      email: "obrador.francesc@gmail.com",
      twitter: "@CopperMisting",
      phone: "123 456 789"
    }
  }

  ngOnInit() {
    console.log('autor - ng - OnInit')
  }

  ionViewWillEnter(){
    console.log('autor - ion - onViewWillEnter')
  }

  ionViewDidEnter(){
    console.log('autor - ion - viewDidEnter')
  }

  ionViewWillLeave(){
    console.log('autor - ion - viewWillLeave')
  }

  ionViewDidLeave(){
    console.log('autor - ion - viewDidLeave')
  }

  ngOnDestroy(){
    console.log('autor - ng - OnDestroy')
  }
}
