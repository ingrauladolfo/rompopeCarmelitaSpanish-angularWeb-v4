import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MediaSidebarComponent } from './components/media-sidebar/media-sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { MDBBootstrapModule, WavesModule, CarouselModule, CardsModule, ButtonsModule } from 'angular-bootstrap-md';
import { ProcesoArtesanalYRecetasComponent } from './components/proceso-artesanal-y-recetas/proceso-artesanal-y-recetas.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { NuestraHistoriaComponent } from './components/nuestra-historia/nuestra-historia.component';
import { NuestraFamiliaComponent } from './components/nuestra-familia/nuestra-familia.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { MisionVisionComponent } from './components/mision-vision/mision-vision.component';
import { PuntosDeVentasComponent } from './components/puntos-de-ventas/puntos-de-ventas.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { MatCardModule } from '@angular/material/card';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { LightboxModule } from 'ngx-lightbox';
import { RecetasCarmelitaComponent } from './components/recetas-carmelita/recetas-carmelita.component';
import { RecetarioCarmelitaComponent } from './components/recetario-carmelita/recetario-carmelita.component';
import { RecetarioCarmelitaService } from './servicios/recetario-carmelita.service';
import { MisionVisionFilosofiaService } from './servicios/mision-vision-filosofia.service';
import { PuntosVentasMxComponent } from './components/puntos-ventas-mx/puntos-ventas-mx.component';
import { CarmelitaBienvenidaSidebarComponent } from './components/carmelita-bienvenida-sidebar/carmelita-bienvenida-sidebar.component';
import { PuntosVentasEuaComponent } from './components/puntos-ventas-eua/puntos-ventas-eua.component';
import { CertificacionesComponent } from './components/certificaciones/certificaciones.component';
import { GaleriaRecetasComponent } from './components/galeria-recetas/galeria-recetas.component';
import { MomentosCarmelitaComponent } from './components/momentos-carmelita/momentos-carmelita.component';
import { GaleriaMomentosCarmelitaComponent } from './components/galeria-momentos-carmelita/galeria-momentos-carmelita.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HaccpComponent } from './components/haccp/haccp.component';
import { NomScfiComponent } from './components/nom-scfi/nom-scfi.component';
import { TerminosYCondicionesComponent } from './components/terminos-y-condiciones/terminos-y-condiciones.component';
import { AvisoDePrivacidadComponent } from './components/aviso-de-privacidad/aviso-de-privacidad.component';
import { Mugan86GoogleAnalyticsModule } from 'mugan86-ng-google-analytics';
import { PopupComponent } from './components/popup/popup.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MediaSidebarComponent,
    FooterComponent,
    InicioComponent,
    CatalogoComponent,
    ProcesoArtesanalYRecetasComponent,
    NosotrosComponent,
    NuestraHistoriaComponent,
    NuestraFamiliaComponent,
    DepartamentosComponent,
    MisionVisionComponent,
    PuntosDeVentasComponent,
    ContactoComponent,
    RecetasCarmelitaComponent,
    RecetarioCarmelitaComponent,
    PuntosVentasMxComponent,
    CarmelitaBienvenidaSidebarComponent,
    PuntosVentasEuaComponent,
    CertificacionesComponent,
    GaleriaRecetasComponent,
    MomentosCarmelitaComponent,
    GaleriaMomentosCarmelitaComponent,
    HaccpComponent,
    NomScfiComponent,
    TerminosYCondicionesComponent,
    AvisoDePrivacidadComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MDBBootstrapModule.forRoot(),
    WavesModule,
    CarouselModule,
    MatCardModule,
    NgxExtendedPdfViewerModule,
    LightboxModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    Mugan86GoogleAnalyticsModule.forRoot(
      {
        analyticsId: 'G-J5M0NT56B9G',
        showLog: true
      }
    )
  ],
  providers: [
    RecetarioCarmelitaService,
    MisionVisionFilosofiaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
