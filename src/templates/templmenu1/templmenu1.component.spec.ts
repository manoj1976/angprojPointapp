import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Templmenu1Component } from './templmenu1.component';

describe('Templmenu1Component', () => {
  let component: Templmenu1Component;
  let fixture: ComponentFixture<Templmenu1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Templmenu1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Templmenu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
