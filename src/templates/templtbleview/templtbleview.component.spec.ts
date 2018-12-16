import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempltbleviewComponent } from './templtbleview.component';

describe('TempltbleviewComponent', () => {
  let component: TempltbleviewComponent;
  let fixture: ComponentFixture<TempltbleviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempltbleviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempltbleviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
