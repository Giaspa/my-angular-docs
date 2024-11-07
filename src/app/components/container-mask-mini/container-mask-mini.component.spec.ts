import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerMaskMiniComponent } from './container-mask-mini.component';

describe('ContainerMaskMiniComponent', () => {
  let component: ContainerMaskMiniComponent;
  let fixture: ComponentFixture<ContainerMaskMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerMaskMiniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContainerMaskMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
