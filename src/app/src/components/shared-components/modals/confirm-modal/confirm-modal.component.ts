import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {

  @Input() message: string;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

  close(result: boolean = false): void {
    this.activeModal.close(result);
  }

}
