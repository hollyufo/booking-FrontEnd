import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerhotelComponent } from './managerhotel.component';

describe('ManagerhotelComponent', () => {
  let component: ManagerhotelComponent;
  let fixture: ComponentFixture<ManagerhotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerhotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
