import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailReplyComponent } from './email-reply.component';

describe('EmailReplyComponent', () => {
  let component: EmailReplyComponent;
  let fixture: ComponentFixture<EmailReplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailReplyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
