import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomScfiComponent } from './nom-scfi.component';

describe('NomScfiComponent', () => {
  let component: NomScfiComponent;
  let fixture: ComponentFixture<NomScfiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomScfiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NomScfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
