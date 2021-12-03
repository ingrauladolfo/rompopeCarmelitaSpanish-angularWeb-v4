import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoArtesanalYRecetasComponent } from './proceso-artesanal-y-recetas.component';

describe('ProcesoArtesanalYRecetasComponent', () => {
  let component: ProcesoArtesanalYRecetasComponent;
  let fixture: ComponentFixture<ProcesoArtesanalYRecetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesoArtesanalYRecetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesoArtesanalYRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
