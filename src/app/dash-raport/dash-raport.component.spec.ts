import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashRaportComponent } from './dash-raport.component';

describe('DashRaportComponent', () => {
  let component: DashRaportComponent;
  let fixture: ComponentFixture<DashRaportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashRaportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashRaportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
