import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingSchedulesComponent } from './upcoming-schedules.component';

describe('UpcomingSchedulesComponent', () => {
  let component: UpcomingSchedulesComponent;
  let fixture: ComponentFixture<UpcomingSchedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingSchedulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
