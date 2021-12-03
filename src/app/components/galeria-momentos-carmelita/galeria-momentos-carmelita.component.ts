import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MomentosCarmelitaService } from 'src/app/servicios/momentos-carmelita.service';

@Component({
  selector: 'app-galeria-momentos-carmelita',
  templateUrl: './galeria-momentos-carmelita.component.html',
  styleUrls: ['./galeria-momentos-carmelita.component.css']
})
export class GaleriaMomentosCarmelitaComponent implements OnInit {
  momentos: any = {};
  constructor(
    private ruta: ActivatedRoute,
    private _servicio: MomentosCarmelitaService
  ) { 
    this.ruta.params.subscribe(params=>{
      this.momentos = this._servicio.obtenerVistaMomento(params['id']);
    });
  }

  ngOnInit(): void {
  }


}
