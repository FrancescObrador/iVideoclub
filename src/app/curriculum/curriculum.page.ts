import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.page.html',
  styleUrls: ['./curriculum.page.scss'],
})
export class CurriculumPage implements OnInit, OnDestroy {

  listaTrabajos: {fecha: string, desc: string}[] | undefined;

  constructor() {
    this.listaTrabajos = [
      {
        fecha: "2024 - actualidad:",
        desc: "Estudiante del Máster Universitario en Desarrollo de Aplicaciones y Servicios Web"
      },
      {
        fecha: "2021 - 2024:",
        desc: "Programador en The Breach Studios"
      },      
      {
        fecha: "2018 - 2022:",
        desc: "Estudiante del Grado en Contenidos Digitales Interactivos"
      }
    ]
  }

  ngOnInit() {
    console.log('curriculum - ng - OnInit')
  }

  ionViewWillEnter(){
    console.log('curriculum - ion - onViewWillEnter')
  }

  ionViewDidEnter(){
    console.log('curriculum - ion - viewDidEnter')
  }

  ionViewWillLeave(){
    console.log('curriculum - ion - viewWillLeave')
  }

  ionViewDidLeave(){
    console.log('curriculum - ion - viewDidLeave')
  }

  ngOnDestroy(){
    console.log('curriculum - ng - OnDestroy')
  }

}
