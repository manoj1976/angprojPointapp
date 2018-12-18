import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempletbleeditComponent } from './templetbleedit.component';

describe('TempletbleeditComponent', () => {
  let component: TempletbleeditComponent;
  let fixture: ComponentFixture<TempletbleeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempletbleeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempletbleeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
