import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PixarsComponent } from './pixars-component';

describe('PixarsComponent', () => {
  let component: PixarsComponent;
  let fixture: ComponentFixture<PixarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PixarsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PixarsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
