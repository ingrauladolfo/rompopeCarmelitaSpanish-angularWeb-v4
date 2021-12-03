import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MisionVisionComponent } from './components/mision-vision/mision-vision.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { NuestraFamiliaComponent } from './components/nuestra-familia/nuestra-familia.component';
import { NuestraHistoriaComponent } from './components/nuestra-historia/nuestra-historia.component';
import { ProcesoArtesanalYRecetasComponent } from './components/proceso-artesanal-y-recetas/proceso-artesanal-y-recetas.component';
import { PuntosDeVentasComponent } from './components/puntos-de-ventas/puntos-de-ventas.component';
import { RecetarioCarmelitaComponent } from './components/recetario-carmelita/recetario-carmelita.component';
import { RecetasCarmelitaComponent } from './components/recetas-carmelita/recetas-carmelita.component';
import {PuntosVentasMxComponent} from './components/puntos-ventas-mx/puntos-ventas-mx.component';
import { PuntosVentasEuaComponent } from './components/puntos-ventas-eua/puntos-ventas-eua.component';
import { CertificacionesComponent } from './components/certificaciones/certificaciones.component';
import { GaleriaRecetasComponent } from './components/galeria-recetas/galeria-recetas.component';
import { MomentosCarmelitaComponent } from './components/momentos-carmelita/momentos-carmelita.component';
import { GaleriaMomentosCarmelitaComponent } from './components/galeria-momentos-carmelita/galeria-momentos-carmelita.component';
import { HaccpComponent } from './components/haccp/haccp.component';
import { NomScfiComponent } from './components/nom-scfi/nom-scfi.component';
import { TerminosYCondicionesComponent } from './components/terminos-y-condiciones/terminos-y-condiciones.component';
import { AvisoDePrivacidadComponent } from './components/aviso-de-privacidad/aviso-de-privacidad.component';

const routes: Routes = [
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'recetario-y-proceso-artesanal', component: ProcesoArtesanalYRecetasComponent},
  // {path: 'nosotros', component: NosotrosComponent},
  {path: 'nuestra-historia', component: NuestraHistoriaComponent},
  {path: 'nuestra-familia', component: NuestraFamiliaComponent},
  {path: 'departamentos', component: DepartamentosComponent},
  {path: 'mision-vision', component: MisionVisionComponent},
  {path: 'puntos-de-ventas', component: PuntosDeVentasComponent},
  {path: 'certificaciones', component:CertificacionesComponent},
  // {path: 'contacto', component: ContactoComponent},
  {path: 'momentos-carmelita', component: MomentosCarmelitaComponent},
  {path: 'recetas-carmelita', component: RecetasCarmelitaComponent},
  {path: 'recetas-carmelita/:id', component: RecetarioCarmelitaComponent},
  {path: 'recetas-carmelita/galeria/:id', component: GaleriaRecetasComponent},
  {path: 'momentos-carmelita/galeria/:id', component: GaleriaMomentosCarmelitaComponent},
  {path: 'certificaciones/galeria/haccp', component: HaccpComponent},
  {path: 'certificaciones/galeria/nom-scfi', component: NomScfiComponent},
  {path: 'puntos-de-ventas-mexico', component: PuntosVentasMxComponent},
  {path: 'puntos-ventas-eua', component: PuntosVentasEuaComponent},
  {path: 'terminos-y-condiciones', component: TerminosYCondicionesComponent},
  {path: 'aviso-de-privacidad', component: AvisoDePrivacidadComponent},
  {path: '', component: InicioComponent, pathMatch:'full'},
  {path: '**', redirectTo:'puntos-de-ventas' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
