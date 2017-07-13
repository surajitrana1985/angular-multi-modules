import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-popup-view',
  templateUrl: './popup-view.component.html',
  styleUrls: ['./popup-view.component.css']
})
export class PopupViewComponent {
  @ViewChild('autoShownModal') public autoShownModal: ModalDirective;
  public isModalShown: boolean = false;

  public showModal(): void {
    this.isModalShown = true;
  }

  public hideModal(): void {
    this.autoShownModal.hide();
  }

  public onHidden(): void {
    this.isModalShown = false;
  }
}