import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TablaComponent } from '../dashboard/components/tabla/tabla.component';
import { BuscadorComponent } from '../dashboard/components/buscador/buscador.component';
import { MaterialModule } from '../angular-material/material/material.module';
import { TableModule } from 'primeng/table';
import { FechaPipe } from '../dashboard/components/pipe/fecha.pipe';
import { ButtonModule } from 'primeng/button';
FechaPipe


@NgModule({
  declarations: [
    DashboardComponent,
    TablaComponent,
    BuscadorComponent,
    FechaPipe

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    TableModule,
    ButtonModule
  ]
})
export class AuthModule { }
