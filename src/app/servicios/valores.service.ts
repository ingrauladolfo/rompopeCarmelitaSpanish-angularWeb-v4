import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValoresService {
  valores: any = [
    {
      ruta: '../../../assets/img/valores/equidad.png',
      nombre: 'Equidad',
      alt: 'Equidad',
      valor: 'Equidad'
    },
    {
      ruta: '../../../assets/img/valores/honestidad.png',
      nombre: 'Honestidad',
      alt: 'Honestidad',
      valor: 'Honestidad'
    },
    {
      ruta: '../../../assets/img/valores/justicia.png',
      nombre: 'Justicia',
      alt: 'Justicia',
      valor: 'Justicia'
    },
    {
      ruta: '../../../assets/img/valores/servicio.png',
      nombre: 'Servicio',
      alt: 'Servicio',
      valor: 'Servicio'
    },
    {
      ruta: '../../../assets/img/valores/unidad.png',
      nombre: 'Unidad',
      alt: 'Unidad',
      valor: 'Unidad'
    },
    {
      ruta: '../../../assets/img/valores/verdad.png',
      nombre: 'Verdad',
      alt: 'Verdad',
      valor: 'Verdad'
    }
  ]
  constructor() { }
  // tslint:disable-next-line:typedef
  obtenerValor(){
    return this.valores;
  }
}
