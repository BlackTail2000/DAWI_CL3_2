import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieLetrasComponent } from './serie-letras.component';

describe('SerieLetrasComponent', () => {
  let component: SerieLetrasComponent;
  let fixture: ComponentFixture<SerieLetrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerieLetrasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SerieLetrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
