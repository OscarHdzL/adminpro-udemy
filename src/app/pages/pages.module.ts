import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { DonaComponent } from '../components/dona/dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({
declarations: [
  PagesComponent,
  DashboardComponent,
  ProgressComponent,
  Graficas1Component,
  IncrementadorComponent,
  DonaComponent,
  AccountSettingsComponent
  

],
exports: [
  DashboardComponent,
  ProgressComponent,
  Graficas1Component,
  AccountSettingsComponent
],
imports: [
  SharedModule,
  PAGES_ROUTES,
  FormsModule,
  CommonModule,
  ChartsModule
]
})

export class PagesModule{}
