import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-videoclub',
  templateUrl: './videoclub.page.html',
  styleUrls: ['./videoclub.page.scss'],
})
export class VideoclubPage implements OnInit, OnDestroy {

  listaPeliculas: any[] | undefined
  constructor(
    private router: Router,
    private peliculasService: PeliculasService,
  ) {
    this.listaPeliculas = peliculasService.getPeliculas()
  }

  verPaginaDetalle(id: any) : void {
    this.router.navigate(['/detalle', id])
  }

  ngOnInit() {
    console.log('videoclub - ng - OnInit')
  }

  ionViewWillEnter(){
    console.log('videoclub - ion - onViewWillEnter')
  }

  ionViewDidEnter(){
    console.log('videoclub - ion - viewDidEnter')
  }

  ionViewWillLeave(){
    console.log('videoclub - ion - viewWillLeave')
  }

  ionViewDidLeave(){
    console.log('videoclub - ion - viewDidLeave')
  }

  ngOnDestroy(){
    console.log('videoclub - ng - OnDestroy')
  }
}
