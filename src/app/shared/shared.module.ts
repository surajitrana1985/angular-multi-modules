import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap';

import { HeaderComponent } from './header/header.component';
import { SafePipe } from './pipe/safe-url.pipe';
import { PopupViewComponent } from './popup-view/popup-view.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ModalModule.forRoot()
  ],
  declarations: [HeaderComponent, SafePipe, PopupViewComponent],
  exports: [HeaderComponent, SafePipe, PopupViewComponent]
})

export class SharedModule { }