import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavinfoComponent } from './navinfo.component';

describe('NavinfoComponent', () => {
  let component: NavinfoComponent;
  let fixture: ComponentFixture<NavinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
