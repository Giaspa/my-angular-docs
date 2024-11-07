import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestingComponent } from './testing.component';
import { ExampleService } from './testing-service/example.service';

describe('TestingComponent', () => {
  let component: TestingComponent;
  let fixture: ComponentFixture<TestingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestingComponent],
      providers: [ExampleService]
    });
    fixture = TestBed.createComponent(TestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('dovrebbe essere creato', () => {
    expect(component).toBeTruthy();
  });

  it('dovrebbe visualizzare il messaggio dal servizio', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('Hello from ExampleService!');
  });
});
