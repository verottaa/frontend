import {Component} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TestModalComponent} from './test-modal/test-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private modalService: NgbModal) {
  }

  title = 'test';

  public showModal(): void {
    const modalResult = this.modalService.open(TestModalComponent);
    modalResult.result.then(result => console.log(result), reason => console.log(reason));
  }

}
