import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2PMarkerComponent } from './p2-pmarker.component';

describe('P2PMarkerComponent', () => {
  let component: P2PMarkerComponent;
  let fixture: ComponentFixture<P2PMarkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P2PMarkerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P2PMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
