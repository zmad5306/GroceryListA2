import { Component } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { ListService } from './list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListService]
})
export class AppComponent {

  constructor(private listService: ListService, private modalService: NgbModal) {};

  openConfirmClearModal(confirmClearModal): void {
    this.modalService.open(confirmClearModal).result.then((result) => {
      if ('yes' === result) {
        this.listService.clear();
      }
    });
  
  }

}
