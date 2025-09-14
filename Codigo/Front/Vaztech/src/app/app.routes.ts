import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { HubComponent } from './pages/hub/hub';
import { HomeComponent } from './pages/hub/home/home';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'hub',
    component: HubComponent,
    canMatch: [AuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' }, /
      { path: 'home', component: HomeComponent },
      // outras páginas internas podem ser adicionadas aqui
    ],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
