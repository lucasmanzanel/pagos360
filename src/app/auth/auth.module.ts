import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TablaComponent } from './pages/dashboard/components/tabla/tabla.component';
import { BuscadorComponent } from './pages/dashboard/components/buscador/buscador.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TablaComponent,
    BuscadorComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
