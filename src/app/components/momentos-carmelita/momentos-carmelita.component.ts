import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MomentosCarmelitaService } from 'src/app/servicios/momentos-carmelita.service';

@Component({
  selector: 'app-momentos-carmelita',
  templateUrl: './momentos-carmelita.component.html',
  styleUrls: ['./momentos-carmelita.component.css']
})
export class MomentosCarmelitaComponent implements OnInit {
  momentos: any[] = [];
  constructor(
    private ruta: ActivatedRoute,
    private _servicio: MomentosCarmelitaService,
  ) {
    this.ruta.params.subscribe(params=>{
      this.momentos = this._servicio.obtenerMomento();
    });
  }
  ngOnInit(): void {
  }

}
