import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ContainerMaskComponent } from "../../components/container-mask/container-mask.component";

@Component({
  selector: 'app-routing',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterModule, ContainerMaskComponent],
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.css'
})
export class RoutingComponent {
  codeExample = `
    @Component({
      selector: 'app-routing',
      standalone: true,
      imports: [RouterLink, RouterOutlet, RouterModule],
      template: \`
            <p>Questo esempio dimostra come utilizzare il routing con sub-routes in Angular.</p>

            <div role="tablist">
              <a role="tab" routerLink="route1" routerLinkActive="tab-active">Route 1</a>
              <a role="tab" routerLink="route2" routerLinkActive="tab-active">Route 2</a>
            </div>
          \`,
      })
    export class RoutingComponent { }


    @Component({
      selector: 'app-route1',
      standalone: true,
      template: \`
          <h1>Route 1</h1>

          <p>Contenuto della Route 1.</p>
        \`
    })
    export class Route1Component { }


    @Component({
      selector: 'app-route2',
      standalone: true,
      template: \`
          <h1>Route 2</h1>

          <p>Contenuto della Route 2.</p>
        \`
    })
    export class Route2Component { }


    export const routes: Routes = [
        {
          path: 'routing', component: RoutingComponent, children: [
            { path: 'route1', component: Route1Component },
            { path: 'route2', component: Route2Component }
          ]
        },
      ];
  `;
}
