import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { IncrementadorComponent } from './components/incrementador/incrementador.component';
import { DonaComponent } from './components/dona/dona.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'incrementador', component: IncrementadorComponent },
  { path: 'dona', component: DonaComponent },
  { path: 'register', component: LoginComponent },
  { path: '**', component: NopagefoundComponent }
];
  

export const APP_ROUTES = RouterModule.forRoot(routes, { useHash: true });
