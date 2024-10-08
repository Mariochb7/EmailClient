import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailShowComponent } from './email-show.component';

describe('EmailShowComponent', () => {
  let component: EmailShowComponent;
  let fixture: ComponentFixture<EmailShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
