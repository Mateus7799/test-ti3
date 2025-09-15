import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { HubComponent } from './pages/hub/hub';
import { HubRoutes } from './pages/hub/hub.routes';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'hub',
    component: HubComponent,
    children: HubRoutes,
    canMatch: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
