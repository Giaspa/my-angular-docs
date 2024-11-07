import { Component } from '@angular/core';
import { ExampleService } from './testing-service/example.service';
import { ContainerMaskComponent } from "../../components/container-mask/container-mask.component";

@Component({
  selector: 'app-testing',
  standalone: true,
  imports: [ContainerMaskComponent],
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.css'
})
export class TestingComponent {

  codeExample = `
    //file spec.ts
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


    @Injectable({
      providedIn: 'root'
    })
    export class ExampleService {
      getMessage(): string {
        return 'Hello from ExampleService!';
      }

      getMessageAsync() {
        return of('Hello from async service!'); // Restituisce un Observable
      }
    }


    @Component({
      selector: 'app-testing',
      standalone: true,
      imports: [ContainerMaskComponent],
      template:\`
        <p>Messaggio dal servizio: <strong>{{ message }}</strong></p>
      \`
    })
    export class TestingComponent {
      message: string;

      constructor(private exampleService: ExampleService) {
        this.message = this.exampleService.getMessage();
      }
    }
  `

  message: string;

  constructor(private exampleService: ExampleService) {
    this.message = this.exampleService.getMessage();
  }
}
