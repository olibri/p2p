import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressMarketComponent } from './express-market.component';

describe('ExpressMarketComponent', () => {
  let component: ExpressMarketComponent;
  let fixture: ComponentFixture<ExpressMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpressMarketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpressMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
