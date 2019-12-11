import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRapportComponent } from './view-rapport.component';

describe('ViewRapportComponent', () => {
  let component: ViewRapportComponent;
  let fixture: ComponentFixture<ViewRapportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRapportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
