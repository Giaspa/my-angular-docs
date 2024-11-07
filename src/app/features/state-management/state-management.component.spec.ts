import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateManagementComponent } from './state-management.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('StateManagementComponent', () => {
  let component: StateManagementComponent;
  let fixture: ComponentFixture<StateManagementComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateManagementComponent],
      providers: [
        provideMockStore({ initialState: { counter: 0 } })
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateManagementComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
