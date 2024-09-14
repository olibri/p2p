import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineMarketComponent } from './online-market.component';

describe('OnlineMarketComponent', () => {
  let component: OnlineMarketComponent;
  let fixture: ComponentFixture<OnlineMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineMarketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
