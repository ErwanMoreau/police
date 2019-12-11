import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HierachieComponent } from './hierachie.component';

describe('HierachieComponent', () => {
  let component: HierachieComponent;
  let fixture: ComponentFixture<HierachieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HierachieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HierachieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
