import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetarioCarmelitaService } from 'src/app/servicios/recetario-carmelita.service';

@Component({
  selector: 'app-galeria-recetas',
  templateUrl: './galeria-recetas.component.html',
  styleUrls: ['./galeria-recetas.component.css']
})
export class GaleriaRecetasComponent implements OnInit {
  recetas: any = {};
  constructor(
    private ruta: ActivatedRoute,
    private _servicio: RecetarioCarmelitaService
  ) { 
    this.ruta.params.subscribe(params=>{
      this.recetas = this._servicio.obtenerUno(params['id']);
    });
  }

  ngOnInit(): void {
  }

}
