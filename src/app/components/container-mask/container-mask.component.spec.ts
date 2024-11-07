import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerMaskComponent } from './container-mask.component';

describe('ContainerMaskComponent', () => {
  let component: ContainerMaskComponent;
  let fixture: ComponentFixture<ContainerMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerMaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContainerMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
