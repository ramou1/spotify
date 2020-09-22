import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurtidasComponent } from './curtidas.component';

describe('CurtidasComponent', () => {
  let component: CurtidasComponent;
  let fixture: ComponentFixture<CurtidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurtidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurtidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
