import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetarioCarmelitaService } from 'src/app/servicios/recetario-carmelita.service';

@Component({
  selector: 'app-recetario-carmelita',
  templateUrl: './recetario-carmelita.component.html',
  styleUrls: ['./recetario-carmelita.component.css']
})
export class RecetarioCarmelitaComponent implements OnInit {
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
