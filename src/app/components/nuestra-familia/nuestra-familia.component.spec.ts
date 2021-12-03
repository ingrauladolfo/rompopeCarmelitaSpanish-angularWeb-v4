import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestraFamiliaComponent } from './nuestra-familia.component';

describe('NuestraFamiliaComponent', () => {
  let component: NuestraFamiliaComponent;
  let fixture: ComponentFixture<NuestraFamiliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuestraFamiliaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestraFamiliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
