import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { AdminComponent, routes as ADMIN_ROUTES } from './admin/admin.component';
import { ParticipantComponent } from './participant/participant.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
}

export const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent, children: ADMIN_ROUTES },
  { path: 'participant', component: ParticipantComponent }
];