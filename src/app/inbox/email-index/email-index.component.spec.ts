import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailIndexComponent } from './email-index.component';

describe('EmailIndexComponent', () => {
  let component: EmailIndexComponent;
  let fixture: ComponentFixture<EmailIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
