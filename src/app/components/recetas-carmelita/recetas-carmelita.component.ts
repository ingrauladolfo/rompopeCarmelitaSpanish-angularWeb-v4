import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetarioCarmelitaService } from 'src/app/servicios/recetario-carmelita.service';

@Component({
  selector: 'app-recetas-carmelita',
  templateUrl: './recetas-carmelita.component.html',
  styleUrls: ['./recetas-carmelita.component.css']
})
export class RecetasCarmelitaComponent implements OnInit {
  recetas: any[] = [];
  constructor(
    private ruta: ActivatedRoute,
    private _servicio: RecetarioCarmelitaService,
  ) {
    this.ruta.params.subscribe(params=>{
      this.recetas = this._servicio.obtenerReceta();
    });
  }

  ngOnInit(): void {
  }


}
