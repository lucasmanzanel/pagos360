import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TablaComponent } from '../dashboard/components/tabla/tabla.component';
import { MaterialModule } from '../angular-material/material/material.module';
import { TableModule } from 'primeng/table';
import { FechaPipe } from '../dashboard/components/pipe/fecha.pipe';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    DashboardComponent,
    TablaComponent,
    FechaPipe

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    CalendarModule
  ]
})
export class AuthModule { }
