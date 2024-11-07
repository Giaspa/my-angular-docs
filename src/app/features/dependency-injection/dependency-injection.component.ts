import { Component, Inject, InjectionToken } from '@angular/core';
import { ExampleService } from './di-services/example.service';
import { ContainerMaskComponent } from '../../components/container-mask/container-mask.component';
import { SecondService } from './di-services/second.service';

export const CONFIG_TOKEN = new InjectionToken<string>('ConfigToken');

// Token per valore dinamico generato tramite factory
export const DYNAMIC_CONFIG_TOKEN = new InjectionToken<string>('DynamicConfigToken');

// Funzione factory che restituisce la data e ora corrente
export function dynamicConfigFactory() {
  return `Data generata: ${new Date().toLocaleString()}`;
}

// Token per riutilizzare il servizio esistente ExampleService
export const SHARED_SERVICE_TOKEN = new InjectionToken<ExampleService>('SharedServiceToken');


@Component({
  selector: 'app-dependency-injection',
  standalone: true,
  imports: [ContainerMaskComponent],
  templateUrl: './dependency-injection.component.html',
  styleUrl: './dependency-injection.component.css',
  providers: [
    { provide: CONFIG_TOKEN, useValue: 'Valore configurabile dal token' },
    { provide: DYNAMIC_CONFIG_TOKEN, useFactory: dynamicConfigFactory },
    { provide: SHARED_SERVICE_TOKEN, useExisting: ExampleService }
  ]
})
export class DependencyInjectionComponent {
  codeExample=`
    export const CONFIG_TOKEN = new InjectionToken<string>('ConfigToken');

    // Token per valore dinamico generato tramite factory
    export const DYNAMIC_CONFIG_TOKEN = new InjectionToken<string>('DynamicConfigToken');

    // Funzione factory che restituisce la data e ora corrente
    export function dynamicConfigFactory() {
      return \`Data generata: \${new Date().toLocaleString()}\`;
    }

    // Token per riutilizzare il servizio esistente ExampleService
    export const SHARED_SERVICE_TOKEN = new InjectionToken<ExampleService>('SharedServiceToken');


    @Component({
      selector: 'app-dependency-injection',
      standalone: true,
      imports: [ContainerMaskComponent],
      templateUrl: './dependency-injection.component.html',
      styleUrl: './dependency-injection.component.css',
      providers: [
        { provide: CONFIG_TOKEN, useValue: 'Valore configurabile dal token' },
        { provide: DYNAMIC_CONFIG_TOKEN, useFactory: dynamicConfigFactory },
        { provide: SHARED_SERVICE_TOKEN, useExisting: ExampleService }
      ]
    })
    export class DependencyInjectionComponent {
      dataFromFirstService: string;
      dataFromSecondService: string;
      config: string;
      dynamicConfig: string;
      sharedServiceData: string;

      constructor(
        private exampleService: ExampleService,
        private secondService: SecondService,
        @Inject(CONFIG_TOKEN) config: string,
        @Inject(DYNAMIC_CONFIG_TOKEN) dynamicConfig: string,
        @Inject(SHARED_SERVICE_TOKEN) sharedService: ExampleService
      ) {
        this.dataFromFirstService = this.exampleService.getData();
        this.dataFromSecondService = this.secondService.getMessage();
        this.config = config;
        this.dynamicConfig = dynamicConfig;
        this.sharedServiceData = sharedService.getData();
      }
    }

    @Injectable({
      providedIn: 'root'
    })
    export class ExampleService {
      getData() {
        return 'Dati forniti dal servizio!';
      }
    }


    @Injectable({
      providedIn: 'root'
    })
    export class SecondService {
      getMessage() {
        return 'Dati forniti dal Secondo Servizio!';
      }
    }
    `
  dataFromFirstService: string;
  dataFromSecondService: string;
  config: string;
  dynamicConfig: string;
  sharedServiceData: string;

  constructor(
    private exampleService: ExampleService,
    private secondService: SecondService,
    @Inject(CONFIG_TOKEN) config: string,
    @Inject(DYNAMIC_CONFIG_TOKEN) dynamicConfig: string,
    @Inject(SHARED_SERVICE_TOKEN) sharedService: ExampleService
  ) {
    this.dataFromFirstService = this.exampleService.getData();
    this.dataFromSecondService = this.secondService.getMessage();
    this.config = config;
    this.dynamicConfig = dynamicConfig;
    this.sharedServiceData = sharedService.getData();
  }
}
