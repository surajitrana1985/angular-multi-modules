import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AdminComponent, routes } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { DealComponent } from './deal/deal.component';
import { ContentManagementComponent } from './content-management/content-management.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminComponent, DealComponent, ContentManagementComponent]
})
export class AdminModule { }
