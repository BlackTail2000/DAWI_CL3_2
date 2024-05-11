import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosAguaComponent } from './estados-agua.component';

describe('EstadosAguaComponent', () => {
  let component: EstadosAguaComponent;
  let fixture: ComponentFixture<EstadosAguaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadosAguaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstadosAguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
