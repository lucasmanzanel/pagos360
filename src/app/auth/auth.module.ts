import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TablaComponent } from '../dashboard/components/tabla/tabla.component';
import { BuscadorComponent } from '../dashboard/components/buscador/buscador.component';
import { MaterialModule } from '../angular-material/material/material.module';



@NgModule({
  declarations: [
    DashboardComponent,
    TablaComponent,
    BuscadorComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ]
})
export class AuthModule { }
