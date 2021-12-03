import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetarioCarmelitaComponent } from './recetario-carmelita.component';

describe('RecetarioCarmelitaComponent', () => {
  let component: RecetarioCarmelitaComponent;
  let fixture: ComponentFixture<RecetarioCarmelitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetarioCarmelitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetarioCarmelitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
