import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerroomsComponent } from './managerrooms.component';

describe('ManagerroomsComponent', () => {
  let component: ManagerroomsComponent;
  let fixture: ComponentFixture<ManagerroomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerroomsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
