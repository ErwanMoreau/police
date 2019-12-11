import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCasierComponent } from './view-casier.component';

describe('ViewCasierComponent', () => {
  let component: ViewCasierComponent;
  let fixture: ComponentFixture<ViewCasierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCasierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCasierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
