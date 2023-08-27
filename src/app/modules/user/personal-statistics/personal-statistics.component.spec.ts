import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalStatisticsComponent } from './personal-statistics.component';

describe('PersonalStatisticsComponent', () => {
  let component: PersonalStatisticsComponent;
  let fixture: ComponentFixture<PersonalStatisticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalStatisticsComponent]
    });
    fixture = TestBed.createComponent(PersonalStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});