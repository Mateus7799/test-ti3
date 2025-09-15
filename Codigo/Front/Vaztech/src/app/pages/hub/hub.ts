import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-hub',
  imports: [MenuModule, PanelModule, RouterOutlet],
  templateUrl: './hub.html',
  styleUrl: './hub.css',
})
export class HubComponent {
  currRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.currRoute.url.subscribe((url) => {
      console.log(url);
    });
  }

  sidebarItems: MenuItem[] = [
    { label: 'Home', icon: 'pi pi-home', routerLink: 'home' },
    { label: 'Vendas', icon: 'pi pi-shop' },
    { label: 'Estoque', icon: 'pi pi-box' },
    { label: 'Pessoas', icon: 'pi pi-users' },
    { label: 'Financeiro', icon: 'pi pi-money-bill' },
    { label: 'Funcionários', icon: 'pi pi-briefcase' },
  ];
}
