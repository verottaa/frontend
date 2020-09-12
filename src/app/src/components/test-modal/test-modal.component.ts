import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.scss']
})
export class TestModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

  public dismiss(): void {
    this.activeModal.close(null);
  }

  public ok(): void {
    this.activeModal.close('ok');
  }
}
