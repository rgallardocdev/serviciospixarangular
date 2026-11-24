import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatePixarsComponent } from './create-pixars-component';

describe('CreatePixarsComponent', () => {
  let component: CreatePixarsComponent;
  let fixture: ComponentFixture<CreatePixarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatePixarsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePixarsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
