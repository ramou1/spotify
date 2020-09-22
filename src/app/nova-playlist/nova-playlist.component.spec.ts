import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaPlaylistComponent } from './nova-playlist.component';

describe('NovaPlaylistComponent', () => {
  let component: NovaPlaylistComponent;
  let fixture: ComponentFixture<NovaPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
