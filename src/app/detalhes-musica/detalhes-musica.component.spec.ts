import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesMusicaComponent } from './detalhes-musica.component';

describe('DetalhesMusicaComponent', () => {
  let component: DetalhesMusicaComponent;
  let fixture: ComponentFixture<DetalhesMusicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesMusicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesMusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
