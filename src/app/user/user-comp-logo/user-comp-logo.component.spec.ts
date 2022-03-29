import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCompLogoComponent } from './user-comp-logo.component';

describe('UserCompLogoComponent', () => {
  let component: UserCompLogoComponent;
  let fixture: ComponentFixture<UserCompLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCompLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCompLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
