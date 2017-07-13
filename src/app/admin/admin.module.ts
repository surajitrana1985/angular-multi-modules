import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap';

import { AdminComponent, routes } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { DealComponent } from './deal/deal.component';
import { ContentManagementComponent } from './content-management/content-management.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    RouterModule.forChild(routes),
    ModalModule.forRoot()
  ],
  declarations: [AdminComponent, DealComponent, ContentManagementComponent]
})
export class AdminModule { }
