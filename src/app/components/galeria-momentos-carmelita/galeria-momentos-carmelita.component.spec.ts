import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaMomentosCarmelitaComponent } from './galeria-momentos-carmelita.component';

describe('GaleriaMomentosCarmelitaComponent', () => {
  let component: GaleriaMomentosCarmelitaComponent;
  let fixture: ComponentFixture<GaleriaMomentosCarmelitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriaMomentosCarmelitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaMomentosCarmelitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
