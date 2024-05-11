import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposTriangulosComponent } from './tipos-triangulos.component';

describe('TiposTriangulosComponent', () => {
  let component: TiposTriangulosComponent;
  let fixture: ComponentFixture<TiposTriangulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiposTriangulosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TiposTriangulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
