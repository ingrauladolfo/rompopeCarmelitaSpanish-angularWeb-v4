import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {
  CAROUSEL_BREAKPOINT = 768;
  carouselDisplayMode = 'multiple';
  cards = [
    {
      nombre: 'L.A.E. Bernardo Delgado Altamira',
      alt: 'L.A.E. Bernardo Delgado Altamira',
      puesto: 'Director General (CEO)',
      descripcion: 'Coordinar todas las actividades de la empresa, supervisar el desempeño de los empleados, establecer los objetivos generales, además de asegurar que todas estas actividades se realicen de manera eficiente, organizada, segura y rentable.',
      botonCorreo: 'Correo',
      botonTelefono: 'Teléfono',
      img: '../../../assets/img/departamentos/direccion.png',
      correo: 'mailto:direccion@robemex.com',
      tel: 'tel: +524433200368'
    },
    {
      nombre: 'C.P. Rigoberto López Licea',
      alt: 'C.P. Rigoberto López Licea',
      puesto: 'Gerente Operativo',
      descripcion: 'Planificar, dirigir y asegurar el buen manejo de los recursos de la empresa, con la finalidad de lograr los objetivos trazados, velando que la compañía sea más productiva.',
      botonCorreo: 'Correo',
      botonTelefono: 'Teléfono',
      img: '../../../assets/img/departamentos/operacion.png',
      correo: 'mailto:operaciones@robemex.com',
      tel: 'tel: +524433200368'
    },
    {
      nombre: 'Berenice Mendoza Heredia',
      alt: 'Berenice Mendoza Heredia',
      puesto: 'Gerente de producción',
      descripcion: 'El departamento de producción está comprometido con elaborar productos auténticos y tradicionales acordes a los niveles de calidad aprobados.',
      botonCorreo: 'Correo',
      botonTelefono: 'Teléfono',
      img: '../../../assets/img/departamentos/produccion.png',
      correo: 'mailto:produccion@robemex.com',
      tel: 'tel: +524433200368'
    },
    {
      nombre: 'I.B.Q. Mariana Monserrat Razo Nieves',
      alt: 'I.B.Q. Mariana Monserrat Razo Nieves',
      puesto: 'Gerente de calidad',
      descripcion: 'El departamento de calidad está comprometido con mantener todos los altos estándares en el proceso de producción, siempre cuidando los Calidad e Inocuidad de nuestros productos.',
      botonCorreo: 'Correo',
      botonTelefono: 'Teléfono',
      img: '../../../assets/img/departamentos/calidad.png',
      correo: 'mailto:calidad@robemex.com',
      tel: 'tel: +524433200368'
    },
    {
      nombre: 'LDG. Jorge Alejandro Sánchez González',
      alt: 'LDG. Jorge Alejandro Sánchez González',
      puesto: 'Gerente de marketing (CMO)',
      descripcion: 'Nuestro objetivo es darte a conocer Rompope Carmelita con la mayor honestidad, usando la plataformas digitales más actualizadas. Llegar a territorios globales.',
      botonCorreo: 'Correo',
      botonTelefono: 'Teléfono',
      img: '../../../assets/img/departamentos/marketing.png',
      correo: 'mailto:marketing@robemex.com',
      tel: 'tel: +524433200368'
    }
  ];
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  constructor() { }

  ngOnInit(): void {
    this.slides = this.chunk(this.cards, 3);
    if (window.innerWidth <= this.CAROUSEL_BREAKPOINT) {
      this.carouselDisplayMode = 'single';
    } else {
      this.carouselDisplayMode = 'multiple';
    }
  }
  @HostListener('window:resize')
  onWindowResize() {
    if (window.innerWidth <= this.CAROUSEL_BREAKPOINT) {
      this.carouselDisplayMode = 'single';
    } else {
      this.carouselDisplayMode = 'multiple';
    }
  }

}
