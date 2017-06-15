import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

import { DealComponent } from './deal/deal.component';
import { ContentManagementComponent } from './content-management/content-management.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export const routes: Routes = [
  { path: '', redirectTo: 'deal', pathMatch: 'full' },
  { path: 'deal', component: DealComponent },
  { path: 'content', component: ContentManagementComponent }
];
