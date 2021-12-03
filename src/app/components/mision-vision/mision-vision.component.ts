import { Component, OnInit } from '@angular/core';
import { MisionVisionFilosofiaService } from 'src/app/servicios/mision-vision-filosofia.service';
import { ValoresService } from 'src/app/servicios/valores.service';

@Component({
  selector: 'app-mision-vision',
  templateUrl: './mision-vision.component.html',
  styleUrls: ['./mision-vision.component.css']
})
export class MisionVisionComponent implements OnInit {
  valores: any[] = [];
  politica: any[] = [];
  constructor(
    private _servicio: ValoresService,
    private _service: MisionVisionFilosofiaService
    ) {
    this.valores = _servicio.obtenerValor();
    this.politica = _service.obtenerPolitica();
   }
  ngOnInit(): void {
  }

}
