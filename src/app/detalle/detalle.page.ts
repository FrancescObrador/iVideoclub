import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  id: string | undefined;
  pelicula: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private peliculaService: PeliculasService,
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') || "1";
    this.pelicula = this.peliculaService.getPelicula(+this.id)
  }

  ionViewWillEnter(){
    console.log('autor - ion - onViewWillEnter')
    console.log("Loaded id is: " + this.id)
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
